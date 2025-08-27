import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./_root/pages/Home";
import RootLayout from "./_root/RootLayout";
import { useEffect } from "react";
import Technology from "./_root/pages/Technology";
import Destination from "./_root/pages/Destination";
import Crew from "./_root/pages/Crew";

function App() {
  const location = useLocation();

  useEffect(() => {
    const updateBodyClass = () => {
      const path = location.pathname;
      document.body.className = "";
      if (path === "/") {
        document.body.classList.add("home");
        document.title = "Space Tourism";
      } else {
        document.body.classList.add(path.substring(1));
        document.title = "Space Tourism - " + path.substring(1);
      }
    };

    updateBodyClass();
    return () => {
      document.body.className = "";
    };
  }, [location]);
  return (
    <>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
