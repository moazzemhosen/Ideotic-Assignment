import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutAPI } from "../Redux/auth/auth.actions";

const Navbar = () => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.auth);
  const handleLoginClick = () => {
    dispatch(logoutAPI());
  };
  return (
    <div>
      <Link to="/login">
        <div>Login</div>
      </Link>
      <Link to="/">
        <div>Breeds</div>
      </Link>
      <div onClick={handleLoginClick}>{isAuth ? "Logout" : "Login"}</div>
    </div>
  );
};

export default Navbar;
