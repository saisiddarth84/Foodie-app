import { useDispatch } from "react-redux";
import { removeItem, updateItem } from "../utils/cartSlice";
import formatCurrency from "../utils/formatCurrency";

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
    <div className="flex justify-between items-center gap-8 my-6 px-16" data-testid="cartItems">
      <div className="w-56 font-medium">{name}</div>
      <button className="  bg-lime-50 border-solid border-2 border-lime-400 w-20  p-2 rounded-md font-semibold ">
        <div className="flex justify-between">
          <div onClick={() => updateItemList(-1)}>-</div>
          <div>{quantity}</div>
          <div onClick={() => updateItemList(1)}>+</div>
        </div>
      </button>
      <div className="">₹ {formatCurrency(price * 100  * quantity)}</div>
    </div>
  );
};

export default CartItems;
