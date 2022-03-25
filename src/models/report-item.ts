import ReportPhase from "./report-phase";

export default class ReportItem {
  timestamp?: String;
  scenariosCreated?: Number;
  scenariosCompleted?: Number;
  requestsCompleted?: Number;
  histograms?: Object;
  latency?: {
    min?: Number,
    max?: Number,
    median?: Number,
    p95?: Number,
    p99?: Number
  };
  rps?: {
    count?: Number,
    mean?: Number
  };
  scenarioDuration?: {
    min?: Number,
    max?: Number,
    median?: Number,
    p95?: Number,
    p99?: Number
  };
  scenarioCounts?: Object;
  errors?: Object;
  codes?: Object;
  matches?: Number;
  customStats?: Object;
  counters?: Object;
  scenariosAvoided?: Number;
  phases?: Array<ReportPhase>;

  constructor() {
    this.latency = {};
    this.rps = {};
    this.scenarioCounts = {};
    this.histograms = {};
    this.errors = {};
    this.codes = {};
    this.counters = {};
    this.customStats = {};
    this.scenarioCounts = {};
    this.phases = [];
  }
};