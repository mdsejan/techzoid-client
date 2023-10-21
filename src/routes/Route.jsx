import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home/Home";
import AddProduct from "../pages/Products/AddProduct";
import MyCart from "../pages/Cart/MyCart";
import Login from "../pages/Login/Login";
import ProductsArchive from "../pages/Products/ProductsArchive";
import Registration from "../pages/Registration/Registration";
import PrivateRoute from "./PrivateRoute";
import UpdateProduct from "../pages/Products/UpdateProduct";
import Error from "../pages/Shared/Error";
import ProductDetails from "../pages/Shared/ProductDetails";
import TermsOfUse from "../pages/Legal/TermsOfUse";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error></Error>,
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
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/updateproduct/:id",
        element: (
          <PrivateRoute>
            <UpdateProduct></UpdateProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/product/:id",
        element: (
          <PrivateRoute>
            <ProductDetails></ProductDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/cart",
        element: (
          <PrivateRoute>
            <MyCart></MyCart>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Registration></Registration>,
      },
      {
        path: "/termsofuse",
        element: <TermsOfUse></TermsOfUse>,
      },
    ],
  },
]);

export default router;
