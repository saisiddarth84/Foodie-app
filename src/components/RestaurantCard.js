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
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
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
