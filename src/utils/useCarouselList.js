import {useState,useEffect} from "react";
import { useSelector } from "react-redux";

const useCarouselList = () => {

  const [carouselItem,setCarouselItem] = useState(null)
  const latitude = useSelector((store) => store.cart.latitude)
  const longitude = useSelector((store) => store.cart.longitude)

    
  useEffect(()=>{
    fetchData();
  },[latitude,longitude])

  const fetchData = async() => {
    const data = await fetch(
      `https://instafood.onrender.com/api/restaurants?lat=${latitude}&lng=${longitude}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
    )

    const json = await data.json();


    const imageList = json.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info

    setCarouselItem(imageList)
    
    
  };
  return carouselItem;
    
}

export default useCarouselList;