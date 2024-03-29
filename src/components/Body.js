import RestaurantCard, { withPromoted } from "./RestaurantCard";
import { useState, useContext, useEffect } from "react";
import ShimmerUI from "./ShimmerUI";
import { Link, useLocation } from "react-router-dom";
import useRestaurantList from "../utils/useRestaurantList";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "./Carousel";
import useCarouselList from "../utils/useCarouselList";

const Body = () => {
  const latitude = useSelector((store) => store.cart.latitude);
  //Local State Variable - Super powerful variable
  // State variables are meant to be created inside the functional component on Higher level which is best practice
  //const [listOfRestaurants, setListofRestaurant] = useState([]);
  const [filteredRestaurants, setFilteredRestaurant] = useState([]);
  const [topRatedRestaurants, setTopRatedRestaurant] = useState([]);

  const [isClicked, setIsClicked] = useState(false);
  const [searchText, setSearchText] = useState("");
  const { loggedInUser, setUserName } = useContext(UserContext);

  // Whenever state variables update , react triggers a reconcialiation cycle(re-renders the component)

  const RestaurantCardPromoted = withPromoted(RestaurantCard);

  const listOfRestaurants = useRestaurantList();

  useEffect(() => {
    console.log("effect");
  }, [latitude]);

  if (
    (!filteredRestaurants.length && listOfRestaurants) ||
    (listOfRestaurants &&
      !isClicked &&
      filteredRestaurants[0].info.areaName !==
        listOfRestaurants?.[0].info.areaName)
  ) {
    console.log("enter");

    setFilteredRestaurant(listOfRestaurants);
  }

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <h1 className="text-xl text-center m-auto text-red-500 mt-[20%]">
        Looks like your offline!!! Please check you internet connection..
      </h1>
    );
  }

  const handleClick = () => {
    if (!isClicked) {
      const filteredList = listOfRestaurants.filter(
        (res) => res.info.avgRating > 4.3
      );
      setFilteredRestaurant(filteredList);
      setIsClicked(true);
      setTopRatedRestaurant(filteredList);
    } else {
      setFilteredRestaurant(listOfRestaurants);
      setIsClicked(false);
      setTopRatedRestaurant([]);
    }
  };

  // Conditional Rendering

  return listOfRestaurants === null ? (
    <ShimmerUI />
  ) : (
    <div className="relative">
      <Carousel />
      <div className="mt-4">
        <div className="flex justify-center items-center gap-40 m-8 max-lg:gap-4  max-lg:flex-col ">
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
              className="p-2 bg-slate-200  rounded-md"
              onClick={(e) => {
                e.target.classList.toggle("bg-orange-400");
                handleClick()
              }}
            >
              Top Rated Restaurants
            </button>
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-14 max-md:scale-95 ">
          {filteredRestaurants.map((restaurant) => (
            <Link
              className="w-96 bg-slate-50 p-4 rounded"
              key={restaurant.info.id}
              to={"/restaurant/" + restaurant.info.id}
            >
              {restaurant.info.avgRating > 4.6 ? (
                <RestaurantCardPromoted resData={restaurant.info} />
              ) : (
                <RestaurantCard resData={restaurant.info} />
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

// not using keys(not acceptable) <<<<< index as key <<<<<<<<<<<<< unique id (best practice)
export default Body;
