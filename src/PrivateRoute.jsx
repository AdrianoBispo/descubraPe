import { Navigate } from "react-router-dom";
import { useAuth } from './services/useAuth';

export function PrivateRoute({ children }) {
  const isAuthenticated = localStorage.getItem("authToken"); // ou use um context de auth
  const { currentUser } = useAuth();

  return (
    isAuthenticated ? children : <Navigate to="/login" replace />,
    
    currentUser ? children : <Navigate to="/landing-page" />
  
  );
}
