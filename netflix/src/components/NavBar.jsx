import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { userAuth } from "../context/AuthContext";

const NavBar = () => {
  const { user, logOut } = userAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="absolute w-full p-4 flex items-center justify-between">
      <Link to="/">
        <h1 className="uppercase cursor-pointer text-red-700 font-bold text-4xl">
          Netflix
        </h1>
      </Link>

      {user?.email ? (
        <div>
          <Link to="/profile">
            <button className="capitalize pr-4">Profile</button>
          </Link>

          <button
            className="capitalize pr-4 bg-red-600 px-4 py-2 rounded cursor-pointer"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button className="capitalize pr-4">login</button>
          </Link>
          <Link to="/signup">
            <button className="capitalize pr-4 bg-red-600 px-4 py-2 rounded cursor-pointer ">
              Signup
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavBar;
