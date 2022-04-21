import React, { useContext, Fragment } from "react";
import { ThemeContext } from "../contexts/theme-context";
import Header from "./header";
import Footer from "./footer";
import SideMenu from "./sidemenu";


const Layout = ({ children }) => {
  const context = useContext(ThemeContext);

  return (
    <div className={!context.isLight ? 'dark-edition' : ''}>
      <title>Artilleryio Report Viewer</title>
      <SideMenu />
      <div className="main-panel">
        <Header />
        <div className="pt-2">
          <div className="container-fluid">{children}</div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
