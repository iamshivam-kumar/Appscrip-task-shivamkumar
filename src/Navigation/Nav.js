import React, { useState } from 'react';
import { FiHeart } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import "./Nav.css";
import { Link } from 'react-router-dom';

const Nav = ({ handleInputChange, query }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <nav>
      <div className="nav-container">
        {isSearchOpen && (
          <input
            className="search-input"
            type="text"
            onChange={handleInputChange}
            value={query}
            placeholder="Enter your search shoes."
          />
        )}
      </div>
      
      <Link to="/">Shop</Link>
      <Link to="/">Skills</Link>
      <Link to="/">About</Link>
      <Link to="/">Contact Us</Link>
      <div className="profile-container">
        <a>
        <IoIosSearch className="nav-icons" onClick={toggleSearch} />
        </a>
        <a href="#">
          <FiHeart className="nav-icons" />
        </a>
        <a href="">
          <AiOutlineShoppingCart className="nav-icons" />
        </a>
        <a href="">
          <AiOutlineUserAdd className="nav-icons" />
        </a>
      </div>
    </nav>
  );
};

export default Nav;
