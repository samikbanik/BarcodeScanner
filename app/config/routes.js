import React from 'react';
import LoginForm from '../components/LoginForm';
import Home from '../components/Home';
import ProductDetails from '../components/ProductDetails';
import Cart from '../components/Cart';

const Routes = {
  Login: {screen: LoginForm},
  Home: {screen: Home},
  ProductDetails: {screen: ProductDetails},
  Cart: {screen: Cart}
};

export default Routes;
