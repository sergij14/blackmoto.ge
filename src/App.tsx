import React, { FC, lazy, Suspense } from "react";
import { Navigate } from "react-router-dom";
import "./styles/index.css";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import { useStore } from "./store";
import Loader from "./components/Loader";

const PrivateRoute: FC<{
  component: React.FC;
}> = ({ component: Component }) => {
  const { user } = useStore();

  if (user) return <Component />;
  return <Navigate to="/" />;
};

const AppWrapper = lazy(() => import("./components/AppWrapper"));
const Home = lazy(() => import("./pages/Home"));
const NoPage = lazy(() => import("./pages/NoPage"));
const Admin = lazy(() => import("./pages/Admin"));
const AdminEdit = lazy(() => import("./pages/AdminEdit"));

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
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
    </Suspense>
  );
};

export default App;
