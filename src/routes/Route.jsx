import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home/Home";
import AddProduct from "../pages/Products/AddProduct";
import MyCart from "../pages/Cart/MyCart";
import Login from "../pages/Login/Login";
import ProductsArchive from "../pages/Products/ProductsArchive";
import Registration from "../pages/Registration/Registration";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <div>Error 404</div>,
    element: <MainLayouts></MainLayouts>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/products/:brandId",
        element: <ProductsArchive></ProductsArchive>,
        loader: ({ params }) =>
          fetch(`https://techzoid-server.vercel.app/brands/${params.brandId}`),
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
      {
        path: "/register",
        element: <Registration></Registration>,
      },
    ],
  },
]);

export default router;
