import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, isAdmin }) => {
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);

  if (user === {}) return <Navigate to="/login" />;
  return (
    <>
      {loading === false &&
        (isAuthenticated === false ? <Navigate to="/login" /> : children)}
    </>
  );
};

export default ProtectedRoute;
