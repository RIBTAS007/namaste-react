import React, { useMemo, useState } from "react";
import { findNthPrime } from "./helper";

const DemoUseMemo = () => {
  const [text, setText] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  
  // without usememo 
  // const prime = findNthPrime(text);
  
  // withuseMemo
  const prime = useMemo(() => findNthPrime(text),[text]);
    

  return (
    <div
      className={
        "m-4 p-2 w-96 h-96 border border-black " +
        (isDarkTheme && "bg-gray-900 text-white")
      }
    >
      <div>
        <button
          className=" p-2 m-4 bg-green-600"
          onClick={() => setIsDarkTheme(!isDarkTheme)}
        >
          Toggle
        </button>
      </div>
      <div>
        <input
          className={
            "border border-black w-72 px-2" + (isDarkTheme && " text-black")
          }
          type="number"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div>
        <h1>nth Prime: {prime}</h1>
      </div>
    </div>
  );
};

export default DemoUseMemo;
