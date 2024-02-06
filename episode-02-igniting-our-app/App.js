import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return React.createElement(
    'div',
    null,
    React.createElement('h1',  { id: "heading"}, 'Episode 02: Igniting Our App'),
    React.createElement('section',  { id: "heading"},
      React.createElement('h2',  { id: "heading"}, 'Code in Episode 01'),
      React.createElement('p',  { id: "p"}, 'The code written in Episode 01 is not optimized for production; it contains numerous comments and console logs. To address this, we need to implement code splitting, bundling, image optimization, and various other optimizations.')
    ),
    React.createElement('section',  { id: "heading"},
      React.createElement('h2', { id: "heading"}, 'Igniting the App'),
      React.createElement('p', { id: "p"}, 'React alone is insufficient for creating fast-running apps. There are many packages working behind the scenes to make the app fast and production-ready.'),
      React.createElement('p', { id: "p"}, 'We will learn about it in this episode')
    )
  );
};

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(React.createElement(App));


  