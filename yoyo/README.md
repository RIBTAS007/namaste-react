# Episode 12: Lets Build Our Store

- we will learn about redux

## Introduction

- Redux works in the data layer of our app
- Redux is not mandatory in react apps.
- when we have a lot of data transfer in scale then only redux is required.
- redux is a seperate library and react is a seperate library.
- **zustand** is an alternative of redux.
- similar to **react dev tools** we have **redux dev tools** also

## getting started

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
