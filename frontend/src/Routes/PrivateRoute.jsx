import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const  {isAuth}  = useSelector((state) => state.auth);
    console.log("private",isAuth);
    const location = useLocation();
    const from = {
      pathname: location.pathname,
    };
  
    if (isAuth) return children;
    return <Navigate to={"/login"} state={from} replace />;
}

export default PrivateRoute;