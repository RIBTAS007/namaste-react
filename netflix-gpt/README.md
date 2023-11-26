# Episode 15: NetflixGPT Building the Core

## fixing access to unauthorized browse page.

- when we try to acess `localhost:3000/browse`, we arenot checking the auth over here and we are redirecting to login, if the user
- our code for checking the auth is already written using onAuthStateChanged() in the Body component, and since we have written it using [] and useeffect it will be called whenever the page is loaded and will check the auth.
- so we should should also add the navigation logic inside the onAuthStateChanged().
- so we can use the useNavigate hook to redirect him only if he is successfully authenticated , but the problem is that the useNav will only work inside the child components of appRouter.
- **useNavigate() can only be used in the context of a <Router> component**
- hence we will refactor our code to solve it, we will move our auth code from body to header component.
- we can also remove the `navigate("/browse");` from Login page, since now it will be taken care in the auth logic.
- Hence now the routing will happen from the header component for login and sign in.

Next we will add a return to this useEffect to unsubscribe to the onAuthStateChanged callback when the header component  unmounts


















