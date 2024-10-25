import React, { useState } from "react";
import "./Home.css";

const Home = () => {

const [open, setOpen] = useState(false);

  return (
    <div className="home">
      <div className="main-bg"></div>
      <div className="contents">
        <div className="nav-content">
          <div className="logo">
            <img src="logo.png" alt="" />
          </div>
          <div className="top nav-menu">
            <ul className="nav-ul">

            
              <li>Home</li>
              <li>About Us</li>
              <li>Features</li>
              <li>Purchase</li>
              <li>Contact Us</li>
            </ul>
          </div>
          

        </div>

        <div className="text-content">
          <h3>Coffee Makes Mood</h3>
          <p>"Indulge in Every Sip: Experience the Richness of Coffee!"</p>
        </div>
      </div>
      {
        open === true ?
      <div className="nav-menu">
        <ul className="nav-ul">
      
        <p onClick={()=>setOpen(false)} className="close ">X</p>
          <li>Home</li>
          <li>About Us</li>
          <li>Features</li>
          <li>Purchase</li>
          <li>Contact Us</li>
        </ul>
      </div>
      : <p onClick={()=>setOpen(true)} className="bar">=</p>
      }
    </div>

  );
};

export default Home;
