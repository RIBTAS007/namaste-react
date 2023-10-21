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
      <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
        <img
          className="res-logo"
          alt="food-image"
          src={
            CDN_URL +
            cloudinaryImageId
          }
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{sla.deliveryTime} minutes</h4>
        <h4>Cost for one person: ₹{costForOne}</h4>
      </div>
    );
  };

  export default RestaurantCard;