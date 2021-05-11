import React from "react";

export default ({ addon, setAddonCallback }) => {
  return (
    <div >
      <div className="form-group">
          <label htmlFor="a_addon">Addon Handler (Custom Stats)</label>
          <select
            className="form-control"
            id="a_addon"
            checked={addon}
            onChange={(e) => setAddonCallback(e.target.value)}
          >
            <option value="raw">Raw Data</option>
            <option value="metrics-by-endpoint">Metrics By Endpoint</option>
          </select>
        </div>
    </div>
  );
}