import React, { useState } from "react";

//component for selecting Year from a dropdown
function YearSelectionDropdown({ onSelect }) {
  //using useState to hold selected year
  const [selectedYear, setSelectedYear] = useState("");

  //handling year selection change
  const handleYearChange = (event) => {
    const yearValue = event.target.value;
    onSelect(yearValue);
    setSelectedYear(yearValue);
    sendDataToBackend(yearValue);
  };

  //sending selected year to backend
  //for demonstration purposes, logging the selected year
  const sendDataToBackend = (year) => {
    console.log("Selected year:", year);

    //logic here
  };

  //range of years can be customized as required, currently starting from 2018
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 6 }, (_, index) => currentYear - index);

  return (
    <div>
      <select
        className="custom-select"
        id="year"
        value={selectedYear}
        onChange={handleYearChange}
      >
        {/* Placeholder option */}
        <option className="dropdown-selection" value="">
          Select Year
        </option>
        {years.map((year) => (
          <option className="dropdown-selection" key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
}

export default YearSelectionDropdown;
