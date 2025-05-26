import React from 'react';
import './App.css';

function Square({n}:{n: number }) {
  return (
    <div className="Square">
    <p>Square from {n} = {n*n}</p>
    </div>
  );
}

export default Square;
