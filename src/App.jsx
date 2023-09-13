import { useState } from 'react';
import { Display } from './components/Display';
import './App.css';

const displayTypes = ['clock', 'stopwatch'];

function App() {
  const [displayIndex, setDisplayIndex] = useState(1);

  const handleSwitch = () => {
    displayIndex === 0 ? setDisplayIndex(1) : setDisplayIndex(0)
  }

  return (
    <>
      <div className='app'>
        <Display display={displayTypes[displayIndex]}/>
        <button onClick={() => handleSwitch()}>Switch to: {displayTypes[displayIndex]}</button>
        <p className="read-the-docs">Carlos Soto || 2023</p>
      </div>
    </>
  )
}

export default App
