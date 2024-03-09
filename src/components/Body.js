import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

let restaurantList = [];

const Body = () => {
  //Local State Variable - Super powerful variable
  const [listOfRestaurants, setListofRestaurant] = useState([]);
  const [isClicked, setIsCliked] = useState(false);
  const [buttonStyle, setButtonStyle] = useState({backgroundColor: 'f0f0f0'});


  useEffect(()=>{
    fetchData();
  }, [])

  const fetchData = async() => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0250302&lng=77.53402419999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    )

    const json = await data.json();

    const resData = json.data.cards.filter(res => res.card.card?.gridElements?.infoWithStyle?.restaurants)

    const resList= resData[0].card.card.gridElements.infoWithStyle.restaurants

    restaurantList = resList;

    setListofRestaurant(resList);
  }
  
  
  const handleClick = () => {
    if(!isClicked){
      const filteredList = listOfRestaurants.filter(
        (res) => res.info.avgRating > 4.3                
      );
      setListofRestaurant(filteredList);
      setIsCliked(true);
      setButtonStyle({backgroundColor: "#ff9305"})
    } else {
      console.log(restaurantList)
      setListofRestaurant(restaurantList)
      setIsCliked(false)
      setButtonStyle({backgroundColor: "#f0f0f0"})
    }
  }

  if(listOfRestaurants.length === 0){
    return <Shimmer />
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