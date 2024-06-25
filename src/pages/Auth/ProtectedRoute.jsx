import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
  const userData = useSelector((state) => state.auth.user);

  if (!userData) {
    // Redirect to the login page if userData is not present
    return <Navigate to="/auth" replace />;
  }

  // Render the children components if userData exists
  return children;
};

export default ProtectedRoute;
