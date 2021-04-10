import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header-info-cont">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/volunteer">Volunteer</NavLink>
        <NavLink to="/resources">Resources</NavLink>
      </div>
    </div>
  );
};

export default Header;
