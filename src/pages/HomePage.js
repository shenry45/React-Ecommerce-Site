import React from 'react';

import Features from '../components/Features.js';
import ProductCarousel from '../components/ProductCarousel.js';

const HomePage = (props) => {
    return (
        <section>
            <ProductCarousel result={props.result} />
            <Features />
        </section>
    )
};

export default HomePage;