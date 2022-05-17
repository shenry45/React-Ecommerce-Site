import React from 'react';

import '../css/cardstack.css';

const CardStack = (props) => {
    return <div className="card-stack">
        {
            /*props.error !== null ?
            <div>{props.error}</div> : ''*/
        }
        {
            props.result && props.result.length > 0 ? 
            props.result.map(card =>
                <div key={card.id} className={`card ${card.visibility ? card.visibility : ''}`}>
                    {card.image_url ? <img src={card.image_url} alt="logo" width="auto" height="100%"/> : <></>}
                    <div>
                        <h2>{card.product_name !== "" ? card.product_name : card["category_properties"]["ciqual_food_name:en"]}</h2>
                        {/* <p>{card.ingredients_text_en}</p> */}
                        <button id={card.id} onClick={addToCart}>Add to Cart</button>
                    </div>
                </div>
            ) : <p className="card-placeholder">Your products are loading!</p>
        }
    </div>
}

function addToCart(e) {
    if (!localStorage.getItem('cart')) {
        localStorage.setItem('cart', JSON.stringify([e.target.id]));
        return;
    }

    const currentCart = JSON.parse(localStorage.getItem('cart'));
    
    // only add item to cart if it is unique
    if (currentCart.find((product) => e.target.id === product) === undefined) {
        localStorage.setItem('cart', JSON.stringify([...currentCart, e.target.id]));
    }
    
}

export default CardStack;
