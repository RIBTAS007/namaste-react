# Episode 09: Optimizing our App

## Single responsibility function

- if we have an app or function or any module it should handle one single responsibility.
- **modularity** : break code into meaninful components.
- it helps in testing, maintanabilty and reusable.
- for doing this we will use custom hooks.

## Custom hooks

- so in resturant menu component it is fetching as well as displaying the data.
- we can write a custom hook to fetch the data.
- so the responsibility of restuarantMenu would be to just display the data.
- the best place to create hooks is inside the utils since hooks are a helper functions.
- always start with name of the hook file with `use` and keep the hook and the file name same.

## create a hook to check user is online/offline

- first always write a function and see what will be the input and the output in it.
- then just write the logic.
- for doing this we will use an addeventlistener.







