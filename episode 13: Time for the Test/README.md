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

## Setup Summary

- Install react testing library
- Installed jest
- Installed Babel dependencies
- Configure Babel
- Configure Parcel config file to diable default babel configuration
- Jest - npx jest --init
- Install jsdom library
- Install @babel/preset-react - to make JSX work in test cases
- Include @babel/preset-react inside babel config
- npm i -D @testing-library/jest-dom

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

## Configure jest and jsdom

- write `npx jest --init` for configuring jest.

- ```
  The following questions will help Jest to create a suitable configuration for your project

  ✔ Would you like to use Typescript for the configuration file? … no
  ✔ Choose the test environment that will be used for testing › jsdom (browser-like)
  ✔ Do you want Jest to add coverage reports? … yes
  ✔ Which provider should be used to instrument code for coverage? › babel
  ✔ Automatically clear mock calls, instances, contexts and results before every test? … yes
  ```
- the test cases does not run on browsers, so they need a runtime env to run, so we will use it in jsdom, which will give superpowers of a browser.
- We also need to install jsdom library using `npm i --save-dev jest-environment-jsdom` if we are using jest ver >28

## Writing dummy test

- we can create a folder `__tests__` and write any file inside it.
- we can also create a file as follows:
   - header.test.js
   - header.test.ts
   - header.spec.js
   - header.spec.ts
- all these would be considered as testing files.
- `__` is known as dunder
- In the test file we write a test function which takes 2 arguments:
   - description the test as String
   - callback function that writes the test and includes:
       - **Assertion**: `expect(res).toBe(7);`

## checking contact page is loaded or not

- whenever we are testing a UI component in react we have to render it first into JSDom.
- for this we need to use render() that takes argument of the component to be rendered.
- whatever is rendered can be accessed through screen and we can use screen.get
- for using JSX inside test file we need to install `npm i -D babel/preset-react`


## to be in the document is not a function

- since we are trying to render our component onto JS Dom and we are trying to find the heading inside the rendered screen.
- we need to use a testing library named **testing-library/jest-dom**
- whenever a test fails the jest shows what was rendered on the screen.
- when we do console.log(), it will return us the JSX object.
- when we want to checkk multiple elements we will write getByAll otherwise we use getBy.

## **render** -> **query** -> **assert**

- we can group multiple test cases using describe().
- we can even have describe inside describe for nested grouping.
- we can also write `it` in place of writing `test`. `it` is just an alias for test.
- we dont need to pass coverages folder into git so we can ignore it.

## Header

- When we load header the cart should have 0 items
- Could not find react-reduc context value.
  - we are rendering header component in isolation in the JSDOM
  - It understands JSX but does not know redux.
  - Hence we need to provide the redux store to our header.

- Error occured in Link component
  - This link is coming from react router dom.
  - so we need to provide of react router dom context also.
  - we will use browserRouter for this.

- we can also use regex

- check login and logout toggle when we click on the login button.
- for these cases where event handler is required we can use **fireEvent**.

- when we want to create components with props we need to create mock data.

## Integration testing

- testing multiple components togather.
- check the search flow: As soon as body loads it shows 20 cards, after serach it shows 4 cards.

## fetch is not defined

- when we write react component test, it renders it on jsDom and not on browser.
- fetch is a superpower of browsersAPI not of JSDom, it cannot understand it.
- we need to write mock fetch function.
- fetch function returns us a promise and promise returns us a json and we convert it into a json and it returns promise once again.
- `npm run jest --watch` runs the test when we do some changes automatically.
- suppose we have describe and it runs multiple test, jets  gives a feature to run something before all the tests using **BeforeAll()** and **beforeEach()** for running something before each test executes.
- similarly we have **AfterAll()** and **AfterEach()**
- when we click on add item, the cart header updates and the cart page updates. We will  test it.
- we can use data-testId to get unique components.









