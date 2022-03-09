import React from "react";
//import img from '../pages/Images/image1.jpg';

export default React.createContext({ 
  products: [], 
  cart: [],
  addProductToCart: product => {},
  removeProductFromCart: productId => {}
});
