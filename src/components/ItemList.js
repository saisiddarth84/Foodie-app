import { useState } from "react";
import CartData from "../utils/CartData";
import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem , updateItem, updateResId} from "../utils/cartSlice"
import formatCurrency from "../utils/formatCurrency";


const ItemList = (props) => {
  const [showContent, setShowContent] = useState(false);
  const [itemCount, setItemCount] = useState(0);

  const itemList = useSelector((state) => state.cart.items)
  const restaurantId = useSelector((state) => state.cart.restaurantId)


  const { itemInfo, resId } = props;
  const { name, price,id:itemId,  defaultPrice, description, imageId } = itemInfo;


  const itemIndex = itemList?.findIndex(item => item.id === itemId)
  const quantity = itemList[itemIndex]?.quantity;


  const currPrice = price === undefined ? defaultPrice : price;
  const dispatch = useDispatch();


  const image =
    imageId === undefined
      ? null
      : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
        imageId;

  function updateItemList(count){
    if(count === 0){
      dispatch(removeItem(itemId))
    }else {
      dispatch(updateItem([itemId,count]))
      
    }
  }      


  function handleClick(event) {
    // Dispatch an action
  
      if(!showContent){
        setItemCount(itemCount + 1);
        setShowContent(true);   
        if(!restaurantId || restaurantId === resId){
          dispatch(updateResId(resId));
          dispatch(addItem({
            id: itemId,
            name: name,
            price: formatCurrency(currPrice),
            quantity: itemCount + 1,
          }
          ))
        }
      }
  }


  function addItemList(event){
    event.stopPropagation();
    setItemCount(itemCount + 1);
    updateItemList(1)
  }

  function removeItemList(event){
    event.stopPropagation();
    setItemCount(itemCount - 1);
    updateItemList(-1)

    if(quantity === 1){
        setItemCount(0)
        setShowContent(false);  
        updateItemList(0)
    }
  }

  return (
    <div className="flex justify-between items-center my-5 pb-10 px-6 shadow-md" data-testid="foodItems">
      <div className="flex flex-col gap-2 w-2/3">
        <div className=" text-lg font-medium">{name}</div>
        <div> ₹ {formatCurrency(currPrice)}</div>
        <div className=" text-gray-400">{description}</div>
      </div>
      <div className="flex flex-col gap-2 relative">
        <img className="w-40 pt-8" src={image} />
        <div className="text-center ">
          <button
            className="  bg-lime-200 w-4/5 mb-5 p-2 rounded-md font-semibold text-xl absolute bottom-[-40] left-4"
            onClick={handleClick}
            data-item-id={itemId} 
          >
            {(quantity) && (
              <div className="flex justify-between" >
                <div onClick={removeItemList}>-</div>
                <div>{quantity}</div>
                <div onClick={addItemList}>+</div>
              </div>
            )}
            {(!quantity) && (
                <div>Add</div>
            )

            }
          </button>
        </div>
      </div>
      
    </div>


  );
};

export default ItemList;
