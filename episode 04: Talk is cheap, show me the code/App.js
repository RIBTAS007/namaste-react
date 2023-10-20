import React from "react";
import ReactDOM from "react-dom/client";

// - The following will be our components:
//     - header
//         - logo
//         - nav Items
//     - Body
//         - Search
//         - restaurant container
//         - restaurant card
//             - image
//             - rating
//             - price
//             - delivery time
//     - footer
//         - Copyright
//         - Links
//         - Address
//         - Contact

const Header = () => {
  return(
    <div className="header">
      <div className="logo-container">
        <img
        className="logo" 
        src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"/>
      </div>
      <div className="nav-items">
        <ul>
         <li>Home</li>
         <li>About Us</li>
         <li>Contact Us</li>
         <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return(
    <div className="app">
          <Header/>
    </div>
  );
};

//creating a root
const root = ReactDOM.createRoot(document.getElementById("root"));

// To render JSX element
root.render(<AppLayout/>);


