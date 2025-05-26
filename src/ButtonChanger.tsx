import React, { useState } from 'react';
import './App.css';

function ButtonChanger() {
  const [change, setChange] = useState(true);

  let tColor;
  if (change) {
    tColor = "rgb(245, 181, 193)";
  } else {
    tColor = "rgb(195, 190, 230)";
  }

  const handleClick = () => {
    setChange(change => !change);
  };

  return (
    <div className="ButtonChanger">
      <button id="Button_Changer" style={{ backgroundColor: tColor }} onClick={handleClick}>ButtonChanger</button>
    </div>
  );
}

export default ButtonChanger;
