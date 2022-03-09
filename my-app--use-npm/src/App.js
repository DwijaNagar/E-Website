// import logo from './logo.svg';
//import NavBar from "./pages/NavBar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import Home from './pages/Home';

 import Mobile from './pages/Mobile';
 import Laptop from './pages/Laptop';
import Cart from './pages/Cart'
import GlobalState from "./context/GlobalState";
import Products from './pages/Products';
import Footer from "./pages/Footer";
import Checkout from "./pages/Checkout";
//import MainNavigation from "./pages/mainNavigation";


function App() {
  return (
   <GlobalState>
    <Router>
     <div>
      
    </div>

   
    {/* <MainNavigation></MainNavigation> */}
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/mobile" element={<Mobile/>} />  
        <Route exact path="/products" element={<Products/>} />
         <Route exact path="/laptop" element={<Laptop/>} /> 
        <Route exact path="/cart" element={<Cart/>} />
        <Route exact path="/checkout" element={<Checkout/>} />
      </Routes>
     <Footer></Footer>
  </Router>
  </GlobalState>

);
};

export default App;
{/*   
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
     */}
    {/* //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a> */}
    {/* //   </header> */}
    {/* // </div> */}
 
