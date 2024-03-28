import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const useCuisineResData = (cuisineName, entityId) => {

    const [cuisineResData,setCuisineResData] = useState(null)
    
    const latitude = useSelector((store) => store.cart.latitude)
    const longitude = useSelector((store) => store.cart.longitude)

    console.log(cuisineName, latitude, longitude)
    console.log(entityId)


    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async() => {
        const response = await fetch(`https://myfoodie.onrender.com/api/cuisine?lat=${latitude}&lng=${longitude}&cuisineName=${cuisineName}&entityId=${Number(entityId)}`);

        const json = await response.json()

        setCuisineResData(json.data.cards);
    }

    return cuisineResData;

}


export default useCuisineResData;