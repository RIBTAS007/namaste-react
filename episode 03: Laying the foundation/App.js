import React from "react";
import ReactDOM from "react-dom/client";

// react.createElement => Reactelement- JSobject => HTMLelement

// how to create react elements using react
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello world from episode3"
);

console.log(heading);

//how to create react element using JSX

//JSX => Babel transpiles it to React.createlement => reactEelement-JS Object=> HTML Element(render)
//React element
const jsxheading = (
   <h1 id="heading" tabIndx="5">
    NAMSTE JSX
    </h1>);

console.log(jsxheading);

// react functional component
const HeadingComponent =()=>(
  <h1>heading component</h1>
);

//Same as headingcomponent
const HeadingComponent2 =() => <h1>heading component</h1>;

const elem = <span>React element</span>;

//react element is not a react component
const anotherline =(
  
  <h1> {elem} body1</h1>
);

// Any JS code
const a ="body2";

const BodyComponent = () =>(
  <div id="container">
    <HeadingComponent/>
    {anotherline}
    <h1>{a}</h1>
    <h2> body3</h2>
  </div>
);


const appliction =(
  <BodyComponent/>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// render a JS element
// root.render(jsxheading);

//render a react component.
root.render(appliction)
