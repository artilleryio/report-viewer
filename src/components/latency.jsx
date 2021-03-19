import React from "react";

export default ({ data }) => (
  <div className="mb-4">
    <h5>
      <i className="far fa-hourglass"></i> Latency
    </h5>
    <ul className="list-group">
      <li className="list-group-item d-flex justify-content-between align-items-center">
        Shortest call
        {data.aggregate.latency.min && (
          <span className="badge badge-secondary badge-pill">
            {data.aggregate.latency.min} ms
          </span>
        )}
      </li>
      <li className="list-group-item d-flex justify-content-between align-items-center">
        Longest call
        {data.aggregate.latency.max && (
          <span className="badge badge-secondary badge-pill">
            {data.aggregate.latency.max} ms
          </span>
        )}
      </li>
      <li className="list-group-item d-flex justify-content-between align-items-center">
        Requests per second
        {data.aggregate.rps.mean && (
          <span className="badge badge-primary badge-pill">
            {data.aggregate.rps.mean} rps
          </span>
        )}
      </li>
      <li className="list-group-item d-flex justify-content-between align-items-center">
        Average response time
        {data.aggregate.latency.median && (
          <span className="badge badge-primary badge-pill">
            {data.aggregate.latency.median} ms
          </span>
        )}
      </li>
    </ul>
  </div>
);
