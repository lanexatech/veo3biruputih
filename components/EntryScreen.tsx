import React from 'react';
import Logo from './Logo';

interface EntryScreenProps {
  onEnter: () => void;
}

const EntryScreen: React.FC<EntryScreenProps> = ({ onEnter }) => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-gray-800 p-4 animate__animated animate__fadeIn">
      <div className="text-center">
        <div className="inline-block mb-6">
          <Logo />
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-blue-800 dark:text-blue-300 tracking-tight mb-4">
          Selamat Datang di VEO 3 Prompt Generator
        </h1>
        <p className="text-lg text-slate-500 dark:text-slate-400 mb-8">
          Klik untuk memulai pengalaman sinematik.
        </p>
        <button
          onClick={onEnter}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-lg"
        >
          Mulai
        </button>
      </div>
    </div>
  );
};

export default EntryScreen;
