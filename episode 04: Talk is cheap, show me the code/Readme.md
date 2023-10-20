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

# CSS

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

# Props

props is a short form for properties.

they are argumnets to the function.

**Config driven UI**: swiggy data

UI + data = frontend.

key is a unique keyword.

It takes a big peformence hit  if we dont add a key because it renders whole objects.

We can also use index as the key. This index is the property of the map. This logically looks right, but react itself says that **we sHould not use indx as keys in react**

**Index  as a key is an anti pattern**

If we dont have a unique ID, we can use indexes but it is not recommended.