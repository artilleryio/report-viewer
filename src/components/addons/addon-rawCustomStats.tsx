import React, { useContext, useEffect, useState } from "react";
import { ReportContext } from "../../contexts/report-context";
import { formatNumber } from "../../utilities/formatters";

const AddonRawCustomStats = () => {
  const context = useContext(ReportContext);
  const { aggregate } = context.report.results;
  const [rowShowCount, setRowShowCount] = useState(25);
  const [results, setResults] = useState({ customStats: [], counters: [] });

  useEffect(() => {
    getPagedResults();
  }, [aggregate]);

  const getPagedResults = () =>{
    setResults({
        customStats: Object.getOwnPropertyNames(aggregate.customStats).slice(0, rowShowCount),
        counters: Object.getOwnPropertyNames(aggregate.counters).slice(0, rowShowCount)
    });
  };

  const handleShowMoreRows = () => {
    setRowShowCount(rowShowCount + 25);
    getPagedResults();
  };

  const ShowMoreButton = () => (<button className="btn btn-info m-2" onClick={handleShowMoreRows}>Show More...</button>);

  return !context.hasCustomMetrics ? 
    <div className="alert alert-danger">
      Unable to parse custom metrics for this addon handler.
    </div> : (

    <div className="card mb-2">
        <div className="card-header card-header-rose">
            <i className="fas fa-puzzle-piece"></i> Raw addon data
        </div>
        <div className="card-body">
            <div className="row">
                <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
                    <h5>
                        <i className="fas fa-puzzle-piece"></i> Raw Custom Stats
                    </h5>
                    <div className="list-group">
                        {results.customStats.map((item, i) => {
                            return (
                                <div key={i} className="list-group-item list-group-item-action flex-column align-items-start">
                                    <p className="mb-1">{item}</p>
                                    <small>{JSON.stringify(aggregate.customStats[item])}</small>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
                    <h5>
                        <i className="fas fa-puzzle-piece"></i> Raw Counters
                    </h5>
                    <ul className="list-group">
                        {results.counters.map((item, i) => {
                            return (
                                <li
                                    key={i}
                                    className="list-group-item d-flex justify-content-between align-items-center"
                                >
                                    {item}
                                    <span className="badge badge-secondary badge-pill">
                                        {formatNumber(aggregate.counters[item])}
                                    </span>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>

        <ShowMoreButton />
    </div>

    


  );
};

export default AddonRawCustomStats;
