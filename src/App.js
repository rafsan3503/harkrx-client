import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Router";
import { useContext } from "react";
import { AuthContext } from "./UserContext";

function App() {
  const { theme } = useContext(AuthContext);
  return (
<<<<<<< HEAD
    <div
      className="bg-gradient-to-bl from-green-400 via-indigo-400 to-green-400"
      data-theme={theme}
    >
=======
    <div className="bg-gradient-to-r from-yellow-400 via-gray-50 to-teal-300" data-theme={theme}>
>>>>>>> c1f0eca10fffc6a6d29795a9b4ba583225bd8e6c
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
