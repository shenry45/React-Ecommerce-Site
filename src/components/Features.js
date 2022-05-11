import React from 'react';

import '../css/features.css';

const Features = () => {
    return (<div className='feat container'>
        <div className='feat-cont'>
            <span>$0</span>
            <p className='feat-title'>Free Shipping</p>
        </div>
        <div className='feat-cont'>
            <span>2 Days</span>
            <p className='feat-title'>Fast Devilery</p>
        </div>
        <div className='feat-cont'>
            <span>USA-based</span>
            <p className='feat-title'>Excellent Support</p>
        </div>
    </div>);
};

export default Features;