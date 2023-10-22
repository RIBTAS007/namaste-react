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

