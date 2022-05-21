import React from 'react';

class CartShipping extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            calculateRates: true
        }
        this.updateRateFields = this.updateRateFields.bind(this);
    }

    updateRateFields(e) {
        e.preventDefault();
        this.setState({calculateRates: !this.state.calculateRates});
    }

    render() {
        return (
        <div className='cart-shipping-cont'>
            <h3>Shipping Rates</h3>
            <form className={this.state.calculateRates ? 'cart-ship-post-code' : 'cart-ship-post-code hidden'}>
                <div>
                    <label htmlFor='ship-calc-post-code'>Postal Code</label>
                    <input name="ship-calc-post-code" maxLength="7" minLength="5" required></input>
                </div>
                <button type="submit" onClick={this.updateRateFields}>Calculate Shipping</button>
            </form>
            <form className={!this.state.calculateRates ? 'cart-shipping' : 'cart-shipping hidden'}>
                <input type="radio" id='fedex' name='carrier' value='fedex' />
                <label htmlFor="fedex">${Math.trunc(Math.random()*20)} - FedEx Ground</label><br />
                <input type="radio" id='usps' name='carrier' value='usps' />
                <label htmlFor="usps">${Math.trunc(Math.random()*50)} - USPS Priority Mail</label><br />
                <input type="radio" id='ups' name='carrier' value='ups' />
                <label htmlFor="ups">${Math.trunc(Math.random()*1000)} - UPS Next Day Air</label><br />
                <button onClick={this.updateRateFields}>Change Shipping Info</button>
            </form>
            <hr />
            <button className='checkout'>Checkout</button>
        </div>
        )
    }
};

export default CartShipping;