import {useState,useEffect} from "react";

const useRestaurantList = () => {

  const [listOfRestaurants, setListofRestaurant] = useState(null)  
    
  useEffect(()=>{
    fetchData();
  }, [])

  const fetchData = async() => {
    const data = await fetch(
      'https://instafood.onrender.com/api/restaurants?lat=13.025302&lng=77.53402419999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
    )
    

    const json = await data.json();

    const resData = json.data.cards.filter(res => res.card.card?.gridElements?.infoWithStyle?.restaurants)

    const resList= resData[0].card.card.gridElements.infoWithStyle.restaurants

    setListofRestaurant(resList);
  };

  
  return listOfRestaurants;
    
}

export default useRestaurantList;