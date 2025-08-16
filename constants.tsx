
import React from 'react';
import type { Field } from './types';

const UserIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-400" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>;
const AgeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-400" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" /></svg>;
const PaletteIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-400" viewBox="0 0 20 20" fill="currentColor"><path d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 9a1 1 0 01-2 0V7a1 1 0 012 0v2zm12 0a1 1 0 01-2 0V7a1 1 0 012 0v2zM6.343 15.343a1 1 0 00-1.414 1.414l-1.414-1.414a1 1 0 001.414-1.414l1.414 1.414zM15.071 5.268a1 1 0 00-1.414-1.414l-1.414 1.414a1 1 0 001.414 1.414l1.414-1.414zM10 5a5 5 0 100 10 5 5 0 000-10z" /></svg>;
const FaceIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-400" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.415 3.001 3.001 0 01-4.242 0 1 1 0 00-1.415 1.415 5 5 0 007.072 0z" clipRule="evenodd" /></svg>;
const HairIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.586a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>;
const ShirtIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>;
const GlobeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h8a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.707 4.293l.293.293a1 1 0 010 1.414l-.293.293M16.293 4.293l-.293.293a1 1 0 000 1.414l.293.293m-9 9.586l.293.293a1 1 0 001.414 0l.293-.293m6.586 0l.293.293a1 1 0 001.414 0l.293-.293M10 21v-4m4 4v-4" /></svg>;
const JewelIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16v4m-2-2h4m5 16v4m-2-2h4M9 21h6a2 2 0 002-2V5a2 2 0 00-2-2H9a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>;
const ActionIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;
const LocationIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-400" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>;
const CameraIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const SunIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-400" viewBox="0 0 20 20" fill="currentColor"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 100 2h1z" /></svg>;
const StyleIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547a2 2 0 00-.547 1.806l.477 2.387a6 6 0 00.517 3.86l.158.318a6 6 0 00.517 3.86l2.387.477a2 2 0 001.806.547a2 2 0 00.547-1.806l-.477-2.387a6 6 0 00-.517-3.86l-.158-.318a6 6 0 00-.517-3.86l-2.387-.477a2 2 0 00-.547-1.806zM15.428 4.572a2 2 0 001.022.547l2.387.477a6 6 0 003.86-.517l.318-.158a6 6 0 013.86-.517L19.95 5.21a2 2 0 001.806-.547a2 2 0 00.547-1.806l-.477-2.387a6 6 0 00-.517-3.86l-.158-.318a6 6 0 00-.517-3.86l-2.387-.477a2 2 0 00-1.806-.547a2 2 0 00-.547 1.806l.477 2.387a6 6 0 00.517 3.86l.158.318a6 6 0 00.517 3.86l2.387.477a2 2 0 00.547 1.806z" /></svg>;
const QualityIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16v4m-2-2h4m5 16v4m-2-2h4M9 21h6a2 2 0 002-2V5a2 2 0 00-2-2H9a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>;
const MoodIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const SoundIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" /></svg>;
const QuoteIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" /></svg>;
const PlusIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-400" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" /></svg>;
const AspectRatioIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 0h-4m4 0l-5-5" /></svg>;


export const VEO_FIELDS: Field[] = [
    { id: 'subjek', label: 'Subjek', placeholder: 'Seorang astronot, seekor naga api', type: 'text', icon: <UserIcon /> },
    { id: 'usia', label: 'Usia', placeholder: 'Muda, tua, anak-anak', type: 'text', icon: <AgeIcon /> },
    { id: 'warna_kulit', label: 'Warna Kulit', placeholder: 'Coklat, putih, biru metalik', type: 'text', icon: <PaletteIcon /> },
    { id: 'wajah', label: 'Wajah', placeholder: 'Tampan, cantik, bekas luka', type: 'text', icon: <FaceIcon /> },
    { id: 'rambut', label: 'Rambut', placeholder: 'Panjang terurai, cepak, berwarna pelangi', type: 'text', icon: <HairIcon /> },
    { id: 'pakaian', label: 'Pakaian', placeholder: 'Baju zirah, gaun malam, pakaian futuristik', type: 'text', icon: <ShirtIcon /> },
    { id: 'asal', label: 'Asal (Negara)', placeholder: 'Jepang, Wakanda, Atlantis', type: 'text', icon: <GlobeIcon /> },
    { id: 'asesoris', label: 'Asesoris', placeholder: 'Kacamata pintar, kalung ajaib', type: 'text', icon: <JewelIcon /> },
    { id: 'aksi', label: 'Aksi', placeholder: 'Menari di tengah hujan, bertarung', type: 'text', icon: <ActionIcon /> },
    { id: 'ekspresi', label: 'Ekspresi', placeholder: 'Tertawa bahagia, menangis haru', type: 'text', icon: <FaceIcon /> },
    { id: 'tempat', label: 'Tempat', placeholder: 'Kota cyberpunk, hutan ajaib', type: 'text', icon: <LocationIcon /> },
    { id: 'waktu', label: 'Waktu', placeholder: 'Matahari terbenam, malam berbintang', type: 'text', icon: <AgeIcon /> },
    { id: 'gerakan_kamera', label: 'Gerakan Kamera', placeholder: 'Drone shot, close-up, panning', type: 'text', icon: <CameraIcon /> },
    { id: 'pencahayaan', label: 'Pencahayaan', placeholder: 'Cahaya neon, sinar rembulan', type: 'text', icon: <SunIcon /> },
    { id: 'gaya_video', label: 'Gaya Video', placeholder: 'Sinematik, anime, dokumenter', type: 'text', icon: <StyleIcon /> },
    { id: 'kualitas_video', label: 'Kualitas Video', placeholder: '8K, hyper-realistic, grainy film', type: 'text', icon: <QualityIcon /> },
    { id: 'suasana_video', label: 'Suasana Video', placeholder: 'Misterius, ceria, menegangkan', type: 'text', icon: <MoodIcon /> },
    { id: 'suara_atau_musik', label: 'Suara atau Musik', placeholder: 'Musik orkestra, suara alam', type: 'text', icon: <SoundIcon /> },
    { id: 'kalimat_yang_diucapkan', label: 'Kalimat yang Diucapkan', placeholder: 'Aku akan kembali', type: 'text', icon: <QuoteIcon /> },
    { id: 'detail_tambahan', label: 'Detail Tambahan', placeholder: 'Partikel debu beterbangan', type: 'textarea', icon: <PlusIcon /> },
];

export const IMAGEN_FIELDS: Field[] = [
    { id: 'subjek', label: 'Subjek', placeholder: 'Seorang penyihir, sebuah robot vintage', type: 'text', icon: <UserIcon /> },
    { id: 'usia', label: 'Usia', placeholder: 'Remaja, dewasa, bayi', type: 'text', icon: <AgeIcon /> },
    { id: 'warna_kulit', label: 'Warna Kulit', placeholder: 'Pucat, sawo matang, emas berkilau', type: 'text', icon: <PaletteIcon /> },
    { id: 'wajah', label: 'Wajah', placeholder: 'Wajah oval, mata menyala', type: 'text', icon: <FaceIcon /> },
    { id: 'rambut', label: 'Rambut', placeholder: 'Ikal, dikepang, terbuat dari api', type: 'text', icon: <HairIcon /> },
    { id: 'pakaian', label: 'Pakaian', placeholder: 'Jubah beludru, setelan steampunk', type: 'text', icon: <ShirtIcon /> },
    { id: 'asal', label: 'Asal (Negara)', placeholder: 'Mesir kuno, Swedia modern', type: 'text', icon: <GlobeIcon /> },
    { id: 'asesoris', label: 'Asesoris', placeholder: 'Topi tinggi, anting kristal', type: 'text', icon: <JewelIcon /> },
    { id: 'aksi', label: 'Aksi', placeholder: 'Membaca buku kuno, melompat antar gedung', type: 'text', icon: <ActionIcon /> },
    { id: 'ekspresi', label: 'Ekspresi', placeholder: 'Tersenyum misterius, terkejut', type: 'text', icon: <FaceIcon /> },
    { id: 'tempat', label: 'Tempat', placeholder: 'Perpustakaan besar, stasiun luar angkasa', type: 'text', icon: <LocationIcon /> },
    { id: 'waktu', label: 'Waktu', placeholder: 'Pagi berkabut, tengah malam', type: 'text', icon: <AgeIcon /> },
    { id: 'kamera', label: 'Kamera', placeholder: 'Lensa Canon EF 50mm, pandangan mata elang', type: 'text', icon: <CameraIcon /> },
    { id: 'pencahayaan', label: 'Pencahayaan', placeholder: 'Cahaya lilin, volumetric lighting', type: 'text', icon: <SunIcon /> },
    { id: 'gaya', label: 'Gaya', placeholder: 'Fotorealistik, cat air, seni digital', type: 'text', icon: <StyleIcon /> },
    { id: 'kualitas_gambar', label: 'Kualitas Gambar', placeholder: 'Sangat detail, 4K, tajam', type: 'text', icon: <QualityIcon /> },
    { id: 'suasana_gambar', label: 'Suasana Gambar', placeholder: 'Damai, kacau, magis', type: 'text', icon: <MoodIcon /> },
    { id: 'detail_tambahan', label: 'Detail Tambahan', placeholder: 'Refleksi di genangan air', type: 'textarea', icon: <PlusIcon /> },
    { id: 'aspek_rasio', label: 'Aspek Rasio', placeholder: '16:9, 1:1, 4:3', type: 'select', options: ["1:1", "16:9", "9:16", "4:3", "3:4"], icon: <AspectRatioIcon /> },
];
