import { CDN_URL } from "../utils/constants";
import starLogo from "../../assets/images/star-rating.png"

const RestaurantCard = (props) => {
  const { resData} = props;

  const { 
    name,
    cuisines,
    avgRating, 
    costForTwo, 
    cloudinaryImageId, 
    sla 
  } = resData;


  return (
    <div data-testid="restCard">
      <img
        className="w-full h-60 object-cover rounded-2xl"
        alt="res-logo"
        src={
          CDN_URL + cloudinaryImageId
        }
      />

      <div className="flex flex-col gap-2 px-2 mt-4">
        <h2 className="font-bold text-2xl ">{name}</h2>
        <div className="flex items-center gap-10">
        <div className="flex items-center gap-2 font-medium">
          <img className="w-5" src={starLogo} />
          {avgRating + " Rating"} 
        </div>
        <div>
            {sla?.slaString}
        </div>
        </div>
        <p className="w-80">{(cuisines.length > 4 ? cuisines.splice(3,3) : cuisines).join(", ")}</p>
        <div className="font-medium mt-2">{costForTwo}</div>
      </div>
    </div>
  );
};

// Higher Order Component

// input - RestaurantCard => RestaurantCardPromoted

export const withPromoted = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute overflow-hidden bg-black text-fuchsia-50 p-1 top-1 rounded-lg">Promoted</label>
        <RestaurantCard {...props}/>
      </div>
    );
  };

}

export default RestaurantCard;
