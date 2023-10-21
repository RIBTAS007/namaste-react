import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constant";
import { useState, useEffect } from "react";

const Header = () => {

   const [btnName, setBtnName] = useState('Login');

    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src= {LOGO_URL}
          />
        </div>
        <div className="nav-items">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li>Cart</li>
            <button 
              className="login" 
              onClick={()=>{
                btnName==='Login'?setBtnName('Logout'):setBtnName('Login');
              }}
            >
              {btnName}
            </button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;