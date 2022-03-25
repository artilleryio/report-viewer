import ReportPayload from "./report-payload";

export default class ReportState {
  loadReport: Function;
  hasCustomMetrics: Boolean;
  isLoaded: Boolean;
  resetReport: Function;
  report?: {
    name: String,
    version: Number,
    results?: ReportPayload
  };

  constructor(
    _loadReport: Function,
    _resetReport: Function,
    _hasCustomMetrics: Boolean
  ) {
    this.loadReport = _loadReport;
    this.resetReport = _resetReport;
    this.hasCustomMetrics = false; 
    this.isLoaded = false; 
    const obj = {
      name: '',
      version: null,
      results: new ReportPayload()
    }
    this.report = obj;
  }
};