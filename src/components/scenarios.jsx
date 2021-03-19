import React from "react";

export default ({ data }) => {
  return (
    <div className="mb-4">
      <h5>
        <i className="fas fa-network-wired"></i> Scenarios
      </h5>
      <ul className="list-group">
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Scenarios Created
          <span className="badge badge-secondary badge-pill">
            {data.aggregate.scenariosCreated}
          </span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Scenarios Completed
          <span className="badge badge-secondary badge-pill">
            {data.aggregate.scenariosCompleted}
          </span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Total Requests Completed
          <span className="badge badge-secondary badge-pill">
            {data.aggregate.requestsCompleted}
          </span>
        </li>
      </ul>
    </div>
  );
};
