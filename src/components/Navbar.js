import React from "react";

function Navbar() {
  return (
    <div className="navbar-container" id="#navbar">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#header">
            LINCS Work Term Report
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link" aria-current="page" href="#intro">
                Introduction
              </a>
              <a className="nav-link" href="#employerInfo">
                Employer Info
              </a>
              <a className="nav-link" href="#goals">
                Goals
              </a>
              <a className="nav-link" href="#jobDesc">
                Job Description
              </a>
              <a className="nav-link" href="#conclusion">
                Conclusion
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
