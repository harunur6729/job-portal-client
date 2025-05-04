
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";

  const router = createBrowserRouter([
    {
      path: "/",
      errorElement:<h1>route not found</h1>,
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        }
      ]
    },
  ]);

export default router;