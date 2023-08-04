import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LogInForm() {
  //initializing useState with empty strings
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  //handleSubmit() triggered each time type="submit" is clicked, line 13 and line 34
  const handleSubmit = (event) => {
    event.preventDefault();
    //login logic here, connect to backend
    //once login is successful, redirects to dashboard
    //For demonstration purposes, clicking submit will redirect after two-second delay
    setTimeout(() => {
      navigate("/dashboard");
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <div class="input-group input-group-sm mb-3">
        <input
          type="text"
          class="form-control login-field"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-sm"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div class="input-group input-group-sm mb-4">
        <input
          type="text"
          class="form-control login-field"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-sm"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="login-submit" type="submit">
        Submit
      </button>
    </form>
  );
}

export default LogInForm;
