
import React, { useState, useEffect } from 'react';

const Clock: React.FC = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  const formatTime = (dateToFormat: Date): string => {
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    let timeZoneAbbr = '';

    // Peta zona waktu sederhana untuk Indonesia
    switch (timeZone) {
      case 'Asia/Jakarta':
        timeZoneAbbr = 'WIB';
        break;
      case 'Asia/Makassar':
        timeZoneAbbr = 'WITA';
        break;
      case 'Asia/Jayapura':
        timeZoneAbbr = 'WIT';
        break;
      default:
        // Fallback ke offset GMT untuk wilayah lain
        const offset = -dateToFormat.getTimezoneOffset() / 60;
        timeZoneAbbr = `GMT${offset >= 0 ? '+' : ''}${offset}`;
        break;
    }

    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    };

    // Contoh: "Senin, 29 Juli 2024 11.02.30"
    const formattedString = dateToFormat.toLocaleString('id-ID', options);
    
    // Pisahkan bagian tanggal dan waktu
    const lastSpaceIndex = formattedString.lastIndexOf(' ');
    const datePart = formattedString.substring(0, lastSpaceIndex);
    const timePart = formattedString.substring(lastSpaceIndex + 1).replace(/\./g, ':');
    
    // Gabungkan ke format akhir: "Senin, 29 Juli 2024, 11:02:30 WIB"
    return `${datePart}, ${timePart} ${timeZoneAbbr}`;
  };

  return (
    <div className="text-right">
      <p className="text-sm text-slate-500 font-mono tracking-tight">
        {formatTime(date)}
      </p>
    </div>
  );
};

export default Clock;
