# Episode 14: NetflixGPT The Beginning

- we are going to make an app similar to netflix with exciting features
  - authentication
  - google firebase as backend.
  - protected routes
  - forms
  - use chatGPT APIs to search for movies and give suggestions

## create react app

- use `npx create-react-app` to create a new react app. 
- we can also use vite.
- it will create a folder structure.
- run `npm start` to start the app
- after this remove all the code in css files and remove test.js files.

## setup tailwind

- `npm install -D tailwindcss`
- `npx tailwindcss init`
- follow the steps given in tailwind docs

## App layout

- Login/SignUp page
   - Sign In/ Sign Up Form
   - redirect to browse page
- browse (after authentication)
   - Header
   - main movie
     - tailer in background
     - title and description
     - movie suggestions
        - movie lists*N
- netflixGPT
    - search bar
    - movie suggestions

## Login Component

- rafce
- first we will focus on creating the routing component
- create sign up form and convert it to Sign In form
- use formik to build forms for managing forms in react.
- after this we will start learning about form validations
- when we click on the submit button of the form , it calls the default onSubmit method of the form which causes the whole app to reload.
- for correcting this issue we need to use `onSubmit = {(e)=>e.preventDefault()}`

## UseRef

- we will learn about useRef hook
- for getting the email and password input either we can use the state variables or we can use the reference to the input boxes.
- ` const email = useRef(null);`
- `<input ref={email} ...`















