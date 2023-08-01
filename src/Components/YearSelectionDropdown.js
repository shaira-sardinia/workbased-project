import React, { useState } from "react";

function YearSelectionDropdown() {
  const [selectedYear, setSelectedYear] = useState("");

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
    // Call a function to send the selected year to the backend
    sendDataToBackend(event.target.value);
  };

  const sendDataToBackend = (year) => {
    // Implement your logic to send the selected year to the backend
    //   fetch("/api/storeSelection", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ month, year }),
    //   })
    //     .then((response) => response.json())
    //     .then((data) => {
    //       console.log("Data sent to backend and processed:", data);
    //     })
    //     .catch((error) => {
    //       console.error("Error sending data to backend:", error);
    //     });
    //   // (e.g., using fetch or Axios)
    //   console.log("Selected year:", year);
    // };
  };

  // You can customize the range of years as needed
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
