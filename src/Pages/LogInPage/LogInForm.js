// import React, { useState } from "react";

// function LogInForm() {
//   //initializing useState with empty strings
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   //handleSubmit() triggered each time type="submit" is clicked, line 13 and line 34
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     //login logic here, connect to backend
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="email">Email Address:</label>
//         <input
//           type="text"
//           id="email"
//           value={email}
//           onChange={(event) => setEmail(event.target.value)}
//         />
//       </div>

//       <div>
//         <label htmlFor="password">Password:</label>
//         <input
//           type="password"
//           id="password"
//           value={password}
//           onChange={(event) => setPassword(event.target.value)}
//         />
//       </div>

//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default LogInForm;
