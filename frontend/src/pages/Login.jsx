import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const { isAuth } = useSelector((state) => state.auth);
    const [loginCreds, setLoginCreds] = useState({
      email: "eve.holt@reqres.in",
      password: "cityslicka",
    });
  
    const hanldeChange = (e) => {
      const { name, value } = e.target;
      setLoginCreds({
        ...loginCreds,
        [name]: value,
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
     // dispatch(loginAPI(loginCreds));
    };
  
    useEffect(() => {
      if (isAuth) {
        navigate(location.state.pathname || "/", { replace: true });
      }
    }, [navigate, isAuth]);
    return (
      <div>
        Login
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "auto",
            maxWidth: "200px",
            gap: "10px",
          }}
        >
          <input
            
            name="email"
            type="email"
            placeholder="Enter Email"
            value={loginCreds.email}
            onChange={hanldeChange}
          />
          <input
           
            name="password"
            type="password"
            placeholder="Enter Password..."
            value={loginCreds.password}
            onChange={hanldeChange}
          />
          <button  type="submit">
            Login
          </button>
        </form>
      </div>
    );
}

export default Login