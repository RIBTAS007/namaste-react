import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_URL } from "../utils/constants";

const GPTSearch = () => {
  return (
    <>
      <div className="fixed -z-20">
        <img className='min-h-screen object-cover' src={BG_URL} alt="logo" />
      </div>
      <div className="pt-[30%] md:pt-[5%]">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};

export default GPTSearch;
