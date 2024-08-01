import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div className='home'>
        <div className="inner-content">
            <div className="nav">
                <div className="logo">
                    <img src="logo.png" alt="" />
                </div>
                <div className="nav-sec">
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Features</li>
                        <li>Purchase</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="text">
            <h1>
                Coffee Makes Mood
            </h1>
            <p>"Indulge in Every Sips Experience the Richness of Coffee!"</p>
        </div>
    </div>
  )
}

export default Home
