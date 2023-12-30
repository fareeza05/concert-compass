import { useState } from 'react';
import List from './Components/List';
import Navbar from './Components/Navbar';
import Card from './Components/Card';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <div className='main-container'>
      <h2>Hey there! Here's whats trending today </h2>
     <Card/>
     <List/>
    </div>
    </>
  )
}

export default App
