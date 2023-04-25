import { FC } from "react";
import { Navigate } from "react-router-dom";
import { useStore } from "../store";

interface PropType {
  component: React.FC;
}

const PrivateRoute: FC<PropType> = ({ component: Component }) => {
  const { user } = useStore();

  if (user) return <Component />;
  return <Navigate to="/" />;
};

export default PrivateRoute;
