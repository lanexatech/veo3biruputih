import React from 'react';

interface NotificationPopupProps {
  title: string;
  message: string;
  onClose: () => void;
}

const NotificationPopup: React.FC<NotificationPopupProps> = ({ title, message, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex justify-center items-center z-50 animate__animated animate__fadeIn">
      <div className="bg-white rounded-2xl shadow-2xl p-8 m-4 max-w-md w-full text-center transform transition-all animate__animated animate__zoomIn">
        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-red-100 mb-4">
          <svg className="h-10 w-10 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-slate-800 mb-2">{title}</h3>
        <p className="text-slate-600 mb-6">{message}</p>
        <button
          onClick={onClose}
          className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-4 rounded-full focus:outline-none focus:shadow-outline transition-all duration-300 transform hover:scale-105"
        >
          Saya Mengerti
        </button>
      </div>
    </div>
  );
};

export default NotificationPopup;
