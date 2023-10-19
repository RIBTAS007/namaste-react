import React from "react";
import ReactDOM from "react-dom/client";

// React  Element
const heading = React.createElement(
  "h1", 
  { id: "heading" }, 
  "Namaste React"
);

// React element: JSX - HTML like or XML-like syntax - transoile before it reaches JS Engine - Parcel - Babel
const jsxHeading = <h1 id="heading">This is a JSX Heading</h1>;

const jsxMultipleLine = (
<div>
  {jsxHeading}
  <h1 id="heading">This is a JSX Head</h1>
  <p id="para">This is a paragraph</p>
</div>
);

// React element: We can use small letters
const headingElement =  (
   <h1>This is heading element</h1>
);

// Heading Component that return a JSX element. This is also called react functional component.
// We need to use capital letters.
const HeadingComponent1 = () => (
  <div id="container">
     <h1>This is heading component</h1>
     <h2>This is a sub heading</h2>
  </div>
  
);

// can also be written as
const HeadingComponent2 = () => <h1>This is heading component</h1>;

// if we are using {} then we need to return the JSX element.
// we use this only.
const HeadingComponent3 = () => {
  const name="written by Satbir Singh";
  return(
    <div id="container">
      {/* If we want to use a react element variable inside a component */}
      {headingElement}
      {jsxMultipleLine}
     <h1>This is heading component</h1>
     <h2>{name}</h2>
    </div>
  ); 
};

//creating a root
const root = ReactDOM.createRoot(document.getElementById("root"));

// To render React element
root.render(headingElement);

// To render JSX element
root.render(<HeadingComponent3/>);


