import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Toggle from "../components/toggle";
import { ThemeContext } from "../contexts/theme-context";

const Header = () => {
  const context = useContext(ThemeContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark pl-3">
      <img src="logo.png" alt="Artillery.io" width={32} height={32} /> 
      <NavLink to="/" className="navbar-brand">
        Artillery.io Report Viewer
        <span className="badge rounded-pill bg-secondary header-badge">v2</span>
      </NavLink>
      <span style={{position: 'absolute', right: 20, top: 22 }}>
        <Toggle
          disabled={false}
          icons={{
            checked: <i className="fas fa-sun" style={{ marginTop: -3, marginLeft: -2 }}></i>, 
            unchecked: <i className="fas fa-moon" style={{ marginTop: -3 }}></i>
          }}
          defaultChecked={context.isLight}
          onChange={(checked) => {
            context.toggleDarkMode(checked)
          }}
        />
      </span>
    </nav>
  );
};

export default Header;
