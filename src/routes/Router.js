import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Login from "../pages/Auth/Login";
import SignUp from "../pages/Auth/SignUp";
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
    path: "/user/:id",
    loader: ({ params }) => fetch(`http://localhost:5000/user/${params.id}`),
    element: (
      <PrivateRoutes>
        <User />
      </PrivateRoutes>
    ),
  },
]);

export default router;
