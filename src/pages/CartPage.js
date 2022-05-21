import React from 'react';

import CartCard from '../components/CartCard.js';
import CartShipping from '../components/CartShipping.js';

import '../css/cart.css';

const cart = JSON.parse(localStorage.getItem('cart'));

class CartPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: cart
        }
        this.removeItemFromCart = this.removeItemFromCart.bind(this);
    }

    removeItemFromCart(e) {
        //remove item from local storage
        let cart = JSON.parse(localStorage.getItem('cart'));
        cart = cart.filter(el => el !== e.target.id);
        localStorage.setItem('cart', JSON.stringify(cart));

        //set new state list
        const newCartList = this.state.cart.filter(itemID => itemID !== e.target.id);
        
        this.setState({
            cart: newCartList
        });
    }

    render() {
        return <section id='cart' className='container'>
            <h1>Cart</h1>
            <div className='cart-cont'>
                <div>
                {
                    this.state.cart.length === 0 || this.state.cart === undefined ?
                        <p>No products found in your cart!</p> :
                        this.props.result.map(el => {
                            // return product card if match in cart
                            return this.state.cart.find(id => id === el.id) !== undefined ? <CartCard key={el.id} card={el} removeItemFromCart={this.removeItemFromCart} /> : ''
                        })
                }
                </div>
                <CartShipping />
            </div>
        </section>
    }
}

export default CartPage;