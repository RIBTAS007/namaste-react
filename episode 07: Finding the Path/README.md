# Episode 07: Finding the Path

- we will learn about hooks and react routing.

## useEffect

- Only callback function is mandatory inside use effect.
- if their is no dependency array written => called after every render of the componnet.
- if the dependency array is empty => [] => called only on the initial render of component.
- if the dependency array has values =>  only be called when the dependency changes/updated.

## useState best practices

- never use useState outside of component.
- it is used to create local state variables inside the functional component.
- always try to call the state variables on the top.
- never create a useState inside an if else or any condition, or functions or for loops.

## Routing using createBrowserRouter and RouterProvider

- we will use react router dom for routing.
- we will use version 6.4
- write `npm i react-router-dom` to install it.
- we will now create the about us page.
- the `createBrowserRouter()` takes an parameter as a configuration, in which we basically tell what components needs to be loaded on which path.Eg:
- ```
  const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>
  },
  {
    path: "/about",
    element: <About/>
  }
  ]);
  ```
- now we need to pass this configuration to our app, so for this we will use the `RouterProvider`. eg:
- `root.render(<ReactRouter router={appRouter} />);`
- their are other types of router functions also available in reactrouter library.

## Handling errors

- if we give a invalid router path, it will throw an error. This is handled by react router dom.
- for displaying custom compoenent on error we can use error Element. eg:
- ```
  {
    path: "/",
    element: <AppLayout/>,
    errorElement: <Error/>
  },```
- react-router-dom also provides with a hook called useRouteError, which gives us more info about the error.

## creating child routes
- what if we want to display the header section in all the pages ?
- we need to use child routes.
- just copy the config and put it inside the children of the parent element config.
- now wherever inside our App componnet we want to display the children we will write `<Outlet/>`
- Outlet is just like a placeholder which will be replaced by the original component according to the path.

## creating links

- never use `<a></a>` tag in react for links since it reloads the whole page.
- we can use `<Link to></Link>` tag provided by react router dom.
- link works same as the anchor tag, it just not reloads the page.
- eg: `<Link to="/about">About Us</Link>`
- In react, everything is a component, even the pages.
- so even when we use links, our page is not reloaded only the component is refreshed.
- This is the reason why react apps are known as **Single Page Applications**
- Behind the scenes, link is an anchor tag

## Types of routing

- **Client Side routing**
    - loads the component without making any network call.
    - eg: using `<Links></Links>`
- **Server side routing**
    - reloads the whole page.
    - fetches the html from server and displays it on frontend.
    - eg: using `<a></a>`

## Dynamic routing

- In swiggy when we click ona restuarant, for every restaurant the path(url) changes.
- This is known as dynamic routes

## Implementing dynamic routes

- create a restaurant page component first. `RestaurantMenu.js`
- for creating dynamic routes we need to use `:id` in the path to define that it is a dyamic route.eg:
-  ```
   {
      path: "/restaurants/:resId",
      element: <RestaurantMenu/>
   }
   ```