# Episode 20: useMemo, useCallback, useRef Hooks

## useMemo

- **useMemo** is a react hook that lets you cache the result of a calculation between rerenders.
- when we update our state our component rerenders.
- if we use strict mode our component will get called twice but it would not happen in production.
- say we have button to change the theme and we also are performing some heavy operation like calculating nth prime number.
- so now when we change the theme the prime number calculation again happens which is not required.