import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    <Navbar title='TestUtils'/>
    <div className="container mx-6 my-3">
    {/* <TextForm heading='Enter the text to analyze'/> */}
    <About/>
    </div>
    </>
  );
}

export default App;
