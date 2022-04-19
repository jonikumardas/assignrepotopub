import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import Auth from '../ShereFolder/Firebase/Firebase.init';

const RequireAuth = ({ children }) => {
   let [user] = useAuthState(Auth);
  let location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;