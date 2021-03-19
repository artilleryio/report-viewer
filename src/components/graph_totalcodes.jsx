import React from "react";
import { Pie } from "@reactchartjs/react-chart.js";

export default ({ data }) => {
  const colors = {
    info: "rgba(54, 232, 235, 0.5)",
    good: "rgba(54, 235, 93, 0.5)",
    redirects: "rgba(229, 235, 54, 0.5)",
    badrequests: "rgba(166, 54, 235, 0.5)",
    servererrors: "rgba(235, 54, 69, 0.5)"
  };
  const hoverColors = {
    info: "rgba(54, 232, 235, 0.7)",
    good: "rgba(54, 235, 93, 0.7)",
    redirects: "rgba(229, 235, 54, 0.7)",
    badrequests: "rgba(166, 54, 235, 0.7)",
    servererrors: "rgba(235, 54, 69, 0.7)"
  };

  const mapChartData = () => {
    let datasets = [];
    const labels = [];
    let graphData = [];

    Object.getOwnPropertyNames(data.aggregate.codes).forEach((item) => {
      labels.push(item);
      graphData.push(data.aggregate.codes[item]);
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
    <div className="mb-4">
      <h5 className="mb-2">
        <i className="fas fas fa-chart-pie"></i> Response codes
      </h5>
      <Pie data={mapChartData()} options={options} />
    </div>
  );
};

const options = {
  cutoutPercentage: 50
};
