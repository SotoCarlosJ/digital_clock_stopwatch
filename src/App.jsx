import React, { useState } from 'react';
import { Clock } from './components/Clock';
import { Stopwatch } from './components/Stopwatch';
import { List } from './components/List';
import { Button } from './components/Button';
import './App.css';

const display = [
  {id: 1, title: 'Clock', component: <Clock />}, 
  {id: 2, title: 'Stopwatch', component: <Stopwatch />},
];

function App() {
  const [id, setID] = useState(1);

  const switchDisplay = (param) => {
    setID(param);
  };

  return (
    <>
      <div className='app'>
        {display.find(item => item.id === id).component}
        <List array={display} renderButton={(item) => <Button item={item} clicked={(id) => switchDisplay(id)}/>}/>
        <p className="read-the-docs">Carlos Soto || 2023</p>
      </div>
    </>
  )
}

export default App
