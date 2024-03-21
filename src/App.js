import React, { lazy, Suspense, useContext, useEffect , useState} from "react";
import ReactDOM from "react-dom/client";
import Header from './components/Header.js';
import Body from './components/Body.js';
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
// import  About  from "./components/About.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import Cart from "./components/Cart.js";
import UserContext from "./utils/UserContext.js";
import CartData from "./utils/CartData.js";
import { useContext } from "react";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";

// import Grocery from "./components/Grocery.js";

// Chunking
// Code Splitting
// Dynamic Bundling
// lazy Loading
// on demand loading

const About = lazy(() => import("./components/About.js"))

const AppLayout = () => {
  const [userName, setUserName] = useState()

  const [addedRestaurantId, setAddedRestaurantId] = useState('');
   
  const [total, setTotal] = useState(0);

  const [item, setItem] = useState([]);
  // authentication 
  useEffect(() => {
    // Make an API call and send username and password
    const data = {
      name: "Akshay Saini",
    };
    setUserName(data.name)

  }, [])


  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
        <CartData.Provider value={{restaurantId: addedRestaurantId, setAddedRestaurantId, totalItem: total, setTotal, itemList:item, setItem}}>
          <div className="app">
            <Header />
            <Outlet />
          </div>
        </CartData.Provider>
      </UserContext.Provider>
    </Provider>
  
    
  )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />

      },
      {
        path: "/about",
        element:(
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ) 
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/cart",
        element: <Cart />

      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />
      }
    ],
    errorElement: <Error />
  },
 
])

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<RouterProvider router={appRouter} />);