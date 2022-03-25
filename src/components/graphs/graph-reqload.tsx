import React, { useContext, Fragment }  from "react";
import { ReportContext } from "../../contexts/report-context";
import { Line } from "@reactchartjs/react-chart.js";

const GraphReqLoad = () => {
  const context = useContext(ReportContext);
  const { intermediate } = context.report.results;
  const colors = {
    count: "rgba(229, 235, 54, 0.5)",
    mean: "rgba(235, 145, 54, 0.5)"
  };

  const mapChartData = () => {
    const datasets = [];
    const labels = [];
    const rps_count = [];
    const rps_mean = [];
    intermediate.forEach((item) => {
      let d = new Date(item.timestamp.toString());
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
    <Fragment>
      <a id="graph_reqload"></a>
      <div className="card mb-4">
        <div className="card-header card-header-success mb-3">
          <i className="fas fa-chart-area"></i> Requests over time
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

export default GraphReqLoad;
