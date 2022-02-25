import React, { useState, useReducer } from "react";
import ShopContext from "./shop-context";
import { shopReducer, ADD_PRODUCT, REMOVE_PRODUCT } from "./reducers";
// import img from '../pages/Images/image1.jpg';

const GlobalState = props => {
  const products = [
    { id: "p1", title: "Oppo", price: 20999 },
    { id: "p2", title: "Realme", price: 13000 },
    { id: "p3", title: "Vivo", price: 22000 },
    { id: "p4", title: "Nokia", price: 29000 },
    { id: "p5", title: "Apple", price: 220000 },
    { id: "p4", title: "Oneplus", price: 39999 }
  ];
  // const [cart, setCart] = useState([]);
  const [cartState, dispatch] = useReducer(shopReducer, { cart: [] });

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
        products: products,
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
