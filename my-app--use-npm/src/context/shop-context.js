import React from "react";
//import img from '../pages/Images/image1.jpg';

export default React.createContext({
  products: [
    {
      id: "p1",
      title: "Oppo",
      price: 20999 
      
    },
   
     { 
       id: "p2", 
       title: "Realme",
       price: 13000 
    },
    { 
      id: "p3", 
      title: "Vivo", 
      price: 22000 
    },

    { 
      id: "p4", 
      title: "Nokia", 
      price: 29000 
    },

    { 
      id: "p5", 
      title: "Apple", 
      price: 220000 
    },

    
    { 
      id: "p6", 
      title: "Oneplus", 
      price: 39999 
    } ],
  
    cart: [],
    // product: [],
  addProductToCart: product => {},
  removeProductFromCart: productId => {}
});
