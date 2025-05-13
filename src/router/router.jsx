
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import SingIn from "../pages/singIn/SingIn";
import About from "../pages/About/About";

  const router = createBrowserRouter([
    {
      path: "/",
      errorElement:<h1>route not found</h1>,
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
          path:"/register",
          element:<Register></Register>
        },
        {
          path:'/singIn',
          element:<SingIn></SingIn>
        },
        {
          path:'/about',
          element:<About></About>
        }
      ]
    },
  ]);

export default router;