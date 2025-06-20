import React from 'react';
import './App.css';
import Square from './Square';
import OnlyEven from './OnlyEven';
import Temperature from './Temperature';
import ButtonChanger from './ButtonChanger';
import Counter from './Counter';
import CounterTo8 from './CounterTo8';
import ShowSimple from './ShowSimple';
import TrafficLight from './TrafficLight';
import WaveString from './WaveString';
import CitySelecter from './CitySelecter';
import SecondsOfLife from './SecondsOfLife';

function App() {
  return (
    <div className="App">
    <Square n={3} />
    <OnlyEven arr={[14, 5, 6, 12, 21, 2]} />
    <Temperature t={-45} />
    <Temperature t={451} />
    <ButtonChanger/>
    <Counter></Counter>
    <CounterTo8></CounterTo8>
    <ShowSimple></ShowSimple>
    <TrafficLight></TrafficLight> 
    <WaveString s="Привет!"></WaveString>
    <CitySelecter></CitySelecter>
    <SecondsOfLife></SecondsOfLife>
    </div>
  );
}

export default App;
