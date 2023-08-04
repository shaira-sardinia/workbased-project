import React from "react";
import LogInForm from "./LogInForm";
import "./Login.css";

function LogIn() {
  return (
    <div className="position-absolute top-50 start-50 translate-middle">
      <p className="pb-3 text-center"> Log in using your Accenture ID.</p>
      <LogInForm />
    </div>
  );
}

export default LogIn;
