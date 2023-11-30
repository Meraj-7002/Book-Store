import React from 'react'
import "./LogIn.css"
import { Link } from 'react-router-dom';
import Header from '../../features/header/Header'
import Footer from '../../features/footer/Footer'
import NavBar from '../../features/header/NavBar'


function LogIn() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for handling login credentials
    console.log("Loged In")
  };
  return (
    <>
    <Header />
    <NavBar />
    <div className="background-container">
      <div className="login-form-container">
        <form onSubmit={handleSubmit} className="login-form">
          <h2>Login</h2>
          <div className="form-group">
            <input type="email" name="email" placeholder="Mobile/Email" />
          </div>
          <div className="form-group">
            <input type="password" name="password" placeholder="Password" />
          </div>
          <button type="submit">Login</button>
        </form>
        <div className='redirect'>
        New to BookStore? <Link to={'/signup'} >SignUp</Link>
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default LogIn