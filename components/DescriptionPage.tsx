
import React from 'react';
import Logo from './Logo';

interface DescriptionPageProps {
  userName: string;
  onContinue: () => void;
}

const FeatureCard: React.FC<{ title: string; description: string; icon: React.ReactNode }> = ({ title, description, icon }) => (
    <div className="bg-slate-50/50 p-4 rounded-lg text-center border border-blue-100">
        <div className="flex justify-center items-center mb-2 text-blue-500">
            {icon}
        </div>
        <h3 className="font-semibold text-blue-800">{title}</h3>
        <p className="text-sm text-slate-600">{description}</p>
    </div>
);

const VideoIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>;
const ImageIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>;
const IdeaIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 017.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>;

const DescriptionPage: React.FC<DescriptionPageProps> = ({ userName, onContinue }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4 animate__animated animate__fadeIn">
      <div className="w-full max-w-2xl">
        <div className="bg-white/80 backdrop-blur-sm border border-blue-100 shadow-2xl rounded-2xl px-8 pt-10 pb-8 mb-4">
          <div className="mb-8 text-center">
            <div className="inline-block mb-4 animate-float">
              <Logo />
            </div>
            <h1 className="text-2xl font-bold text-blue-800">Selamat Datang, {userName}!</h1>
            <p className="text-slate-500 mt-2 max-w-prose mx-auto">
              Ini adalah Generator Prompt AI Profesional, sebuah alat canggih yang dirancang untuk membantu Anda menciptakan deskripsi yang sangat detail dan imajinatif untuk model AI generatif terbaru.
            </p>
          </div>

          <div className="my-8">
            <h2 className="text-center font-semibold text-slate-700 mb-4">Fitur Utama</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <FeatureCard title="Generator Veo 3" description="Buat prompt video sinematik dengan kontrol penuh atas setiap detail adegan." icon={<VideoIcon />} />
                <FeatureCard title="Generator Imagen" description="Rancang prompt gambar fotorealistik atau artistik dengan parameter yang presisi." icon={<ImageIcon />} />
                <FeatureCard title="Ide Prompt Cerdas" description="Dapatkan inspirasi tak terbatas dari AI Gemini untuk mengisi semua bidang secara otomatis." icon={<IdeaIcon />} />
            </div>
          </div>
          
          <div className="flex items-center justify-center mt-8">
            <button
              onClick={onContinue}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full focus:outline-none focus:shadow-outline transition-all duration-300 transform hover:scale-105"
            >
              Lanjutkan
            </button>
          </div>
        </div>
        <footer className="text-center text-slate-500 text-sm">
          <p>Mari wujudkan visi Anda menjadi kenyataan.</p>
        </footer>
      </div>
    </div>
  );
};

export default DescriptionPage;
