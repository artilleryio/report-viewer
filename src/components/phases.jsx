import React, { Fragment } from "react";

// TODO: Figure out the best way to render this data for
//       readability... A table maybe? Accordion?

export default ({ data }) => {
  return (
    <Fragment>
      <div className="mb-4">
        <h5>
          <i className="fas fa-list-ul"></i> Phases
        </h5>
        <ul className="list-group">
          {data.aggregate.phases.map((item, i) => {
            return (
              <li
                key={i}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                {++i}: {JSON.stringify(item)}
              </li>
            );
          })}
        </ul>
        {data.aggregate.phases.length === 0 ? (
          <div className="list-group">
            <div className="list-group-item text-muted">No Results</div>
          </div>
        ) : null}
      </div>
    </Fragment>
  );
};
