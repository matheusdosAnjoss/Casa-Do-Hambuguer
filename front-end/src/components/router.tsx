import { createBrowserRouter } from "react-router";
import Login from "../pages/login";
import Register from "../pages/register";


export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/register",
    element: <Register />,
  },

  {
    path: "/register",
    element: <Register />,
  },
]);