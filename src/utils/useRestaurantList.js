import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const useRestaurantList = () => {
  const [listOfRestaurants, setListofRestaurant] = useState(null);

  const latitude = useSelector((store) => store.cart.latitude);
  const longitude = useSelector((store) => store.cart.longitude);

  useEffect(() => {
    fetchData();
  }, [latitude]);

  const fetchData = async () => {
    const data = await fetch(
      `https://instafood.onrender.com/api/restaurants?lat=${latitude}&lng=${longitude}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
    );

    const json = await data.json();

    const resData = json.data.cards.filter(
      (res) => res.card.card?.gridElements?.infoWithStyle?.restaurants
    );

    const resList = resData[0].card.card.gridElements.infoWithStyle.restaurants;

    setListofRestaurant(resList);
  };

  return listOfRestaurants;
};

export default useRestaurantList;
