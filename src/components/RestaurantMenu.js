import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import MenuCategory from "./MenuCategory";
import { useParams } from "react-router-dom";
import {MENU_API} from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [menuInfo, setMenuInfo] = useState({});

  const {resId} = useParams();
  

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();

    console.log(json);

    setResInfo(json.data);
    setMenuInfo(
      json.data.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.slice(1).filter(menu => menu.card.card.itemCards)
    );
  };

  console.log(menuInfo, 'filter')


  if (resInfo === null) {
    return <Shimmer />;
  }

  const {
    name,
    cuisines,
    areaName,
    costForTwoMessage,
    avgRatingString,
    totalRatingsString,
    sla,
  } = resInfo?.cards[0]?.card?.card?.info;


  return (
    <div className="menu-container">
      <div className="menu">
        <div className="menu-res-details">
          <div>
            <h1>{name}</h1>
            <div>{cuisines.join(", ")}</div>
            <div>
              {areaName} - {sla?.lastMileTravelString}
            </div>
            <div style={{ marginTop: "2%", display: "flex", gap: "30px" }}>
              <div>{sla?.slaString}</div>
              <div>{costForTwoMessage}</div>
            </div>
          </div>
          <div>
            <div>{avgRatingString}</div>
            <div>{totalRatingsString}</div>
          </div>
        </div>
      </div>
      {menuInfo.map((menu,index) => (
        <MenuCategory key={index} menuList={menu.card.card} />
      ))}
    </div>
  );
};

export default RestaurantMenu;
