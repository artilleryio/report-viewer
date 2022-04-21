import React, { Fragment, useState, useContext } from "react";
import { ReportContext } from "../contexts/report-context";
import AddonSelector from "./addons-selector";
import RawCustomStats from "./addons/addon-rawCustomStats";
import MetricsByEndpoint from "./addons/addon-metricsByEndpoint";

const Addons = () => {
  const context = useContext(ReportContext);
  const { hasCustomMetrics } = context;
  const [addon, setAddon] = useState('raw');
  return  hasCustomMetrics ?
      <Fragment>
        <a id="addons"></a>
        <AddonSelector addon={addon} setAddonCallback={setAddon} />
        <br />
        { addon === 'raw' && <RawCustomStats /> }
        { addon === 'metrics-by-endpoint' && <MetricsByEndpoint /> }
      </Fragment>
    : null
};

export default Addons;
