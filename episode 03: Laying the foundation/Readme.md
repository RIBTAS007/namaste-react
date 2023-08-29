**npx parcel index.html**: execute index.html using parcel

We can create different type of script in package.json.

For eg:

You can go to pacakage.json and inside the scripts you can write like:

"scripts":{
    "start":"parcel index.html",
    "build":"parcel build index.html",
    "test": "jest",
}

Then in the command line you can run the scripts like **npm run start** to run **npm parcel index.html**

npm run start == npm start but not for other commands.

Like in browser we can see the DOM element, similar in react we have the react elements.

**React.createElement** creates an object and not an html element.

When we render this elemen to the DOM then it becomes the HTML element.

whatever happens inside the react will happen inside the root.

**JSX** is a javascript syntax that makes writing JS easier.

**JSX** is not a part of react. 

**JSX** tries to mix up html and JS to use it togather.

JSX is not html inside JS.

JSX is html-like or XML-like syntax. 

JS understands ECMAscript it does not understands JSX.

Parcel is transpiling the JSX to JS code and sending it to JS engine. It is not doing itself.

Babel is doing it. It is a JS compiler. It converts JSX => React.createlement.

We write JSX attributes in camel case.

If we write JSX in multiple lines, we need to wrap it inside ().

In React we have 
- class based component
- functional component

React Functional Component is a basic JS function that returns some JSX code or group of react elements.

**Component composition**: writing a component inside another component.

We can also use normal functions but we need to make sure to retrun the JSX.

We can write any JS code using {} inside JSX.

JSX santizes malicious data.

`<Title/> ==== <Title><Title/> === Title()`






