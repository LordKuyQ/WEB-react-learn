import React from 'react';
import './App.css';
import Square from './Square';
import OnlyEven from './OnlyEven';
import Temperature from './Temperature';
import ButtonChanger from './ButtonChanger';
import Counter from './Counter';

function App() {
  return (
    <div className="App">
    <Square n={3} />
    <OnlyEven arr={[14, 5, 6, 12, 21, 2]} />
    <Temperature t={-45} />
    <Temperature t={451} />
    <ButtonChanger/>
    <Counter></Counter>
    </div>
  );
}

export default App;
