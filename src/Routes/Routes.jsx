import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import Instructors from "../pages/Instructors/Instructors";
import Dashboard from "../Layout/Dashboard";
import ManageUsers from "../pages/Dashboard/ManageUsers/ManageUsers";
import AddClass from "../pages/Dashboard/AddClass/AddClass";

 export  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
         {
            path:'/',
            element: <Home></Home>
         },
         {
            path:'/login',
            element: <Login></Login>
         },
         {
            path:'/signup',
            element: <Signup></Signup>
         },
         {
            path:'/instructors',
            element: <Instructors></Instructors>
         }
      ]
    },
    {
      path:'/dashboard',
      element: <Dashboard></Dashboard>,
      children:[
         {
            path:'manageusers',
            element:<ManageUsers></ManageUsers>
         },
         {
          path:'addclass',
          element: <AddClass></AddClass>
         }
      ]
    }
  ]);
  