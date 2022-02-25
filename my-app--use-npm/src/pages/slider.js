import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Carousel } from 'antd';

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

ReactDOM.render(
  <Carousel autoplay>
    <div>
    <img src="C:\E_Website\my-app--use-npm\public\Images\image1.jpg" />
 
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>,
  document.getElementById('container'),
);

export default contentStyle;