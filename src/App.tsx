import React, { FC } from "react";
import { Navigate } from "react-router-dom";
import "./styles/index.css";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import { useStore } from "./store";
import AdminEdit from "./pages/AdminEdit";
import AppWrapper from "./components/AppWrapper";
import NoPage from "./pages/NoPage";

const PrivateRoute: FC<{
  component: React.FC;
}> = ({ component: Component }) => {
  const { user } = useStore();

  if (user) return <Component />;
  return <Navigate to="/" />;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AppWrapper />}>
        <Route index element={<Home />} />
        <Route path="admin" element={<Admin />} />
        <Route
          path="admin/:id"
          element={<PrivateRoute component={AdminEdit} />}
        />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  );
};

export default App;
