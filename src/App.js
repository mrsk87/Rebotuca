import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import ResetPassword from "./components/ResetPassword";
import Dashboard from "./components/NewDashboard";
import Landing from "./components/Landing";
import Erno404 from "./components/404";
import ProfSearch from "./components/ProfSearch";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/navbar" element={<Navbar />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/resetpassword" element={<ResetPassword />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/profsearch" element={<ProfSearch />} />
        <Route path="*" element={<Erno404 />} />
      </Routes>
    </Router>
  );
}

export default App;
