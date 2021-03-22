import React from "react";
import { NavLink } from "react-router-dom";

export default ({ onToggleTheme }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <NavLink className="navbar-brand" to="/">
        <i className="fas fa-chart-bar fa-lg pr-2"></i> Artillery Report Viewer
      </NavLink>
      <span className="float-right mt-2">
        <a alt="Home" target="blank" href="https://artillery.io">
          artillery.io
        </a>
      </span>
    </nav>
  );
};
