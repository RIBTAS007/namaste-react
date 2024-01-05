import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {

  const dispatch = useDispatch();

  const toggleMenuHandler = () =>{
    dispatch(toggleMenu());
  }

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
        onClick={() => toggleMenuHandler()}
        className="h-8 cursor-pointer"
          alt="menu"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"
        />
        <a href="/">
        <img
        className="h-8 mx-2"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuE54d8krphaVP1AQ1Jd4G1uRqLcA2N81TnA"
          alt="youtube"
        />
        </a>
        
      </div>
      <div className="col-span-10 px-10">
        <input className="w-1/2 border border-gray-500 p-2 rounded-l-full" type="text" />
        <button className="border border-gray-400 py-2 px-5 rounded-r-full bg-gray-100">Search</button>
      </div>
      <div className="col-span-1">
        <img
        className="h-8"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="user icon"
        />
      </div>
    </div>
  );
};

export default Head;
