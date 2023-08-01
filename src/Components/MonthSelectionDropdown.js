import React, { useState } from "react";

function MonthSelectionDropdown() {
  const [selectedMonth, setSelectedMonth] = useState("");

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
    // Call a function to send the selected month to the backend
    sendDataToBackend(event.target.value);
  };

  const sendDataToBackend = (month) => {
    // Implement your logic to send the selected month to the backend
    // (e.g., using fetch or Axios)
    console.log("Selected month:", month);
  };

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div>
      <select
        className="custom-select"
        id="month"
        value={selectedMonth}
        onChange={handleMonthChange}
      >
        {/* Placeholder option */}
        <option className="dropdown-selection" value="">
          Select Month
        </option>
        {months.map((month, index) => (
          <option className="dropdown-selection" key={index} value={month}>
            {month}
          </option>
        ))}
      </select>
    </div>
  );
}

export default MonthSelectionDropdown;
