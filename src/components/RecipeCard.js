const RecipeCard = (props) => {
    const {recipeInfo} = props;
    const {name, price, defaultPrice, description} = recipeInfo;

    const currPrice = price === undefined ? defaultPrice : price
    


    return (
        <div className="recipe-container">
            <div> 
                <div className="recipe-name">{name}</div>
                <div className="recipe-price"> ₹ {currPrice / 100}</div>
                <div className="recipe-description">{description}</div>
            </div>
            <img className="recipe-image" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" + recipeInfo.imageId } />
      </div>
    )
}


export default RecipeCard;