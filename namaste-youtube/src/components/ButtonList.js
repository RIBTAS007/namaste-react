import React from "react";
import Button from "./Button";

const list = [
  "all",
  "Gaming",
  "Songs",
  "Live",
  "Soceer",
  "Cricket",
  "Cooking",
  "News",
  "Fashion",
];

const ButtonList = () => {
  return (
    <div className="flex">
      {list.map((item) => (
        <Button key ={item} name={item}></Button>
      ))}
    </div>
  );
};

export default ButtonList;
