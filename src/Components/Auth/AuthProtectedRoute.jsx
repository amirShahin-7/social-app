import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { Navigate } from "react-router-dom";

const AuthProtectedRoute = ({ children }) => {
  const { token } = useContext(AuthContext);

  return token == null ? children : <Navigate to={"/"} />;
};

export default AuthProtectedRoute;
