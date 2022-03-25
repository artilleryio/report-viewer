import React, { useContext, Fragment }  from "react";
import { ReportContext } from "../contexts/report-context";
import { formatNumber } from "../utilities/formatters";

const Codes = () => {
  const context = useContext(ReportContext);
  const { aggregate } = context.report.results;
  return (
    <Fragment>
      <a id="httpcodes"></a>
      <div className="card mb-4">
        <div className="card-header card-header-secondary">
          <i className="fas fa-globe-americas"></i> Http code counts
        </div>
        <ul className="list-group">
          {Object.getOwnPropertyNames(aggregate.codes).map((item, i) => {
            return (
              <li
                key={i}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                {item}
                <span className="float-right font-weight-extra-bold">
                  {formatNumber(aggregate.codes[item])}
                </span>
              </li>
            );
          })}
          {JSON.stringify(aggregate.codes) === JSON.stringify({}) ? (
            <div className="list-group">
              <div className="list-group-item text-muted">No Results</div>
            </div>
          ) : null}
        </ul>
      </div>
    </Fragment>
  );
};

export default Codes;
