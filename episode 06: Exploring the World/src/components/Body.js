import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
   
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] =useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData = async () =>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    // Optional chaining.
    setListOfRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  // Conditional rendering.
  // if(listOfRestaurant.length===0){
  //   return <Shimmer/>
  // }

    return listOfRestaurant.length===0?<Shimmer/>:(
      <div className="body">
        <div className="filter">
          <div className="search">
            <input 
              type="text" 
              className="search-box" 
              value={searchText}
              onChange={(e)=>{
                setSearchText(e.target.value);
              }}
              />
            <button onClick={()=>{
                const filteredRestaurant = listOfRestaurant?.filter(
                  (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilteredRestaurant(filteredRestaurant);
                }}>
              Search
            </button>
          </div>
          <button 
            className="filter-btn" 
            onClick={()=>{
              const filteredRestaurant = listOfRestaurant?.filter(
                (res) => res.info.avgRating>4
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Top Rated Restaurants 
          </button>
        </div>
        <div className="res-container">
          {
            filteredRestaurant.map((restaurant)=>(<RestaurantCard key={restaurant.info.id} resData={restaurant} />))
          }
        </div>
      </div>
    );
  };

export default Body;