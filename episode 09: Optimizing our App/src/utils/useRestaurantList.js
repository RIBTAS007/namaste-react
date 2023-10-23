import { useState, useEffect } from "react";
import { RES_LIST_URL } from "./constant";

const useRestaurantList = () =>{

    const [restaurantList, setRestaurantList] = useState([]);

    useEffect(() => {
        fetchData();
      }, []);
    
      const fetchData = async () => {
        const data = await fetch(
         RES_LIST_URL
        );
        const json = await data.json();

        const resList = await json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        setRestaurantList(resList);
      };

    return restaurantList;
}

export default useRestaurantList;