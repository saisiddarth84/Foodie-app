import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { CUISINE_API } from "../utils/constants";
import { useSelector } from "react-redux";
import useCuisineResData from "../utils/useCuisineResData";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
const CuisineResCard = () => {

    const {cuisineName} = useParams();
    const {entityId} = useParams();

    const cuisineData = useCuisineResData(cuisineName, entityId);
    console.log(cuisineData);



    if(cuisineData === null){
        return <div></div>
    }

    return (
        <div className="m-20 flex flex-col gap-3">
            <div className="text-4xl font-semibold ">{cuisineName}</div>  
            <div className="text-gray-400 ">{cuisineData[0]?.card?.card?.description}</div>
            <div className="text-xl font-medium mt-4">Restaurants to explore</div>
            <div className="flex flex-wrap justify-center items-center gap-14 max-md:scale-95 ">
          {cuisineData.filter(data => data.card.card['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.Restaurant').map((restaurant) => (
            <Link
              className="w-96 bg-slate-50 p-4 rounded"
              key={restaurant.card.card.info.id}
              to={"/restaurant/" + restaurant.card.card.info.id}
            >
                <RestaurantCard resData={restaurant.card.card.info} />
            </Link>
          ))}
        </div>
        </div>
    )
}

export default CuisineResCard;