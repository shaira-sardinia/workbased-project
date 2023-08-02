import React, { useState } from "react";
import MonthSelectionDropdown from "../../Components/MonthSelectionDropdown";
import YearSelectionDropdown from "../../Components/YearSelectionDropdown";
import CadoReportFileUpload from "../../Components/CadoReportFileUpload";
import ToolReportFileUpload from "../../Components/ToolReportFileUpload";
import StatusBar from "../../Components/StatusBar";

function Dashboard() {
  const currentDate = new Date();
  const [selectedCadoFile, setSelectedCadoFile] = useState(null);
  const [selectedToolFile, setSelectedToolFile] = useState(null);

  const options = {
    month: "long",
    day: "2-digit",
    year: "numeric",
  };

  return (
    <div className="container">
      <div className="header row d-flex align-items-end py-2">
        <div className="col-md-6 text-start ">Good day Name!</div>
        <div className="col-md-3 text-end overflow-x-visible">
          Today's date is{" "}
          <span className="local-date">
            {currentDate.toLocaleDateString(undefined, options)}
          </span>
          .
        </div>
        <div className="col-md-3 text-end">
          <a href="mailto:support@accenture.com">Help</a>
        </div>
      </div>

      <div className="dashboard d-flex py-3">
        <div className="title pt-5 pb-2">Reconciliation Dashboard</div>

        <div className="dropdown-container gap-3 py-3">
          <MonthSelectionDropdown />
          <YearSelectionDropdown />
        </div>

        <div className="upload-container gap-5 pt-3 pb-5">
          <CadoReportFileUpload
            onSelect={(file) => setSelectedCadoFile(file)}
          />
          <ToolReportFileUpload
            onSelect={(file) => setSelectedToolFile(file)}
          />
        </div>

        <div className="status-bar d-flex justify-content-center">
          <StatusBar
            selectedCadoFile={selectedCadoFile}
            selectedToolFile={selectedToolFile}
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
