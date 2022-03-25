import React, { useState } from "react";

const AddonsSelector = ({ addon, setAddonCallback }) => {
  const [selected, setSelected] = useState(addon);

  const executeSelectionChange = (value) => {
    setAddonCallback(value);
    setSelected(value);
  };

  const SelectedCheck = ({ name }) => {
    return selected === name 
      ? <i className="fas fa-check-square fa-lg mr-2"></i>
      : <i className="far fa-square fa-lg mr-2"></i>
  };

  return (
    <div className="card mb-2">
      <div className="card-header card-header-rose">
        <i className="fas fa-puzzle-piece"></i> Addon Handler (Custom Stats)
      </div>
      <div className="card-body">
        <div className="radio-selector" onClick={() => { executeSelectionChange('raw')}}>
          <SelectedCheck name="raw" />
          Raw Data
        </div>
        <div className="radio-selector" onClick={() => { executeSelectionChange('metrics-by-endpoint')}}>
          <SelectedCheck name="metrics-by-endpoint" />
          Metrics By Endpoint
        </div>
      </div>
      <div className="card-footer">
        <span className="stats">
          Please select from the dropdown above, different ways to view the addon data.
        </span>
      </div>
    </div>
  );
};

export default AddonsSelector;
