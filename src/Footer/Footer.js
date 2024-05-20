import React from 'react';
import './Footer.css';
import {FaFacebook, FaInstagram, FaRetweet } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="first">
          <h3>Be the first to know</h3>
          <p>Sign up for updates from mettā muse.</p>
          <input type="email" placeholder="Enter your e-mail..." />
          <button>Subscribe</button>
        </div>
        <div className="first">
          <h3>CONTACT US</h3>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>
        </div>
        <div className="second">
          <h3>mettā muse</h3>
          <ul style={{cursor:'pointer'}}>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
          <div className="social-media">
            <h3>Follow Us</h3>
            <ul style={{cursor:'pointer'}}>
              <li><FaFacebook/></li>
              <li><FaRetweet/></li>
              <li><FaInstagram/></li>
            </ul>
          </div>
        </div>
        <div className="second">
          <h3>Quick Links</h3>
          <ul style={{cursor:'pointer'}}>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
          <h3>Currency</h3>
          <select>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
          </select>
          <p>Transactions will be completed in Euros and a currency reference is available on hover.</p>
        </div>
      </div>  
        
        <p style={{textAlign:'center', backgroundColor:'rgb(238, 249, 239)'}}>Copyright © 2023 mettamuse. All rights reserved.</p>
          
    </footer>
  );
};

export default Footer;