# Episode 13: Time for the Test

- We will get to know how can we write test cases in developer testing.

- Manual Testing: Go to the website and check manually.
- This is not good, because everytime we write a new code in our application we cant check the whole app again.
- A single line of code can effect the whole application.

- write code to test the code.
- Their are 3 types of test that we can do in our react application.

## Types of Testing(developer)

1. **Unit Testing** : Test your react components in isolation.
2. **Integration Testing**: Testing the integration of the component. When multiple components are involved and the flow is working properly.
3. **End to End testing (E2E Testing)**: Checking the whole app, checking the user flow throughout the app.

- As a developer we are majorly concerned about the Unit testing and the Integration Testing.

## Setup

- We will use React Testing Library which is built on top of DOM testing Library.
- The testing library is automatically included when we use `create-react-app`
- We have built our app from scratch using parcel so we need to integrate it into our code manually.
- Their are lot of libraries are used to make the app along with react.
- React Testing library needs JEST also which is a delightful Javascript Testing Framework.
- JEST uses Babel, so we need to install some additional packages.
- `npm i -D @testing-library/react` for installing React Testing Library
- `npm i -D jest` for installing Jest
- `npm install --save-dev babel-jest @babel/core @babel/preset-env` when using Babel.
- inside babel.config.js we ned to copy the following for configuring Babel.
  - ```
    module.exports = {
      presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
    };
    ```
- Babel is a transpiler and parcel also uses Babel.
- So their will be a conflict between parcel babel and testing Babel configurations.
- hence we need to update parcel and disable babel config that is present inside parcel.
- we need to create parcel.rc file and add the following code:
  - ```
    {
      "extends": "@parcel/config-default",
      "transformers": {
        "*.{js,mjs,jsx,cjs,ts,tsx}": [
          "@parcel/transformer-js",
          "@parcel/transformer-react-refresh-wrap"
        ]
      }
    }
    ```
- Now our testing babel config will be used and parcel babel config will be disabled.
- We can write `npm run test` and it will call jest to start the testing.


