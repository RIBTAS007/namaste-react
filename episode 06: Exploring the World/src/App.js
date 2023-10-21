import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

//creating a root
const root = ReactDOM.createRoot(document.getElementById("root"));

// To render JSX element
root.render(<AppLayout />);
