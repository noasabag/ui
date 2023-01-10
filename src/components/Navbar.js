import { Outlet, useNavigate } from "react-router-dom";
import "../pages/navbar.css";
import React from "react";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <header>
        <button
          onClick={() => {
            navigate("text");
          }}
        >
          {" "}
          Display text
        </button>
        <button
          onClick={() => {
            navigate("wordlist");
          }}
        >
          Dictionary Management
        </button>
        <button
          onClick={() => {
            navigate("profile");
          }}
        >
          profile
        </button>
        <h4>Privte English Mentor</h4>
      </header>
      <Outlet />
    </div>
  );
};

export default Navbar;
