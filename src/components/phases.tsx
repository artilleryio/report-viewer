import React, { useContext, Fragment } from "react";
import { ReportContext } from "../contexts/report-context";

const Phases = () => {
  const context = useContext(ReportContext);
  const { aggregate } = context.report.results;
  return (
    <Fragment>
      <a id="phases"></a>
      <div className="card mb-4">
        <div className="card-header card-header-warning">
          <i className="fas fa-list-ul"></i> Phases
        </div>
          { aggregate.phases.length > 0 && 
            <div className="card-body">
              <table className="table">
                <thead className="text-warning">
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col" className="text-right">Duration</th>
                    <th scope="col" className="text-right">Arrival Rate</th>
                    {/* <th scope="col" className="text-right">Ramp To</th> */}
                    <th scope="col" className="text-right">Max V Users</th>
                  </tr>
                </thead>
                <tbody>
                  {aggregate.phases.map((item, i) => {
                    return (
                      <tr key={i}>
                        <td>{item.name || '--'}</td>
                        <td className="text-right font-weight-extra-bold">{item.duration || '--'}</td>
                        <td className="text-right font-weight-extra-bold">{item.arrivalRate || '--'}</td>
                        {/* <td className="text-right font-weight-extra-bold">{item.rampTo || '--'}</td> */}
                        <td className="text-right font-weight-extra-bold">{item.maxVusers || '--'}</td>
                      </tr>)
                  })}
                </tbody>
              </table>
            </div>
          }
          
          {aggregate.phases.length === 0 ? (
            <div className="list-group-item text-muted">No Results</div>
          ) : null}
      </div>
    </Fragment>
  );
};

export default Phases;
