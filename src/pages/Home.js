import React from 'react';
import { Link } from "react-router-dom";
import BannerImage from '../assets/pizza.png';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home" style ={ {backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer"  > 
        <h1>Pedro's Pizzareia</h1>
        <p>Pizza for everyone</p>
        <Link to = "/menu" tabIndex="-1"> 
          < button tabIndex="0"> ORDER NOW</button>
        </Link>
        
      </div>
    </div>
  )
}

export default Home
