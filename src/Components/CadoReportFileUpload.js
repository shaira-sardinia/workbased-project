import React, { useState, useRef } from "react";
import Tooltip from "../Helpers/Tooltip.js";
import { ReactComponent as ExcelImage } from "../Assets/ExcelImage.svg";

//component for uploading CADO report files
const CadoReportFileUpload = ({ onSelect, ...otherProps }) => {
  //using useRef to create reference and interact with hidden file input element
  //using useState to store currently selected CADO file and update when changed
  const fileInputField = useRef(null);
  const [selectedCadoFile, setSelectedCadoFile] = useState({});

  //handling file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedCadoFile(file);
    onSelect(file);
  };

  //handling drag and drop behaviour
  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    setSelectedCadoFile(file);
    onSelect(file);
  };

  //handling dragging over behaviour
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <label>Select Timesheet File</label>
      <Tooltip tooltipText="Timesheet Files are Cado Reports in XLSM format. Filename must contain the Month and Year of data." />
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
            value=""
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
        <div>{selectedCadoFile && <p>{selectedCadoFile.name}</p>}</div>
      </div>
    </div>
  );
};

export default CadoReportFileUpload;
