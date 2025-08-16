import React from 'react';
import Logo from './Logo';

const SplashScreen: React.FC = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 overflow-hidden relative bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center relative z-10">
        <div className="inline-block mb-6 animate-float">
          <Logo />
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold text-blue-800 tracking-tight mb-4 animate-focus-in" style={{ animationDelay: '0.5s' }}>
          VEO 3 Prompt Generator
        </h1>
        <p className="text-lg sm:text-xl text-slate-500 animate-fade-in-delay" style={{ animationDelay: '1s' }}>
          Mewujudkan Visi Anda...
        </p>
      </div>
    </div>
  );
};

export default SplashScreen;