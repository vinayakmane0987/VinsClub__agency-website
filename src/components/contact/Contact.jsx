import React from 'react'
import './contact.css'
const Contact = () => {
  return (
    <div className="contact section__padding" id='contact'>
    <div className="contact__img">img</div>
    <div className="contact__form">
    <form action="">
    <h5>Name</h5>
    <input type="text" placeholder='Your Name'/>
    <h5>Email</h5>
    <input type="email" placeholder='Your Email'/>
    <h5>Your Message</h5>
    <textarea name="" id="" cols="30" rows="10"></textarea>
    </form>
    <button type="submit">submit</button>
    </div>
    </div>
  )
}

export default Contact