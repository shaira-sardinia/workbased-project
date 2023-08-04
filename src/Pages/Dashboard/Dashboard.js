import React, { useState } from "react";
import MonthSelectionDropdown from "../../Components/MonthSelectionDropdown";
import YearSelectionDropdown from "../../Components/YearSelectionDropdown";
import CadoReportFileUpload from "../../Components/CadoReportFileUpload";
import ToolReportFileUpload from "../../Components/ToolReportFileUpload";
import StatusBar from "../../Components/StatusBar";

//defining the parent component
function Dashboard() {
  //using useState hooks to re-render components or store files based on user's interaction
  const currentDate = new Date();
  const [selectedCadoFile, setSelectedCadoFile] = useState(null);
  const [selectedToolFile, setSelectedToolFile] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  //formatting the date
  const options = {
    month: "long",
    day: "2-digit",
    year: "numeric",
  };

  console.log("selectedMonth", selectedMonth);
  console.log("selectedYear", selectedYear);

  //rendering the Dashboard page
  return (
    <div className="container">
      <div className="header row d-flex align-items-end py-2">
        <div className="col-md-6 text-start ">Good day!</div>
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
        <div className="title pt-4 pb-2">Reconciliation Dashboard</div>

        <div className="dropdown-container gap-3 py-3">
          <MonthSelectionDropdown
            selectedMonth={selectedMonth}
            onSelect={(month) => setSelectedMonth(month)}
          />
          <YearSelectionDropdown
            selectedYear={selectedYear}
            onSelect={(year) => setSelectedYear(year)}
          />
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
            selectedMonth={selectedMonth}
            selectedYear={selectedYear}
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
