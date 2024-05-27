import React from 'react';
import logo from './logo1.webp';
import logo1 from './slider-img.png';
import logo2 from './about-img.png';
import { useNavigate } from 'react-router-dom';
import phnimg from './icons8-phone-50.png';
import emimg from './icons8-email-48.png';
import adimg from './icons8-home-address-64.png';
import {  useAuth } from './Auth';
import { NavLink } from 'react-router-dom';
const Home = () => {
    const navigate=useNavigate()
    const auth=useAuth
  return (
    <div>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="home.css" />
    <div className="total">
      <div id="home">
        <div className="container">
          <div className="container1">
            <img src={logo} alt="new" height="70px" width="70px" />
            <h2 style={{ color: "rgb(245, 240, 240)" }}> Wise Pay </h2>
          </div>
          <div className="container2">
            <a href="#home">Home</a>
        {auth.user==='admin'&&<NavLink to='/admin'>Admin</NavLink>}
            <a href="#about">About Us</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact us</a>
            <a href='#l' a onClick={()=>{navigate('/login')}}>Login</a>
            <a href='#l' onClick={()=>{navigate('/signup')}}>Signup</a>
          </div>
        </div>
        <div className="centerwhole">
          <div className="centerleft">
            <div className="detail-box">
              <h1 style={{ color: "white" }}>
                MANAGE YOUR </h1>
                <h1 style={{ color: "white" }}>EXPENSES
              </h1>
              <p style={{ color: "white" }}>
                Keep track of your expenses and manage your budget effectively
                with our expense tracker app.
              </p>
              <div className="btn-box"></div>
            </div>
          </div>
          <div className="slider">
            <img src={logo1} alt="" height="400px" width="400px" />
          </div>
        </div>
      </div>
    </div>
    <div id="about">
      <div className="heading">
        <h1 style={{ color: "rgb(248, 248, 242)" }}>
          About Us
          <p style={{ color: "rgb(245, 238, 238)" }}>Learn more about our expense tracker app and how it can help you manage your finances more effectively</p>
        </h1>
      </div>
      <div className="containera">
        <section className="abouta">
          <div className="aboutimg">
            <img src={logo2} alt="new" />
          </div>
          <div className="aboutcontent">
            <h2 style={{ color: "orange", fontWeight: "bold" }}>
              We Are Expense Tracker
            </h2>
            <p>
              Our mission is to provide you with a simple and intuitive platform to track your expenses and take control of your finances.
            </p>
          </div>
        </section>
      </div>
    </div>
    <div id="services">
      <div className="containers">
        <h1 className="section-heading" style={{ color: "rgb(248, 246, 246)" }}>
          Our Services
        </h1>
        <div className="services-cards">
          <div className="services-card">
            <i className="serv1">
              <h2>Tracking Expense</h2>
              <p>
                Categorize, record, set budget, review, and analyze. Stay
                accountable for better financial management. 📊💰
              </p>
            </i>
          </div>
          <div className="services-card">
            <i className="serv2">
              <h2>Budget Analysis</h2>
              <p>
                {" "}
                Reviews income, expenses, and budget alignment. It ensures
                financial accuracy, agility, and spending control. 📊💡
              </p>
            </i>
          </div>
          <div className="services-card">
            <i className="serv3">
              <h2>Planning Budget</h2>
              <p>
                List income, categorize expenses, track transactions, and create a
                new budget. Take control of your finances! 📊💡
              </p>
            </i>
          </div>
        </div>
        <div className='cal' style={{ color: "white" }}>
            <h2>You have to sign up to access our services</h2>
          </div>
      </div>
    </div>
    <div id="contact">
      <section className="contact-section">
        <div className="cont1">
          <h4 style={{ color: "white" }}>Get In Touch With us</h4>
          <h2 style={{ color: "white" }}>Contact Us</h2>
          <p style={{ color: "white" }}>
            Want to get in touch? We'd love to hear from you.Here's how you can reach us.
          </p>
          <div className="line"></div>
        </div>
        <div className="details">
          <div className="details1" />
          <div>
           <div className='img1'><img src={phnimg} alt='iii'></img></div>
            <span>Phone No :</span>
            <span className="text">123456789</span>
          </div>
          <div>
          <div className='img2'><img src={emimg} alt='iii'></img></div>
            <span>E-mail :</span>
            <span className="text">abc@gmail.com</span>
          </div>
          <div>
          <div className='img3'><img src={adimg} alt='iii'></img></div>
            <span>Address :</span>
            <span className="text">17 Avenue,south street-Sivakasi</span>
          </div>
        </div>
      </section>
    </div>
    </div>
  )
}

export default Home
