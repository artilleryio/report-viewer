import React from "react";

export default ({ name, version, data }) => {
  
  return (
    <div className="mb-4">
      <h5>
        <i className="fas fa-info-circle"></i> Information
      </h5>
      <ul className="list-group">
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Filename
          <span className="badge">{name}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Version
          <span className="badge">{version}</span>
        </li>
      </ul>
    </div>
  );
};
