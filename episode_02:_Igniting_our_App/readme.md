NPM does not stands for node package manager. 
NPM does not have a full form.
NPM works in managing packages

NPM is a package manager for javascript.

We can use **npm init** to install it.

- pacakage name: (namaste-react)
- version: (1.0.0)
- description: This is the notes of namaste react
- entry point: App.js
- test command: jest
- git repository: https://github.com/RIBTAS007/namaste-react
- keyword: react, javascript
- author: Satbir
- license: 

When we click on enter and submit we will get the **package.json** which is the configuration of the npm file.

many times thes epacakages are also known as **dependencies**

ur project depends on various packages, so those packages are called dependencies and npm helps use to manage it.

The most important package for our project is called **bundle** like webapp, parcel, vite.

These bundlers help us to bundle and make our app production ready. 

create react app uses **webapp**.

We will use **npm install -D parcel** to install parcel.
It will fetch the parcel packages from npm.

Types of dependency:
**Dev dependency**: required in dev phase.
**Normal dependency**: Used in production also

**-D** in **install -D parcel** stands for installing it as Dev dependency.

"parcel": "^2.8.3".

The ^ is used for version control, if we have this written then it will automatically upgrade the version to the lastest version.

We will now get another file **package-lock.json**

**package-lock.json** tracks the exact record of the dependencies that are installed where as **pacakge.json** contains the approx versions.

**node modules** contains all the code of all the dependencies that is fetched from npm. 

**Transitive dependencies**: we required parcel, so we have node module of parcel downloaded, but this module has more dependencies, which further have more dependecies, hence all those dependencies are also downloaded in the node modules.

Every node module, have their own **pacakage.json** which store details about its dependencies.

We should not put our node modules to git but we should put package.json and pacakge-lock.json as they are maintaining the configurations of all the dependencies required because of hwhich we can regenerate the node modules.

We can use **npm install** to regenerate all the node module from pacakge.json.

**Whatever we can regenerate dontput it on git**



