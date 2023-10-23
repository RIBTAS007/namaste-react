# Episode 09: Optimizing our App

## Single responsibility function

- if we have an app or function or any module it should handle one single responsibility.
- **modularity** : break code into meaninful components.
- it helps in testing, maintanabilty and reusable.
- for doing this we will use custom hooks.

## Custom hooks

- so in resturant menu component it is fetching as well as displaying the data.
- we can write a custom hook to fetch the data.
- so the responsibility of restuarantMenu would be to just display the data.
- the best place to create hooks is inside the utils since hooks are a helper functions.
- always start with name of the hook file with `use` and keep the hook and the file name same.

## create a hook to check user is online/offline

- first always write a function and see what will be the input and the output in it.
- then just write the logic.
- for doing this we will use an addEventListener.
- it is not necesssary to start the name with 'use', but a lot of project use a linter that may throw an error.

## OptimizingOurApp : Lazy Loading

- The JS file size after bundling depends upon how many components it holds.
- we will try to make smaller bundles of our app file.
- This process is known as **Chunking**, **code Splitting**, **Lazy Loading**, **dynamic bundling**, **on demand loading**
- We can create bundles based on logical seperation of features, each bundle will be responsible for one feature.
- Imagine we have a component named "Grocery" that has 100s of components inside it.
- so we want to create 2 bundles , one for our restaurant and other for grocery.
- so initially our app will not load grocery, only when we got to that grocery page, it will load grocery.
- we will import the grocery component into our App as follows: 
- `const Grocery = lazy(()=>import("./components/Grocery"));`
- when we do this we will get an error "A component suspend while responding to synchronous input"
- initially we will get one js file after bundling which will not have grocery code in it.
- we are loading grocery code on demand, when we click on grocery link then only the component loads using another bundle.
- loading the grocery code takes sometime say 25 ms, but react did fast rendering so could not check if its loaded or not so it suspended the rendering and throws the error.
- for resolving this we will use `Suspense`.
- It is a component given by react. We can wrap our lazy component in the route with it to solve the issue.
- ```
  {
    path: "/grocery",
    element: <Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>
  },
  ```
- we can give fallback inside suspense to display what to show until the component is rendered.It takes a JSX as an argument.







