import React, { useContext, Fragment } from "react";
import { ReportContext } from "../../contexts/report-context";
import { formatNumber } from "../../utilities/formatters";



const AddonMetricsByEndpoint = () => {
  const context = useContext(ReportContext);
  const { aggregate } = context.report.results;

  const pivotCodesByEndpoint = () => {
    let collection = [];
    Object.getOwnPropertyNames(aggregate.customStats).map((endpoint, si) => {
      let codes = [];
      Object.getOwnPropertyNames(aggregate.counters).forEach((item, i) => {
        let segm = cleanMessageText(item).split('.');
        if (cleanMessageText(endpoint) === segm[0]) {
          codes.push({ 
            code: parseInt(segm[2], 0),
            count: Object.values(aggregate.counters)[i]
          });
        }
      });
      collection.push({ 
        endpoint: endpoint, 
        codes: codes,
        latency: Object.entries(aggregate.customStats)[si][1]
      });
    });
    return collection;
  };

  const cleanMessageText = (message) => {
    return message
      .replace('plugins.metrics-by-endpoint.response_time.', '')
      .replace('plugins.metrics-by-endpoint.', '');
  };

  return !context.hasCustomMetrics ? 
    <div className="alert alert-danger">
      Unable to parse custom metrics for this addon handler.
    </div> : (
      <Fragment>

        <div className="card mb-4">
          <div className="card-header card-header-rose">
            <i className="fas fa-table"></i> Response Times by Endpoint
          </div>
          <div className="card-body">
            <table className="table">
              <thead className="text-rose">
                <tr>
                  <th scope="col">Endpoint</th>
                  <th scope="col" className="text-right">Min</th>
                  <th scope="col" className="text-right">Median</th>
                  <th scope="col" className="text-right">Max</th>
                </tr>
              </thead>
              <tbody>
                {pivotCodesByEndpoint().map((item, i) => {
                  return (
                    <tr key={i}>
                      <td>{cleanMessageText(item.endpoint)}</td>
                      <td className="text-right">{formatNumber(item.latency.min)} ms</td>
                      <td className="text-right">{formatNumber(item.latency.median)} ms</td>
                      <td className="text-right">{formatNumber(item.latency.max)} ms</td>
                    </tr>)
                })}
              </tbody>
            </table>
          </div>
        </div>

        <br />

        <div className="card mt-2 mb-4">
          <div className="card-header card-header-rose">
              <i className="fas fa-puzzle-piece"></i> Metrics by Endpoint
          </div>
          <div className="card-body">
            {pivotCodesByEndpoint().map((item, i) => {
              return (
                <div key={i} className="row mt-3">
                  <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
                    <h6><i className="fas fa-project-diagram"></i> $ {cleanMessageText(item.endpoint)}</h6>
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
                    <h6><i className="fas fa-globe-americas"></i> Http code counts</h6>
                    <ul className="list-group">
                      {item.codes.map((codeItem, i) => {
                        return (
                          <li
                            key={i}
                            className="list-group-item d-flex justify-content-between align-items-center"
                          >
                            {codeItem.code}
                            <span className={`badge ${codeItem.code == 200 ? 'badge-success' : 'badge-secondary'} badge-pill`}>
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
        </div>

        
      </Fragment>
  );
};

export default AddonMetricsByEndpoint;
