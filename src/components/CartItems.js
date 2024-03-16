import { useDispatch } from "react-redux";
import { removeItem, updateItem } from "../utils/cartSlice";

const CartItems = ({ itemInfo }) => {
  const { id: itemId, name, quantity, price } = itemInfo;
  const dispatch = useDispatch();

  function updateItemList(count) {
    if (quantity === 1 && count === -1) {
      dispatch(removeItem(itemId));
    } else {
      dispatch(updateItem([itemId, count]));
    }
  }

  return (
    <div className="flex gap-14 my-4">
      <div className="w-56 font-medium">{name}</div>
      <button className="  bg-lime-200 w-20 mb-5 p-2 rounded-md font-semibold ">
        <div className="flex justify-between">
          <div onClick={() => updateItemList(-1)}>-</div>
          <div>{quantity}</div>
          <div onClick={() => updateItemList(1)}>+</div>
        </div>
      </button>
      <div>₹ {price * quantity}</div>
    </div>
  );
};

export default CartItems;
