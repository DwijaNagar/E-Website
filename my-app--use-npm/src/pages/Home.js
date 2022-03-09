// import React from "react";

import React, { Component } from 'react';
import { Carousel } from 'antd';
import MainNavigation from './mainNavigation';
import ShopContext from "../context/shop-context";
import img from './Images/image1.jpg';
import img1 from './Images/image2.jpg';
import img2 from './Images/image4.jpg';
import img3 from './Images/image5.jpg';
import img4 from './Images/image6.jpg';
import img5 from './Images/image7.jpg';
//import Footer from './Footer';
import './Products.css';


// class Home extends Component {                                                                                                                                                                                                                                                                                                                                                                                                                   

 
  const HomePage = props => {
    return (
      <ShopContext.Consumer>
        {context => (
          <React.Fragment>
           <MainNavigation
              cartItemNumber={context.cart.reduce((count, curItem) => {
                return count + curItem.quantity;
              }, 0)}
            />
           
  <br/><br/><br/><br/><br/><br/><br/>
      <div>
        <h4 style={{marginTop:-130, fontSize:40, fontFamily:'sans', textAlign:'center'}}>Welcome to E-Website</h4>
        <br/>
         <hr/>
      </div>
      <br/>
       <div>
           <Carousel autoplay style={{
            display: 'block', width: 1337, marginLeft: 70
          }}>
            <div>
              <h3 style={{backgroundImage: `url(${img2})`, height:570, width:1230, zIndex:-1}}>Item 1</h3>
            </div>
                         
            <div>
              <h3 style={{backgroundImage: `url(${img5})`, height:570, width:1230, zIndex:-1}}>Item 2</h3>
            </div>
            
            <div>
               <h3 style={{backgroundImage: `url(${img3})`, height:570, width:1230, zIndex:-1}}>Item 3</h3>
            </div>
               
          </Carousel> 
          </div>
          <br/><br/><br/>
          <div style={{fontSize:43 , fontFamily:'fantasy', wordSpacing:7, letterSpacing:3}}>
         <marquee>Exclusive Offer</marquee>
         </div>

         <div style={{marginLeft:299}}>
             <img src={img} width="360" height="360" alt="cam"/> <nbps/><nbps/><nbps/>
             <img src={img1} width="360" height="330" marginLeft="480" alt="cam"/> <br/><br/><br/>
             <h1 style={{marginLeft:186, color:'blue'}}>Grab the exclusive deals now</h1> 
            <div style={{marginLeft:106}}><img src={img4} width="500" height="360" marginLeft="430" alt="cam"/></div>

        </div>
       
       <br/><br/>
      
       
      
       </React.Fragment>
      )}
    </ShopContext.Consumer>
   
   );
   

  
  }


export default HomePage;



{/* export const Home = () => {
  return (
    <div>
      
    </div>
  );
}; */}


// https://github.com/codebucks27/React-responsive-navbar/blob/main/src/components/NavBar.js