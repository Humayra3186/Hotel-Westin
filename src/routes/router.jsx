import {
    createBrowserRouter,

  } from "react-router-dom";
import MainPage from "../pages/MainPage";
import Home from "../pages/Home";
import Rooms from "../pages/Rooms";
import Bookings from "../pages/Bookings";


 export const router = createBrowserRouter([
    {
      path: "/",
      element:<MainPage></MainPage>,
      children : [
        {
            path : "/",
            element : <Home></Home>
        },
        {
            path: "rooms",
            element: <Rooms></Rooms>
        },
        {
            path : "bookings",
            element : <Bookings></Bookings>
        }
      ]
    },
  ]);