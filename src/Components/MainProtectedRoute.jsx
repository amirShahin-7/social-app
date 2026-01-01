import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate } from "react-router-dom";

const MainProtectedRoute = ({ children }) => {
  const { token } = useContext(AuthContext);

  return token ? children : <Navigate to={"/auth/login"} />;
};

export default MainProtectedRoute;
