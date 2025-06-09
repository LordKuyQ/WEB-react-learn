import React from 'react';
import './App.css';

function Temperature({ t }: { t: number }) {
  let tColor;
  if (t >= 0) {
    tColor = "rgb(125, 12, 27)";
  } else {
    tColor = "rgb(25, 12, 125)";
  }

  return (
    <div className="Temperature">
      <p style={{ color: tColor }}>Temperature = {t}</p>
    </div>
  );
}

export default Temperature;
