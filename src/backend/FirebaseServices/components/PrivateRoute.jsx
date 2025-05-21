import { Navigate } from 'react-router-dom';
import { useAuth } from '../useAuth';

export function PrivateRoute ({ children }) {
  const { currentUser } = useAuth();

  return currentUser ? children : <Navigate to="/landing-page" />;
};
