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

const RestaurantCard = () => {

  return(
    <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
      <img
      className="res-logo"
       alt= "food-image"
       src= "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/avlujvfa7huclgj7e8z8"
      />
      <h3>Meghana foods</h3>
      <h4>Biryani, North Indian, Asian</h4>
      <h4>4.3 stars</h4>
      <h4>38 minutes</h4>
    </div>
  );
};
const Body = () => {
   return(
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
      </div>
    </div>
   );
};

const AppLayout = () => {
  return(
    <div className="app">
          <Header/>
          <Body/>
    </div>
  );
};

//creating a root
const root = ReactDOM.createRoot(document.getElementById("root"));

// To render JSX element
root.render(<AppLayout/>);


