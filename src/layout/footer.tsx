import React from "react";
import packageJson from "../../package.json"

const Footer = () => {
  return (
    <footer className="text-center text-muted m-4">
        <hr />
        <a href="https://github.com/artilleryio/report-viewer" target="blank" className="text-muted ml-1 mr-1">
            <i className="fab fa-github-square fa-2x"></i>
        </a>
        <a href="https://twitter.com/artilleryio?lang=en" target="blank" className="text-muted ml-1 mr-1">
            <i className="fab fa-twitter-square fa-2x"></i>
        </a>
        <a href={`mailto:${packageJson.email}`} target="blank" className="text-muted ml-1 mr-1">
            <i className="fas fa-envelope-square fa-2x"></i>
        </a>
        <a href="https://artillery.io" target="blank" className="text-muted ml-1 mr-1">
            <i className="fas fa-external-link-square-alt fa-2x"></i>
        </a>
        <br />
        <small className="text-muted version">Artillery.io © 2021. All rights reserved.</small>
        <br />
        <small className="text-muted version">Built by Chris Fryer - <i className="fab fa-twitter"></i> <a href="https://twitter.com/cfryerdev" target="_blank">@cfryerdev</a></small>
        <br />
        <small className="text-muted version">Version: {packageJson.version}</small>
      </footer>
  );
};

export default Footer;
