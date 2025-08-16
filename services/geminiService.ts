import { GoogleGenAI, Type } from "@google/genai";
import type { Field, PromptData, GeneratedPrompts } from '../types';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

export async function generatePromptIdeas(fields: Field[], type: 'Veo' | 'Imagen', ideaQuery: string): Promise<PromptData> {
  const fieldNames = fields.map(f => f.id).join(', ');
  const prompt = `
    Anda adalah asisten kreatif untuk pembuatan ${type === 'Veo' ? 'video' : 'gambar'} AI.
    Berdasarkan konsep utama berikut: "${ideaQuery}", kembangkan ide tersebut menjadi prompt yang sangat detail dan imajinatif.
    Isi setiap bidang dalam format JSON. Bidang-bidangnya adalah: ${fieldNames}.
    PENTING: Isi **semua** bidang. Jangan biarkan ada bidang yang kosong. Jika sebuah bidang tidak relevan secara langsung dengan ide utama, berikan deskripsi yang masuk akal, netral, atau imajinatif yang sesuai dengan konteks (contoh: untuk 'pakaian' pada pemandangan, bisa diisi 'tidak ada orang yang terlihat', atau untuk 'suara' pada gambar, bisa diisi 'sunyi').
    Jawab HANYA dengan objek JSON yang valid tanpa markdown.
  `;

  const properties: { [key: string]: { type: Type, description: string } } = {};
  fields.forEach(field => {
    properties[field.id] = {
      type: Type.STRING,
      description: `Deskripsi untuk ${field.label} berdasarkan konsep: ${ideaQuery}`
    };
  });
  
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: properties,
      },
    },
  });
  
  try {
    const jsonString = response.text;
    if (!jsonString || jsonString.trim() === '') {
      console.error("API returned an empty response for prompt ideas.");
      throw new Error("Gagal menghasilkan ide. Respons dari API kosong.");
    }
    return JSON.parse(jsonString) as PromptData;
  } catch (e) {
    console.error("Gagal mem-parsing JSON dari ide Gemini:", response.text, e);
    throw new Error("Gagal menghasilkan ide. Respons API tidak valid.");
  }
}


export async function enhanceAndTranslatePrompt(promptData: PromptData, type: 'Veo' | 'Imagen'): Promise<GeneratedPrompts> {
  const dataString = JSON.stringify(promptData, null, 2);
  const prompt = `
    Anda adalah seorang ahli rekayasa prompt profesional. Tugas Anda adalah:
    1. Ambil input JSON berikut: ${dataString}.
    2. Gabungkan nilai-nilainya menjadi sebuah paragraf deskriptif yang kaya, detail, dan koheren dalam Bahasa Indonesia. Kembangkan ide-idenya agar lebih lengkap dan menarik.
    3. Terjemahkan paragraf yang telah disempurnakan tersebut ke dalam Bahasa Inggris. PENTING: Nilai untuk 'kalimat_yang_diucapkan' (jika ada) TIDAK BOLEH diterjemahkan dan harus tetap dalam bahasa aslinya.
    4. Buatlah prompt negatif yang ringkas namun efektif dalam Bahasa Inggris, yang secara otomatis mengecualikan artefak umum, kualitas rendah, dan elemen yang tidak diinginkan.
    5. Sediakan input Bahasa Indonesia asli dan versi Bahasa Inggris yang sudah diterjemahkan sebagai string JSON.
    6. Jawab HANYA dengan objek JSON yang valid dengan skema yang ditentukan.

    Jenis prompt adalah untuk ${type}.
  `;

  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          idText: { type: Type.STRING, description: 'Paragraf prompt lengkap dalam Bahasa Indonesia.' },
          enText: { type: Type.STRING, description: 'Paragraf prompt lengkap yang diterjemahkan ke Bahasa Inggris, dengan prompt negatif ditambahkan.' },
          idJson: { type: Type.STRING, description: 'Objek input asli sebagai string JSON.' },
          enJson: { type: Type.STRING, description: 'Objek input yang nilai-nilainya telah diterjemahkan ke Bahasa Inggris sebagai string JSON.' }
        }
      }
    }
  });

  try {
    const jsonString = response.text;
     if (!jsonString || jsonString.trim() === '') {
      console.error("API returned an empty response for prompt enhancement.");
      throw new Error("Gagal menyempurnakan prompt. Respons dari API kosong.");
    }
    const result = JSON.parse(jsonString);

    // Menambahkan negative prompt secara manual jika model lupa
    const negativePrompt = " --neg low quality, bad anatomy, worst quality, lowres, blurry, deformed, monochrome, ugly, watermark, text";
    if (result.enText && !result.enText.includes('--neg')) {
        result.enText += negativePrompt;
    }

    return result as GeneratedPrompts;
  } catch (e) {
    console.error("Gagal mem-parsing JSON dari hasil penyempurnaan Gemini:", response.text, e);
    throw new Error("Gagal menyempurnakan prompt. Respons API tidak valid.");
  }
}