import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='container'>
            <div className='nav'>
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/about">About</Link>
            </div>
            <div></div>
            <div>
                <p><strong>Contact Us</strong></p>
                <p>Phone: <a href="tel:0">855-888-8888</a><br />
                Email: <a href="mailto:a@a.a">react@project.org</a></p>
            </div>
        </footer>
    )
};

export default Footer;