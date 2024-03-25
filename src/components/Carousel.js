import { useEffect, useState } from "react";
import { CDN_URL } from "../utils/constants";
import useCarouselList from "../utils/useCarouselList";
import Swiper from "swiper";
import { Navigation, Scrollbar, Mousewheel  } from "swiper/modules";
import "swiper/swiper-bundle.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "../../index.css"


const Carousel = () => {
  const [foodList, setFoodList] = useState([]);
  const carouselItem = useCarouselList();

  const swiper = new Swiper(".swiper", {
    // configure Swiper to use modules
    modules: [Navigation, Scrollbar, Mousewheel],
    direction: "horizontal",
    loop: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerView:'auto',
    scrollbar:true,
    mousewheel:true,


    breakpoints: {
        1240: {
            slidesPerView: 8,
        },
        600: {
            slidesPerView: 6, 
        },
 
    },

    
  });

  useEffect(() => {
    if (!foodList.length && carouselItem) {
      setFoodList(carouselItem);
    }
  }, [carouselItem, foodList]);

  return carouselItem === null ? (
    <div></div>
  ) : (
    <div className="swiper w-5/6 border-b-2 pb-4">
      <div className="swiper-wrapper mt-20 ">
        {carouselItem.map((item) => (
          <div key={item.id} className="swiper-slide">
            <img src={CDN_URL + item.imageId} alt={item.id} className="w-40" />
          </div>
        ))}
      </div>


      <div>
      <FontAwesomeIcon className="swiper-button-prev absolute top-16 py-1 px-3 rounded-full bg-slate-200 text-black font-medium scale-[0.8]" icon={faArrowLeft} />
      </div>
      <div>
        <FontAwesomeIcon className="swiper-button-next absolute top-16  py-1 px-3 rounded-full bg-slate-200 text-black font-medium scale-[0.8]" icon={faArrowRight} />
      </div>
    </div>


  );
};

export default Carousel;
