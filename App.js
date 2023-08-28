// Element, attributes, inner html code

// the heading is a react object using create Element

// the {} things are passed as props.

// reactElement(object) => HTMLAllCollection(browser understands)

const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello world from react"
);

// all the react code will render under the root element
const root = ReactDOM.createRoot(document.getElementById("root"));

// the render method is responsible for putting object inside h1 and rendering it.

// if we already have something inside the root div, it will be replaced by te below line.

root.render(heading);
