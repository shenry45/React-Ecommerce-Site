import React from 'react';

import '../css/checkoutpage.css';

const CheckoutPage = () => {
    return (
        <section id="checkout" className='container'>
            <h1>Checkout</h1>
            <form>
                <div className='billing'>
                    <h2>Billing Address</h2>
                    <hr />
                    <div>
                        <div className='stacked'>
                            <label htmlFor="billing-firstname">First Name</label>
                            <input type="text" maxLength="15" name="firstname" required />
                        </div>
                        <div className='stacked'>
                            <label htmlFor="billing-lastname">Last Name</label>
                            <input type="text" maxLength="15" name="lastname" required />
                        </div>
                    </div>
                    <label htmlFor="billing-company">Company</label>
                    <input type="text" maxLength="50" name="billing-company" />
                    <label htmlFor="billing-address">Street Address</label>
                    <input type="text" maxLength="45" name="billing-address" required />
                    <label htmlFor="billing-unit">Suite / Unit</label>
                    <input type="text" maxLength="15" name="billing-unit" />
                    <label htmlFor="billing-state">State</label>
                    <select name="billing-state">
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
                    <label htmlFor="billing-post">Postal Code</label>
                    <input type="text" maxLength="7" name="billing-post" required />
                    <div>
                        <div className='stacked'>
                            <label htmlFor="billing-phone">Phone Number</label>
                            <input type="tel" maxLength="7" name="billing-phone" required />
                        </div>
                        <div className='stacked'>
                            <label htmlFor="billing-email">Email Address</label>
                            <input type="email" maxLength="40" name="billing-email" required />
                        </div>
                    </div>
                </div>
                <div className='billing'>
                    <h2>Shipping Address</h2>
                    <hr />
                    <div>
                        <input type="checkbox" name="same-as-billing" />
                        <label htmlFor="same-as-billing">Same as billing address</label>
                    </div>
                    <div>
                        <div className='stacked'>
                            <label htmlFor="billing-firstname">First Name</label>
                            <input type="text" maxLength="15" name="firstname" required />
                        </div>
                        <div className='stacked'>
                            <label htmlFor="billing-lastname">Last Name</label>
                            <input type="text" maxLength="15" name="lastname" required />
                        </div>
                    </div>
                    <label htmlFor="billing-company">Company</label>
                    <input type="text" maxLength="50" name="billing-company" />
                    <label htmlFor="billing-address">Street Address</label>
                    <input type="text" maxLength="45" name="billing-address" required />
                    <label htmlFor="billing-unit">Suite / Unit</label>
                    <input type="text" maxLength="15" name="billing-unit" />
                    <label htmlFor="billing-state">State</label>
                    <select name="billing-state">
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
                    <label htmlFor="billing-post">Postal Code</label>
                    <input type="text" maxLength="7" name="billing-post" required />
                    <div>
                        <div className='stacked'>
                            <label htmlFor="billing-phone">Phone Number</label>
                            <input type="tel" maxLength="7" name="billing-phone" required />
                        </div>
                        <div className='stacked'>
                            <label htmlFor="billing-email">Email Address</label>
                            <input type="email" maxLength="40" name="billing-email" required />
                        </div>
                    </div>
                </div>
            </form>
        </section>
    )
};

export default CheckoutPage;