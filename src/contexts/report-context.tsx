import React, { useState, useEffect } from "react";
import ReportPayload from "../models/report-payload";
import ReportState from "../models/report-state";
import { mapToLegacyObject } from "../utilities/mapper";

const ReportContext = React.createContext(new ReportState(()=>{},()=>{},false));

const ReportProvider = ({ payloadFile, children }) => {
  
  const validateCustomMetrics = (results: ReportPayload) => {
    const hasBothFields = results.aggregate.customStats !== undefined && results.aggregate.counters !== undefined;
    const hasCustomStats = JSON.stringify(results.aggregate.customStats) !== JSON.stringify({});
    const hasCounters = JSON.stringify(results.aggregate.counters) !== JSON.stringify({});
    return hasBothFields && hasCustomStats && hasCounters;
  };

  const resetReport = () => {
    setViewerState(defaultState());
  };

  const loadReport = (jsonData: ReportPayload, fileName: String) => {
    resetReport();
    var version = getPayloadVersion(jsonData);
    let state = defaultState();
    state.report.name = fileName;
    state.report.version = version;
    // @ts-ignore
    state.report.results = version === 1 ? jsonData : mapToLegacyObject(jsonData);
    state.hasCustomMetrics = validateCustomMetrics(jsonData);
    state.isLoaded = true;
    setViewerState(state);
  };

  const getPayloadVersion = (jsonData: ReportPayload): Number => {
    return jsonData.aggregate.histograms ? 2 : 1;
  };

  const defaultState = (): ReportState => {
    return new ReportState(
      loadReport,
      resetReport,
      false
    );
  };
  
  const [viewerState, setViewerState] = useState<ReportState>(defaultState());

  useEffect(()=> {
    if (payloadFile !== undefined && payloadFile.jsonData !== undefined && !viewerState.isLoaded) {
      console.log('payloadFile', payloadFile);
      loadReport(payloadFile.jsonData, payloadFile.name);
    }
  }, [payloadFile])
  
  return (
    <ReportContext.Provider
      value={{
        report: viewerState.report,
        isLoaded: viewerState.isLoaded,
        hasCustomMetrics: viewerState.hasCustomMetrics,
        loadReport,
        resetReport,
      }}
    >
      {children}
    </ReportContext.Provider>
  );
};

export { ReportProvider, ReportContext };
