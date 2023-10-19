## Creating scripts for start and build.

- `npx parcel index.html`: execute index.html using parcel and will create a development build for us.
- We can create a script for this so that we don't need to write it again and again.
- For doing this go to package.json and in the script section, write `"start": "parcel index.html"`
- We will also add `"build": "parcel build index.html"` in the scripts to build our production app.
- Now in the command line we can simply execute `npm start` and `npm build` to run `npm parcel index.html` and `npm parcel build index.html`
- **Tip:** If you dont know how to start any large app, check the package.json scripts, they would have mentioned something.
- `npm run start` == `npm start` but not for other commands.
-   ```
    "scripts":{
        "start":"parcel index.html",
        "build":"parcel build index.html",
        "test": "jest",
    }
    ```

## Episode 02 Revision

- Like in browser we can see the DOM element, similar in react we have the react elements
- **React.createElement** creates an object and not an html element.
- Syntax: `const var = React.createElement("element",{attributes}, "Content");`
- Eg: `const heading = React.createElement("h1",{id:"heading"}, "Namaste React");`
- When we render this element to the DOM then it becomes the HTML element.
- whatever happens inside the react will happen inside the root., hence we need to create root.
- `const root = ReactDOM.createRoot(document.getElementById("root"));`
- Now we will reneder the h1 object in the root using `root.render(heading);`
- Hence **React.createEelement => Object => HTMLElement(render)**

## JSX

- writing code in JS is hard and not developer friendly so we use JSX.
- **JSX** is a javascript syntax that makes writing JS easier.
- **JSX** is not a part of react. 
- **JSX** tries to mix up html and JS to use it togather.
- **JSX** is not html inside JS.
- **JSX** is html-like or XML-like syntax.
- React element(object) using JSX: `const jsxHeading = <h1 id="heading">This is a JSX Heading</h1>;` 

## JSX Working

- JS Engine understands ECMAscript it does not understands JSX.
- Parcel is transpiling the JSX to JS code and sending it to JS engine. It is not doing itself.
- **Babel** is doing it. It is a JS compiler. It converts JSX => React.createElement.
- **JSX** -> **Babel** -> **JS** -> **React.CreateElement** -> **Object** -> **render** -> **HTML**
- We can go to Babel.js to see how Bable works.

## JSX syntax

- We write JSX attributes in camel case. eg: `className`
- If we write JSX in multiple lines, we need to wrap it inside `()`.
- JSX code can have only 1 parent element. Otherwise we need to wrap it inside `<div></div>` or `<></>`

## React Compoenents

- In React everything is a component.
- In React we have 
    - class based component: old way of writing code. It uses JS classes.
    - functional component: It uses JS functions.
- **React Functional Component** is a basic JS function that returns some JSX code or group of react elements.
- **Component composition**: writing a component inside another component.
- Always write **Component Name** in capital letters. 
- We can also use normal functions but we need to make sure to retrun the JSX.
- for rendering components we need to write the component name inside `</>`. eg: `root.render(<Heading/>)`
- when creating a component, we can either directly return the JSX , in that case we use `()`, else we need to use `{}` and inside it we need to return the JSX.
- check **HeadingComponent1** and **HeadingComponent3** for better understanding.
- We can write any JS code using `{}` inside JSX so thats why before we return JSX in a component we are able to write JS code  in a component.
- we can also write JS inside JSX using `{}`

## JSX Benefits

- Say we have `const data = api.getData()` and the attacker is sending soem malicious data into it , and we are using this `data` variable inside our react component.
- This attack is known as **cross site scripting**. JSX takes care of these injection attacks.
- JSX sanitizes malicious data.
- We can write a component in the following ways `<Title/>` ==== `<Title><Title/>` === `{Title()}`






