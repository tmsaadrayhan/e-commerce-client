import { createBrowserRouter } from "react-router-dom";
import Main from "../Pages/Main/Main";
import Home from "../Pages/Home/Home";
import Category from "../Pages/Category/Category";
import Product from "../Pages/Product/Product";
import Cart from "../Pages/Cart/Cart";
import Checkout from "../Pages/Checkout/Checkout";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import MyAccount from "../Pages/MyAcount/MyAccount";
import Top from "../Pages/Top/Top";
import Company from "../Pages/Company/Company";
import NeedHelp from "../Pages/NeedHelp/NeedHelp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/category/:id",
        element: <Category></Category>,
      },
      {
        path: "/product",
        element: <Product></Product>,
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
      },
      {
        path: "/check-out",
        element: <Checkout></Checkout>,
      },
      {
        path: "/sign-in",
        element: <SignIn></SignIn>,
      },
      {
        path: "/sign-up",
        element: <SignUp></SignUp>,
      },
      {
        path: "/my-account",
        element: <MyAccount></MyAccount>,
      },
      {
        path: "/top",
        element: <Top></Top>,
      },
      {
        path: "/company",
        element: <Company></Company>,
      },
      {
        path: "/need-help",
        element: <NeedHelp></NeedHelp>,
      },
    ],
  },
]);
