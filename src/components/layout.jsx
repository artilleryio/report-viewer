import React, { Fragment } from "react";
import Header from "./header";

export default ({ children, onToggleTheme }) => {
  return (
    <Fragment>
      <Header onToggleTheme={onToggleTheme} />
      <div className="container">{children}</div>
      <footer className="text-center text-muted m-4">
        Thank you for using the{" "}
        <a alt="Home" href="https://artillery.io" target="blank">
          artillery.io
        </a>{" "}
        report viewer.
      </footer>
    </Fragment>
  );
};
