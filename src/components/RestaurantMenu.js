import useRestaurantMenu from "../utils/useRestaurantMenu";
import ShimmerCard from "./ShimmerCard";
import RestaurantCategory from "./RestaurantCategory";
import { useParams } from "react-router-dom";
import ShowItem from "./ShowItem";
import { useState } from "react";
import ShimmerMenu from "./ShimmerMenu";
import starLogo from "../../assets/images/star-rating.png";

const RestaurantMenu = () => {
  //const [resInfo, setResInfo] = useState(null);
  //const [categories, setcategories] = useState({});

  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(0);

  const categories = resInfo?.cards
    ?.filter((card) => card.groupedCard)[0]
    .groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (menu) =>
        menu.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  function handleShowIndex(index) {
    if (index === showIndex) {
      setShowIndex(-1);
    } else {
      setShowIndex(index);
    }
  }

  if (resInfo === null) {
    return <ShimmerMenu />;
  }

  const {
    name,
    cuisines,
    areaName,
    costForTwoMessage,
    avgRatingString,
    totalRatingsString,
    cloudinaryImageId,
    sla,
  } = resInfo?.cards.filter(
    (resCard) =>
      resCard?.card?.card["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
  )[0].card.card.info;

  const resCardInfo = {
    resId,
    name,
    areaName,
    cloudinaryImageId,
  };

  return (
    <>
      <div className="my-10 mx-auto w-2/3  shadow-xl p-6 rounded">
        <div className="menu">
          <div className="flex justify-between items-center pb-4 border-dashed border-b-2">
            <div>
              <h1 className=" font-semibold text-3xl">{name}</h1>
              <div>{cuisines.join(", ")}</div>
              <div>
                {areaName} - {sla?.lastMileTravelString}
              </div>
              <div className="flex mt-2 gap-8">
                <div>{sla?.slaString}</div>
                <div>{costForTwoMessage}</div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-center items-center gap-1">
                <img className="w-4" src={starLogo} />
                <div>{avgRatingString}</div>
              </div>
              <div>{totalRatingsString}</div>
            </div>
          </div>
        </div>
        {/* categories accordions*/}
        {categories.map((category, index) => (
          //controlled component
          <RestaurantCategory
            key={category.card.card.title}
            data={category.card.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => handleShowIndex(index)}
            resInfo={resCardInfo}
          />
        ))}
      </div>

      <ShowItem />
    </>
  );
};

export default RestaurantMenu;
