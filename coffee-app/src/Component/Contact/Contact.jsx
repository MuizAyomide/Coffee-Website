import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact'>
        <div className="all">
            <div className="left">
                <h1>Contact Us</h1>
                <p>Send us a message</p>
                <form action="">
                <div className="first-inp">
                    <input type="text" placeholder='Full Name'/>
                    <input type="email" placeholder='Your Email' />
                </div>
                <textarea placeholder='Your Message'></textarea>
                <button className='btn'>Submit</button>

                </form>
            </div>
            <div className="center">
                <h1>Sitemap</h1>
                <p>All our Pages</p>

                <ul className='list'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Feature</li>
                    <li>Pricing</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className="right">
                <div className="bottom-logo">
                <img src="logo.png" alt="" />
                </div>
                <div className="call-mail">
                    <dv className="call">
                        <img src="Vector call.png" alt="" />
                        <p>(08) 400 2000</p>
                    </dv>
                    <dv className="mail">
                        <img src="envelope-regular 1.png" alt="" />
                        <p>coffeeborcelle@gmail.com</p>
                    </dv>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Contact
