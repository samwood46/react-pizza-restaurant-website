import React from 'react'
import multiplePizzas from '../assets/multiplePizzas.jpeg';
import '../styles/About.css'


function About() {
  return (
    <div className = "about">
        <div className = "aboutTop"
        style ={ {backgroundImage: `url(${multiplePizzas})`}}
        ></div>
        <div className = "aboutBottom">
            <h1>About Us</h1>
            <p></p>
        </div>
      
    </div>
  )
}

export default About
    