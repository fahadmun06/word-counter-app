import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {

  return (
    <div className="App">
      <header className="App-header">
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
          <div className="container">
            <Link className="navbar-brand" to="/">{props.title}</Link>
            {/* <Link className="navbar-brand" to="/">Home</Link> */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/about">About</Link>
                </li>
              </ul>
              <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'} fs-5`}>
                <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault" />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode === 'dark' ? 'Light Mode' : 'Dark Mode'}</label>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

// prototypes in reactJs

Navbar.propTypes = {
  title: PropTypes.string,
  about: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Textutils",
  about: "About"
};
