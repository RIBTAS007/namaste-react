# Episode 12: Lets Build Our Store

- we will learn about redux

## Introduction

- Redux works in the data layer of our app
- Redux is not mandatory in react apps.
- when we have a lot of data transfer in scale then only redux is required.
- redux is a seperate library and react is a seperate library.
- **zustand** is an alternative of redux.
- similar to **react dev tools** we have **redux dev tools** also

## Getting started

- Redux offers state management.
- we will use react-redux and redux-toolkit
- redux-toolkit is the new way of writing redux. It is now the standard way.
- redux was too complicated , redux-toolkit simplifies it.
- less pacakages and boilerplate code.
- redux toolkit is also refered as rtk.
- we will make a functionality to add items to the cart.
- when we click on it we will go into the cart page.
- to store all the cart info we will use the redux store.

## Architecture of Redux.

- Redux store is a big object kept in a central global space.
- Any component of our app can do the read and write operation in it.
- Since our redux store can have lots of data, we break it into slices.
- slices are logical partition done on redux.
- For eg: we can have a slice for maiintaing the cart infor, another slice for the website theme, another slice for the user info etc. All these slices will be present inside the redux store.
- When we click on the **Add** button in our app, it dispatches an action.
- The action then calls the reducer function.
- The reducer function then updates the cart slice present in our redux store.
- Now after the cart info is updated in the redux store we need to read the updated data and display it into our UI.
- For doing this we use **Selector**
- It takes the data from the slice and sends to the UI. This phenomenon is known as **subscribing to the store**
- We will say the header component is subscribed to the store, which means that it is in sync with the store.
- If the data in the store gets updated, it will automatically be updated on header also.
- We **Subscribe** using a selector.

- **Add** -> `Click` -> it dispatches an action -> `calls a reducer function` -> function updates the cart slice presnt in redux store -> `selector` -> updates the UI.

## Todo

- Install **@reduxjs/toolkit** and **react-redux**
- Build our own store
- connect the store to our app
- create a cart slice
- dispatch(action)
- Selector

## Building our store

- we will build our store inside utils.
- creating the store: `const appStore = configureStore();`
- the configureStore() will come from redux toolkit
- inside configureStore we can add our slices.
- for connecting the store we will use **Provider** that comes from react-redux.
- we can wrap the components inside it wherever we need to use the store.
- eg: `<Provider store={appStore}> .....</Provider>`

## Creating a slice

- for creating a slice we can use the **createSlice** function that is provided by redux toolkit.
- Inside it we can define the name of the slice, the initialState tht basically tells what will the initial state of the variables and the reducers.
- **Reducers** is basically an object that contains different reducer functions and each function is mapped to an action. Like for eg: **addItem** is an action.
- ```
  import { createSlice } from "@reduxjs/toolkit";

    const cartSlice = createSlice({
        name: "cart",
        initialState:{
            items:[]
        },
        reducers:{
            addItem: (state,action) => {
                state.items.push(action.payload);
            },
            removeItem: (state) => {
                state.items.pop();
            },
            clearCart: (state) => {
                state.items.length = 0;
            },
        },
    });

    export const {addItem, removeItem, clearCart } = cartSlice.actions;

    export default cartSlice.reducer;
  ```
- create slice will return an object in the cart slice. It will look like:
-   ```
    cartSlice = {
        actions: {
            addItem
        },
        reducer
    }
    ```
- so we are just extracting our functions from the actions.
- and we are also exporting our reducer from cart slice.

- Our store will have its own reducer and the slices will have their own reducer which is responsible for modifying the whole store and this reducer combines the reducer of the slices.
- So we will import the reducer of the slice and will add it inside the reducr of the store.

- for displaying the slice data/variables into our component, i.e. for subscribing the store, we will use selector.
- **useSelector()** is a hook inside react, this hook is present in react-redux.
-`const cartItems = useSelector((store)=>store.cart.items);`
- hence for reading a data from the redux store we use the useSelector hook.

- for writing/updating something into the redux store we use the **useDispatch()** hook.
- ```
  const dispatch = useDispatch();

   handleAddItem = ()=>{
      // dispatch an action
      dispatch(addItem("pizza"));
   };
  ```
- so BTS redux stores pizza inside an object and then sends it to the slice.
- in the slice , inside the reducer function, it is passed into action and we access it as action.payload.
-   ```
    {
        payload: "pizza"
    }
    ```

## what is the difference between the following ?

-   ```
    onClick={handleAddItem}
    onClick={() => handleAddItem(item)}
    onClick={handleAddItem(item)}
    ```
- The first version doesn't pass any arguments.
- The second version passes the item as an argument using an arrow function.
- The third version is not valid and shouldn't be used for event handling in React.

## Mistake in useSelector

- whenever using a selector, make sure you are subscribing to the right portion of the store.
- other wise it will be a big performance loss.
-  ``` 
    const cartItems = useSelector((store)=>store);
    const cart = store.cart.item
   ```
- We could have written like this also but it would be a big performance loss.
- Now the store variable gets subscribed to the redux store instead of getting subscribed to the cartSlice.
- hence whenever something gets updated in the store, the store var will be updated.

## Reducer vs Reducers

- when we are creating the app store, then we use the keyword `reducer` because we have one big reducer for the store containing multiple slice reducers.
- when we are writing slice, we are creating multiple reducers, hence we use `reducers` inside slice.
- while export also we write `reducer` and not `reducers`.

## Mutate state in Redux

- In Vanilla Redux we used to get a warning **Dont Mutate State**
- so we used to write as follows
- ```
  addItem: (state,action) =>{
    const newState = {...state};
    newState.items.push(action.payload);
    return newState;
  }
  ```
- we used to make copy of the current state and return it after updating it, we didnt directly changed the current state as we are doing currently.
- In older version or redux we didnt mutate the state, in new version we need to mutate the state and returning is not mandatory.
- in new version redux is converting our code to old code BTS and processing it.
- Redux use **Immer library** to do it. It helps to find the difference between the original state and the mutated state and returns us the new immutable state. 

## state mutate example

- RTK - either mutate the existing state or return a new state.
- ```
  // originalState = ["pizza"]
  clearCart: (state) => {
    state.items.length = 0;  // Method 1 : will work correctly

    return (items: []); // Method 2 will work correctly

    state= []; // Method 3 it will NOT work
  }
  ```
- If we write like `state=["abc"]` it will not work, since we are not modifying/mutating the actual state, we are just updating the local variable `state` that is being used inside the clearCart function.

## redux dev tools

- used for debugging redux code.
- you can read about RTK Query for fetching and manipulating API data.




