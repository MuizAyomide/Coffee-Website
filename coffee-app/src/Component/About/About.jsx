import React from 'react'
import './About.css';

const About = () => {
  return (
    <div className='about'>
      <div className="about-content">
     <img src="coffee-image.png" alt="" />

     <div className="about-text">
        <h2>Discover Coffee Borcelle</h2>
        <h4>Elevating Your Coffee Experience</h4>
        <p>At Coffee Borcelle, we're on a mission to redefine your coffee moments. Our carefully curated selection of premium beans, sourced from the world's most renowned coffee regions.</p>
        <p>With expert craftsmanship and a commitment to quality, 
        Join us in savoring the art of coffee, one cup at a time.</p>
        <button>Read More</button>
     </div>
      </div>
    </div>
  )
}

export default About
