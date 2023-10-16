import React from "react";
import ReactDOM from "react-dom/client";
import image1 from "./logo.jpg";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={image1} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

// const RestaurantCard =({resName,cuisine}) => { }
// This is called destructuring on the fly
// const {resName,cuisine} = props;

const RestaurantCard =(props) => {
  const {resName,cuisine} = props;
  return(
    <div className="res-card">
      <img 
      className="res-logo"
      src={image1}/>
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>4.4. stars</h4>
      <h4> 38 minutes</h4>
    </div>
  )
}

const Body = ()=>{
  return(
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard resName="Meghana foods" cuisine="Biryani, north Indian, Asian"/>
        <RestaurantCard resName="KFC" cuisine="Burger, fast foods"/>
        
      </div>
    </div>
  )
};

const AppLayout = () => {
  return <div className="app">
    <Header/>
    <Body/>
  </div>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);
