import React, { useState } from "react";

function StatusBar({ selectedCadoFile, selectedToolFile }) {
  const [reconciliationStatus, setReconciliationStatus] = useState("idle");
  const [status, setStatus] = useState("");
  const [errorDetails, setErrorDetails] = useState("");

  const handleReconcileClick = () => {
    // Implement  logic to trigger the reconciliation process in the backend here
    //Example: '/reconcile'
    const reconciliationEndpoint = "/reconcile";

    //simulating random outcomes here (50/50 chance of either success or failure
    const randomOutcome = Math.random() < 0.5 ? "success" : "failed";

    if (randomOutcome === "success") {
      setStatus("Successful");
      setErrorDetails("");
    } else {
      setStatus("Failed");
      setErrorDetails("An error occured during reconciliation.");
    }

    //updating reconciliationStatus state
    setReconciliationStatus(randomOutcome);
  };
  //Make the backend request to start the reconciliation process
  // fetch(reconciliationEndpoint, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     cadoFile: selectedCadoFile,
  //     toolFile: selectedToolFile,
  //   }),
  // })
  //   .then((response) => response.json())
  //   .then((data) => {
  //     // Process the response from the backend
  //     if (data.success) {
  //       setStatus("Successful");
  //       setErrorDetails(""); // Clear any previous error details
  //     } else {
  //       setStatus("Failed");
  //       setErrorDetails(data.error); // Update error details from the backend
  //     }
  //   })
  //   .catch((error) => {
  //     console.error("Error during reconciliation:", error);
  //     setStatus("Failed");
  //     setErrorDetails("An error occurred during reconciliation.");
  // });

  const handleRestartClick = () => {
    handleReconcileClick(); // Call the function to start the backend process again
  };

  const handleOpenFolderClick = () => {
    //at present cannot open a specific folder on client-side
    //input element lets ysers select file from system
    //change this/research this to open 'report' folder
    // can replace 'path/to/output/folder' with actual path received from the backend
    // const outputPath = "path/to/output/folder";
    // const fileInput = document.createElement("input");
    // fileInput.type = "file";
    // fileInput.click();
  };

  //onchange event to handle selected file
  // fileInput.onchange = (event) => {
  //   const selectedFile = event.target.files[0];
  //   //handle the selected file (e.g. read its contents etc)
  //   console.log("Selected file:", selectedFile);
  // };

  return (
    <>
      {reconciliationStatus === "idle" && (
        <div className="container-progress">
          <button
            className="reconcile-button idle"
            onClick={handleReconcileClick}
          >
            Reconcile
          </button>
        </div>
      )}

      {reconciliationStatus === "inProgress" && (
        <button className="reconcile-button progress" disabled>
          Reconciling...
        </button>
      )}

      {reconciliationStatus === "success" && (
        <div className="container-progress">
          <button className="reconcile-button success" disabled>
            {status}
          </button>
          <button
            className="btn-success-openfolder"
            onClick={handleOpenFolderClick}
          >
            Open Folder
          </button>
          <button className="btn-restart" onClick={handleRestartClick}>
            Restart
          </button>
        </div>
      )}

      {reconciliationStatus === "failed" && (
        <div className="container-progress">
          <button className="reconcile-button failed" disabled>
            {status}
          </button>
          <div className="error-description">
            Error Details: <span>{errorDetails}</span>
          </div>
          <button className="btn-restart" onClick={handleRestartClick}>
            Restart
          </button>
        </div>
      )}
    </>
  );
}

export default StatusBar;
