import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";
import { PublicLayout } from "./layouts/PublicLayout";
import { loadUsers } from "../providers/users/loadUsers";
import { loadUser } from "../providers/users/loadUser";
import { Users } from "../pages/users/Users";
import { UserInfo } from "../pages/users/UserInfo";
import { Products } from "../pages/products/Products";
import { UserEdit } from "../pages/users/UserEdit";
import { loadProducts } from "../providers/products/loadProducts";
import { loadProduct } from "../providers/products/loadProduct";

import { CreateProductForm } from "../pages/products/createproduct/CreateProductForm";
import { ProductDetail } from "../pages/products/productdetails/ProductDetail";
import { EditProductForm } from "../pages/products/editproduct/EditproductForm";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/users",
        element: <Users />,
        loader: loadUsers,
      },
      {
        path: "/users/:id",
        element: <UserInfo />,
        loader: loadUser
      },
      {
        path:"/users/:id/edit",
        element: <UserEdit/>,
        loader: loadUser
      },
      {
        path: "/products",
        element: <Products />,
        loader: loadProducts
      },
      {
        path: "/products/:id",
        element: <ProductDetail/>,
        loader: loadProduct
      },
      {
        path: "/products/create",
        element: <CreateProductForm/>
      },
      {
        path: "/products/:id/edit",
        element: <EditProductForm/>,
        loader: loadProduct
      },
    ],
  },
]);