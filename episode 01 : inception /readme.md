## Tips

- Make your own notes
- Use your laptop and code along
- Maintain your own github repo

## Setup

- VS Code
- Google Chrome

## Getting Started

- Create HTML file named index.html
- VS Code has somethhing called emit.
- eg: html:5 and enter will give us a boiler plate code for HTML5.

## Inject JS into HTML

- we can use script tag to write JS code.
- check helloWorldUsingHTMLandJS.html file for seeing how can we do it.
- Browsers have inbuilt JS engine through which we it can understand DOM elements.
- It does not have react by deafult.

## Using React

- We can use Content delivery Network  (CDN) for getting it.
- CDN is a place where the react libraray is stored and we are just puulling using the CDN link.
- Open the CDN link in browser to check what it stores
- You will find out that its plain JS code that is the source code of React.
- Hence React is nothing but a peice of JS code.
- This Code is written and maintained by FB Developers.
- Once we import the CDN we can write **React** in Console to check whats inside it.

## Using React DOM

- Why do we need 2 files ?
- The first file is the core React file.
- The second file is React DOM which is the react library for manipulation of DOM operations.
- Why we need 2 files ?
- react works on browsers, mobiles and differnt type of places where react is used.
- Hence the first file is common to all but the react DOM is the bridge between the React and Browsers.
- Once we import the CDN we can write **ReactDom** in Console to check whats inside it. 

## Using React to write Hello world

- You can check out App.js file to see how we can create react element.
- We first need to create a root where react can do all the DOM operations.
- Creating the element is core thing of react.
- rendering something is the job of DOM
- Hence when we need to put the h1 element inside root using render menthod then we will use reactDOM.

# Using react to write Nested Divs

- the most imp operation is the DOM tree update.
- All the frameworks try to optimize this.
- React.createElement returns us an **object**, it is not an h1 tag yet.
- then we pass this object to the render() whos job is to convert this object into the h1 tag and then put inside the root so that the browser understands it.
- ReactElement(object) => render => Browser(HTML)
- Writing React in JS is complex, hence we use JSX.

## Part 5

- the order of imports matter.
- we should first import react then reactDOM.
- we didnt used react production CDN.
- if something is already present in root and we render something, then it will be replaced.
- React is a open source frontend library not a framework since it works only on a part of the page.
