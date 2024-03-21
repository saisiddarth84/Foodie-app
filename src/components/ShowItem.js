import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ShowItem = () => {
 const itemList = useSelector((store) => store.cart.items);

 return( 
  itemList.length && (
    <div className=" text-white bg-green-700 w-2/3 flex justify-between p-4 fixed bottom-8 left-[17%] transition-all">
    <div>{itemList.length} item Added</div>
    <Link to="/cart">
      <button>VIEW CART</button>
    </Link>
  </div>
  )
  )
};

export default ShowItem;