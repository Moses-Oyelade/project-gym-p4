import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from '../pages/About';
import Register from "../pages/Register";
import Navbar from "./Navbar"; 
import Display from '../components/Display';
import './AppA.css'

function App() {

  return (
    <>
      <div className="App">
      <header className="App-header">
      <Navbar />
      </header>
      <Routes className="App">
          <Route path="/about" element={ <About/> } />
          <Route path="/register" element={ <Register/> } />
          <Route path="/users/:id" element={ <Display/>} />
          <Route path="/" element = { <Home/> } />
      </Routes>
      </div>
    </>
      
  );
}

export default App;
