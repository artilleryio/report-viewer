import React, { useRef, useState, useContext, Fragment } from "react";
import { ReportContext } from "../../contexts/report-context";

const LoaderPayload = () => {
  const context = useContext(ReportContext);
  const inputEl = useRef(null);
  const [hasError, setHasError] = useState(false);

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
    // @ts-ignore
    newfile.text().then((x) => {
      try {
        var jsonData = JSON.parse(x);
        // @ts-ignore
        context.loadReport(jsonData, newfile.name);
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
    context.resetReport();
  };

  return (
    <Fragment>
      <a id="import"></a>
      <div className="card" style={{ marginTop: 50 }}>
        <div className="card-header card-header-tabs card-header-secondary">
          <div className="nav-tabs-navigation">
            <div className="nav-tabs-wrapper">
              <span className="nav-tabs-title">Import:</span>
              <ul className="nav nav-tabs" data-tabs="tabs">
                <li className="nav-item" style={{ marginRight: 10 }}>
                  <input
                    type="file"
                    hidden
                    ref={inputEl}
                    onChange={uploadInputChange}
                  />
                  <a className="nav-link" data-toggle="tab" onClick={uploadAction}>
                    <i className="fas fa-file-import fa-lg pr-1"></i> Load Json File
                    <div className="ripple-container"></div>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-toggle="tab" onClick={clearAction}>
                    <i className="far fa-trash-alt fa-lg pr-1"></i> Clear
                    <div className="ripple-container"></div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="tab-content">
            <div className="tab-pane active text-muted">
              Upload your json file here to display your results. Note: This does not upload the json file to any service, 
              it simply adds itself to browser state.
            </div>
          </div>
        </div>
      </div>
      { hasError &&  
          <div className="alert alert-danger mr-2 ml-2 mt-3 mb-4">
            Error loading report file. Please verify the json file is complete.
          </div>
      }
    </Fragment>
  );
};

export default LoaderPayload;
