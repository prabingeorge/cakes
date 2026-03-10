import React from 'react';
import './Sidebar.css';
import { NavLink } from 'react-router-dom';
import { FaPlus, FaRectangleList, FaCartShopping } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar-options">
        <NavLink to='/add' className="sidebar-option">
          {/* <img src="addicon" alt="addicon" /> */}
          <FaPlus />
          <p>Add Items</p>
        </NavLink>
        <NavLink to='/list' className="sidebar-option">
          {/* <img src="ordericon" alt="ordericon" /> */}
          <FaRectangleList />
          <p>List Items</p>
        </NavLink>
        <NavLink to='/orders' className="sidebar-option">
          {/* <img src="ordericon" alt="ordericon" /> */}
          <FaCartShopping />
          <p>Orders</p>
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar
