# Episode 02: Igniting Our App

## Code in Episode 01

- The code written in Episode 01 is not optimized for production; it contains numerous comments and console logs.
- To address this, we need to implement code splitting, bundling, image optimization, and various other optimizations.
- In this episode, we will learn how to create our own production-ready create-react-app.

## Igniting the App

- React alone is insufficient for creating fast-running apps.
- There are many packages working behind the scenes to make the app fast and production-ready.

## NPM

- NPM does **NOT** stand for Node Package Manager.
- NPM does not have a full form.
- NPM manages packages but does not stand for Node Package Manager.
- NPM is a package manager for JavaScript, serving as a standard repository for all packages.
- When we create a React app using create-react-app, it already includes NPM.

## Install NPM

- Use `npm init` to install it.
- If we do `npm init -y`, it skips a lot of steps.
- Once completed, it will prompt for various details, which we can fill accordingly.
    - Package name: (namaste-react)
    - Version: (1.0.0)
    - Description: This is the notes of Namaste React
    - Entry point: App.js
    - Test command: jest
    - Git repository: [https://github.com/RIBTAS007/namaste-react](https://github.com/RIBTAS007/namaste-react)
    - Keywords: react, JavaScript
    - Author: Satbir
    - License: ISC

- Upon hitting enter and submitting, we will obtain the **package.json**, which is the configuration file for npm.

## Why Do We Need package.json

- Package.json is a configuration file.
- Our project depends on various packages, known as **dependencies**, and npm helps us manage them.
- NPM requires configurations like the version of the package, which are stored in package.json.

## Bundler

- The most crucial package for our project is a **bundler** like webapp, parcel, or vite.
- These bundlers help bundle and optimize our code for production.
- *They package our app properly so that it can be shipped to production.*
- Create React App uses **webapp** behind the scenes.
- In this episode, we will be using **Parcel** as our bundler.

## Parcel

- Use **npm install -D parcel** to install Parcel.
- It will fetch the Parcel packages from npm.
- The command to install anything is the same.
- `-D` in `install -D parcel` stands for installing it as a dev dependency.
- When we execute this command, it installs Parcel from npm.

## Types of Dependency:

- **Dev dependency**: Required in the development phase only.
- **Normal dependency**: Used in production also.

## After Parcel Installation

- Parcel will be mentioned as `"parcel": "^2.8.3"` in package.json as a dev dependency.
- The `^` symbol is used for version control; it automatically upgrades to the latest version. This is known as a caret.
- `~` is called a tilde, directly updating to the current major version available.

## package-lock.json

- We will now get another file, **package-lock.json**.
- **package-lock.json** tracks the exact dependencies installed, whereas **package.json** contains approximate versions.
- It also includes `integrity`, which contains a hash used to verify that the code on our dev machine and prod machine is the same.

## Node Modules

- **Node modules** contain all the code of dependencies fetched from npm.
- **Transitive dependencies**: We required Parcel, so we have the Parcel node module downloaded. This module has more dependencies, which further have more dependencies. Hence, all those dependencies are also downloaded in the node modules.
- Every node module has its own **package.json**, which stores details about its dependencies.
- We should not put our node modules on Git but should put package.json and package-lock.json, as they maintain the configurations of all the dependencies required. We can regenerate the node modules using `npm install`.
- **Whatever we can regenerate, don't put it on Git**. The lock in package-lock.json is there because it stores the exact versions used in our app.

## Ignite Our App

- Write `npx parcel index.html` where index.html is the source file of our project.
- Parcel will create a server for us, and our app will run at localhost.
- **npm** is for installing the packages.
- **npx** is for executing the packages.

## Installing React

- CDN links are not a good way to build React and React DOM in our project since it involves a costly operation for network calls. Also, if tomorrow the React version changes, it could pose a problem.
- Alternatively, we can install them as packages using `npm install react` and `npm i react-dom`.
- `npm i` and `npm install` are the same.
- We are not using -D here as we used during Parcel because we want it as a normal dependency, not as a dev dependency.
- Now we can remove the React CDN links from our **index.html**.
- When we write `import React from "react";`, it means we are referring to the React module installed and now present in our **node modules**.
- Also, update the script of calling app.js to `<script src="./App.js" type="module"></script>`; otherwise, we get the below error:
- **Browser scripts cannot have imports or exports**
- In index.html, we have app.js script, so it considers it a normal JS file or a browser script, and normal JS file does not have imports. So, we need to tell it that it is a module.
- Make sure to add `import React from "react";` and `import ReactDOM from "react-dom/client";` in app.js.

## What Does Parcel Do ?

- Dev build
- Local Server
- HMR = hot module replacement, (instantly refreshing the page on the browser)
- File watching Algorithm - written in C++ is used by Parcel to track the contents of the file.
- Caching - faster builds stored in **.parcel-cache**: Every time we build, the time reduces.
- Image optimization: load images in the browser
- Minification of the files
- Bundling of the files
- Compressing of the files
- Consistent hashing
- Code splitting
- Differential bundling - adjust code according to the browser, support older browsers.
- Diagnostics
- Error handling
- You can also host your app on https
- Tree shaking - remove unused code.
- Different dev and production bundles
- You can read the [Parcel Documentation](https://parceljs.org/)

## Creating a Production Build

- Use `npx parcel build index.html` to build the production build.
- This will give us an error, so we need to remove `main: "App.js"` from our package.json file.
- In the **dist** file, we will have the actual code after the production build.
- It will store the optimized code files.
- Browser list is an npm package that helps us manage which

 browsers we can use our app on.
- The parcel.cache and dist can be regenerated, so we don't need to put them on GitHub.

## Pushing to Git

- We push our code to Git, and the server fetches the code from Git. The server will host the app for the local user.
- We only need to push package and package-lock files.

## Make Our App Supported in Older Browsers

- For doing this, we need to know about browserslist, which is an npm package that we need to configure.
- In our package.json, we can add a key-value like `browserslist: []`, the value will be an array of browsers.
- We can check [browserlist.dev](https://browserlist.dev/) to know what we can add to the array.
- It does not mean it will not support other older browsers; it just means our app will surely support the browsers added to the array and may or may not support other versions.

## Summary

- React does not do everything.
- It's the job of the bundler. Here we have used **Parcel**.
- All this can be handled using **create-react-app**.
