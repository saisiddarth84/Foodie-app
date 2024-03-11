import downArrow from "../../assets/images/down-arrow.svg";
import RecipeCard from "./RecipeCard.js";
import { useState } from "react";

const MenuCategory = (props) => {
  const {menuList} = props;
  const {itemCards, title} = menuList;

  const [isClicked, setIsCliked] = useState(false);
  const [arrowStyle, setArrowStyle] = useState({});
  const [recipeStyle, setRecipeStyle] = useState({display: 'none'})

  function handleClick(){
    if(!isClicked){
      setArrowStyle({transform: 'rotate(180deg)'})
      setIsCliked(true);
      setRecipeStyle({display: 'block'})

    } else{
      setArrowStyle({transform: 'rotate(0deg)'})
      setIsCliked(false);
      setRecipeStyle({display: 'none'})

    }
  }


  return (
    <div className="dropdown-menu-container">
      <div className="dropdown-menu" onClick={handleClick}>
        <h3>{`${title} (${itemCards?.length})`}</h3>
        <img
         className="down-arrow"
          src={downArrow}
          style={arrowStyle}
        />
      </div>
      <div className="recipe-section" style={recipeStyle}>
        {itemCards?.map(item => (
          <RecipeCard key={item.card.info.id} recipeInfo={item.card.info} />  
        ))}
      </div>
      
    </div>
  );
};


export default MenuCategory;