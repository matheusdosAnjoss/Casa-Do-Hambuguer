import { createBrowserRouter, Outlet } from "react-router";
import Login from "../pages/login";
import Register from "../pages/register";
import Home from "../pages/Home";
import Header from "./Header";

const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-red-500">
      <Header />
      <Outlet />
    </div>
  );
};

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
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
