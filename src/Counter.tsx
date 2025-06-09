import React, { useState, useEffect } from 'react';
import './App.css';

function Counter() {
  const [count, setCount] = useState(10);

  useEffect(() => {
    if (count > 0) {
      const timer = setTimeout(() => {
        setCount(count - 1);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [count]);

  return (
    <div>
      <p>Обратный таймер: {count}</p>
    </div>
  );
}

export default Counter;
