import { useState } from 'react';
import List from './Components/List';
import Navbar from './Components/Navbar';
import Card from './Components/Card';
import './App.css';
const API_KEY = import.meta.env.VITE_APP_CLIENT_ID;
const API_PASS = import.meta.env.VITE_APP_SECRET;


function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
    <Navbar/>
    <div className='main-container'>
      <h2 className='title'>Hey there! Here's whats trending today </h2>
      <Card/>
      <List/>
    </div>
    </>
  )
}

export default App
