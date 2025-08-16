
import React, { useState } from 'react';
import Logo from './Logo';

interface LoginPageProps {
  onLogin: (name: string) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() === '') {
      setError('Nama tidak boleh kosong.');
      return;
    }
    onLogin(name.trim());
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4 animate__animated animate__fadeIn">
      <div className="w-full max-w-md">
        <form 
          onSubmit={handleSubmit}
          className="bg-white/80 backdrop-blur-sm border border-blue-100 shadow-2xl rounded-2xl px-8 pt-10 pb-8 mb-4 [perspective:1000px]"
        >
          <div className="mb-8 text-center">
            <div className="inline-block mb-4 animate-float">
              <Logo />
            </div>
            <h1 className="text-2xl font-bold text-blue-800">Selamat Datang</h1>
            <p className="text-slate-500">Masukkan nama Anda untuk melanjutkan</p>
          </div>
          
          <div className="mb-4">
            <label className="block text-slate-700 text-sm font-bold mb-2" htmlFor="username">
              Nama
            </label>
            <input
              className="shadow-sm appearance-none border rounded-lg w-full py-3 px-4 text-slate-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 transform-gpu hover:-translate-y-1 hover:rotate-x-2 hover:rotate-y-1 hover:ring-2 hover:ring-blue-500/70"
              id="username"
              type="text"
              placeholder="Contoh: Budi"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (error) setError('');
              }}
              autoFocus
            />
          </div>
          
          {error && <p className="text-red-500 text-xs italic mb-4 text-center">{error}</p>}
          
          <div className="flex items-center justify-center mt-6">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full focus:outline-none focus:shadow-outline transition-all duration-300 transform hover:scale-105 disabled:opacity-50"
              type="submit"
              disabled={!name.trim()}
            >
              Masuk
            </button>
          </div>
        </form>
        <footer className="text-center text-slate-500 text-sm">
        </footer>
      </div>
    </div>
  );
};

export default LoginPage;
