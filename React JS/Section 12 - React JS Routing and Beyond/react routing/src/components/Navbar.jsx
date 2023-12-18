import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="mt-10 flex justify-center gap-10">
      {/* <Link to="/">Home</Link>
      <Link to="/user">User</Link>
      <Link to="/about">About</Link>
      <Link to="/services">services</Link> */}

      <NavLink
        style={(e) => {
          return { color: e.isActive ? "tomato" : "" };
        }}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        style={(e) => {
          return { color: e.isActive ? "tomato" : "" };
        }}
        to="/user"
      >
        User
      </NavLink>
      <NavLink
        style={(e) => {
          return { color: e.isActive ? "tomato" : "" };
        }}
        to="/about"
      >
        About
      </NavLink>
      <NavLink
        style={(e) => {
          return { color: e.isActive ? "tomato" : "" };
        }}
        to="/services"
      >
        services
      </NavLink>
    </nav>
  );
};

export default Navbar;
