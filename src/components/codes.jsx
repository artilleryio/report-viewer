import React from "react";

export default ({ data }) => (
  <div className="mb-4">
    <h5>
      <i className="fas fa-globe-americas"></i> Http code counts
    </h5>
    <ul className="list-group">
      {Object.getOwnPropertyNames(data.aggregate.codes).map((item, i) => {
        return (
          <li
            key={i}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            {item}
            <span className="badge badge-light badge-pill">
              {data.aggregate.codes[item]}
            </span>
          </li>
        );
      })}
      {JSON.stringify(data.aggregate.codes) === JSON.stringify({}) ? (
        <div className="list-group">
          <div className="list-group-item text-muted">No Results</div>
        </div>
      ) : null}
    </ul>
  </div>
);
