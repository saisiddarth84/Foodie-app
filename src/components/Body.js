import RestaurantCard, { withTopRated } from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurantList from "../utils/useRestaurantList";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  //Local State Variable - Super powerful variable
  // State variables are meant to be created inside the functional component on Higher level which is best practice
  //const [listOfRestaurants, setListofRestaurant] = useState([]);
  const [filteredRestaurants, setFilteredRestaurant] = useState([]);
  const [topRatedRestaurants, setTopRatedRestaurant] = useState([]);

  const [isClicked, setIsCliked] = useState(false);
  const [buttonStyle, setButtonStyle] = useState({
    backgroundColor: "#f0f0f0",
  });
  const [searchText, setSearchText] = useState("");

  // Whenever state variables update , react triggers a reconcialiation cycle(re-renders the component)

  const RestaurantCardTopRated = withTopRated(RestaurantCard);

  const listOfRestaurants = useRestaurantList();

  if (!filteredRestaurants.length && listOfRestaurants) {
    setFilteredRestaurant(listOfRestaurants);
  }

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <h1>Looks like your offline!!! Please check you internet connection;</h1>
    );
  }


  const handleClick = () => {
    if (!isClicked) {
      const filteredList = listOfRestaurants.filter(
        (res) => res.info.avgRating > 4.3
      );
      setFilteredRestaurant(filteredList);
      setIsCliked(true);
      setButtonStyle({ backgroundColor: "#ff9305" });
      setTopRatedRestaurant(filteredList);
    } else {
      setFilteredRestaurant(listOfRestaurants);
      setIsCliked(false);
      setButtonStyle({ backgroundColor: "#f0f0f0" });
      setTopRatedRestaurant([]);
    }
  };

  // Conditional Rendering

  return listOfRestaurants === null ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex justify-center items-center gap-40 m-8 ">
        <div className="search">
          <input
            className=" bg-slate-100 mx-4 py-2 px-4  border-gray-400 outline-lime-500"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            placeholder="Search Restaurant"
          />
          <button
            className=" bg-blue-200 p-2 rounded-md"
            onClick={() => {
              let list =
                isClicked === false ? listOfRestaurants : topRatedRestaurants;
              const searchList = list.filter((restaurant) =>
                restaurant.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(searchList);
            }}
          >
            Search
          </button>
        </div>
        <div className="filter">
          <button
            className="p-2 rounded-md"
            onClick={handleClick}
            style={buttonStyle}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-14">
        {filteredRestaurants.map((restaurant) => (
          <Link
            className="w-96"
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            {restaurant.info.avgRating > 4.5 ? (
              <RestaurantCardTopRated resData={restaurant.info}  /> 
              ):(
                <RestaurantCard resData={restaurant.info} />
              ) 
            }
          </Link>
        ))}
      </div>
    </div>
  );
};

// not using keys(not acceptable) <<<<< index as key <<<<<<<<<<<<< unique id (best practice)
export default Body;
