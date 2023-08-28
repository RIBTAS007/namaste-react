// create the following strcuture using react


  /* <div id="parent">
    <div id="child">
        <h1>
            Hi I am an h1 tag
        </h1>
        <h1>
            Hi I am an h1 tag
        </h1>
    </div>
</div> */

// we can write react without JSX as written below, but it makes reading the code hard, hence we use JSX.

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },[
    React.createElement("h1", {}, "hi I am an h1 tag"),
    React.createElement("h1", {}, "hi I am an h1 tag"),
  ]
  )
);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
