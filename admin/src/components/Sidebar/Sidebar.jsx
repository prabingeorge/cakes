import React from 'react';
import './Sidebar.css';
import { NavLink } from 'react-router-dom';
import { assets } from '../../assets/assets';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar-options">
        <NavLink to='/menu-add' className="sidebar-option">
          <img src={assets.add_icon} alt="addicon" />
          <p>Add Menus</p>
        </NavLink>
        <NavLink to='/menu-list' className="sidebar-option">
          <img src={assets.order_icon} alt="ordericon" />
          <p>Menu Items</p>
        </NavLink>
        <NavLink to='/add' className="sidebar-option">
          <img src={assets.add_icon} alt="addicon" />
          <p>Add Items</p>
        </NavLink>
        <NavLink to='/list' className="sidebar-option">
          <img src={assets.order_icon} alt="ordericon" />
          <p>List Items</p>
        </NavLink>
        <NavLink to='/orders' className="sidebar-option">
          <img src={assets.order_icon} alt="ordericon" />
          <p>Orders</p>
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar
