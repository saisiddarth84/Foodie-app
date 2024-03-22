import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import foodieLogo from "../../assets/images/foodie-logo.jpg";
import UserContext from "../utils/UserContext";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./Modal";
import cartLogo from "../../assets/images/cart-logo.png"
import locationLogo from "../../assets/images/location.png"
import LocationSideBar from "./LocationSIdeBar";
import findLocation from "../utils/findLocation";

const Header = () => {
  
  const [isOpen, setIsOpen] = useState(false);
  const [isDropDown, setIsDropDown] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [isLocationChange, setIsLocationChange] = useState(false);

  const { loggedInUser } = useContext(UserContext);
  const cart = useSelector((store) => store.cart.items);
  const address = useSelector((store) => store.cart.address);

  const dispatch = useDispatch()

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1024); // Define your breakpoint here
    };

  

    // Add event listener to listen for window resize
    window.addEventListener("resize", handleResize);

    // Initial check for screen size
    handleResize();

    // Cleanup function to remove event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
   
    { isLocationChange&& <LocationSideBar isLocationChange={isLocationChange} setIsLocationChange={setIsLocationChange}/>} 
    <div className="flex justify-between items-center  bg-slate-100  mx-4 p-2 shadow-lg rounded-md ">
      <Link to="/">
        <img src={foodieLogo} className=" max-lg:w-[50px] w-[60px] rounded-md " />
      </Link>
      <div className="pl-16 max-lg:w-[60%] flex items-center gap-2 cursor-pointer" onClick={() => setIsLocationChange(!isLocationChange)}>
        <img className="w-4" src={locationLogo} />
        <div title={address} className="border-b-2 border-black border-opacity-10 line-clamp-1">{address}</div>
      </div>
      {isLargeScreen || isDropDown ? (
        <div className="dropdown-menu absolute top-[85px] left-0 max-lg:bg-slate-100/75 bg-opacity-95   w-full flex flex-col gap-6 items-center py-2 text-lg lg:static ">
          <ul className="flex flex-col items-center gap-6 lg:flex-row lg:self-end">
            <li className="hover:text-lime-400">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-lime-400">
              <Link to="/about">About us</Link>
            </li>
            <li className="hover:text-lime-400">
              <Link to="/contact">Help</Link>
            </li>
            <li className=" relative font-medium hover:text-lime-400">
              <Link to="/cart" className="flex gap-[4px]">
                <div className="flex items-center gap-1">
                  <img className="w-6" src={cartLogo}/>
                  <div className="text">Cart ({cart.length})</div>
                </div>
              </Link>
            </li>
            <button
              className="p-2 bg-lime-200 rounded-lg ml-8"
              onClick={() => setIsOpen(true)}
            >
              Sign In
            </button>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen}/>
          </ul>
        </div>
      ) : null}
      <div className={`cursor-pointer lg:hidden`} onClick={(e) => {
        setIsDropDown(!isDropDown)
      }}>
        <div className="w-8 border-2 border-neutral-800"></div>
        <div className="w-8 border-2  border-neutral-800 mt-1"></div>
        <div className="w-8 border-2  border-neutral-800 mt-1"></div>
      </div>
    </div>
    </>
  );
};

export default Header;
