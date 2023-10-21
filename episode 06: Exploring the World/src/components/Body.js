import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import resList from "../utils/mockData";

const Body = () => {
   
  const [listOfRestaurant, setListOfRestaurant] = useState([]);

  useEffect(()=>{
    setListOfRestaurant(resList);
  },[]);


    return (
      <div className="body">
        <div className="filter">
          <button 
            className="filter-btn" 
            onClick={()=>{
              const filteredRestaurant = listOfRestaurant?.filter(
                (res) => res.info.avgRating>4
              );
              setListOfRestaurant(filteredRestaurant);
            }}
          >
            Top Rated Restaurants 
          </button>
        </div>
        <div className="res-container">
          {
            listOfRestaurant.map((restaurant)=>(<RestaurantCard key={restaurant.info.id} resData={restaurant} />))
          }
        </div>
      </div>
    );
  };

export default Body;