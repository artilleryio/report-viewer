import React, { useContext, Fragment } from "react";
import { ReportContext } from "../contexts/report-context";

const Errors = () => {
  const context = useContext(ReportContext);
  const { aggregate } = context.report.results;
  return (
    <Fragment>
      <a id="errors"></a>
      <div className="card mb-4">
        <div className="card-header card-header-secondary">
          <i className="fas fa-bomb"></i> Network Errors
        </div>
        <ul className="list-group">
          {Object.getOwnPropertyNames(aggregate.errors).map((item, i) => {
            return (
              <li
                key={i}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                {item}
                <span className="float-right text-danger font-weight-extra-bold">
                  {aggregate.errors[item]}
                </span>
              </li>
            );
          })}
        </ul>
        {JSON.stringify(aggregate.errors) === JSON.stringify({}) ? (
          <div className="list-group">
            <div className="list-group-item text-muted">No Results</div>
          </div>
        ) : null}
      </div>
    </Fragment>
  );
};

export default Errors;
