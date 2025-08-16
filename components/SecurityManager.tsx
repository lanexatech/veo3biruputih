import React, { useEffect, useCallback } from 'react';

interface SecurityManagerProps {
  onViolation: (title: string, message: string) => void;
}

const SecurityManager: React.FC<SecurityManagerProps> = ({ onViolation }) => {

  const handleViolation = useCallback((title: string, message: string) => {
    onViolation(title, message);
  }, [onViolation]);

  useEffect(() => {
    // Menonaktifkan klik kanan
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      handleViolation(
        'Aksi Dilarang',
        'Klik kanan telah dinonaktifkan untuk melindungi konten aplikasi ini. Mohon untuk tidak mencoba menyalin atau memeriksa elemen.'
      );
    };

    // Menonaktifkan kombinasi tombol tertentu
    const handleKeyDown = (e: KeyboardEvent) => {
      // Menonaktifkan F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U, Ctrl+C
      if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i' || e.key === 'J' || e.key === 'j' || e.key === 'C' || e.key === 'c')) ||
        (e.metaKey && e.altKey && (e.key === 'I' || e.key === 'i' || e.key === 'J' || e.key === 'j' || e.key === 'C' || e.key === 'c')) || // Untuk MacOS
        (e.ctrlKey && (e.key === 'U' || e.key === 'u' || e.key === 'C' || e.key === 'c')) ||
        (e.metaKey && (e.key === 'A' || e.key === 'a' || e.key === 'C' || e.key === 'c')) // Select All & Copy di MacOS
      ) {
        e.preventDefault();
        handleViolation(
          'Akses Dilarang',
          'Tindakan ini telah diblokir untuk alasan keamanan. Dilarang melihat kode sumber, menggunakan developer tools, atau menyalin konten.'
        );
      }
    };
    
    // Mendeteksi pembukaan Developer Tools
    const devToolsCheck = () => {
        const element = document.createElement('div');
        let isOpen = false;

        Object.defineProperty(element, 'id', {
            get: () => {
                isOpen = true;
            }
        });
        
        const intervalId = setInterval(() => {
            isOpen = false;
            // Pernyataan console ini akan memicu getter 'id' jika dev tools terbuka,
            // karena dev tools mencoba untuk memeriksa elemen tersebut.
            console.log(element);
            console.clear();
            
            if (isOpen) {
                 handleViolation(
                    'Akses Dilarang',
                    'Developer tools terdeteksi. Aplikasi ini dilindungi dari inspeksi kode. Harap tutup developer tools untuk melanjutkan.'
                );
            }
        }, 1500);
        return () => clearInterval(intervalId);
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
    const clearDevToolsInterval = devToolsCheck();

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
      clearDevToolsInterval();
    };
  }, [handleViolation]);

  return null; // Komponen ini tidak me-render apapun
};

export default SecurityManager;
