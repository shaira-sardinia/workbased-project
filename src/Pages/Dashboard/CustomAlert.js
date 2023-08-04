import React from "react";

function CustomAlert({ message, onClose }) {
  return (
    <div className="custom-alert">
      <div
        class="alert alert-danger alert-dismissible fade show custom-alert-content"
        role="alert"
      >
        <strong>Error!</strong> {message}
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
}

export default CustomAlert;
