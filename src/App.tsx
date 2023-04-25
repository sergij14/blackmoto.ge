import React from "react";
import "./styles/index.css";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import PrivateRoute from "./utils/PrivateRoute";
import DashBoard from "./pages/DashBoard";

const App = () => {
  return (
    <div className="px-4 max-w-screen-xl mx-auto">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route
          path="/dashboard"
          element={<PrivateRoute component={DashBoard} />}
        />
      </Routes>
    </div>
  );
};

export default App;
