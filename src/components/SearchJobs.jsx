import React, { useEffect } from "react";

import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router";
import { auth} from "../firebase";

import dashCSS from "../css/projects.module.css";
import NavBar from "./Navbar";
import Footer from "./Footer";

function ProfSearch() {
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
  }, [user, loading]);

  return (
    <>
      <NavBar />
      <section className={dashCSS.projectos}>
        <label for="exampleDataList" class="form-label">
          Datalist example
        </label>
        <input
          class="form-control"
          list="datalistOptions"
          id="exampleDataList"
          placeholder="Type to search..."
        />
        <datalist id="datalistOptions">
          <option value="San Francisco" />
          <option value="New York" />
          <option value="Seattle" />
          <option value="Los Angeles" />
          <option value="Chicago" />
        </datalist>
        <input
          class="form-control"
          type="text"
          placeholder="Default input"
          aria-label="default input example"
        />
      </section>
      <Footer />
    </>
  );
}
export default ProfSearch;
