import React from 'react';
import { Link } from 'react-router-dom';

const CartIcon = () => {
    return (
        <Link to="cart" id='cart-icon'>Cart</Link>
    )
};

export default CartIcon;