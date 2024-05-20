import React, { useState } from 'react';
import Category from './Category/Category';
import Price from './Price/Price';
import './Sidebar.css';
import { FiAlignJustify } from 'react-icons/fi';
import { IoMenu } from 'react-icons/io5';

const Sidebar = ({ handleChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
      </div>
      <div className="menu-icon" onClick={toggleSidebar}>
       <IoMenu/>
      </div>
    </>
  );
};

export default Sidebar;
