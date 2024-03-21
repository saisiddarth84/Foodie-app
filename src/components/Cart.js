import CartData from "../utils/CartData";
import { useContext } from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { CDN_URL } from "../utils/constants";
import ShimmerUI from "./ShimmerUI";
import CartItems from "./CartItems";
import { useSelector } from "react-redux";
import formatCurrency from "../utils/formatCurrency";

const Cart = () => {
  const itemList = useSelector((store) => store.cart.items);

  const restaurantId = useSelector((store) => store.cart.restaurantId);

  const restaurantInfo = useRestaurantMenu(restaurantId)


  if (!itemList.length) {
    return (
      <div className="text-center  m-10 font-medium text-2xl text-red-400">
        Your Cart is Empty. Please add Items!!
      </div>
    );
  }

  


  const { name, areaName, cloudinaryImageId } =
    restaurantInfo?.cards[0]?.card?.card.info;

  return (
    <div className="flex">
      <div className="p-4 mt-8 bg-slate-100 mx-auto ">
        <div className="font-medium text-2xl text-center mb-6 text-blue-800">
          My Foodie Cart
        </div>
        <div className="flex items-center gap-10 mb-10">
          <img className="w-20" src={CDN_URL + cloudinaryImageId} />
          <div>
            <div className="font-semibold text-xl">{name}</div>
            <div className="text-gray-400 text-sm">{areaName}</div>
          </div>
        </div>
        {itemList.map((item) => (
          <CartItems key={item.id} itemInfo={item} />
        ))}
        <div className="flex justify-between mt-6 border-t-2 border-dashed border-t-gray-300 pt-4">
          <div className="text-red-700">Total Price: </div>
          <div className="font-medium">
            ₹{" "}
            {formatCurrency(
              itemList.reduce(
                (acc, currentItem) =>
                  acc + currentItem.price * currentItem.quantity,
                0
              ) * 100
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
