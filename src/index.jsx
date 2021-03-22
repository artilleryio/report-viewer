import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/layout";
import Routes from "./routes";

import "./assets/styles/bootstrap.light.css";
import "./assets/styles/bootstrap.print.css";
import "./assets/styles/bootstrap.overrides.css";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Routes />
        </Layout>
      </BrowserRouter>
    );
  }
}

render(<App />, document.getElementById("root"));
