import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Router";
import { useContext } from "react";
import { AuthContext } from "./UserContext";

function App() {
  const { theme } = useContext(AuthContext);
  return (
    <div className="bg-gradient-to-r from-yellow-400 via-gray-50 to-teal-300" data-theme={theme}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
