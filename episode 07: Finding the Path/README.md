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
