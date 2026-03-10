import React, { useContext, useState } from 'react';
import "./Navbar.css";
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import { FaMagnifyingGlass, FaBasketShopping, FaUserLarge, FaBagShopping, FaArrowRightLong } from "react-icons/fa6";
import logoHeader from "../../assets/icons/logo-header.png";

const Navbar = ({ setShowLogin }) => {

    const [menu, setMenu] = useState("home");
    const { getTotalCartAmount, token, setToken } = useContext(StoreContext);

    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
        setToken("");
        navigate("/");
    }

    return (
        <div className='navbar'>
            <Link to="/">
                {/* <p>Amora</p> */}
                <img src={logoHeader} alt='logo' className='logo' />
            </Link>
            <ul className='navbar-menu'>
                <Link to='/' onClick={() => setMenu("home")} className={menu === 'home' ? "active" : ""}>home</Link>
                <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === 'menu' ? "active" : ""}>menu</a>
                <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === 'mobile-app' ? "active" : ""}>mobile - app</a>
                <a href='#footer' onClick={() => setMenu("contact-us")} className={menu === 'contact-us' ? "active" : ""}>contact us</a>
            </ul>
            <div className="navbar-right">
                <FaMagnifyingGlass />
                {/* <img src="search" alt="search" /> */}
                <div className="navbar-search-icon">
                    <Link to='/cart'>
                        <FaBasketShopping />
                        {/* <img src="basket" alt="basket icon" /> */}
                    </Link>
                    <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
                </div>
                {!token ? <button onClick={() => setShowLogin(true)}>sign in</button>
                    : <div className='navbar-profile'>
                        <FaUserLarge />
                        {/* <img src="profileicon" alt="profileicon" /> */}
                        <ul className="nav-profile-dropdown">
                            <li onClick={() => navigate("/myorders")}>
                                {/* <img src="bagicon" alt="bagicon" /> */}
                                <FaBagShopping />
                                <p>Orders</p>
                            </li>
                            <hr />
                            <li onClick={logout}>
                                {/* <img src="logout" alt="logout" /> */}
                                <FaArrowRightLong />
                                <p>Logout</p></li>
                        </ul>
                    </div>}

            </div>
        </div>
    )
}

export default Navbar;
