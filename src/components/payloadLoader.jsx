import React, { useRef, useState, Fragment } from "react";
import mapper from "../utilities/mapper";

export default ({ setPayload }) => {
  const inputEl = useRef(null);
  const [hasError, setHasError] = useState(false);
  const errorMessage =
    "Error loading report file. Please verify the json file is complete.";

  const uploadAction = () => {
    inputEl.current.click();
  };

  const clearAction = () => {
    resetState();
    setHasError(false);
  };

  const uploadInputChange = (e) => {
    resetState();
    setHasError(false);
    let formData = new FormData();
    formData.append("file", e.target.files[0]);
    var newfile = formData.get("file");
    newfile.text().then((x) => {
      try {
        var jsonData = JSON.parse(x);
        var version = 1;
        if (jsonData.aggregate.histograms) {
          version = 2;
          jsonData = mapper.mapToLegacyObject(jsonData);
        } 
        setPayload({
          name: newfile.name,
          version: version,
          results: jsonData
        });
      } catch (err) {
        resetState();
        setHasError(true);
        setTimeout(function () {
          setHasError(false);
        }, 3000);
      }
    });
  };

  const resetState = () => {
    setPayload({
      name: "No file loaded",
      results: {
        aggregate: {
          latency: {},
          rps: {},
          codes: {},
          errors: {},
          phases: []
        },
        intermediate: []
      }
    });
  };

  return (
    <Fragment>
      <ol className="breadcrumb">
        <li className="breadcrumb-item active">
          Import your report here:
          <input
            type="file"
            hidden
            ref={inputEl}
            onChange={uploadInputChange}
          />
          <button
            type="submit"
            onClick={uploadAction}
            className="btn btn-link p-0 pl-3 pr-4"
          >
            <i className="fas fa-file-import" style={{ marginRight: -5 }}></i>{" "}
            &nbsp;&nbsp;Load Json File
          </button>
          <button
            type="submit"
            onClick={clearAction}
            className="btn btn-link p-0 pl-4"
          >
            <i className="far fa-trash-alt" style={{ marginRight: -5 }}></i>{" "}
            &nbsp;&nbsp;Clear
          </button>
        </li>
      </ol>
      <div
        className={`alert alert-dismissible alert-danger ${
          !hasError ? "display-none" : ""
        }`}
      >
        {errorMessage}
      </div>
    </Fragment>
  );
};
