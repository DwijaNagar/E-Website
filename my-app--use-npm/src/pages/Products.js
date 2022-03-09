import React from "react";
import { useEffect, useContext } from "react";
// import { Button } from 'antd';
// import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
// import { Row, Col } from 'antd';
import ShopContext from "../context/shop-context";
import MainNavigation from "./mainNavigation";
import { message, Button } from 'antd';

// import Footer from './Footer';
// //import img from './Images/image3';

import "./Products.css";



  const ProductsPage = props => {
  
  const context = useContext(ShopContext);
  // toast('Hello',{});
  console.log('ShopContext in products--->', context);

  const success = ( product ) => {
    context.addProductToCart( product);
    message.success('Added To Cart');
  };

  useEffect(() => {
      console.log('Context after adding an item-->',context);
  }, []);
  return (
    
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
                  {/* {product.Image} */}
                  <center>
                    <img src={product.Image}  width="160" height="200"/> 
                    <br/> 
                   <h2>{product.title}</h2>
   
                   <h3>-Rs{product.price}  </h3> 
                    {/* <strong>[{product.quantity}]</strong>             */}
                    </center>
                
                 </div>
                  <div>
                   <center>
                     
                      <Button type="primary"
                       onClick={ () => success(product) }
                      >
                        Add to Cart
                      </Button>
                   </center>
                  </div> 
                </li>
              ))}
              <br/><br/>
            </ul>
          </main>
         
          {/* <Footer/> */}
        </React.Fragment>
     
     );
              
};


export default ProductsPage;


 {/* <div>
                    <center>
                    <Button shape="circle"  backgroundColor="blue"
                      onClick={context.addProductToCart.bind(this, product)}
                    >
                      <PlusOutlined />
                   </Button>
                   
                    
          
                 
                    <Button shape="circle"  
                       onClick={context.removeProductFromCart.bind(
                        this,
                        { product, 'quantity': -1 }
                    )}
                  >
                   <MinusOutlined /> 
                  </Button>
                  */}