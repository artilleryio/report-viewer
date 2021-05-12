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

import AddonSelector from "../components/addonSelector";
import RawCustomStats from "../components/addons/rawCustomStats";
import MetricsByEndpoint from "../components/addons/metricsByEndpoint";

const defaultState = {
  name: "No file loaded",
  version: null,
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
  const [addon, setAddon] = useState('raw');
  const validateHandler = () => {
    return (payload.results.aggregate.customStats && payload.results.aggregate.counters) 
      && (JSON.stringify(payload.results.aggregate.customStats) !== JSON.stringify({})) 
      && (JSON.stringify(payload.results.aggregate.counters) !== JSON.stringify({})) 
  };
  return (
    <Fragment>
      <PayloadLoader setPayload={setPayload} />
      <Information name={payload.name} data={payload.results} version={payload.version} />
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

      { validateHandler() && 
          <Fragment>
            <span className="print-pb mb-4">&nbsp;</span>
            <AddonSelector addon={addon} setAddonCallback={setAddon} />
            <br />
            { addon === 'raw' && <RawCustomStats data={payload.results} /> }
            { addon === 'metrics-by-endpoint' && <MetricsByEndpoint data={payload.results} /> }
          </Fragment>
      }
    </Fragment>
  );
};
