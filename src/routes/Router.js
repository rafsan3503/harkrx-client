import { createBrowserRouter } from "react-router-dom";
import ReportPosts from "../components/ReportPosts";
import UpdatePassword from "../components/UpdatePassword";
import VerificationUsers from "../components/VerificationUsers";
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
    children: [
      {
        path: "/settings/update-password",
        element: <UpdatePassword />,
      },
      {
        path: "/settings/verify-users",
        element: <VerificationUsers />,
      },
      {
        path: "/settings/report-posts",
        element: <ReportPosts />,
      },
    ],
  },
]);

export default router;
