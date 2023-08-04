import React, { useState } from "react";
import CustomAlert from "../Pages/Dashboard/CustomAlert";

//component for displaying the reconciliation status and actions
function StatusBar({
  selectedCadoFile,
  selectedToolFile,
  selectedMonth,
  selectedYear,
}) {
  //state variables to manage the status and animation
  const [reconciliationStatus, setReconciliationStatus] = useState("idle");
  const [status, setStatus] = useState("");
  const [errorDetails, setErrorDetails] = useState("");
  const [showAnimation, setShowAnimation] = useState(false);
  const [showAnimationTimeout, setShowAnimationTimeout] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  //handling the "Reconcile" button click
  const handleReconcileClick = () => {
    console.log("selectedMonth:", selectedMonth);
    console.log("selectedYear:", selectedYear);

    //checking if all required fields are complete
    if (
      !selectedCadoFile &&
      !selectedToolFile &&
      !selectedMonth &&
      !selectedYear
    ) {
      setAlertMessage("Please ensure all fields are completed.");
      setShowAlert(true);
      return;
    }

    if (!selectedMonth || !selectedYear) {
      setAlertMessage("Please select Month and Year.");
      setShowAlert(true);
      return;
    }
    if (!selectedCadoFile || !selectedToolFile) {
      setAlertMessage("Please select files you want to reconcile.");
      setShowAlert(true);
      return;
    }

    //logic to trigger the reconciliation process in the backend here
    const reconciliationEndpoint = "/reconcile";

    //simulating random outcomes (50/50 chance of either success or failure for demo purposes
    const randomOutcome = Math.random() < 0.5 ? "success" : "failed";
    if (randomOutcome === "success") {
      setStatus("Successful");
      setErrorDetails("");
    } else {
      setStatus("Failed");
      setErrorDetails("Check that date selection match with files."); //backend will be able to provide more specific errors
    }
    setReconciliationStatus(randomOutcome); //updating reconciliation status

    // backend request to start the reconciliation process
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

    //defining progress animations, 2-second delay before updating the status
    setShowAnimation(true);

    setShowAnimationTimeout(
      setTimeout(() => {
        setReconciliationStatus(randomOutcome);
        setShowAnimation(false);
      }, 2000)
    );

    setReconciliationStatus("inProgress");
  };

  //closing the alert message
  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  //handling the "Restart" button click
  const handleRestartClick = () => {
    clearTimeout(setShowAnimationTimeout);
    handleReconcileClick();
  };

  //handling the "Open Folder" button, with backend output folder has to be opened
  const handleOpenFolderClick = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.directory = true;

    input.click();
  };

  //rendering different UI based on reconciliation status
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
        <div className="container-progress">
          <button
            className={`reconcile-button ${showAnimation ? "progress" : ""}`}
            disabled
          >
            Reconciling...
          </button>
        </div>
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

      {showAlert && (
        <CustomAlert message={alertMessage} onClose={handleCloseAlert} />
      )}
    </>
  );
}

export default StatusBar;
