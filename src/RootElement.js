import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App.js';
import NavMenu from './components/NavMenu.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';

import ProductsPage from './pages/ProductsPage.js';
import AboutPage from './pages/AboutPage.js';
import HomePage from './pages/HomePage.js';
import CartPage from './pages/CartPage.js';
import CheckoutPage from './pages/CheckoutPage.js';

class rootElement extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      result: [],
      error: null
    }
  }
  
  componentDidMount() {
    fetch(process.env.REACT_APP_REQ_URL, {method: 'GET'})
      .then(res => res.json())
      .then(
        (result) => {
            this.setState({
                isLoaded: true,
                result: result.products
            });
        },
        (error) => {
            this.setState({
                isLoaded: true,
                error
            });
        }
      );
  }

  render() {
    return (
      <BrowserRouter>
        <NavMenu />
        <Header />
        <Routes>
            <Route path="/" element={<App content={<HomePage {...this.state} />} />}/>
            <Route path="products" element={<App content={<ProductsPage {...this.state} />} />} />
            <Route path="about" element={<App content={<AboutPage />} />} />
            <Route path="cart" element={<App content={<CartPage {...this.state} />} />} />
            <Route path="checkout" element={<App content={<CheckoutPage {...this.state} />} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    )
    }
}

// const cards = [
//     {
//       "name": "Johnny",
//       "year": 1874,
//       "hobby": "Interdum et malesuada fames ac ante ipsum primis in faucibus."
//     },
//     {
//       "name": "Debora",
//       "year": 2074,
//       "hobby": "making stuff happen"
//     },
//     {
//       "name": "Hans",
//       "year": 14,
//       "hobby": "Praesent non tellus eu odio molestie venenatis."
//     },
//   ]

export default rootElement;