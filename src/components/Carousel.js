import { useEffect, useState } from "react";
import { CDN_URL } from "../utils/constants";
import useCarouselList from "../utils/useCarouselList";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/swiper-bundle.css"

const Carousel = () => {
  const [foodList, setFoodList] = useState([]);
  const carouselItem = useCarouselList();

  const swiper = new Swiper(".swiper", {
    // configure Swiper to use modules
    modules: [Navigation, Pagination],
    direction: "horizontal",
    loop: falses,

    // If we need pagination

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    slidesPerView: 8,
  });

  useEffect(() => {
    if (!foodList.length && carouselItem) {
      setFoodList(carouselItem);
    }
  }, [carouselItem, foodList]);

  return carouselItem === null ? (
    <div></div>
  ) : (
    <div className="swiper">
      <div className="swiper-wrapper">
        {carouselItem.map((item) => (
          <div key={item.id} className="swiper-slide">
            <img src={CDN_URL + item.imageId} alt={item.id} className="w-40" />
          </div>
        ))}
      </div>


      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </div>
  );
};

export default Carousel;
