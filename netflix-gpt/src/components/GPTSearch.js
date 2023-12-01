import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BG_URL } from '../utils/constants'

const GPTSearch = () => {
  return (
    <div>
        <div className="absolute -z-20">
        <img
          src={BG_URL}
          alt="logo"
        />
      </div>
    <GptSearchBar/>
    <GptMovieSuggestions/>
    </div>
  )
}

export default GPTSearch