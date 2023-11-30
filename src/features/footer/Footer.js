import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <div className="footer-columns">
          <div className="footer-column">
            <h4>Company</h4>
            <p>About Us</p>
            <p>Career</p>
            <p>Blog</p>
            <p>Contact Us</p>
          </div>
          <div className="footer-column">
            <h4>Policies</h4>
            <p>Privacy Policies</p>
            <p>Terms of Use</p>
            <p>Secure Shopping</p>
            <p>Copyright Policy</p>
          </div>
          <div className="footer-column">
            <h4>Help</h4>
            <p>Payment</p>
            <p>Shipping</p>
            <p>Return</p>
            <p>FAQ</p>
          </div>
          <div className="footer-column">
            <h4>Misc</h4>
            <p>Affiliate</p>
            <p>Sitemap</p>
          </div>
        </div>
      </div>
      <div className="footer-section">
        <div className="footer-rows">
            <p>Copyright © 2023 . Bookswagon.com. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer