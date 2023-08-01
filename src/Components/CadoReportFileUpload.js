import React, { useState, useRef } from "react";
import Tooltip from "./Tooltip.js";

const CadoReportFileUpload = ({ onSelect, ...otherProps }) => {
  const fileInputField = useRef(null);
  const [selectedCadoFile, setSelectedCadoFile] = useState({});

  // useEffect(() => {
  //   //manually initializing bootstrap tootips
  //   const tooltipTriggerList = document.querySelectorAll(
  //     '[data-bs-toggle="tooltip"]'
  //   );
  //   const tooltipList = [...tooltipTriggerList].map(
  //     (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
  //   );
  // });

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedCadoFile(file);
    onSelect(file);
  };

  //event handlers to handle drag and drop behavior
  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    setSelectedCadoFile(file);
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

  //   // Send the formData to backend endpoint
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
      <label>Select Timesheet File</label>
      <Tooltip tooltiptext="Timesheet Files are Cado Reports in XLSM format. Filename must contain the Month and Year of data." />
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
        {/* ADD PHOTO HERE */}

        <div>{selectedCadoFile && <p>{selectedCadoFile.name}</p>}</div>
      </div>
      {/* <button onClick={handleFileSubmit}>Upload File</button> */}
    </div>
  );
};

export default CadoReportFileUpload;
