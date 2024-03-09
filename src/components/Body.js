import RestaurantCard from "./RestaurantCard";
import data from "../../data.json";
import { useState } from "react";

const resList = data.card.card.gridElements.infoWithStyle.restaurants;

const Body = () => {
  //Local State Variable - Super powerful variable
  const [listOfRestaurants, setListofRestaurant] = useState(resList);
  const [isClicked, setIsCliked] = useState(false);
  const [buttonStyle, setButtonStyle] = useState({backgroundColor: 'f0f0f0'})

  const handleClick = () => {
    if(!isClicked){
      const filteredList = listOfRestaurants.filter(
        (res) => res.info.avgRating > 4.2                );
      setListofRestaurant(filteredList);
      setIsCliked(true);
      setButtonStyle({backgroundColor: "#ff9305"})
    } else {
      setListofRestaurant(resList)
      setIsCliked(false)
      setButtonStyle({backgroundColor: "#f0f0f0"})
    }
  }
 
  return (
    <div className="body">
      <div className="search-filter-container">
        <div className="search">
          <input placeholder="Search Restaurant" />
          <button>Search</button>
        </div>
        <div className="filter">
          <button
            className="filter-btn"
            onClick={handleClick}
            style={buttonStyle}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />
        ))}
      </div>
    </div>
  );
};

// not using keys(not acceptable) <<<<< index as key <<<<<<<<<<<<< unique id (best practice)

export default Body;