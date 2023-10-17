## Code in episode 01

- Our code written in episode 01 is not optimized to push into production.
- it has lots of comments , and console logs n all.
- for doing this we need to do code splitting, bundling, image optimization, and may other things.
- In this episode we will learn how we can create our own create-react-app that is production ready.

## Igniting the app

- Their are lot of packages working behind the scenes to make the app fast and production ready.
- React alone is not sufficient.

## NPM

- NPM does not stands for node package manager. 
- NPM does not have a full form.
- NPM manages packages but it does not stands for node package manager.
- NPM is a package manager for javascript, it is standard repository for all the packages.
- when we create a react app using create-react-app, it already has npm present in it.

# Install NPM

- We can use **npm init** to install it.
- if we do `npm init -y` it skips lot of stuff.
- Once we do it it will ask the following and we can fill it accordingly.
- pacakage name: (namaste-react)
    - version: (1.0.0)
    - description: This is the notes of namaste react
    - entry point: App.js
    - test command: jest
    - git repository: https://github.com/RIBTAS007/namaste-react
    - keyword: react, javascript
    - author: Satbir
    - license: ISC

- When we click on enter and submit we will get the **package.json** which is the configuration of the npm file.
- The content is stored in json code, which is basically the configuration for npm.

## Why do we need Package.json

- Our project depends on various packages, so those packages are called **dependencies** and npm helps use to manage it.
- NPM needs to the configurations like the version of the pacakge etc, which is stored in package.json.

## Bundler

- The most important package for our project is called **bundler** like webapp, parcel, vite.
- These bundlers help us to bundle and make our app production ready by optimizing our code.
- *It packages our app properly so that it can be shipped to production*
- create react app uses **webapp**.
- We will be using **Parcel** are our bundler for this episode.

## Parcel

- We will use **npm install -D parcel** to install parcel.
- It will fetch the parcel packages from npm.
- The command to install anything is same.
- `-D` in `install -D parcel` stands for installing it as Dev dependency.
- when we execute this command it will install parcel from npm

## Types of dependency:

- **Dev dependency**: required in dev phase.
- **Normal dependency**: Used in production also

## After Parcel installation

- We will se parcel mentioned as "parcel": "^2.8.3" in the package.json as a dev dependency.
- The ^ is used for version control, if we have this written then it will automatically upgrade the version to the lastest version. This is known as carot.
- ~ is called as tilde.

## package-lock.json

- We will now get another file **package-lock.json**
- **package-lock.json** tracks the exact record of the dependencies that are installed where as **pacakge.json** contains the approx versions.

**node modules** contains all the code of all the dependencies that is fetched from npm. 

**Transitive dependencies**: we required parcel, so we have node module of parcel downloaded, but this module has more dependencies, which further have more dependecies, hence all those dependencies are also downloaded in the node modules.

Every node module, have their own **pacakage.json** which store details about its dependencies.

We should not put our node modules to git but we should put package.json and pacakge-lock.json as they are maintaining the configurations of all the dependencies required because of hwhich we can regenerate the node modules.

We can use **npm install** to regenerate all the node module from pacakge.json.

**Whatever we can regenerate dontput it on git**

**npx parcel index.html**

npm is for installing the packages.
npx is for executing the packages.

npm install react
npm i react-dom

**Browser scripts cannot have imports or exports**

In index.html, we have app.js script so it considers it as a normal js file.

So we need to tell it that it is a module.

## Parcel

- Dev build
- Local Server
- HMR = hot module pelacement
- file watching Algorithm - written in C++
- Caching -faster builds stored in **.parcel-cache**
- Image optimization
- Minification 
- bundling
- Compressing
- Consistent hashing
- Code spliting
- differenial bundling - adjust code according to the browser
- Diagnostics
- error handling
- you can also host your app on https
- Tree shaking- remove unnecessary code.
- different dev and production bundles

**npx parcel build index.html** to build production build

in **dist** file we will have the actual code after the build,.

browser list is an npm pacakge that helps us to manage that on what all browers we can user our app.

browserlist.dev

This all cn be handled using **create react app**



