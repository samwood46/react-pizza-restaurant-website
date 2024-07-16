import React, {useEffect} from 'react';
import $ from 'jquery'; // Import jQuery
import Logo from '../assets/pizzaLogo.png'
import {Link} from 'react-router-dom'
import "../styles/NavBar.css"
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {
  useEffect(() => {
    // Ensure jQuery is loaded before using it
    if (window.jQuery) {
        $(document).ready(function() {
            $('#homeLink').focus();
        });
    }
}, []);

  return (
    <div className="navbar">
      <div className='leftSide'>
        <img src={Logo} />
      </div>
      <div className="rightSide flex space-x-4">
      <Link id="homeLink" to="/" className="link text-white hover:text-blue-400 focus:outline-none focus:text-blue-400">
      Home</Link>
        <Link id = "menuLink" to="/menu">Menu</Link>
        <Link to="/about" > About</Link>
        <Link to="/contact">Contact</Link>
        <button>
          <ReorderIcon />
        </button>
      </div>
    </div>
  )
}

export default Navbar
