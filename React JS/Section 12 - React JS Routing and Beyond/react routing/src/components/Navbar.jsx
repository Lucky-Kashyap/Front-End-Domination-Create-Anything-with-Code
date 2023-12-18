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
          return {
            color: e.isActive ? "tomato" : "",
            fontWeight: e.isActive ? "bold" : "",
          };
        }}
        to="/"
      >
        Home
      </NavLink>
      <NavLink to="/user">
        {(e) => {
          return (
            <span
              className={[
                e.isActive ? "text-red-300" : "",
                e.isActive ? "font-semibold text-xl" : "",
              ].join(" ")}
            >
              User
            </span>
          );
        }}
        {/* <span>User</span> */}
      </NavLink>
      <NavLink
        className={(e) => {
          return [
            e.isActive ? "text-red-300" : "",
            e.isActive ? "font-semibold text-xl" : "",
          ].join(" ");
        }}
        to="/about"
      >
        About
      </NavLink>
      <NavLink
        style={(e) => {
          return {
            color: e.isActive ? "tomato" : "",
            fontWeight: e.isActive ? "bold" : "",
          };
        }}
        to="/services"
      >
        services
      </NavLink>
    </nav>
  );
};

export default Navbar;
