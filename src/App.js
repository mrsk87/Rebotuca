import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./components/Login";
import Register from "./components/Register";
import ResetPassword from "./components/ResetPassword";
import Projects from "./components/Projects";
import Landing from "./components/Landing";
import Erno404 from "./components/404";
import SearchJobs from "./components/SearchJobs";
import Profile from "./components/Profile";
import Test from "./components/Test";

import Cards from "./components/Cards";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Landing />} />

        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/resetPassword" element={<ResetPassword />} />

        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/searchJobs" element={<SearchJobs />} />
        <Route exact path="/profile" element={<Profile />} />

        <Route exact path="/test" element={<Test />} />

        <Route exact path="/cards" element={<Cards />} />

        <Route path="*" element={<Erno404 />} />
      </Routes>
    </Router>
  );
}

export default App;
