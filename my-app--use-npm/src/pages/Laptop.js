
import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Card } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import imagenew1 from './Images/image2.jpg';

const { Meta } = Card;

class Laptop extends Component {                                                                                                                                                                                                                                                                                                                                                                                                                   
   
 
  render() {

    return(
        
        <div>
            <h6 style={{marginTop: -100, fontFamily:'Sans-serif', fontSize:27}}>HP Chromebook 14 Intel Celeron
             N4020-4GB SDRAM/64GB   <br/>
             Thin & Light Touchscreen Laptop</h6>
          <Card
    style={{ width: 430, marginLeft: 110}}
    cover={
      <img
        alt="example"
        src={imagenew1}
        
      />
      
    }
    // actions={[
    //   <SettingOutlined key="setting" />,
    //   <EditOutlined key="edit" />,
    //   <EllipsisOutlined key="ellipsis" />,
    // ]}
  >
    

    <Meta
     
      title="Laptop"
      description="GOOGLE ASSISTANT: Voice-Enabled Google Assistant built-in, work faster and smarter without lifting a finger or switching screens. Ask questions, set reminders, play videos, control your home, and more. Make Google do it.
      BOOTS IN SECONDS: Powered by Chrome OS with automatic software updates so youâll always have the latest virus protection. It starts up in less than 10 seconds, stays fast throughout the day, and wonât slow down over time
      PROCESSOR: Intel Celeron N4020 (1.1 GHz base frequency, up to 2.8 GHz burst frequency, 4 MB L2 cache, 2 cores)
      APPS: Access to favorite apps from Google Play like Google Drive, Gmail, YouTube, Evernote, Slack, Infinite Painter, Lightroom, Whatsapp, MS Office and many more
      MEMORY & STORAGE: 4 GB DDR4-2400 SDRAM | HARD DRIVE: 64 GB eMMC | Expandable up to 256 GB | 100 GB Google Drive storage"
      
    />
 
 <h4 style={{ marginLeft:700, fontSize:27, marginTop:-340, border:'solid', borderWidth:4, 
width:193 }}>
      <a href='/cart'>Add to cart</a></h4>
<br/>
      <h4 style={{ marginLeft:700, fontSize:27, marginTop:7, border:'solid',  
width:187 }}>
      <a href='/cart'>Buy Now</a></h4>


  </Card>
  <br/><br/><br/>
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

export default Laptop;

