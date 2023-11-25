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

# Firebase

- setup a new project in firebase
- then add the firebase config file
- then in firebase go to authentication and give access of type of authentication you want.
- then do firebase login
- then firebase init
- if you are not able to see existing projects use `firebase login --reauth`
- public folder ? build
- configure as single page app ? No
- setup automatic builds and deploys with github ? No
- npm run build
- firebase deploy

## Steps for deployment

- Install firebase CLI - 'npm install -g firebase-tools'
- Firebase Login - `firebase login`
- Initialize firebase - `firebase init` then select hosting
- Deploy on firebase - `firebase deploy`

## uAuth using Firebase

- we should use web modular API
- the `const auth = getAuth();` is used in all firebase APIs so we will write it seperately and use it again n again.















