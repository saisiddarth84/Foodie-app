import React, { useState, useEffect } from "react";
import { updateAddress, updateLocation } from "./cartSlice";
const findLocation = async (location, dispatch) => {
  let lat,lon;

  if (location === "current") {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          lat = position.coords.latitude
          lon = position.coords.longitude
          dispatch(updateLocation([lat, lon]));
          fetchAddress();
        },
        (error) => {
          console.error('Error getting location:', error);
        }
        
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  } else {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
          location
        )}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();

      if (data && data.length > 0) {
        lat = data[0].lat;
        lon = data[0].lon;
        dispatch(updateLocation([lat, lon]));
        dispatch(updateAddress(data[0].display_name))
      }
    } catch (error) {
      console.error("Error fetching location:", error);
    }
  }

 const fetchAddress = async() => {
  if (lat && lon) {
    try {
      const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=18&addressdetails=1`);
      if (!response.ok) {
        throw new Error('Failed to fetch address');
      }
      const data = await response.json();
      const address = data.display_name;
      dispatch(updateAddress(address))
     
    } catch (error) {
      console.error('Error fetching address:', error);
    }
  }

 }
  

};
export default findLocation;
