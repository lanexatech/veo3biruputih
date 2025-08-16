import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center my-8">
      <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-500 rounded-full animate-spin"></div>
      <p className="mt-4 text-blue-600 font-semibold">Menghasilkan keajaiban...</p>
    </div>
  );
};

export default Loader;