import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/layout";
import Loading from "./components/loading";
import Routes from "./routes";

import "./assets/styles/bootstrap.light.css";
import "./assets/styles/bootstrap.print.css";
import "./assets/styles/bootstrap.overrides.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      theme: "Dark"
    };
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
