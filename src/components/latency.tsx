import React, { useContext, Fragment }  from "react";
import { ReportContext } from "../contexts/report-context";
import { formatNumber } from "../utilities/formatters";

const Latency = () => {
  const context = useContext(ReportContext);
  const { aggregate } = context.report.results;
  return (
    <Fragment>
      <a id="latency"></a>
      <div className="card mb-4">
        <div className="card-header card-header-info">
          <i className="far fa-hourglass"></i> Aggregate Latency
        </div>
        <ul className="list-group">
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Shortest call
            {aggregate.latency.min && (
              <span className="float-right font-weight-extra-bold">
                {formatNumber(aggregate.latency.min)} ms
              </span>
            )}
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Longest call
            {aggregate.latency.max && (
              <span className="float-right font-weight-extra-bold">
                {formatNumber(aggregate.latency.max)} ms
              </span>
            )}
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Requests per second
            {aggregate.rps.mean && (
              <span className="text-success float-right font-weight-extra-bold">
                {formatNumber(aggregate.rps.mean)} rps
              </span>
            )}
          </li>
          <li className="list-group-item d-flex justify-content-between align-ite.font-weight-boldms-center">
            Median response time
            {aggregate.latency.median && (
              <span className="text-success float-right font-weight-extra-bold">
                {formatNumber(aggregate.latency.median)} ms
              </span>
            )}
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default Latency;
