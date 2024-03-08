import React from "react";
import ReactDOM from "react-dom/client";
import data from './data.json'



/**
 * Header 
 *  - Logo 
 *  - Nav Items
 * Body
 *  - Search 
 *  - Restaurant Container
 *     - Restaurant Card
 *         - Img
 *         - Name of Res, Star Rating, cuisine, delivery Time
 * Footer
 * - Copyright
 * - Social Links
 * - Address
 * - Contact
*/


const resData = data.card.card.gridElements.infoWithStyle.restaurants

console.log(resData)

const RestaurantCard = (props) => {
  const {resData} = props;

  return (
    <div className="res-card" style={{backgroundColor : "#f0f0f0"}}>
      <img
       className="res-logo"
       alt="res-logo"
       src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.cloudinaryImageId}
      />
     
      <div className="res-details">
        <h3>{resData.name}</h3>
        <h5>{resData.cuisines.join(', ')}</h5>
        <h4>{resData.avgRating + ' Rating'}</h4>
        <h4>{resData.costForTwo}</h4>
        <h5>{resData.sla.deliveryTime + ' minutes'}</h5>
      </div>

    </div>
  )
}

const URL = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&collection=83667#";


const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input placeholder="Search Restaurant" style={{width: "25%",padding: '4px'}} />
        <button style={{padding: '4px 10px'}}>Search</button>
      </div>
      <div className="res-container">
        {resData.map(data => {
          return (
            <RestaurantCard
              resData={data.info}
            />
          )
        })}
        {resData.map(data => {
          return (
            <RestaurantCard
              resData = {data.info}
            />
          )
        })}
        {resData.map(data => {
          return (
            <RestaurantCard
              resData ={data.info}
            />
          )
        })}
      </div>
    </div>
  )
}

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e30b7652732001.591ae569026e0.jpg"
          className="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li className="cart-container">
            <img src="https://tse1.mm.bing.net/th?id=OIP.FuRZC-KNKeU4y57U0LUB4wHaGK&pid=Api&P=0&h=180" className="cart-image" />
          </li>
        </ul>
      </div>
    </div>
  )
}

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<AppLayout />); // Rendering a Component

