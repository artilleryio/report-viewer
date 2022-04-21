import React, { useContext, Fragment } from "react";
import { ReportContext } from "../../contexts/report-context";
import { Line } from "@reactchartjs/react-chart.js";

const GraphLatency = () => {
  const context = useContext(ReportContext);
  const { intermediate } = context.report.results;
  const colors = {
    min: "rgba(54, 235, 84, 0.5)",
    max: "rgba(54, 162, 235, 0.5)",
    median: "rgba(235, 54, 126, 0.5)",
    p95s: "rgba(184, 54, 235, 0.5)",
    p99s: "rgba(235, 193, 54, 0.5)"
  };

  const mapChartData = () => {
    const datasets = [];
    const labels = [];
    const min = [];
    const max = [];
    const median = [];
    const p95s = [];
    const p99s = [];
    intermediate.forEach((item) => {
      let d = new Date(item.timestamp.toString());
      labels.push(d.toLocaleString());
      min.push(item.latency.min);
      max.push(item.latency.max);
      median.push(item.latency.median);
      p95s.push(item.latency.p95);
      p99s.push(item.latency.p99);
    });
    datasets.push({
      label: "Min Response Time",
      data: min,
      fill: false,
      borderColor: colors.min,
      yAxisID: "y-axis-0"
    });
    datasets.push({
      label: "Max Response Time",
      data: max,
      fill: false,
      borderColor: colors.max,
      yAxisID: "y-axis-0"
    });
    datasets.push({
      label: "Median Response Time",
      data: median,
      fill: false,
      borderColor: colors.median,
      yAxisID: "y-axis-0"
    });
    datasets.push({
      label: "95th Percentile",
      data: p95s,
      fill: false,
      borderColor: colors.p95s,
      yAxisID: "y-axis-0"
    });
    datasets.push({
      label: "99th Percentile",
      data: p99s,
      fill: false,
      borderColor: colors.p99s,
      yAxisID: "y-axis-0"
    });
    return {
      labels: labels,
      datasets: datasets
    };
  };

  return (
    <Fragment>
      <a id="graph_latency"></a>
      <div className="card mb-4">
        <div className="card-header card-header-success mb-3">
          <i className="fas fa-chart-area"></i> Latency over time
        </div>
        { intermediate.length === 0 
        ? <div className="list-group-item text-muted">No Results</div>
        : <div className="card-body">
          {/* @ts-ignore */}
          <Line data={mapChartData()} options={options} />
          </div>
        }
      </div>
    </Fragment>
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

export default GraphLatency;
