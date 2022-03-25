import React, { useContext, Fragment }  from "react";
import { ReportContext } from "../contexts/report-context";
import { formatNumber, formatDateTime } from "../utilities/formatters";

const Scenarios = () => {
  const context = useContext(ReportContext);
  const { aggregate } = context.report.results;
  return (
    <Fragment>
      <a id="scenarios"></a>
      <div className="card mb-4">
        <div className="card-header card-header-info">
          <i className="fas fa-network-wired"></i> Scenarios
        </div>
        <ul className="list-group">
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Timestamp
            <span className="float-right text-secondary font-weight-extra-bold">
              {formatDateTime(aggregate.timestamp)}
            </span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Scenarios Created
            <span className="float-right font-weight-extra-bold">
              {formatNumber(aggregate.scenariosCreated)}
            </span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Scenarios Completed
            <span className="float-right font-weight-extra-bold">
              {formatNumber(aggregate.scenariosCompleted)}
            </span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Total Requests Completed
            <span className="float-right font-weight-extra-bold">
              {formatNumber(aggregate.requestsCompleted)}
            </span>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default Scenarios;
