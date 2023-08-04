import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LogInForm() {
  //initializing useState with empty strings
  //using useState hooks to handle user input for email and password values
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  //simulating login logic by a 1 -second delay for demonstration
  //to be replaced with actual backend connection
  const handleSubmit = (event) => {
    event.preventDefault();

    setTimeout(() => {
      navigate("/dashboard");
    }, 1000);

    //login logic here
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
