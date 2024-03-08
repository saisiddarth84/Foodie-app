import RestaurantCard from "./RestaurantCard";
import data from "../../data.json";

const resList = data.card.card.gridElements.infoWithStyle.restaurants;

const Body = () => {
  let listOfRestaurants = resList;

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
            onClick={() => {
              listOfRestaurants = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4
              );

              console.log(listOfRestaurants);
            }}
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
