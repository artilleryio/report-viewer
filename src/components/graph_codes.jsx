import React from "react";
import { Line } from "@reactchartjs/react-chart.js";

export default ({ data }) => {
  const colors = {
    info: "rgba(54, 232, 235, 0.5)",
    good: "rgba(54, 235, 93, 0.5)",
    redirects: "rgba(229, 235, 54, 0.5)",
    badrequests: "rgba(166, 54, 235, 0.5)",
    servererrors: "rgba(235, 54, 69, 0.5)"
  };

  const mapChartData = () => {
    const datasets = [];
    const labels = [];
    const info = [];
    const good = [];
    const redirects = [];
    const badrequests = [];
    const servererrors = [];
    data.forEach((item) => {
      let d = new Date(item.timestamp);
      labels.push(d.toLocaleString());
      let http100s = 0;
      let http200s = 0;
      let http300s = 0;
      let http400s = 0;
      let http500s = 0;
      Object.getOwnPropertyNames(item.codes).forEach((p) => {
        var val = parseInt(p, 0);
        var amount = item.codes[p];
        //console.log(p, item.codes[p]);
        if (val >= 100 && val < 200) {
          http100s += amount;
        }
        if (val >= 200 && val < 300) {
          http200s += amount;
        }
        if (val >= 300 && val < 400) {
          http300s += amount;
        }
        if (val >= 400 && val < 500) {
          http400s += amount;
        }
        if (val >= 500 && val < 600) {
          http500s += amount;
        }
      });
      info.push(http100s);
      good.push(http200s);
      redirects.push(http300s);
      badrequests.push(http400s);
      servererrors.push(http500s);
    });
    datasets.push({
      label: "100s",
      data: info,
      fill: false,
      borderColor: colors.info,
      yAxisID: "y-axis-0"
    });
    datasets.push({
      label: "200s",
      data: good,
      fill: false,
      borderColor: colors.good,
      yAxisID: "y-axis-0"
    });
    datasets.push({
      label: "300s",
      data: redirects,
      fill: false,
      borderColor: colors.redirects,
      yAxisID: "y-axis-0"
    });
    datasets.push({
      label: "400s",
      data: badrequests,
      fill: false,
      borderColor: colors.badrequests,
      yAxisID: "y-axis-0"
    });
    datasets.push({
      label: "500s",
      data: servererrors,
      fill: false,
      borderColor: colors.servererrors,
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
        <i className="fas fa-chart-area"></i> Http codes over time
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
