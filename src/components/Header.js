import React from 'react';

import CartIcon from './CartIcon';

const Header = () => {
    return (
        <header className="App-header">
            <CartIcon />
            <h1>All the Products in stock</h1>
            <p>Find everything you could look for in your life in one convenient place!</p>
        </header>
    )
};

export default Header;