import React, { useContext, useEffect } from "react";
// import { connect } from 'react-redux';

import ShopContext from "../context/shop-context";
import MainNavigation from "./mainNavigation";
import Footer  from "./Footer";
// import { removeProductFromCart } from '../store/actions';
import "./cart.css";

const CartPage = props => {
  const context = useContext(ShopContext);

  useEffect(() => {
    console.log(context);
  }, []);

  return (
    <React.Fragment>
      <MainNavigation
        cartItemNumber={context.cart.reduce((count, curItem) => {
          return count + curItem.quantity;
        }, 0)}
      />
      <main className="cart">
        {context.cart.length <= 0 && <p>No Item in the Cart!</p>}
        <ul>
          {context.cart.map(cartItem => (
            <li key={cartItem.id}>
              <div>
                <strong>{cartItem.title}</strong> - Rs {cartItem.price} (
                {cartItem.quantity})
              </div>
              <div>
                <button
                  onClick={context.removeProductFromCart.bind(
                    this,
                    cartItem.id
                  )}
                >
                  Remove from Cart
                </button>
              </div>
            </li>
          ))}
        </ul>
      </main>
      <br/>
      <h3>
      <a href="/">Continue Shopping</a>
      </h3>
     
      <Footer/>
    </React.Fragment>
  );
};

export default CartPage;



// import React, { createContext, useReducer, useEffect } from "react";
// import "./cart.css";
// import { products } from "./products";
// import ContextCart from "./ContextCart";
// import { reducer } from "./reducer";

// export const CartContext = createContext();

// const initialState = {
//   item: products,
//   totalAmount: 0,
//   totalItem: 0,
// };

// const Cart = () => {
//   // const [item, setItem] = useState(products);
//   const [state, dispatch] = useReducer(reducer, initialState);

//   // to delete the indv. elements from an Item Cart
//   const removeItem = (id) => {
//     return dispatch({
//       type: "REMOVE_ITEM",
//       payload: id,
//     });
//   };

//   // clear the cart
//   const clearCart = () => {
//     return dispatch({ type: "CLEAR_CART" });
//   };

//   // increment the item
//   const increment = (id) => {
//     return dispatch({
//       type: "INCREMENT",
//       payload: id,
//     });
//   };

//   // decrement the item
//   const decrement = (id) => {
//     return dispatch({
//       type: "DECREMENT",
//       payload: id,
//     });
//   };

//   // we will use the useEffect to update the data
//   useEffect(() => {
//     dispatch({ type: "GET_TOTAL" });
//     // console.log("Awesome");
//   }, [state.item]);

//   return (
//     <CartContext.Provider
//       value={{ ...state, removeItem, clearCart, increment, decrement }}>
//       <ContextCart />
//     </CartContext.Provider>
//   );
// };

// export default Cart;



