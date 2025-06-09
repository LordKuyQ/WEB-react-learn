import React, { useState, useEffect } from 'react';
import './Style.css';

function ShowSimple() {
  const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isActive) {
      const generator = genSimple();
      timer = setInterval(() => {
      const nextPrime = generator.next().value;
      if (typeof nextPrime === 'number') {
        setCount(nextPrime);
      }
    }, 1000);
  }
    

    return () => clearInterval(timer);
  }, [isActive]);

  const handleClick = () => {
    setIsActive(isActive => !isActive);
  };

  function* genSimple() {
    let n = 2;
    yield n;
    while (true) {  
    if (isPrime(n)) {
        yield n;
    }
    n++;
   }
  }

  function isPrime(n: number) {
    let i;
      for (i = 2; i < Math.sqrt(n)+1; i++) {
          if (n % i == 0){
              return false;
          }
      }
      return true;
  }

  return (
    <div className="row">
      <button onClick={handleClick}>Старт</button>
      <p>Простые числа: {count}</p>
    </div>
  );
}

export default ShowSimple;
