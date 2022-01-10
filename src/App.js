import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import ResetPassword from "./components/ResetPassword";
import Dashboard from "./components/Dashboard";
import Erno404 from "./components/404";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/navbar" element={<Navbar />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/resetpassword" element={<ResetPassword />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Erno404 />} />
      </Routes>
    </Router>
  );
}

export default App;
