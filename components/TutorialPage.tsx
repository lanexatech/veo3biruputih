

import React from 'react';

const TutorialStep: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
    <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
            {icon}
        </div>
        <div>
            <h3 className="text-lg font-semibold text-blue-800 mb-1">{title}</h3>
            <p className="text-slate-600">{children}</p>
        </div>
    </div>
);

const TutorialPage: React.FC = () => {
    const SelectIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" /></svg>;
    const FormIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>;
    const IdeaIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 017.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>;
    const GenerateIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;
    const CopyIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>;

    return (
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-l-2xl rounded-b-2xl rounded-r-none shadow-lg border-t border-l border-b border-blue-100 h-full overflow-y-auto">
            <div className="max-w-3xl mx-auto py-4">
                <h2 className="text-2xl font-bold text-blue-800 mb-8 text-center">
                    Panduan Penggunaan Aplikasi
                </h2>
                <div className="space-y-8">
                    <TutorialStep icon={<SelectIcon />} title="1. Pilih Generator">
                        Gunakan tab vertikal di sisi kanan layar untuk beralih antara generator <strong>Veo 3 (Video)</strong> atau <strong>Imagen (Gambar)</strong>. Setiap generator memiliki formulir yang disesuaikan dengan kebutuhannya.
                    </TutorialStep>
                    <TutorialStep icon={<FormIcon />} title="2. Isi Formulir Prompt">
                        Isi setiap bidang dalam formulir dengan deskripsi yang Anda inginkan. Semakin detail Anda, semakin baik hasilnya. Setiap bidang dirancang untuk menangkap aspek spesifik dari visi kreatif Anda.
                    </TutorialStep>
                    <TutorialStep icon={<IdeaIcon />} title="3. Butuh Inspirasi? Gunakan 'Ide Prompt'">
                        Jika Anda buntu, klik tombol <strong>Ide Prompt</strong>. Tulis ide dasar (misalnya: 'Naga di perpustakaan'), dan AI akan secara otomatis mengisi seluruh formulir dengan versi yang lebih detail dan imajinatif.
                    </TutorialStep>
                    <TutorialStep icon={<GenerateIcon />} title="4. Buat & Sempurnakan">
                        Setelah semua bidang terisi, klik tombol besar <strong>"Buat & Sempurnakan Prompt"</strong> di bagian bawah. AI akan mengambil semua input Anda, mengembangkannya menjadi paragraf naratif yang kaya, dan menerjemahkannya ke Bahasa Inggris, lengkap dengan prompt negatif.
                    </TutorialStep>
                    <TutorialStep icon={<CopyIcon />} title="5. Salin Hasil Akhir Anda">
                        Hasilnya akan muncul di kartu di bagian bawah. Anda akan mendapatkan versi Teks dan JSON dalam Bahasa Indonesia dan Bahasa Inggris. Gunakan tombol salin di samping setiap judul untuk menyalin prompt yang siap digunakan di platform AI favorit Anda.
                    </TutorialStep>
                </div>
            </div>
        </div>
    );
};

export default TutorialPage;