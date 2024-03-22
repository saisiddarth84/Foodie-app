import RestaurantCard, { withPromoted } from "./RestaurantCard";
import { useState, useContext, useEffect } from "react";
import ShimmerUI from "./ShimmerUI";
import { Link, useLocation } from "react-router-dom";
import useRestaurantList from "../utils/useRestaurantList";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useDispatch, useSelector } from "react-redux";

const Body = () => {
  const latitude = useSelector((store) => store.cart.latitude);
  //Local State Variable - Super powerful variable
  // State variables are meant to be created inside the functional component on Higher level which is best practice
  //const [listOfRestaurants, setListofRestaurant] = useState([]);
  const [filteredRestaurants, setFilteredRestaurant] = useState([]);
  const [topRatedResstaurants, setTopRatedRestaurant] = useState([]);

  const [isClicked, setIsCliked] = useState(false);
  const [buttonStyle, setButtonStyle] = useState({
    backgroundColor: "#f0f0f0",
  });
  const [searchText, setSearchText] = useState("");
  const { loggedInUser, setUserName } = useContext(UserContext);

  // Whenever state variables update , react triggers a reconcialiation cycle(re-renders the component)

  const RestaurantCardPromoted = withPromoted(RestaurantCard);


  const listOfRestaurants = useRestaurantList()

  useEffect(() => {
    console.log('effect')
    
  }, [latitude]);



 

  if (
    (!filteredRestaurants.length && listOfRestaurants) ||
    (listOfRestaurants &&
      filteredRestaurants[0].info.areaName !== listOfRestaurants?.[0].info.areaName)
  ) {
    setFilteredRestaurant(listOfRestaurants);
  }

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <h1 className="text-xl text-center m-auto">
        Looks like your offline!!! Please check you internet connection;
      </h1>
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
    <ShimmerUI />
  ) : (
    <>
    {console.log(listOfRestaurants, 'list')}
      <div className="mt-4">
        <div className="flex justify-center items-center gap-40 m-8 ">
          <div className="search">
            <input
              type="text"
              data-testid="searchInput"
              className="bg-slate-100 mx-4 py-2 px-4  border-gray-400 outline-lime-500"
              value={searchText}
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
        <div className="flex flex-wrap justify-center items-center gap-14">
          {filteredRestaurants.map((restaurant) => (
            <Link
              className="w-96 bg-slate-100 p-4 rounded"
              key={restaurant.info.id}
              to={"/restaurant/" + restaurant.info.id}
            >
              {restaurant.info.avgRating > 4.5 ? (
                <RestaurantCardPromoted resData={restaurant.info} />
              ) : (
                <RestaurantCard resData={restaurant.info} />
              )}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

// not using keys(not acceptable) <<<<< index as key <<<<<<<<<<<<< unique id (best practice)
export default Body;
