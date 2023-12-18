import React from "react";
import Home from "../components/Home";
import About from "../components/About";
import User from "../components/User";
import Services from "../components/Services";
import { Route, Routes } from "react-router-dom";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/user" element={<User />} />
      <Route path="/services" element={<Services />} />
    </Routes>
  );
};

export default Routing;
