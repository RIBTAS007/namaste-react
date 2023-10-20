# Episode 05: Lets get Hooked

## Why React?

- everything that we can do with React we can do with HTML, CSS , JS.
- React or any other framework makes the developer experience easier.

## File Structure
- first we will break our files and folders.
- We can make `src` folder and everything the source code is kept in this.
- so first shift the **App.js** file into **src** folder and update its reference in **index.html**
- Breaking files into components and folders makes it easy to manage and read.
- Their is no proper naming conventions or how to break files.
- You can break it based on components or based on features.
- React docs say **React does not have any opinions on how you put files into folders**
    - Group by feature or routes
    - Group by file type
    - Avoid too much nesting
- try to name the file same as component name.
- some people name file as .js and some people use .jsx and some use .tsx.
- The good way is to use .js extension. It doesn't matter much.
- Keep the things as simple as possible.

## import and export components

- Before we can import components we need to export it. 
- two ways to export
   1. **default export**
      - `export default componentName`
      - `import component from "path;`
      - We can write like `import Body from "./components/Body.js";` or `import Body from "./components/Body";` it does not matter.
      - by default react assumes you are importing JS file if you dont give an extension.
      - In one file we can have only one default export.
   2. **named export**
      - `export const Component;`
      - `import {component} from "path;`
      - Used when from a single file we need to export multiple things.
      - need to use `{}` in their respective imports. 
      - Eg: `import {a} from ../filename;`
      - when we have to export multiple this we will write `export` keyword in the start of that code.Eg:
      - ```
        export const a =10;
        export const b = "api_url";
        ```
- whenever we have any hardcoded data or url, never keep it inside the component folders. This is an industry standard.
- we can make a file with the name of **config.js** or **const.js** or **utils.js** and keep the hardcoded data inside it.

**Can we use default export and named export togather ?**

## Making website Dynamic

- create a button which on clicking will filter out and show only top rated restaurants.
- restaturants having >4 star rating is considered to be  top rated restaurant.


 




