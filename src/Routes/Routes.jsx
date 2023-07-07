import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../pages/Dashboard/MyCart/MyCart";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AddItem from "../pages/Dashboard/AddItem/AddItem";
import AdminRoute from "./AdminRoute";
import ManageItems from "../pages/Dashboard/ManageItems/ManageItems";
import Payment from "../pages/Dashboard/Payment/Payment";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
import PaymentHistory from "../pages/Dashboard/Payment/PaymentHistory";
import PrivateRoute from './PrivateRoute';
import UserRoute from "./UserRoute";
import LoginLayout from "../Layout/LoginLayout";
import CashOrCard from "../pages/Dashboard/Payment/CashOrCard";
import CashPayment from "../pages/Dashboard/Payment/CashPayment";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        }, 
        {
          path: 'menu', 
          element: <Menu></Menu>
        },
        {
          path: 'order/:category',
          element: <Order></Order>
        },
      ]
    },
    {
      path: "/",
      element: <LoginLayout></LoginLayout>,
      children: [
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'signup',
          element: <SignUp></SignUp>
        }
      ],
    },
    {
      path: 'dashboard',
      element: <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>, 
      children: [
        {
          path: 'userhome',
          element: <UserRoute>
            <UserHome></UserHome>
          </UserRoute>
        },
        {
          path: 'mycart', 
          element: <UserRoute>
            <MyCart></MyCart>
          </UserRoute>
        },
        {
          path:'payment',
          element: <UserRoute>
            <Payment></Payment>
          </UserRoute>
        },
        {
          path:'cashOrCard',
          element: <UserRoute>
            <CashOrCard></CashOrCard>
          </UserRoute>
        },
        {
          path:'cashPayment',
          element: <UserRoute>
            <CashPayment></CashPayment>
          </UserRoute>
        },
        {
          path:'history',
          element: <UserRoute>
            <PaymentHistory></PaymentHistory>
          </UserRoute>
        },
        // admin routes
        {
          path: 'adminhome',
          element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
        },
        {
          path: 'allusers', 
          element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
        {
          path: 'addItem',
          element: <AdminRoute><AddItem></AddItem></AdminRoute>
        },
        {
          path: 'manageitems',
          element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
        }
      ]
    }
  ]);