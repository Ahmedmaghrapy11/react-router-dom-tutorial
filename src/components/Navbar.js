import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="dashboard">Dashboard</Link>
      <Link to="products">Products</Link>
      <Link to="about">About</Link>
    </nav>
  );
};

export default Navbar;
