import React from "react";
import { formatNumber } from "../utilities/formatters";

export default ({ data }) => {
  return (
    <div className="mb-4">
      <h5>
        <i className="far fa-hourglass"></i> Aggregate Latency
      </h5>
      <ul className="list-group">
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Shortest call
          {data.aggregate.latency.min && (
            <span className="badge badge-secondary badge-pill">
              {formatNumber(data.aggregate.latency.min)} ms
            </span>
          )}
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Longest call
          {data.aggregate.latency.max && (
            <span className="badge badge-secondary badge-pill">
              {formatNumber(data.aggregate.latency.max)} ms
            </span>
          )}
        </li>
        {/* <li className="list-group-item d-flex justify-content-between align-items-center">
          95th Percentile
          {data.aggregate.latency.p95 && (
            <span className="badge badge-secondary badge-pill">
              {formatNumber(data.aggregate.latency.p95)} ms
            </span>
          )}
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          99th Percentile
          {data.aggregate.latency.p99 && (
            <span className="badge badge-secondary badge-pill">
              {formatNumber(data.aggregate.latency.p99)} ms
            </span>
          )}
        </li> */}
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Requests per second
          {data.aggregate.rps.mean && (
            <span className="badge badge-primary badge-pill">
              {formatNumber(data.aggregate.rps.mean)} rps
            </span>
          )}
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Median response time
          {data.aggregate.latency.median && (
            <span className="badge badge-primary badge-pill">
              {formatNumber(data.aggregate.latency.median)} ms
            </span>
          )}
        </li>
      </ul>
    </div>
  );
}