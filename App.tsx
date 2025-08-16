
import React, { useState, useMemo, useEffect } from 'react';
import PromptGenerator from './components/PromptGenerator';
import TutorialPage from './components/TutorialPage'; // Impor komponen baru
import { VEO_FIELDS, IMAGEN_FIELDS } from './constants';
import type { GeneratorMode, PromptData } from './types';
import Logo from './components/Logo';
import LoginPage from './components/LoginPage';
import SplashScreen from './components/SplashScreen';
import DescriptionPage from './components/DescriptionPage';
import Clock from './components/Clock';

const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [mode, setMode] = useState<GeneratorMode>('veo');
  const [userName, setUserName] = useState<string | null>(() => {
    return sessionStorage.getItem('userName');
  });
  const [showDescription, setShowDescription] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 6000); // Tampilkan splash screen selama 6 detik
    return () => clearTimeout(timer);
  }, []);

  const handleLogin = (name: string) => {
    sessionStorage.setItem('userName', name);
    setUserName(name);
    // Tampilkan halaman deskripsi hanya jika belum pernah dilihat di sesi ini
    if (!sessionStorage.getItem('hasSeenDescription')) {
      setShowDescription(true);
    }
  };
  
  const handleContinueFromDescription = () => {
    sessionStorage.setItem('hasSeenDescription', 'true');
    setShowDescription(false);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('userName');
    sessionStorage.removeItem('hasSeenDescription'); // Hapus juga saat logout
    setUserName(null);
  };

  const activeTabClasses = 'bg-red-500 text-white border-r border-t border-b border-red-200';
  const inactiveTabClasses = 'bg-transparent text-slate-500 hover:bg-slate-200/50 border border-blue-100';
  const baseTabClasses = 'p-4 font-bold text-lg rounded-r-2xl rounded-l-none transition-colors duration-200 focus:outline-none w-auto grid place-items-center relative overflow-hidden';

  const mainContent = useMemo(() => {
    switch(mode) {
      case 'veo':
        return <PromptGenerator key="veo" fields={VEO_FIELDS} generatorType="Veo" />;
      case 'imagen':
        return <PromptGenerator key="imagen" fields={IMAGEN_FIELDS} generatorType="Imagen" />;
      case 'tutorial':
        return <TutorialPage />; // Tambahkan case untuk tutorial
      default:
        return null;
    }
  }, [mode]);

  if (showSplash) {
    return <SplashScreen />;
  }

  if (!userName) {
    return <LoginPage onLogin={handleLogin} />;
  }
  
  if (showDescription) {
    return <DescriptionPage userName={userName} onContinue={handleContinueFromDescription} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 font-sans p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="flex flex-wrap justify-between items-center mb-8 gap-4">
          {/* Sisi Kiri: Judul */}
          <div className="flex-1 min-w-0 w-full sm:w-auto">
            <div className="flex items-center gap-4">
              <div className="animate-float">
                <Logo />
              </div>
              <div className="min-w-0">
                <h1 className="text-2xl sm:text-3xl font-bold text-blue-800 tracking-tight truncate">
                  Generator Prompt AI
                </h1>
              </div>
            </div>
          </div>

          {/* Sisi Kanan: Waktu, Pengguna, Tombol */}
          <div className="flex items-center flex-wrap justify-end gap-4 sm:gap-6 w-full sm:w-auto">
            <Clock />
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-xs text-slate-500">Selamat datang,</p>
                <p className="font-bold text-blue-800 leading-tight">{userName}</p>
              </div>
              <button 
                onClick={handleLogout}
                className="flex-shrink-0 text-sm bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-3 rounded-lg shadow-sm transition-colors duration-200"
                aria-label="Keluar"
              >
                Keluar
              </button>
            </div>
          </div>
        </header>

        <div className="flex flex-row items-start">
            <main className="flex-grow animate__animated animate__fadeIn -mr-px">
              {mainContent}
            </main>
            <div className="flex flex-col z-10">
                <button
                    onClick={() => setMode('veo')}
                    className={`${baseTabClasses} ${mode === 'veo' ? activeTabClasses : inactiveTabClasses}`}
                >
                    <span className="[writing-mode:vertical-rl] rotate-180">Veo 3 (Video)</span>
                </button>
                <button
                    onClick={() => setMode('imagen')}
                    className={`${baseTabClasses} -mt-px ${mode === 'imagen' ? activeTabClasses : inactiveTabClasses}`}
                >
                    <span className="[writing-mode:vertical-rl] rotate-180">Imagen (Gambar)</span>
                </button>
                <button
                    onClick={() => setMode('tutorial')}
                    className={`${baseTabClasses} -mt-px ${mode === 'tutorial' ? activeTabClasses : inactiveTabClasses}`}
                >
                    <span className="[writing-mode:vertical-rl] rotate-180">Tutorial</span>
                </button>
            </div>
        </div>
        
        <footer className="text-center mt-12 text-slate-500 text-sm">
          <p>Generator Prompt AI Profesional</p>
          <p className="font-bold text-blue-600">-- LANEXA --</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
