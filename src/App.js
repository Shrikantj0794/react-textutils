import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'

function App() {
  const [mode, setmode] = useState('light');

   const toggleMode =()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor = "rgb(10 23 70)"
    }
    else{
      setmode("light");
      document.body.style.backgroundColor = "white"
    }
    
    
  }
  return (
    <>
    <Navbar title='TestUtils' mode={mode} toggleMode={toggleMode}/>
    <div className="container mx-6 my-3">
    <TextForm heading='Enter the text to analyze' mode={mode}/>
    {/* <About/> */}
    </div>
    </>
  );
}

export default App;
