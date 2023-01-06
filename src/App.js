import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Router";
import { useContext } from "react";
import { AuthContext } from "./UserContext";

function App() {
  const { theme } = useContext(AuthContext);
  return (
    <div className="bg-base-200" data-theme={theme}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
