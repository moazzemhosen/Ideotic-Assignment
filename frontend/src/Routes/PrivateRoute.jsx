import React from 'react'

const PrivateRoute = ({ children }) => {
    const { isAuth } = useSelector((state) => state.auth);
    const location = useLocation();
    const from = {
      pathname: location.pathname,
    };
  
    if (isAuth) return children;
    return <Navigate to={"/login"} state={from} replace />;
}

export default PrivateRoute