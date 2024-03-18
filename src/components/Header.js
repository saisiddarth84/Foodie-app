import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import foodieLogo from "../../assets/images/foodie-logo.jpg";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import cartLogo from "../../assets/images/cart-logo.png";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");


  const { loggedInUser } = useContext(UserContext);

  const cart = useSelector((store) => store.cart.items);

  // if no dependency array => useEffect is called on every render
  // if dependency array is empty = [] => useEffect is called on initial render(just once)
  // if dependency array is [btnNameReact] => useEffect is called everytime btnNameReact is updated
  // useEffect(() => {
  //   console.log("useEffect called");
  // },[btnNameReact])

  return (
    <div className="flex justify-between items-center  bg-slate-100 mx-4 p-2 shadow-lg rounded-md ">
      <Link to="/">
      <img src={foodieLogo} className="w-16 rounded-md " />
      </Link>
      <div className="nav-items">
        <ul className="flex items-center gap-10">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className=" relative font-medium">
            <Link to="/cart" className="flex gap-[4px]">
              {cart.length > 0 && (
                <div className=" border-lime-300 border-2 rounded bg-lime-50 px-2">
                  {cart.length}
                </div>
              )}
              <div className="text-" >Cart</div>
            </Link>
          </li>
          <button
            className="p-4 bg-lime-200 rounded-lg"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
