import React, { useState, useReducer } from "react";
import ShopContext from "./shop-context";
import { shopReducer, ADD_PRODUCT, REMOVE_PRODUCT } from "./reducers";
import mob from "../pages/Images/mob.png";
import mob2 from "../pages/Images/mob2.jpg";
import mob3 from "../pages/Images/mob3.png";
import mob4 from "../pages/Images/mob4.jpg";
import mob5 from "../pages/Images/mob5.png";
import mob6 from "../pages/Images/mob6.jpg";
import mob7 from "../pages/Images/mob7.jpg";
import mob8 from "../pages/Images/mob8.png";
// import img from '../pages/Images/image1.jpg';

const GlobalState = props => {
  const products = [
    { id: "p1", Image: mob, title: "Oppo", price: 20999 }, 
    { id: "p3", Image: mob2, title: "Vivo", price: 22000 },
    { id: "p4", Image: mob3, title: "Nokia", price: 29000 },
    { id: "p5", Image: mob4, title: "Apple", price: 90000 },
    { id: "p6", Image: mob5, title: "Oneplus", price: 40999 },
    { id: "p7", Image: mob7, title: "Samsung", price: 30000 },
    { id: "p8", Image: mob8, title: "Micromax", price: 25000 },
    { id: "p9", Image: mob6, title: "Techno", price: 21000 }
   
  ];
  
  // const [cart, setCart] = useState([]);
  const [cartState, dispatch] = useReducer(shopReducer, { cart: [], products });
//  const [productState, dispatch] = useReducer(shopReducer, { products : [] });

  const addProductToCart = product => {
    setTimeout(() => {
      // setCart(updatedCart);
      dispatch({ type: ADD_PRODUCT, product: product });
    }, 700);
  };

  const removeProductFromCart = productId => {
    setTimeout(() => {
      // setCart(updatedCart);
      dispatch({ type: REMOVE_PRODUCT, productId: productId });
    }, 700);
  };

  return (
    <ShopContext.Provider
      value={{
        products: cartState.products,
        cart: cartState.cart,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
};

export default GlobalState;
