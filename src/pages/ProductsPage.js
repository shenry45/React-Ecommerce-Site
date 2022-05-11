import React from 'react';
import CardStack from '../components/CardStack';

const ProductsPage = (props) => {
    return (
        <section className='container'>
            <CardStack {...props}/>
        </section>
    )
};

export default ProductsPage;