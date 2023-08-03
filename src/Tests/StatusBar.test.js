// import React from "react";
// import { render, screen, fireEvent, waitFor } from "@testing-library/react";
// import StatusBar from "./StatusBar";

// // Mock the global alert function (since it's not available in the testing environment)
// global.alert = jest.fn();

// describe("StatusBar", () => {
//   it("should show 'Reconcile' button initially", () => {
//     render(<StatusBar />);

//     const reconcileButton = screen.getByText("Reconcile");
//     expect(reconcileButton).toBeInTheDocument();
//   });

//   it("should show 'Reconciling...' status while reconciliation is in progress", async () => {
//     // Mock the fetch function to simulate the API call
//     jest.spyOn(global, "fetch").mockImplementationOnce(() =>
//       Promise.resolve({
//         json: () => Promise.resolve({ success: true }),
//       })
//     );

//     render(<StatusBar />);

//     const reconcileButton = screen.getByText("Reconcile");
//     fireEvent.click(reconcileButton);

//     const reconcilingStatus = screen.getByText(/reconciling/i); // Use RegExp matcher
//     expect(reconcilingStatus).toBeInTheDocument();

//     // Wait for the reconciliation process to complete
//     await waitFor(() => {
//       expect(reconcilingStatus).not.toBeInTheDocument();
//     });
//   });

//   it("should show 'Successful' status and buttons on successful reconciliation", async () => {
//     // Mock the fetch function to simulate the API call
//     jest.spyOn(global, "fetch").mockImplementationOnce(() =>
//       Promise.resolve({
//         json: () => Promise.resolve({ success: true }),
//       })
//     );

//     render(<StatusBar />);

//     const reconcileButton = screen.getByText("Reconcile");
//     fireEvent.click(reconcileButton);

//     // Wait for the reconciliation process to complete
//     await waitFor(() => {
//       const successfulStatus = screen.getByText(/successful/i); // Use RegExp matcher
//       expect(successfulStatus).toBeInTheDocument();

//       const openFolderButton = screen.getByText(/open folder/i); // Use RegExp matcher
//       expect(openFolderButton).toBeInTheDocument();

//       const restartButton = screen.getByText(/restart/i); // Use RegExp matcher
//       expect(restartButton).toBeInTheDocument();
//     });
//   });

//   it("should show 'Failed' status and 'Restart' button on failed reconciliation", async () => {
//     // Mock the fetch function to simulate the API call
//     jest.spyOn(global, "fetch").mockImplementationOnce(() =>
//       Promise.resolve({
//         json: () => Promise.resolve({ success: false, error: "Some error" }),
//       })
//     );

//     render(<StatusBar />);

//     const reconcileButton = screen.getByText("Reconcile");
//     fireEvent.click(reconcileButton);

//     // Wait for the reconciliation process to complete
//     await waitFor(() => {
//       const failedStatus = screen.getByText(/failed/i); // Use RegExp matcher
//       expect(failedStatus).toBeInTheDocument();

//       const restartButton = screen.getByText(/restart/i); // Use RegExp matcher
//       expect(restartButton).toBeInTheDocument();

//       const errorDetails = screen.getByText(/error details:/i); // Use RegExp matcher
//       expect(errorDetails).toBeInTheDocument();
//     });
//   });
// });
