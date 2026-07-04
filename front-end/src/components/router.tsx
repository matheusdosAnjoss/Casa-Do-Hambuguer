import { createBrowserRouter } from "react-router";
import Login from "../pages/login";
import Register from "../pages/register";
import Home from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/register",
    element: <Register />,
  },

]);
