import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
  }


   const toggleMode =()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor = "rgb(10 23 70)"
      //Alert msg
      showAlert(" Dark mode has been enabled", "success")
    }
    else{
      setmode("light");
      document.body.style.backgroundColor = "white"
      //Alert msg
      showAlert(" lignt mode has been enabled", "success")
    }  
  }
  return (
    <>
    <Navbar title='TestUtils' mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container mx-6 my-3">
    <TextForm heading='Enter the text to analyze' mode={mode} showAlert={showAlert}/>
    {/* <About/> */}
    </div>
    </>
  );
}

export default App;
