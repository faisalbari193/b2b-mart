import { createBrowserRouter } from "react-router";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../Pages/Home";
import CategoryProducts from "../Components/CategoryProducts";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import PrivateRoutes from "./PrivateRoutes";
import ProductDetails from "../Components/ProductDetails";
import ProductList from "../Pages/ProductList";
import UpdateProduct from "../Components/UpdateProduct";
import AddProducts from "../Pages/AddProducts";
import MyCart from "../Pages/MyCart";
import ErrorPage from "../Pages/ErrorPage";
import MyProducts from "../Pages/MyProducts";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    children: [
      { index: true, Component: Home },
      { path: "/category/:categoryName", Component: CategoryProducts },
      { path: "/register", Component: Register },
      { path: "/login", Component: Login },

      {
        path: "/products",
        Component: ProductList,
      },
      {
        path: "/add-products",
        element: (
          <PrivateRoutes>
            <AddProducts />
          </PrivateRoutes>
        ),
      },
      {
        path: "/product-details/:id",
        element: (
          <PrivateRoutes>
            <ProductDetails />
          </PrivateRoutes>
        ),
      },
      {
        path: "/update-product/:id",
        element: (
          <PrivateRoutes>
            <UpdateProduct />
          </PrivateRoutes>
        ),
      },
      {
        path: "/my-products",
        element: (
          <PrivateRoutes>
            <MyProducts />
          </PrivateRoutes>
        ),
      },
      {
        path: "/my-cart",
        element: (
          <PrivateRoutes>
            <MyCart />
          </PrivateRoutes>
        ),
      },
    ],
  },
  {
    path: "*",
    Component: ErrorPage,
  },
]);
export default router;
