import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home/Home";
import AddProduct from "../pages/Products/AddProduct";
import MyCart from "../pages/Cart/MyCart";
import Login from "../pages/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: (
      <div>
        <h2>Error 404</h2>
      </div>
    ),
    element: <MainLayouts></MainLayouts>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addproduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/cart",
        element: <MyCart></MyCart>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

export default router;
