import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom"

const Body = () => {
  //Local State Variable - Super powerful variable
  // State variables are meant to be created inside the functional component on Higher level which is best practice 
  const [listOfRestaurants, setListofRestaurant] = useState([]);
  const [filteredRestaurants, setFilteredRestaurant] = useState([]);
  const [topRatedRestaurants, setTopRatedRestaurant] = useState([]);
  
  const [isClicked, setIsCliked] = useState(false);
  const [buttonStyle, setButtonStyle] = useState({backgroundColor: '#f0f0f0'});
  const [searchText, setSearchText] = useState("");
  
  // Whenever state variables update , react triggers a reconcialiation cycle(re-renders the component)

  useEffect(()=>{
    fetchData();
  }, [])

  const fetchData = async() => {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0250302&lng=77.53402419999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
    )

    const json = await data.json();

    const resData = json.data.cards.filter(res => res.card.card?.gridElements?.infoWithStyle?.restaurants)

    const resList= resData[0].card.card.gridElements.infoWithStyle.restaurants

    setListofRestaurant(resList);
    setFilteredRestaurant(resList);
  }
  
  const handleClick = () => {
    if(!isClicked){
      const filteredList = listOfRestaurants.filter(
        (res) => res.info.avgRating > 4.3                
      );
      setFilteredRestaurant(filteredList)
      setIsCliked(true);
      setButtonStyle({backgroundColor: "#ff9305"});
      setTopRatedRestaurant(filteredList);
    } else {
      setFilteredRestaurant(listOfRestaurants)
      setIsCliked(false)
      setButtonStyle({backgroundColor: "#f0f0f0"})
      setTopRatedRestaurant([]);
    }
  }

  // Conditional Rendering

  return listOfRestaurants.length === 0 ? (
   <Shimmer /> 
  ) : (
    <div className="body">
      <div className="search-filter-container">
        <div className="search">
          <input onChange={(e) => {
            setSearchText(e.target.value);
          }} placeholder="Search Restaurant" />
          <button onClick={() => {
              let list = isClicked === false ? filteredRestaurants : topRatedRestaurants;
              const searchList = list.filter(restaurant => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()))
              setFilteredRestaurant(searchList)            
          }}>Search</button>
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
        {filteredRestaurants.map((restaurant) => (
          <Link className="res-card" key={restaurant.info.id} to={"/restaurant/" + restaurant.info.id}>
            <RestaurantCard resData={restaurant.info} /> 
          </Link>
        ))}
      </div>
    </div>
  );
};

// not using keys(not acceptable) <<<<< index as key <<<<<<<<<<<<< unique id (best practice)

export default Body;