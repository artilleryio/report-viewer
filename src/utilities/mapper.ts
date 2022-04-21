/* public */

const mapToLegacyObject = (src) => {
  return {
    aggregate: _mapToLegacyBaseLevelObject(src.aggregate),
    intermediate: _mapToLegacyIntermediate(src)
  };
};

/* Private */

const _mapToLegacyBaseLevelObject = (src) => {
  return {
    timestamp: new Date(src.period),
    scenariosCreated: src.counters["core.vusers.created.total"] || 0,
    scenariosCompleted: src.counters["core.vusers.completed"] || 0,
    scenariosAvoided: src.counters["core.vusers.skipped"] || 0,
    requestsCompleted:
      src.counters["engine.http.responses"] ||
      src.counters["engine.socketio.emit"] ||
      src.counters["engine.websocket.messages_sent"] ||
      0,
    latency: _mapToLegacyLatency(src.summaries),
    rps: {
      mean: src.rates
        ? src.rates["engine.http.response_rate"] ||
          src.rates["engine.socketio.emit_rate"] ||
          0
        : 0,
      count:
        src.counters["engine.http.responses"] ||
        src.counters["engine.socketio.emit"] ||
        0
    },
    codes: _mapToLegacyCodes(src),
    errors: _mapToLegacyErrors(src),
    phases: _mapToLegacyPhases(src)
  };
};

const _mapToLegacyLatency = (src) => {
  var selector = "engine.http.response_time";
  if (src["engine.http.socketio"]) {
    selector = "engine.http.socketio";
  }
  return {
    min: src[selector].min,
    max: src[selector].max,
    median: src[selector].median,
    p50: src[selector].median,
    p95: src[selector].p95,
    p99: src[selector].p99
  };
};

const _mapToLegacyCodes = (src) => {
  var propNameHttp = "engine.http.codes.";
  var propNameSocket = "engine.socketio.codes.";
  var dest = {};
  for (var prop in src.counters) {
    if (prop.startsWith(propNameHttp)) {
      dest[prop.replace(propNameHttp, "")] = src.counters[prop];
    }
    if (prop.startsWith(propNameSocket)) {
      dest[prop.replace(propNameSocket, "")] = src.counters[prop];
    }
  }
  return dest;
};

const _mapToLegacyErrors = (src) => {
  var propName = "errors.";
  var dest = {};
  for (var prop in src.counters) {
    if (prop.startsWith(propName)) {
      dest[prop.replace(propName, "")] = src.counters[prop];
    }
  }
  return dest;
};

const _mapToLegacyIntermediate = (src) => {
  var dest = [];
  src.intermediate.forEach((inter) => {
    dest.push(_mapToLegacyBaseLevelObject(inter));
  });
  return dest;
};

// @ts-ignore
const _mapToLegacyPhases = (src) => {
  return [];
};

export {
  mapToLegacyObject
};