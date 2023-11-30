import React from 'react'
import './SignUp.css'
import { Link } from 'react-router-dom';
import Header from '../../features/header/Header'
import Footer from '../../features/footer/Footer'
import NavBar from '../../features/header/NavBar'

function SignUp() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for handling form submission
  };

  return (
    <>
    <Header />
    <NavBar />
    <div className="background-container">
      <div className="form-container">
        <form onSubmit={handleSubmit} className="signup-form">
          <h2>Signup</h2>
          <div className="form-group">
            <label>Name</label>
            <input type="text" name="name" placeholder="Enter your name" />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input type="number" name="phone" placeholder="Enter your phone number" />
          </div>
          <div className="form-group">
            <input type="checkbox" id="subscribe" name="subscribe" checked/>
            <label htmlFor="subscribe">Subscribe to newsletter</label>
          </div>
          <div className="form-group">
            {/* Implement CAPTCHA */}
            <input type="text" name="captcha" placeholder="I'm not a robot" />
          </div>
          <div className="button">
            <button type="submit">Continue</button>
          </div>
          <div>
            <Link to="/login">
            <p>Already Have Account?</p>
            </Link>
          </div>
        </form>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default SignUp