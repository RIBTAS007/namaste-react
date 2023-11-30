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

Next we will add a ``return`` to this useEffect to unsubscribe to the onAuthStateChanged callback when the header component unmounts

- Always use constants instead of directly using the string.

## Fetch movies from TMDB 

- for showing movie list we will use the TMDB movie database.
- register on TMDB website and get access token.
- make the API call to get the movie list.
- why is API called 2 times when we write useEffect ? This happens because of struct mode. 
- in react index.js we wrapped the app inside strict mode. A lot of things happen twice in the local and will not happen in the build version.
- it checks for inconsistencies between the calls and will throw an error during the rendering cycle.
- once we setup and fetch the movies we will add ths movies in the redux store.
- we will write custom hook to fetch the movies from tmdb api

## Building the browsing page.

- UI is in 2 parts: main video part and then we have movie recommendation section.
- main container
    - videobackground
    - VideoTitle
- SceondaryConatiner
    - movieList * n
       - cards*n
- we can use early return if the movie to be displayed in the background is not loaded yet.
- we will keep the info of trailer info also in redux store instead of using a useState variable.
- always write your hooks on the top.
- create movie slice
- updated the store with movies data
- planning for main and secondary container
- fetched data for trailer video data
- embedded the youtube video and make it autoplay and mute
- tailwind classes to make main container look awesome.




















