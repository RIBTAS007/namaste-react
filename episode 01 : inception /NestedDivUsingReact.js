// Q. create the following strcuture using react

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

//Ans.  we can write react without JSX as written below, but it makes reading the code hard, hence we use JSX.

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "H1 Heading"),
    React.createElement("h2", {}, "H2 Heading"),
  ])
);

// Make sure you are using an Array when you want to have multiple children

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
