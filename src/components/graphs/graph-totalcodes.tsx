import React, { useContext, Fragment }  from "react";
import { ReportContext } from "../../contexts/report-context";
import { Pie } from "@reactchartjs/react-chart.js";

const GraphTotalCodes = () => {
  const context = useContext(ReportContext);
  const { aggregate } = context.report.results;
  const colors = {
    info: "rgba(54, 232, 235, 0.5)",
    good: "rgba(54, 235, 93, 0.5)",
    redirects: "rgba(229, 235, 54, 0.5)",
    badrequests: "rgba(166, 54, 235, 0.5)",
    servererrors: "rgba(235, 54, 69, 0.5)",
    norecords: "rgba(125, 125, 125, 0.5)"
  };
  const hoverColors = {
    info: "rgba(54, 232, 235, 0.7)",
    good: "rgba(54, 235, 93, 0.7)",
    redirects: "rgba(229, 235, 54, 0.7)",
    badrequests: "rgba(166, 54, 235, 0.7)",
    servererrors: "rgba(235, 54, 69, 0.7)",
    norecords: "rgba(125, 125, 125, 0.7)"
  };

  const mapChartData = () => {
    let datasets = [];
    let labels = [];
    let graphData = [];

    Object.getOwnPropertyNames(aggregate.codes).forEach((item) => {
      labels.push(item);
      graphData.push(aggregate.codes[item]);
    });
    datasets = [
      {
        data: graphData,
        borderWidth: 0,
        backgroundColor: [
          colors.info,
          colors.good,
          colors.redirects,
          colors.badrequests,
          colors.servererrors
        ],
        hoverBackgroundColor: [
          hoverColors.info,
          hoverColors.good,
          hoverColors.redirects,
          hoverColors.badrequests,
          hoverColors.servererrors
        ]
      }
    ];

    return {
      labels: labels,
      datasets: datasets
    };
  };

  return (
    <Fragment>
      <a id="graph_totalcodes"></a>
      <div className="card mb-4">
        <div className="card-header card-header-success mb-3">
          <i className="fas fas fa-chart-pie"></i> Response codes
        </div>
        { Object.getOwnPropertyNames(aggregate.codes).length === 0 
        ? <div className="list-group-item text-muted">No Results</div>
        : <div className="card-body">
          {/* @ts-ignore */}
          <Pie data={mapChartData()} options={options} />
          </div>
        }
      </div>
    </Fragment>
  );
};

const options = {
  cutoutPercentage: 50
};

export default GraphTotalCodes;
