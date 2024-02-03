# Episode 20: useMemo, useCallback, useRef Hooks

## useMemo

- **useMemo** is a react hook that lets you cache the result of a calculation between rerenders.
- when we update our state our component rerenders.
- if we use strict mode our component will get called twice but it would not happen in production.
- say we have button to change the theme and we also are performing some heavy operation like calculating nth prime number.
- so now when we change the theme the prime number calculation again happens which is not required.
- `const prime = useMemo(() => findNthPrime(text),[text] )`;
- now the prime will have the cached/memoized value of the prime number returned by the function.
- `[text]` is a dependency variable, means that the value in prime will get updated or rerendered , in other word the Nthprime calculation fnction will be called only when the text value changes.

## useCallback

- similar to usememo , instead of caching the result, it caches the function definition between rerenders.

## useref

- lets you reference a value that is not used for rendering.
- so if we have a variable defined using let keyword and we try to update it, it will get updated and will be visible in console.log , but since the state is not rerendered the update value will not be shown in the UI.
- so thats hwy to renreder theupdated value we use a state variable.
- say x is a let var and y is a state var created in a component.
- when we update x it is not updated in UI but when we update y it is updated in UI since it is a state variable.
- also since on updating the y rerender happens the value of x is also reinitialized.
- now say if we dont want our x to rerender when we upate y then we can use the useref hook.
- ref is not a normal variable it behaves like an object.
- when we write like `const ref = useref(0)` then it is not like ref = 0 , it is like ref = {current:0}
- say we use setinterval using which I want to do console log in very one second.
- **Case1**: if i dont do garbage collecetion it will keep running even if we change the page and go to another page.
- **Case2**: if we use grabage collector then it will stop when we switch the page and gain start when we come back to the page.
- **case3**: I want to create a buton that stops it. here we can use the useref.