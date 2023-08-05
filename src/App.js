import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'

// import react router
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }


   const toggleMode =()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor = "rgb(10 23 70)"
      //Alert msg
      showAlert(" Dark mode has been enabled", "success")
      //title change
      document.title = 'TextUtils - Dark Mode'
      
      //flash the title -- (is not a good user experience)
      setInterval(()=>{
        document.title = 'TextUtils is Amazing mode'
      },2000)
      setInterval(()=>{
        document.title = 'Install TextUtils Now'
      },1500)
    }
    else{
      setmode("light");
      document.body.style.backgroundColor = "white"
      //Alert msg
      showAlert(" lignt mode has been enabled", "success")
       //title change
       document.title = 'TextUtils - Light Mode'
    }  
  }
  return (
    <>
     <Router>
    <Navbar title='TestUtils' mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container mx-6 my-3">
   
        {/* In react-router-dom v6, "Switch" is replaced by routes "Routes". */} 
        <Routes>
          <Route exact path="/" element={<TextForm heading='Enter the text to analyze' mode={mode} showAlert={showAlert}/>}/>
          <Route exact path="/about" element={<About mode={mode}/>}/>
        </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
