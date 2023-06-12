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
import ManageClasses from "../pages/Dashboard/ManageClasses/ManageClasses";
import MyClasses from "../pages/Dashboard/MyClasses/MyClasses";
import Classes from "../pages/Classes/Classes";
import SelectedClasses from "../pages/Dashboard/SelectedClasses/SelectedClasses";
import EnrolledClasses from "../pages/Dashboard/EnrolledClasses/EnrolledClasses";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import Payment from "../pages/Dashboard/Payment/Payment";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

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
         },
         {
            path:'/classes',
            element: <Classes></Classes>
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
         },
         {
               path: 'manageclasses',
               element: <ManageClasses></ManageClasses>
         },
         {
            path: 'myclasses',
            element: <MyClasses></MyClasses>

         },
         {
            path:'selectedclasses',
            element: <SelectedClasses></SelectedClasses>
         },
         {
            path:'enrolledclasses',
            element: <EnrolledClasses></EnrolledClasses>
         },
         {
            path: 'paymenthistory',
            element: <PaymentHistory></PaymentHistory>
         },
         {
            path: 'payment/:classId',
            element: <Payment></Payment>
         }
      ]
    },
    {
      path: '*',
      element: <ErrorPage></ErrorPage>
    }
  ]);
  