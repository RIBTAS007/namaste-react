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