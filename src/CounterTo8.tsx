import React, { useState, useEffect } from 'react';
import './Style.css';

function CounterTo8() {
  const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isActive) {
      timer = setInterval(() => {
        setCount(prevCount => prevCount + 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isActive]);

  const handleClick = () => {
    setIsActive(isActive => !isActive);
  };

  return (
    <div className="row">
      <button onClick={handleClick}>Старт</button>
      <p>Счетчик: {count}</p>
    </div>
  );
}

export default CounterTo8;
