import logo from "../assets/img/logo.png";
import placeholder from "../assets/img/user.png";

import { auth, db, logout } from "../firebase";

function Navbar() {
  return (
    <>
      <nav className="p-3 mb-3 border-bottom bg-white">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a class="navbar-brand" href="/">
              <img
                src={logo}
                alt="Logo"
                // style={{ width: "40px", height: "40px" }}
                className="d-inline-block align-text-top"
              />
            </a>
            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
              <input
                type="search"
                className="form-control"
                placeholder="Search..."
                aria-label="Search"
              ></input>
            </form>

            <div className="dropdown text-end">
              <a
                href="#"
                className="d-block link-dark text-decoration-none dropdown-toggle"
                id="dropdownUser1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src={placeholder}
                  alt="User Image"
                  className="rounded-circle"
                  style={{ width: "40px", height: "40px" }}
                ></img>
              </a>
              <ul
                className="dropdown-menu text-small"
                aria-labelledby="dropdownUser1"
              >
                <li>
                  <a className="dropdown-item" href="/projects">
                    New project...
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Settings
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/profile">
                    Profile
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" onClick={() => logout()}>
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
