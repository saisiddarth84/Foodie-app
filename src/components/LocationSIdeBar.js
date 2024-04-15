import { useDispatch } from "react-redux";
import { useState } from "react";
import findLocation from "../utils/findLocation";

const LocationSideBar = ({ isLocationChange, setIsLocationChange }) => {
  const [locationText, setLocationText] = useState("");
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => setIsLocationChange(false)}
      className={`fixed justify-center inset-0 bg-black/40 z-30 `}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-1/3 fixed top-0 bottom-0 bg-slate-300"
      >
        <div className="flex flex-col justify-center gap-5 items-center mt-[50%]">
          <button
            onClick={() => {
              findLocation("current", dispatch);
              setIsLocationChange(false);
            }}
            className="bg-slate-950 text-white p-2 rounded-md"
          >
            Access Current Location
          </button>
          <div>Or</div>
          <input 
            onChange={(e) => {
              setLocationText(e.target.value);
            }}
            className="p-2 w-2/3 "
            placeholder="Enter Location"
          />
          <button
            onClick={() => {
              findLocation(locationText, dispatch);
              setIsLocationChange(false);
            }}
            className="p-2 bg-lime-200 rounded-lg"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default LocationSideBar;
