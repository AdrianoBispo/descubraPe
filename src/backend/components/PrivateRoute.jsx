import { Navigate } from "react-router-dom";

export function PrivateRoute({ children }) {
  const isAuthenticated = localStorage.getItem("authToken"); // ou use um context de auth

  return isAuthenticated ? children : <Navigate to="/login" replace />;
}
