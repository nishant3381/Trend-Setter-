import React, { useState } from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';
import cart_icon from '../assets/cart_icon.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className='bar'>
            <button className='menu-toggle' onClick={toggleMenu} style={{display: window.innerWidth <= 768 ? 'block' : 'none'}}>
                {menuOpen ? 'X' : '☰'}
            </button>
            <div className='nav-logo'>
                <img src={logo} alt='logo'/>
                <p>TREND</p><p1>SETTER</p1>
            </div>
            <div className={`nav-menu ${menuOpen ? 'open' : ''}`}>
                <li onClick={() => { setMenuOpen(false); }}><Link to='/'>SHOP</Link></li>
                <li onClick={() => { setMenuOpen(false); }}><Link to='/mens'>MEN</Link></li>
                <li onClick={() => { setMenuOpen(false); }}><Link to='/womens'>WOMEN</Link></li>
                <li onClick={() => { setMenuOpen(false); }}><Link to='/kids'>KIDS</Link></li>
            </div>
            <div className="nav-login-cart">
                <Link to='/logins'><button>Login</button></Link>
                <Link to='/cart'><img src={cart_icon} alt='cart' /></Link>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    );
};

export default Navbar;
