# Episode 01: Inception

## Tips Before Getting Started

- [x] Make your own notes
- [x] Use your laptop and code along
- [x] Maintain your own [GitHub Repo](https://github.com/yourusername/your-repo)

## Setup

- **VS Code**
- **Google Chrome**

## Getting Started

1. Create a new folder.
2. Create an HTML file named `index.html` inside that folder.
3. We will write and recap some basics of HTML, CSS, and JS by creating a basic **Hello World** program.
4. In the `index.html` file, you can use the VS Code emit feature. For example, typing `html:5` and hitting enter will generate a boilerplate code for HTML5.

## Inject JS into HTML

- Use the `<script>` tag to write JS code.
- In JS, we use DOM Manipulation to create elements like headings, paragraphs, etc.
- Check [helloWorldUsingHTMLandJS.html](./episode%2001%20:%20inception%20/helloWorldUsingHTMLandJS.html) file to see how this can be done.
- Browsers have an inbuilt JS engine for understanding DOM elements.
- **Note**: Browsers do not understand React by default as they understand JS.

## Using React

- The first way to include React in our project is by using a Content Delivery Network (CDN).
- CDN is a place where the React library is stored, and we are pulling it using the CDN link.
- Open the CDN link in the browser to check its contents:
    - React CDN: [React CDN Link](https://unpkg.com/react@18/umd/react.development.js)
    - React DOM CDN: [React DOM CDN Link](https://unpkg.com/react-dom@18/umd/react-dom.development.js)
- You will find out that it's plain JS code, the source code of React.
- Hence, **React is a JS Library**, nothing but a piece of JS code.
- This code is written and maintained by FB Developers.
- Once we import the CDN, we can type `React` in the console to check its contents.

## Using React DOM

- **Why do we need 2 files?**
  - The first file is the core React file.
  - The second file is **React DOM**, which is the React library for the manipulation of the DOM.
- React works on various platforms, and React DOM acts as the bridge between React and browsers.
- Once we import the CDN, we can type `ReactDOM` in the console to check its contents.

## Using React to Write Hello World

- You can check out [App.js](./episode%2001%20:%20inception%20/App.js) file to see how we can create a React element.
- We first need to create a root where React can perform all the DOM operations.
- Creating the element is the core thing in React.
- Rendering something is the job of the DOM.
- Hence, when we need to put the `h1` element inside the root using the `render` method, then we will use ReactDOM.

## Using React to Write Nested Divs

- **The most important operation is the DOM tree update.**
- All frameworks try to optimize this process.
- Check out [NestedDivUsingReact.js](./episode%2001%20%3A%20inception%20/NestedDivUsingReact.js) file to see how we can create nested elements in React.
1. `React.createElement` returns an **object**.
2. Then we pass this object to the `render()` whose job is to convert this object into the `h1` tag and then put it inside the root so that the browser understands it.
- `ReactElement(object) => render => Browser(HTML)`
- Writing React in JS is complex; hence, we use JSX.

## Points to Remember

- The order of imports matters.
- We should first import React, then ReactDOM.
- We didn't use React production CDN.
- If something is already present in the root, and we render something, then it will be replaced.
- React is an open-source frontend library, not a framework, as it can work only on a part of the page.

## Assignment

- [Click here](./Assignment01_Inception.md) for the assignment Questions and solutions

