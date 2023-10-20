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
- for triggering an event we can use **onClick**
- onClick calls a callback function which is executed when we click the onClick's element.
- eg: `onClick={()=>{console.log("clicked")}}`
- ```
  onClick={()=>{
              listOfRestaurant?.filter(
                (res) => res.info.avgRating>4
              );
            }}
  ```
- writing the above logic will filter the restaurants on button click but our UI won't reflect the change.
- **This is the problem that is solved using frameworks like React**, i.e. to keep the data layer and the UI layer in sync with each other.
- we can solve this issue using useState() react hook which creates a state variable.

## Hooks

- normal JS functions predefined in react that gives us some special utilities.
- we can find these inside node modules -> react 
- **useState()**: maintains the state of the variable.
- eg: ` const [listOfRestaurant, setListOfRestaurant] = useState([]);`
- we need to import hooks as **named imports**
- **whenever a state variable updates, react rerenders the component.**
- these rerender are DOM operations which become superfast.
- we can also write it as :
  ```
  const arr = useState([]);
  const [listOfRestaurant, setListOfRestaurant] =arr;
  ```
  or

  ```
  const listOfRestaurant =arr[0];
  const setListOfRestaurant =arr[1];
  ```
- its a simple array destructing.

## React Algorithm

- react uses an algorithm known as reconciliation Algorithm and this is also known as **React Fiber**
- whenever something changes on the UI it is called reconcialation.
- res-container
   - res cards
   - res cards
   - res cards
   - res cards
   - res cards
   - res cards
   - res cards
- Now suppose the UI changes from filtering the 7 cards to 3 cards.
   1. React first creates a virtual DOM which is a representation of actual DOM.
   2. Virtual DOM is nothing but the object that we saw on episode 3. which was created on using React.createElement.
      - as an example you can do `console.log(<Body/>)`, it will print and object.
   3. Diff Algorithm finds out the difference between the current Virtual DOM and the update Virtual DOM.
      - like earlier we had 7 res cards and now we have 3 res cards
      - it will then calculate the difference of these , i.e. 4 nodes.
   4. Then it will update the actual DOM.
- the react fiber is the new way of **finding this difference and updating the DOM.**
- finding out the difference between 2 objects is fast as compared to finding out the difference between 2 html codes, thats why it is fast.
- **React is doing effecient DOM manipulation becauses it uses virtual DOM**
- **It uses Diff algorithm that is very fast**
- in the use state variable when the setfunction is executed, it triggers the diff algorithm.


 




