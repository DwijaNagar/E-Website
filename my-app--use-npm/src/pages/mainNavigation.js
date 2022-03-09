import React from "react";
import { NavLink } from "react-router-dom";
import img from './Images/image3.png';
import { ShoppingCartOutlined, HomeOutlined, MobileOutlined } from '@ant-design/icons';
import "./mainNavigation.css";

const mainNavigation = props => (
  
  <header className="main-navigation">
     
    <nav>
      <ul>
      <img src={img}/>  
      <li>
          <NavLink to="/"> <HomeOutlined/> Home</NavLink> 
        </li>
        <li>
          <NavLink to="/products"> <MobileOutlined />Products</NavLink>
        </li>
        <li>
          <NavLink to="/cart"> <ShoppingCartOutlined /> Cart  ({props.cartItemNumber})</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default mainNavigation;





// import React from 'react';
// // import ReactDOM from 'react-dom';
// //import 'antd/dist/antd.css';
// import { Menu } from 'antd';
// import { SettingOutlined, ShoppingCartOutlined, HomeOutlined  } from '@ant-design/icons';
// import img8 from './Images/image3.png';
// import './NavBar.css';



// const { SubMenu } = Menu;

// class NavBar extends React.Component {

       
//   state = {
//     current: 'mail',
//   };

//   handleClick = e => {
//     console.log('click ', e);
//     this.setState({ current: e.key });
//   };

//   render() {
//     const { current } = this.state;
   
  
//     return (
      
//     <div className="parent">
      
//       <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal" theme="dark"
//      backgroundImage={img8}alt="cam">

//          {/* <img src={img8}alt="cam"/> */}
        
//          <Menu.Item key="alipay" icon={<HomeOutlined  />}>
//           <a href="/">
          
//            Home
//           </a>
//         </Menu.Item>

//         <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Products">
//           <Menu.ItemGroup >
//           {/* title="Item 1" */}
//             <Menu.Item key="setting:1">
//               <a href="/mobile">Mobile Phone</a>
//             </Menu.Item>
//             <Menu.Item key="setting:2">
//             <a href="/laptop">Laptop</a>
//             </Menu.Item>
//           </Menu.ItemGroup>
//           {/* <Menu.ItemGroup title="Item 2">
//             <Menu.Item key="setting:3">Option 3</Menu.Item>
//             <Menu.Item key="setting:4">Option 4</Menu.Item>
//           </Menu.ItemGroup> */}
//         </SubMenu>

//         <Menu.Item key="alipay" icon={<ShoppingCartOutlined />}>
//           <a href="/cart">
//            Cart
//           </a>
//         </Menu.Item>
//      </Menu>
//       </div>
//     );
    
//   }
// }

//  export default NavBar;




    






         