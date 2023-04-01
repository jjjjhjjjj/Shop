import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import AllProducts from "./pages/AllProducts";
import NewProduct from "./pages/NewProduct";
import ProductDetail from "./pages/ProductDetail";
import MyCart from "./pages/MyCart";
import App from "./App";
import { AuthProvider } from "./context/authContext";
import ProtectedRoute from "./pages/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, path: "/", element: <AllProducts /> },
      {
        path: "/products",
        element: <AllProducts />,
      },
      {
        path: "/products/new",
        element: <NewProduct />,
      },
      {
        path: "/products/:id",
        element: <ProductDetail />,
      },
      {
        path: "/carts",
        element: (
          <ProtectedRoute>
            <MyCart />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
