The first this always is to plan. Then only start writing the code.

Try to build the wireframe.
Think about the components

- header
  - logo
  - nav Items
- Body
  - Search
  - restaurant container
  - restaurant card
- footer
  - Copyright
  - Links
  - Address
  - Contact

the inline styles will be an object.

style={{backgroundColor: "grey"}}

This is same as writing:

const s ={
  backgroundColor: "grey"
};

style={s}

props is a short form for properties.

they are argumnets to the function.

**Config driven UI**: swiggy data

UI + data = frontend.

key is a unique keyword.

It takes a big peformence hit  if we dont add a key because it renders whole objects.

We can also use index as the key. This index is the property of the map. This logically looks right, but react itself says that **we sHould not use indx as keys in react**

**Index  as a key is an anti pattern**

If we dont have a unique ID, we can use indexes but it is not recommended.