import React from "react";
import { NavLink } from "react-router-dom";

const StyledNavbar = () => {
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "active" : "link")}
      >
        Home
      </NavLink>
      <NavLink
        to="dashboard"
        className={({ isActive }) => (isActive ? "active" : "link")}
      >
        Dashboard
      </NavLink>
      <NavLink
        to="products"
        className={({ isActive }) => (isActive ? "active" : "link")}
      >
        Products
      </NavLink>
      <NavLink
        to="about"
        className={({ isActive }) => (isActive ? "active" : "link")}
      >
        About
      </NavLink>
      <NavLink
        to="login"
        className={({ isActive }) => (isActive ? "active" : "link")}
      >
        Log in
      </NavLink>
    </nav>
  );
};

export default StyledNavbar;
