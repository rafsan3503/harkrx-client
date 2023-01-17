import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Router";
import { useContext } from "react";
import { AuthContext } from "./UserContext";
import bgShape from "../src/assets/bg-shape.png";

function App() {
  const { theme } = useContext(AuthContext);
  return (
    <div className="bg-green-200 dark:bg-green-400" data-theme={theme}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
