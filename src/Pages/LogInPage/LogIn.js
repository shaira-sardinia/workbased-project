import React from "react";
import LogInForm from "./LogInForm";
import "./Login.css";

//defining main login component
function LogIn({ email, password }) {
  return (
    <div className="position-absolute top-50 start-50 translate-middle">
      <p className="pb-2 text-center"> Log in using your Accenture ID.</p>
      <LogInForm setEmail={email} setPassword={password} />
    </div>
  );
}

export default LogIn;
