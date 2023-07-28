import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../app/store";

const Navbar = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutAndRedirectHome = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="navbar-container">
      <div className="nav-links">
      <Link to="/home">Home</Link>
        <Link to="/allrecipes">Browse Recipes</Link>
        {isLoggedIn && <Link to="/favorites">Favorites</Link>}
        </div>
        {isLoggedIn ? (
        <button className="logout-button" onClick={logoutAndRedirectHome}>
          Logout
        </button>
      ) : (
        <div className="nav-auth-links">
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
