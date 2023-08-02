import React, { useState, useRef } from "react";
import Tooltip from "./Tooltip.js";
import { ReactComponent as ExcelImage } from "../Assets/ExcelImage.svg";

const ToolReportFileUpload = ({ onSelect, ...otherProps }) => {
  const fileInputField = useRef(null);
  const [selectedToolFile, setSelectedToolFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedToolFile(file);
    onSelect(file);
  };

  //event handlers to handle drag and drop behavior
  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    setSelectedToolFile(file);
    onSelect(file);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  // const handleFileSubmit = () => {
  //   if (selectedFile) {
  //     sendFileToBackend(selectedFile);
  //   } else {
  //     console.warn("No file selected.");
  //   }
  // };

  // const sendFileToBackend = (file) => {
  //   // Create a new FormData object
  //   const formData = new FormData();
  //   formData.append("file", file);

  //   // Send the formData to your backend endpoint
  //   fetch("/upload", {
  //     method: "POST",
  //     body: formData,
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // Handle any response from the backend
  //       console.log("File uploaded successfully!", data);
  //     })
  //     .catch((error) => {
  //       console.error("Error uploading file:", error);
  //     });
  // };

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
