import {
    createBrowserRouter,

  } from "react-router-dom";
import MainPage from "../pages/MainPage";
import Home from "../pages/Home";
import Rooms from "../pages/Rooms";
import Bookings from "../pages/Bookings";
import Details from "../pages/Details";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Privet from "../privet/Privet";
import ErrorPage from "../pages/ErrorPage";


 export const router = createBrowserRouter([
    {
      path: "/",
      element:<MainPage></MainPage>,
      errorElement:<ErrorPage></ErrorPage>,
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
            element : <Privet><Bookings></Bookings></Privet> 
        },
        {
          path : "details/:id",
          element: <Details></Details>
        },
        {
          path: "register",
          element : <Register></Register>
        },
        {
          path: "login",
          element: <Login></Login>
        }
      ]
    },
  ]);