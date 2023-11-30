import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header({ userLoggedIn, cartCount }) {


  const handleLogout = () => {
    // Implement logout logic
    console.log("Logout");
  };

  return (
    <header className="header">
      <div className="logo">
      <Link to="/">
      <img src="logo" alt="Logo" />
      </Link>  
      </div>
      <div className="menu">
        <div className="profile">
          <span className="profile-icon" title="Profile">
            <img src="ProfileIcon.png" alt="Profile" />
          </span>
          {userLoggedIn && (
            <div className="dropdown-content">
              <a href="#my-orders">My Orders</a>
              <button onClick={handleLogout}>Logout</button>
            </div>
          )}
        </div>
        <div className="cart">
          <span className="cart-icon" title="Cart">
            {/* Replace 'CartIcon' with your cart icon */}
            <img src="CartIcon.png" alt="Cart" />
            {cartCount > 0 && <span className="badge">{cartCount}</span>}
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;
