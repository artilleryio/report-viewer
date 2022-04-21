import React, { useContext, Fragment }  from "react";
import { ReportContext } from "../contexts/report-context";

const Information = () => {
  const context = useContext(ReportContext);
  const { hasCustomMetrics, isLoaded } = context;
  const { name, version } = context.report;
  return (
    <Fragment>
      <a id="information"></a>
      <div className="card mb-4">
        <div className="card-header card-header-primary">
          <i className="fas fa-info-circle"></i> Information
        </div>
        <ul className="list-group">
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Name
            <span className="float-right text-secondary font-weight-extra-bold">{name}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Version
            <span className="float-right font-weight-extra-bold">{version}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Addons
            <span className="float-right font-weight-extra-bold">{isLoaded && (hasCustomMetrics ? 'Yes' : 'No')}</span>
          </li>
          {isLoaded &&
            <li className="list-group-item d-flex justify-content-between align-items-center">
              &nbsp;
              <a className="float-right text-success font-weight-extra-bold cursor-pointer" 
                href={`data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(context.report) )}`} 
                download="aio_report_download.json" 
              >
                Download
              </a>
            </li>
      }
        </ul>
      </div>
    </Fragment>
  );
};

export default Information;
