import React from "react";
// import { connect } from 'react-redux';
import { ADD_PRODUCT, REMOVE_PRODUCT } from "./";
import ShopContext from "../context/shop-context";
import MainNavigation from "./mainNavigation";
import Footer from './Footer';
//import { addProductToCart } from '../store/actions';
import "./Products.css";

const ProductsPage = props => {
  return (
    <ShopContext.Consumer>
      {context => (
        <React.Fragment>
         <MainNavigation
            cartItemNumber={context.cart.reduce((count, curItem) => {
              return count + curItem.quantity;
            }, 0)}
          />
          <main className="products">
            <ul>
              {context.products.map(product => (
                <li key={product.id}>
                  <div>
                    <strong>{product.title}</strong>  -Rs {product.price} ({product.stock})
                  </div>
                  <div>
                    <button
                      onClick={context.addProductToCart.bind(this, product,stock)}
                    >
                       
                      Add to Cart
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </main>
          <br/><br/>
          <Footer/>
        </React.Fragment>
      )}
    </ShopContext.Consumer>
  );
};

export default ProductsPage;