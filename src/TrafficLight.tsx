import React, { useState, useEffect } from 'react';
import './Style.css';

function TrafficLight() {
  const [isActive, setIsActive] = useState(false);
  const [color, setColor] = useState('red');

  useEffect(() => {
    let timer: NodeJS.Timeout;
    let way = false;
    if (isActive) {
      timer = setInterval(() => {
        setColor(prevColor => {
          if (way) {
            if (prevColor === 'red') return 'yellow';
            if (prevColor === 'yellow') return 'green';
            if (prevColor === 'green') way = false; return 'yellow';
          }
          else {
            if (prevColor === 'green') return 'yellow';
            if (prevColor === 'yellow') return 'red';
            if (prevColor === 'red') way = true; return 'yellow';
          }
          return 'red';
        });
      }, 1000);
    }

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [isActive]);

  const handleClick = () => {
    setIsActive(prevIsActive => !prevIsActive);
  };

  const getColor = (currentColor: string) => {
    return color === currentColor ? currentColor : 'grey';
  };

  return (
    <div className="column">
      <button onClick={handleClick}>Старт</button>
      <div className="light" style={{ backgroundColor: getColor('red') }}></div>
      <div className="light" style={{ backgroundColor: getColor('yellow') }}></div>
      <div className="light" style={{ backgroundColor: getColor('green') }}></div>
    </div>
  );
}

export default TrafficLight;
