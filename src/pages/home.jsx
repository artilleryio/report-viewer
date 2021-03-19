import React, { useState, Fragment } from "react";
import PayloadLoader from "../components/payloadLoader";
import Information from "../components/information";
import Scenarios from "../components/scenarios";
import Latency from "../components/latency";
import Codes from "../components/codes";
import Errors from "../components/errors";
import Phases from "../components/phases";
import GraphLatency from "../components/graph_latency";
import GraphReqLoad from "../components/graph_reqload";
import GraphCodes from "../components/graph_codes";
import GraphTotalCodes from "../components/graph_totalcodes";

// import _testData from "../../samples/test_report.json";
// const testState = {
//   name: "Test File",
//   results: _testData
// };

const defaultState = {
  name: "No file loaded",
  results: {
    aggregate: {
      latency: {},
      rps: {},
      codes: {},
      errors: {},
      phases: []
    },
    intermediate: []
  }
};

export default () => {
  const [payload, setPayload] = useState(defaultState);

  return (
    <Fragment>
      <PayloadLoader setPayload={setPayload} />
      <Information name={payload.name} data={payload.results} />
      <div className="row">
        <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
          <Scenarios data={payload.results} />
        </div>
        <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
          <Latency data={payload.results} />
        </div>
      </div>
      <Phases data={payload.results} />
      <div className="row">
        <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
          <Codes data={payload.results} />
        </div>
        <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
          <Errors data={payload.results} />
        </div>
      </div>

      <span className="print-pb">&nbsp;</span>
      <GraphLatency data={payload.results.intermediate} />
      <GraphReqLoad data={payload.results.intermediate} />

      <span className="print-pb">&nbsp;</span>
      <GraphCodes data={payload.results.intermediate} />
      <GraphTotalCodes data={payload.results} />
    </Fragment>
  );
};
