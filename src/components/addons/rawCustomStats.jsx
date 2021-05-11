import React from "react";
import { formatNumber } from "../../utilities/formatters";

export default ({ data }) => {
  return (

    <div className="row">
        <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
            <h5>
                <i className="fas fa-puzzle-piece"></i> Raw Custom Stats
            </h5>
            <div className="list-group">
                {Object.getOwnPropertyNames(data.aggregate.customStats).map((item, i) => {
                return (
                    <div key={i} className="list-group-item list-group-item-action flex-column align-items-start">
                        <p className="mb-1">{item}</p>
                        <small>{JSON.stringify(data.aggregate.customStats[item])}</small>
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
                {Object.getOwnPropertyNames(data.aggregate.counters).map((item, i) => {
                return (
                    <li
                    key={i}
                    className="list-group-item d-flex justify-content-between align-items-center"
                    >
                    {item}
                    <span className="badge badge-secondary badge-pill">
                        {formatNumber(data.aggregate.counters[item])}
                    </span>
                    </li>
                );
                })}
            </ul>
        </div>
      </div>


  );
}
