import React, { useState } from "react";

function MonthSelectionDropdown({ onSelect }) {
  const [selectedMonth, setSelectedMonth] = useState("");

  const handleMonthChange = (event) => {
    const monthValue = event.target.value;
    onSelect(monthValue);
    setSelectedMonth(monthValue);
    sendDataToBackend(monthValue);

    console.log("Month:", monthValue);
  };

  const sendDataToBackend = (month) => {
    console.log("Selected month:", month);
    // Implement your logic to send the selected month to the backend
    // (e.g., using fetch or Axios)
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
        {months.map((month) => (
          <option className="dropdown-selection" key={month} value={month}>
            {month}
          </option>
        ))}
      </select>
    </div>
  );
}

export default MonthSelectionDropdown;
