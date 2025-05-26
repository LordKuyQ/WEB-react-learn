import React, { useState, useEffect } from 'react';
import './App.css';

function Counter({ initialCount = 0 }) {
  const [count, setCount] = useState(initialCount);
  return <>
      <button onClick={() => setCount(count + 1)}>
          Click me!
      </button>
      { count }
  </>;
}

export default Counter;
