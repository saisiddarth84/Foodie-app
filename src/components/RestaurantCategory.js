import downArrow from "../../assets/images/down-arrow.svg";
import ItemList from "./ItemList.js";
import { useState } from "react";

const RestaurantCategory = (props) => {
  const {data, showItems, setShowIndex, resId} = props;

  const {itemCards, title} = data;

  const arrowStyle = showItems === true ?  {transform: 'rotate(180deg)'} : {transform: 'rotate(0deg)'};

  function handleClick(){
    setShowIndex();
  }


  return (
    <div className="p-6 border-b-8 shadow-lg">
      <div className="flex justify-between cursor-pointer" onClick={handleClick}>
        <h3 className="font-semibold text-xl">{`${title} (${itemCards?.length})`}</h3>
        <img
         className="w-5"
          src={downArrow}
          style={arrowStyle}
        />
      </div>
      <div className="recipe-section">
        {showItems && itemCards?.map(item => (
          <ItemList key={item.card.info.id} itemInfo={item.card.info} resId={resId} />  
        ))}
      </div>
      
    </div>
  );
};


export default RestaurantCategory;