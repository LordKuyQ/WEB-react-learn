import React, { useState, useEffect } from 'react';
import './Style.css';

function SecondsOfLife() {
  const [birthDate, setBirthDate] = useState<string>('');
  const [secondsLived, setSecondsLived] = useState<number>(0);

  useEffect(() => {
    if (!birthDate) return;

    const calculateSeconds = () => {
      const birthDateTime = new Date(birthDate).getTime();
      const now = new Date().getTime();
      const seconds = Math.floor((now - birthDateTime) / 1000);
      setSecondsLived(seconds);
    };

    calculateSeconds();
    
    const interval = setInterval(calculateSeconds, 1000);
    
    return () => clearInterval(interval);
  }, [birthDate]);

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBirthDate(e.target.value);
  };

  return (
    <div className="column">
      <br></br>
      <label>
        Введите дату рождения:
        <input type="date"  value={birthDate} onChange={handleDateChange} max={new Date().toISOString().split('T')[0]}/>
      </label>
      {birthDate && (
        <div>Вы прожили: {secondsLived.toLocaleString()} секунд.</div>
      )}
    </div>
  );
}

export default SecondsOfLife;