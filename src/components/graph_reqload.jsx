import React from "react";
import { Line } from "@reactchartjs/react-chart.js";

export default ({ data }) => {
  const colors = {
    count: "rgba(229, 235, 54, 0.5)",
    mean: "rgba(235, 145, 54, 0.5)"
  };

  const mapChartData = () => {
    const datasets = [];
    const labels = [];
    const rps_count = [];
    const rps_mean = [];
    data.forEach((item) => {
      let d = new Date(item.timestamp);
      labels.push(d.toLocaleString());
      rps_count.push(item.rps.count);
      rps_mean.push(item.rps.mean);
    });
    datasets.push({
      label: "Requests",
      data: rps_count,
      fill: false,
      borderColor: colors.count,
      yAxisID: "y-axis-0"
    });
    datasets.push({
      label: "(avg) Requests per second",
      data: rps_mean,
      fill: false,
      borderColor: colors.mean,
      yAxisID: "y-axis-0"
    });
    return {
      labels: labels,
      datasets: datasets
    };
  };

  return (
    <div className="mb-4">
      <h5>
        <i className="fas fa-chart-area"></i> Requests over time
      </h5>
      <Line data={mapChartData()} options={options} />
    </div>
  );
};

const options = {
  scales: {
    yAxes: [
      {
        type: "linear",
        display: true,
        id: "y-axis-0",
        ticks: {
          beginAtZero: true
        }
      }
    ]
  }
};
