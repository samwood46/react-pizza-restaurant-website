import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Menu from './pages/Menu';
import Home from './pages/Home';
import {BrowserRouter as Router, Routes, Route, Switch} from 'react-router-dom';
import { Component } from 'react';
import About from './pages/About';
import Contact from './pages/Contact';



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        
          <Routes> {/* replaced the old switch tag */}
            <Route path ="/" element ={<Home/>}/>
            <Route exact path ="/menu" element={<Menu/>}/>
            <Route path ="/about" element={<About/>}/>
            <Route path ="/contact" element={<Contact/>}/>


          </Routes>
        <Footer/>
      </Router>
      </div>
  );
}

export default App;

