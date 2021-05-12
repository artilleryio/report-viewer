import React, { Fragment } from "react";
import { formatNumber } from "../../utilities/formatters";

export default ({ data }) => {
  const validateHandler = () => {
    return (data.aggregate.customStats && data.aggregate.counters) 
      && (JSON.stringify(data.aggregate.customStats) !== JSON.stringify({})) 
      && (JSON.stringify(data.aggregate.counters) !== JSON.stringify({})) 
  };
  const pivotCodesByEndpoint = () => {
    let collection = [];
    Object.getOwnPropertyNames(data.aggregate.customStats).map((endpoint, si) => {
      let codes = [];
      Object.getOwnPropertyNames(data.aggregate.counters).forEach((item, i) => {
        let segm = item.split(' ');
        if (endpoint === segm[segm.length - 1]) {
          console.log(Object.values(data.aggregate.counters)[i])
          codes.push({ 
            code: parseInt(item.replace('code ', '').replace(` on ${endpoint}`, ''), 0),
            count: Object.values(data.aggregate.counters)[i]
          });
        }
      });
      collection.push({ 
        endpoint: endpoint, 
        codes: codes,
        latency: Object.entries(data.aggregate.customStats)[si][1]
      });
    });
    return collection;
  };
  return !validateHandler() ? 
    <div className="alert alert-danger">
      Unable to parse custom metrics for this addon handler.
    </div> : (
    <div className="mb-4">
      <h5>
          <i className="fas fa-puzzle-piece"></i> Metrics by Endpoint
      </h5>
      {pivotCodesByEndpoint().map((item, i) => {
        // console.log(item);
        return (
          <div key={i} className="row mt-3">
            <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
              <h6>$ {item.endpoint}</h6>
              <ul className="list-group">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Shortest call
                  {item.latency.min && (
                    <span className="badge badge-secondary badge-pill">
                      {formatNumber(item.latency.min)} ms
                    </span>
                  )}
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Longest call
                  {item.latency.max && (
                    <span className="badge badge-secondary badge-pill">
                      {formatNumber(item.latency.max)} ms
                    </span>
                  )}
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Median response time
                  {item.latency.median && (
                    <span className="badge badge-primary badge-pill">
                      {formatNumber(item.latency.median)} ms
                    </span>
                  )}
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
              <h6>Codes</h6>
              <ul className="list-group">
                {item.codes.map((codeItem, i) => {
                  return (
                    <li
                      key={i}
                      className="list-group-item d-flex justify-content-between align-items-center"
                    >
                      {codeItem.code}
                      <span className="badge badge-secondary badge-pill">
                        {formatNumber(codeItem.count)}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}
