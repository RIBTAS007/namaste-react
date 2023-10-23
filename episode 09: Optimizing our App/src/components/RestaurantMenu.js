import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
const {resId} = useParams();
console.log(resId);

  useEffect(() => {
    fetchMenu();
  }, []);

  const abc = MENU_API+
  {resId}
  "&catalog_qa=undefined&submitAction=ENTER";
  console.log("abc");
  console.log(abc);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { carousel } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card.card;
  
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card.card;


  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{costForTwoMessage}</h3>
      <h2>Menu</h2>
      <ul>
        {carousel?
        carousel?.map((item) => (
          <li key={item.bannerId}>{item.title} - {item.dish.info.price/100}</li>
        )):
        itemCards?.map((item) => (
            <li key={item.card.info.id}>{item.card.info.name}</li>
          ))
        
        }
      </ul>
    </div>
  );
};

export default RestaurantMenu;
