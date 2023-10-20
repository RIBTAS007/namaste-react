# Episode 04: Talk is cheap, show me the code!

## Food ordering App

- The first this always is to plan. Then only start writing the code.
- Try to build the wireframe. Think about the components
- The following will be our general layout:
    - header
        - logo
        - nav Items
        - about
    - Body
        - Search
        - restaurant container
        - restaurant card
            - image
            - rating
            - price
            - delivery time
    - footer
        - Copyright
        - Links
        - Address
        - Contact

## CSS

- the inline styles will be an object.
- Eg: `style={{backgroundColor: "grey"}}`
- The outer bracket denotes that its JS code, the inner bracket denotes that its a n object.
- This is same as writing:
- ```
    const s ={
    backgroundColor: "grey"
    };

    style={s}
    ```

## Props

- props is a short form for properties.
- they are arguments to the functional components.
- We use it to passing dynamic data.
- we can pass any number of props.
- writing the prop names at the `()` is called **destructuring on the fly**.
- eg: `const abc = ({prop1, prop2}) => {...};`
- We can also write it like `const {prop1, prop2} = props;`

## How does data comes in Big Apps ?

- Go to [swiggy.com](swiggy.com) and click on inspect -> network tab -> Fetch/XHR.
- You will see the v5?lat API , in that go to the preview -> data section.
- **Config driven UI**: swiggy data
- UI + data = frontend.

##  Key and Map

- key is a unique keyword and we should always use it whenever we are using map.
- It takes a big peformence hit if we dont add a key because **it renders all object elements**.
- We can also use index as the key. 
- This index is the property of the map. 
- It logically looks right, but react itself says that **we should not use index as keys in react**
- **Index  as a key is an anti pattern**
- If we dont have a unique ID, we can use indexes but it is not recommended.