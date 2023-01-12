import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import AllUsers from "../pages/AllUsers";
import Login from "../pages/Auth/Login";
import SignUp from "../pages/Auth/SignUp";
import FeedUser from "../pages/FeedUser";
import Settings from "../pages/Settings";
import User from "../pages/User";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoutes>
        <Main />
      </PrivateRoutes>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/user",

    element: (
      <PrivateRoutes>
        <User />
      </PrivateRoutes>
    ),
  },
  {
    path: "/allUsers",
    element: <AllUsers />,
  },
  {
    path: "/feedUser/:id",
    loader: ({ params }) =>
      fetch(`https://harkrx-server.vercel.app/user/${params.id}`),
    element: (
      <PrivateRoutes>
        <FeedUser />
      </PrivateRoutes>
    ),
  },
  {
    path: "/settings",

    element: (
      <PrivateRoutes>
        <Settings />
      </PrivateRoutes>
    ),
  },
]);

export default router;
