import React, { useState } from "react";

//component for selecting Month from a dropdown
function MonthSelectionDropdown({ onSelect }) {
  //using useState to hold selected month
  const [selectedMonth, setSelectedMonth] = useState("");

  //handling month selection change
  const handleMonthChange = (event) => {
    const monthValue = event.target.value;
    onSelect(monthValue);
    setSelectedMonth(monthValue);
    sendDataToBackend(monthValue);
  };

  //sending selected month to backend
  //for demonstration purposes, logging the selected month
  const sendDataToBackend = (month) => {
    console.log("Selected month:", month);

    //logic here
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
