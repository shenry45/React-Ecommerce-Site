import React from 'react';
import { Link } from 'react-router-dom';

const NavMenu = () => {
    return (
        <nav>
            <img src='/logo.png' alt="logo" height="100%" />
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/about">About</Link>
            <Link to="/cart">Cart</Link>
        </nav>
    )
};

export default NavMenu;