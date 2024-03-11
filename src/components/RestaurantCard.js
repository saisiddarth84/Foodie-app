import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { 
    name,
    cuisines,
    avgRating, 
    costForTwo, 
    cloudinaryImageId, 
    sla 
  } = resData;

  return (
    <div>
      <img
        className="res-logo"
        alt="res-logo"
        src={
          CDN_URL + cloudinaryImageId
        }
      />

      <div className="res-details">
        <h2>{name}</h2>
        <p>{cuisines.join(", ")}</p>
        <h4>{avgRating + " Rating"}</h4>
        <h4>{costForTwo}</h4>
        <h5>{sla?.slaString}</h5>
      </div>
    </div>
  );
};

export default RestaurantCard;
