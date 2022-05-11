import React from 'react';

const CartCard = (props) => {    
    return (
        <div className='cart-card'>
            <div className='cart-card-button'>
                <button id={props.card.id} onClick={props.removeItemFromCart}>X</button>
            </div>
            <div className='cart-card-info'>
                <h2>{props.card.product_name !== "" ? props.card.product_name : props.card["category_properties"]["ciqual_food_name:en"]}</h2>
                <p>{props.card.id}</p>
            </div>
        </div>
    )
};

export default CartCard;