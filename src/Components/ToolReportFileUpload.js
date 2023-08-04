import React, { useState, useRef } from "react";
import Tooltip from "../Pages/Dashboard/Tooltip.js";
import { ReactComponent as ExcelImage } from "../Assets/ExcelImage.svg";

//component for uploading Leave report files
const ToolReportFileUpload = ({ onSelect, ...otherProps }) => {
  //using useRef to create reference and interact with hidden file input element
  //using useState to store currently selected Leave Report file and update when changed
  const fileInputField = useRef(null);
  const [selectedToolFile, setSelectedToolFile] = useState(null);

  //handling file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedToolFile(file);
    onSelect(file);
  };

  //handling drag and drop behavior
  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    setSelectedToolFile(file);
    onSelect(file);
  };

  //handling dragging over behaviour
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <label>Select Leave Report File</label>
      <Tooltip tooltiptext="Leave Report Files are reports from PowerApps in XLSM format. Filename must contain the Month and Year of the data." />
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        className="upload-container-each"
      >
        <p className="text-body-secondary">
          Drag and drop your files here or{" "}
          <input
            type="file"
            ref={fileInputField}
            style={{ display: "none" }}
            onChange={handleFileChange}
            {...otherProps}
          />
          <span
            className="underline"
            onClick={() => fileInputField.current.click()}
          >
            browse
          </span>
        </p>
        <div className="pb-3">
          <ExcelImage />
        </div>
        <div>{selectedToolFile && <p>{selectedToolFile.name}</p>}</div>
      </div>
      {/* <button onClick={handleFileSubmit}>Upload File</button> */}
    </div>
  );
};

export default ToolReportFileUpload;
