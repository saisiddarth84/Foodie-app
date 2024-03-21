import { createContext } from "react";
import cartSlice from "./cartSlice";

const CartData = createContext({
  restaurantId: '',  
  totalItem: 0,
  itemList: [
    {
      id: "dgege",
      quantity: 2,
    },
  ]
});


export default CartData;