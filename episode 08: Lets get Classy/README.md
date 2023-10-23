# Episode 08: Lets Get Classy

- We will learn about class based components.

## About Us page.

- Fetch user info from github and display it using class based components.

## Class based component.

- we can create class based component as follows
- class based component is a class that extends React.component and has a render method that returns us the JSX
- ```
  import React from "react";

  class UserClass extends React.Component {
    render() {
      return (
        <div className="user-card">
          <h2>Name: Satbir</h2>
          <h3>Location: Hyderabad</h3>
          <h4>Contact: @ribtas007</h4>
        </div>
      );
    }
  }

  export default UserClass;
  ```
- For passing the props to cbc we need to use constructor method and inside constructor we need to write `super(props)`
- ```
  constructor(props){
    super(props);

    console.log(props);
   }
  ```
- `super(props)` pass the  props to the parent constructor
- we can access the props then using `this` keyword. Eg: `this.props.name`

## creating states

- state was created whenever a class intance was created in cbc 
- loading a cbc means you are creating an instance of the class.
- we create ths state variable also in the constructor using `this.state`
- `this.state` will contain all the state variables
- behind the scenes react combines all the state varaiable into single obj both in cbc and fbc.
- never update state variables directly in cbc. like `this.state.count =1`
- for updating states we have `this.setState`, which can be used anywhere inside the class.
- inside it we can update the state variable.
- ```
  <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 +1,
            });
          }}
        >
          Count Increase
        </button>
  ```
- when the onclick will be clicked react will trigger the reconcialtion process.

## How cbc component is loaded/mounted

- whenever we load the **about** component in the webpage, its start rendering its JSX..
- then while rendering it sees  the `<UserClass\>` cbc present in that JSX.
- so it starts to load the `<UserClass\> `now.
- when loading starts, its creates the instance of `<UserClass\>` component.
- once instance is created, the constructor is called.
- once constructor is called, then `render()` is called that is presnt in `<UserClass\>`.
- this becomes complicated when the parent is also a cbc.
- ```
  import {Component} from 'react';
  class About extends Component{}
  ```
- ```
  import React from 'react';
  class About extends React.Component{}
  ```
- Both the things are same.
- in case  parent is also a cbc `parent constructor` => `parent render` => `child constructor` => `child render` is called.
- we also have componentDidMount() method which is called after the render() method of the respective class.
- `constructor` => `render` => `componentDidMount`
- if we have componentDidMount is presnet in both child and parent then `parent constructor` => `parent render` => `child constructor` => `child render` => `child componentDidMount` => `parent componentDidMount`
- This is because the parent didnt completed the mounting of ts JSX and when it found the child component present in the JSX it started to load it first. hence first child is mounted completely then the parent mounting is completed.

## componentDidMount()

- it is called when a component is loaded/mounted successfully.
- This method is used to execute the tasks which we want to do once the cbc is loaded.
- For eg: to make API calls.
- In fbc , we use UseEffect to make API calls, because react first wants to load the component, then make the API call, then return the result. 
- `render` => API call => `rerender`
- same concept applies here.

## parent with multiple child lifecycle

- when we are using cbc 2 times , both will have different instances.
- **This is the wrong way**

  - parent constructor

     - child1 constructor
     - child1 render
     - child1 componentDidMount

     - child2 constructor
     - child2 render
     - child2 componentDidMount

     - Parent componentdidMount

- **The correct order is**

  - parent constructor

     - child1 constructor
     - child1 render

     - child2 constructor
     - child2 render

     `<DOM is updated in BATCH>`
     - child1 componentDidMount
     - child2 componentDidMount 

     - Parent componentdidMount
- Use this to understand the react lifecycle method. [https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
- React componenent is rendered in 2 phases:
  1. render phase: constructor and render methods are called
  2. commit phase: react updates the dom and then componenetdidMount is called.
- Hence react will  batch the render phase for both the childs togather and complete it first for optimization.
- hence for both the child first render phase will happen and then the commit phase will happen.
- DOM manipulation is the most expensive operation, hence by clubbing the commit phase, it needs to do it once instead of twice.
- everythiing in render phase is happening under the virtual DOM. 

## Making API calls









