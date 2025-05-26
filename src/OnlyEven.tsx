import React from 'react';
import './App.css';

function OnlyEven({ arr }: { arr: Array<number> }) {
  const evenItems = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenItems.push(<div key={i}>{arr[i]}</div>);
    }
  }

  return <div className="OnlyEven">{evenItems}</div>;
}

export default OnlyEven;
