import { useState } from 'react';
import List from './Components/List';
import Navbar from './Components/Navbar';
import Card from './Components/Card';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h2>Hey There! Here are today's Top Picks </h2>
     <Navbar/>
    </>
  )
}

export default App
