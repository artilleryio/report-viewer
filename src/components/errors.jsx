import React, { Fragment } from "react";

export default ({ data }) => {
  return (
    <Fragment>
      <div className="mb-4">
        <h5>
          <i className="fas fa-exclamation-circle"></i> Errors
        </h5>
        <ul className="list-group">
          {Object.getOwnPropertyNames(data.aggregate.errors).map((item, i) => {
            return (
              <li
                key={i}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                {item}
                <span className="badge badge-danger badge-pill">
                  {data.aggregate.errors[item]}
                </span>
              </li>
            );
          })}
        </ul>
        {JSON.stringify(data.aggregate.errors) === JSON.stringify({}) ? (
          <div className="list-group">
            <div className="list-group-item text-muted">No Results</div>
          </div>
        ) : null}
      </div>
    </Fragment>
  );
};
