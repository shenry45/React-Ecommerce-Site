import React from 'react';

import '../css/checkoutpage.css';

class CheckoutPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            billingFirstName: '',
            billingLastName: '',
            billingCompany: '',
            billingAddress: '',
            billingAddress2: '',
            billingCity: '',
            billingState: 'AL',
            billingPostalCode: '',
            billingPhone: '',
            billingEmail: '',
            shippingFirstName: '',
            shippingLastName: '',
            shippingCompany: '',
            shippingAddress: '',
            shippingAddress2: '',
            shippingCity: '',
            shippingState: 'AL',
            shippingPostalCode: '',
            notes: '',
            copyBilltoShip: false
        }

        this.FormChangeHandler = this.FormChangeHandler.bind(this);
        this.CopyBillingToShipping = this.CopyBillingToShipping.bind(this);
    }
    
    FormChangeHandler(e) {
        let state = Object.assign({}, this.state);

        state[`${e.target.name}`] = e.target.value;

        this.setState(state);
    }

    CopyBillingToShipping(e) {
        // console.log(e);

        if (!e.target.checked) {
            this.setState((state) => {
                return {
                    ...state,
                    copyBilltoShip: false
                }
            });
            return;
        }

        let state = Object.assign({}, this.state);

        for (let field in state) {
            if (state.hasOwnProperty(field) && field[0] === "s") {
                const identifier = field.split('shipping');
                state[field] = state[`billing${identifier[1]}`];
            }
        }

        this.setState({
            ...state,
            copyBilltoShip: true
        });
    }

    render() {
        return (
            <section id="checkout" className='container'>
                <h1>Checkout</h1>
                <form>
                    <div className='checkout-col'>
                        <h2>Billing Address</h2>
                        <hr />
                        <div>
                            <div className='stacked'>
                                <label htmlFor="billingFirstName">First Name</label>
                                <input type="text" maxLength="15" name="billingFirstName" onChange={this.FormChangeHandler} required value={this.state.billingFirstName}/>
                            </div>
                            <div className='stacked'>
                                <label htmlFor="billingLastName">Last Name</label>
                                <input type="text" maxLength="15" name="billingLastName" onChange={this.FormChangeHandler} required />
                            </div>
                        </div>
                        <label htmlFor="billingCompany">Company</label>
                        <input type="text" maxLength="50" name="billingCompany" onChange={this.FormChangeHandler} value={this.state.billingCompany} />
                        <label htmlFor="billingAddress">Street Address</label>
                        <input type="text" maxLength="45" name="billingAddress" onChange={this.FormChangeHandler} value={this.state.billingAddress} required />
                        <label htmlFor="billingAddress2">Suite / Unit</label>
                        <input type="text" maxLength="15" name="billingAddress2" onChange={this.FormChangeHandler} value={this.state.billingAddress2} />
                        <label htmlFor="billingState">State</label>
                        <select name="billingState" onChange={this.FormChangeHandler}>
                            <option value="AL">Alabama</option>
                            <option value="AK">Alaska</option>
                            <option value="AZ">Arizona</option>
                            <option value="AR">Arkansas</option>
                            <option value="CA">California</option>
                            <option value="CO">Colorado</option>
                            <option value="CT">Connecticut</option>
                            <option value="DE">Delaware</option>
                            <option value="DC">District Of Columbia</option>
                            <option value="FL">Florida</option>
                            <option value="GA">Georgia</option>
                            <option value="HI">Hawaii</option>
                            <option value="ID">Idaho</option>
                            <option value="IL">Illinois</option>
                            <option value="IN">Indiana</option>
                            <option value="IA">Iowa</option>
                            <option value="KS">Kansas</option>
                            <option value="KY">Kentucky</option>
                            <option value="LA">Louisiana</option>
                            <option value="ME">Maine</option>
                            <option value="MD">Maryland</option>
                            <option value="MA">Massachusetts</option>
                            <option value="MI">Michigan</option>
                            <option value="MN">Minnesota</option>
                            <option value="MS">Mississippi</option>
                            <option value="MO">Missouri</option>
                            <option value="MT">Montana</option>
                            <option value="NE">Nebraska</option>
                            <option value="NV">Nevada</option>
                            <option value="NH">New Hampshire</option>
                            <option value="NJ">New Jersey</option>
                            <option value="NM">New Mexico</option>
                            <option value="NY">New York</option>
                            <option value="NC">North Carolina</option>
                            <option value="ND">North Dakota</option>
                            <option value="OH">Ohio</option>
                            <option value="OK">Oklahoma</option>
                            <option value="OR">Oregon</option>
                            <option value="PA">Pennsylvania</option>
                            <option value="RI">Rhode Island</option>
                            <option value="SC">South Carolina</option>
                            <option value="SD">South Dakota</option>
                            <option value="TN">Tennessee</option>
                            <option value="TX">Texas</option>
                            <option value="UT">Utah</option>
                            <option value="VT">Vermont</option>
                            <option value="VA">Virginia</option>
                            <option value="WA">Washington</option>
                            <option value="WV">West Virginia</option>
                            <option value="WI">Wisconsin</option>
                            <option value="WY">Wyoming</option>
                        </select>
                        <label htmlFor="billingPostalCode">Postal Code</label>
                        <input type="text" maxLength="7" name="billingPostalCode" onChange={this.FormChangeHandler} value={this.state.billingPostalCode} required />
                        <div>
                            <div className='stacked'>
                                <label htmlFor="billingPhone">Phone Number</label>
                                <input type="tel" maxLength="7" name="billingPhone" onChange={this.FormChangeHandler} value={this.billingPhone} required />
                            </div>
                            <div className='stacked'>
                                <label htmlFor="billingEmail">Email Address</label>
                                <input type="email" maxLength="40" name="billingEmail" onChange={this.FormChangeHandler} value={this.state.billingEmail} required />
                            </div>
                        </div>
                    </div>
                    <div className='checkout-col '>
                        <h2>Shipping Address</h2>
                        <hr />
                        <div className='shipping-da'>
                            <input type="checkbox" name="same-as-billing" id="same-as-billing" onChange={this.CopyBillingToShipping} />
                            <label htmlFor="same-as-billing">Same as billing address</label>
                        </div>
                        <div className={`${this.state.copyBilltoShip ? 'hidden' : ''} shipping-cont`}>
                            <div>
                                <div className='stacked'>
                                    <label htmlFor="shippingFirstName">First Name</label>
                                    <input type="text" maxLength="15" name="shippingFirstName" value={this.state.shippingFirstName} onChange={this.FormChangeHandler} required />
                                </div>
                                <div className='stacked'>
                                    <label htmlFor="shippingLastName">Last Name</label>
                                    <input type="text" maxLength="15" name="shippingLastName" value={this.state.shippingLastName} onChange={this.FormChangeHandler} required />
                                </div>
                            </div>
                            <label htmlFor="shippingCompany">Company</label>
                            <input type="text" maxLength="50" name="shippingCompany" value={this.state.shippingCompany} onChange={this.FormChangeHandler} />
                            <label htmlFor="shippingAddress">Street Address</label>
                            <input type="text" maxLength="45" name="shippingAddress" value={this.state.shippingAddress} onChange={this.FormChangeHandler} required />
                            <label htmlFor="shippingAddress2">Suite / Unit</label>
                            <input type="text" maxLength="15" name="shippingAddress2" value={this.state.shippingAddress2} onChange={this.FormChangeHandler} />
                            <label htmlFor="shippingState">State</label>
                            <select name="shippingState" value={this.state.shippingState} onChange={this.FormChangeHandler}>
                                <option value="AL">Alabama</option>
                                <option value="AK">Alaska</option>
                                <option value="AZ">Arizona</option>
                                <option value="AR">Arkansas</option>
                                <option value="CA">California</option>
                                <option value="CO">Colorado</option>
                                <option value="CT">Connecticut</option>
                                <option value="DE">Delaware</option>
                                <option value="DC">District Of Columbia</option>
                                <option value="FL">Florida</option>
                                <option value="GA">Georgia</option>
                                <option value="HI">Hawaii</option>
                                <option value="ID">Idaho</option>
                                <option value="IL">Illinois</option>
                                <option value="IN">Indiana</option>
                                <option value="IA">Iowa</option>
                                <option value="KS">Kansas</option>
                                <option value="KY">Kentucky</option>
                                <option value="LA">Louisiana</option>
                                <option value="ME">Maine</option>
                                <option value="MD">Maryland</option>
                                <option value="MA">Massachusetts</option>
                                <option value="MI">Michigan</option>
                                <option value="MN">Minnesota</option>
                                <option value="MS">Mississippi</option>
                                <option value="MO">Missouri</option>
                                <option value="MT">Montana</option>
                                <option value="NE">Nebraska</option>
                                <option value="NV">Nevada</option>
                                <option value="NH">New Hampshire</option>
                                <option value="NJ">New Jersey</option>
                                <option value="NM">New Mexico</option>
                                <option value="NY">New York</option>
                                <option value="NC">North Carolina</option>
                                <option value="ND">North Dakota</option>
                                <option value="OH">Ohio</option>
                                <option value="OK">Oklahoma</option>
                                <option value="OR">Oregon</option>
                                <option value="PA">Pennsylvania</option>
                                <option value="RI">Rhode Island</option>
                                <option value="SC">South Carolina</option>
                                <option value="SD">South Dakota</option>
                                <option value="TN">Tennessee</option>
                                <option value="TX">Texas</option>
                                <option value="UT">Utah</option>
                                <option value="VT">Vermont</option>
                                <option value="VA">Virginia</option>
                                <option value="WA">Washington</option>
                                <option value="WV">West Virginia</option>
                                <option value="WI">Wisconsin</option>
                                <option value="WY">Wyoming</option>
                            </select>
                            <label htmlFor="shippingPostalCode">Postal Code</label>
                            <input type="text" maxLength="7" name="shippingPostalCode" value={this.state.shippingPostalCode} onChange={this.FormChangeHandler} required />
                        </div>
                        <div className='notes-cont'>
                            <label htmlFor="notes">Notes</label>
                            <textarea id="notes" name="notes"></textarea>
                        </div>
                    </div>
                </form>
                <table className="checkout-products">
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Fruit Snacks</td>
                            <td>$20.00</td>
                            <td><input type="number" id="quantity" name="quantity" min="1" max="99999" defaultValue="1"/></td>
                            <td>$20.00</td>
                        </tr>
                        <tr>
                            <td>Fruit Snacks</td>
                            <td>$20.00</td>
                            <td><input type="number" min="1" max="99999" defaultValue="1"/></td>
                            <td>$20.00</td>
                        </tr>
                        <tr>
                            <td>Fruit Snacks</td>
                            <td>$20.00</td>
                            <td><input type="number" min="1" max="99999" defaultValue="1"/></td>
                            <td>$20.00</td>
                        </tr>
                        <tr>
                            <td>Fruit Snacks</td>
                            <td>$20.00</td>
                            <td><input type="number" min="1" max="99999" defaultValue="1"/></td>
                            <td>$20.00</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="3">Product Total</td>
                            <td>$100.00</td>
                        </tr>
                        <tr>
                            <td colSpan="3">Shipping</td>
                            <td>$50.00</td>
                        </tr>
                        <tr>
                            <td colSpan="3">Sales Tax (7.6%)</td>
                            <td>$7.60</td>
                        </tr>
                        <tr>
                            <td colSpan="3">Total</td>
                            <td>$157.60</td>
                        </tr>
                    </tfoot>
                </table>
                <div className="terms">
                    <input type="checkbox" name="tandc" id="tandc" />
                    <label htmlFor="tandc">Accept our Terms & Conditions</label>
                </div>
                <button onClick={e => e.preventDefault()}>Submit Order</button>
            </section>
        )
    }
};

export default CheckoutPage;