// import React from "react";

import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Card } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import imagenew from './Images/image1.jpg';

const { Meta } = Card;

class Mobile extends Component {                                                                                                                                                                                                                                                                                                                                                                                                                   
   
 
  render() {

    return(
        
        <div>
            <h6 style={{marginTop: -100, fontFamily:'Sans-serif', fontSize:27}}>Oppo (Prism Black, 128 GB)  (6 GB RAM)<br/>
Brand:oppo</h6>
          <Card
    style={{ width: 430, marginLeft: 110}}
    cover={
      <img
        alt="example"
        src={imagenew}
        
      />
      
    }
    // actions={[
    //   <SettingOutlined key="setting" />,
    //   <EditOutlined key="edit" />,
    //   <EllipsisOutlined key="ellipsis" />,
    // ]}
  >
    

    <Meta
     
      title="Mobile Phone"
      description="6 GB RAM | 128 GB ROM | Expandable Upto 1 TB
      16.76 cm (6.6 inch) Full HD+ Display
      50MP + 2MP + 2MP | 16MP Front Camera
      5000 mAh Lithium ion Battery
      Qualcomm Snapdragon 680 (SM6225) Processor"
      
    />
 
 <h4 style={{ marginLeft:700, fontSize:27, marginTop:-290, border:'solid', borderWidth:4, 
width:193 }}>
      <a href='/cart'>Add to cart</a></h4>
<br/>
      <h4 style={{ marginLeft:700, fontSize:27, marginTop:7, border:'solid',  
width:187 }}>
      <a href='/cart'>Buy Now</a></h4>


  </Card>
  <br/><br/>
  <h5 style={{ marginLeft:500, fontSize:26, marginTop:0, border:'dotted', borderWidth:4, 
width:330}}>
  <a href='/'>Continue Shopping
  </a>
  </h5>
  <br/>
   </div>
    
    );

  }
}

export default Mobile;



{/* export const Home = () => {
  return (
    <div>
      
    </div>
  );
}; */}


// https://github.com/codebucks27/React-responsive-navbar/blob/main/src/components/NavBar.js