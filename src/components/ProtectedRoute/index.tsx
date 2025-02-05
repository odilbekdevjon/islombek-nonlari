import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  element: JSX.Element;
}

export const ProtectedRoute = ({ element }: ProtectedRouteProps) => {
  const token = localStorage.getItem("ACCESS_TOKEN");
  return token ? element : <Navigate to="/login" replace />;
};
