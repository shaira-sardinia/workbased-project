import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LogIn from "./Pages/LogInPage/LogIn";
import Dashboard from "./Pages/Dashboard/Dashboard";

function App() {
  return (
    //using Router is to supply browser with asynchronous URL that corresponds to the data shown on webpage
    //when user enters URL, the route equals one of the pathways in the route folder, and user is sent to that route
    <Router>
      <Routes>
        <Route exact path="/" element={<LogIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
