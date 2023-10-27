# Episode 11: Data is the new Oil

## High order component

- HOC is a function that takes a component and returns a component.
- It enhances the input component and returns it back.

## 

- we will take our existing card and write HOC that will return a card with discounted label.
- input: restaurant card , output: discount label. eg:
- ```
  export const withDiscountedLabel = (RestaurantCard) => {
    return (props) => {
      return (
        <div>
          <label>Discount Available</label>
          <RestaurantCard {...props} />
        </div>
      );
    };
  };
  ```
- we need to pass the props from where it is called , and then pass it to the RestaurantCard.
- using {...props} will pass all the props that we have received.
- These higher order functions are **Pure functions**, means it will not change the behaviour of the RestaurantCard, it is just add something using it.

## React layers

- UI and data layer is present in React, UI layer is powered by the data layer.
- so managing data layer is the main thing like state variable, props etc.

## Building the item menu page

- accordian component is the one that expands and collapses.
   - accordian header - menu title
   - accordian data - menu items - `<ItemList/>`
- Next step is that if one accordian opens , all others should minimize automatically.
- for doing this we will lift up the state.
- Also, if the accordian is already opened, if we click on it again, it should close.

## Controlled and uncontrolled components

- the restaurantMenu component is controlling whether restaurantCard accordian should expand or not by passing a state. Hence we will call the RestaurantCard as a controlled component.

## Props drilling

- passing data fom one commponent is a big issue in a large app.
- react is a one way data stream, you can pass data from one component to its child or parent.
- this concept is known as **props drilling** since we are drilling th props down from the parent to next child to its child and to the bootom most component.
- we should always avoid prop drilling.
- The solution to this using **React Context**

## React Context

- it is a global space where we store our data and any of the app components are able to access the data from it.
- loggedIn user info, app theme are some exaples of data that we need to use everywhere, so for this we can build a context.

