import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
    const { resData } = props;
    const { name, cuisines, avgRating, sla, costForTwo, cloudinaryImageId } =
      resData.info;
  
    const costForTwoNumeric = parseInt(
      costForTwo.replace("₹", "").replace(" for two", "")
    );
    const costForOne = (costForTwoNumeric / 2).toFixed(2);
  
    return (
      <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200" >
        <img
          className="rounded-lg"
          alt="food-image"
          src={
            CDN_URL +
            cloudinaryImageId
          }
        />
        <h3 className=" font-bold py-2 text-lg">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{sla.deliveryTime} minutes</h4>
        <h4>Cost: ₹{costForOne}</h4>
      </div>
    );
  };

  export default RestaurantCard;