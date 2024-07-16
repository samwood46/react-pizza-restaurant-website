import React from 'react'
import PizzaLeft from '../assets/multiplePizzas.jpeg'
import '../styles/Contact.css'

function Contact() {
  return (
    <div className = "contact">
        <div className="leftSide" style ={ {backgroundImage: `url(${PizzaLeft})`}}></div>
        <div className = "rightSide">
          <form id="contact-form" method = "Post">
            <label htmlFor = "name">Full Name</label>
            <input name = "name" placeholder="Enter full name..." type="text"/>
            <label htmlFor = "email">Email</label>
            <input name = "email" placeholder="Enter email..." type="text"/>
            <label htmlFor = "message">Message</label>
            <textarea rows='6' name = "message" placeholder="Enter message..." required></textarea>
            <button type="submit">Send</button>

          </form>
        </div>
      
    </div>
  )
}

export default Contact
