import React from "react";

//component to display custom alert message based on if-statements in StatusBar component
function CustomAlert({ message, onClose }) {
  return (
    <div className="custom-alert">
      <div
        class="alert alert-danger alert-dismissible fade show custom-alert-content"
        role="alert"
      >
        {/* Alert Content */}
        <strong>Error!</strong> {message}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
}

export default CustomAlert;
