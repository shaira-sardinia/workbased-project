import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import StatusBar from "../Components/StatusBar";

describe("StatusBar component", () => {
  test("renders without errors", () => {
    render(<StatusBar />);
  });

  //tests
  test('displays "Reconcile" button in idle state', () => {
    render(<StatusBar />);
    const reconcileButton = screen.getByText("Reconcile");
    expect(reconcileButton).toBeInTheDocument();
  });

  //   test('displays "Reconciling..." button in inProgress state', () => {
  //     render(<StatusBar reconciliationStatus="inProgress" />);
  //     const reconcilingButton = screen.getByText("Reconciling...");
  //     expect(reconcilingButton).toBeInTheDocument();
  //   });

  //TEST CASE 1
  it("displays successful reconciliation when selections match file names", () => {
    //mocking the selected month and year
    const selectedMonth = "March";
    const selectedYear = "2023";

    //mocking the file names based on the selected month and year
    const selectedCadoFile = `CADOFile_${selectedMonth}_${selectedYear}.xlsm`;
    const selectedToolFile = `LeaveReport_${selectedMonth}_${selectedYear}.xlsm`;

    render(
      <StatusBar
        selectedCadoFile={selectedCadoFile}
        selectedToolFile={selectedToolFile}
      />
    );
  });

  //TEST CASE 2
  it("displays failed reconciliation when selections do not match file names", () => {
    //mocking the selected month and year
    const selectedMonth = "April";
    const selectedYear = "2023";

    //mocking the file names based on different month and year
    const selectedCadoFile = `CADOFile_${selectedMonth}_${selectedYear}.xlsm`;
    const selectedToolFile = `LeaveReport_${selectedMonth}_${selectedYear}.xlsm`;

    render(
      <StatusBar
        selectedCadoFile={selectedCadoFile}
        selectedToolFile={selectedToolFile}
      />
    );
  });
});
