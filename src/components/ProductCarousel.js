import React from 'react';

import '../css/carousel.css';

const ProductCarousel = (props) => {
    return (
        <div className='carousel'>
            {
                props.result && props.result.length > 0 ? 
                props.result.map(card =>
                    <div key={card.id} className="card">
                        {card.image_url ? <img src={card.image_url} alt="logo" width="auto" height="100%" className='carousel-img' /> : <></>}
                        <p>{card.product_name !== "" ? card.product_name : card["category_properties"]["ciqual_food_name:en"]}</p>
                        {/* <p>{card.ingredients_text_en}</p> */}
                        {/*<button id={card.id}>Add to Cart</button>*/}
                    </div>
                ) : "Products are loading..."
            }
        </div>
    )
}

export default ProductCarousel;