import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Router";
import { useContext } from "react";
import { AuthContext } from "./UserContext";

function App() {
  const { theme } = useContext(AuthContext);
  return (
    <div
      className="bg-gradient-to-bl from-green-400 via-indigo-400 to-green-400"
      data-theme={theme}
    >
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
