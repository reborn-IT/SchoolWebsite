import React, { useState } from 'react';
import "../Navbar/navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [click, setClick] = React.useState(false);
  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  
  return (
      <div>
          <div className={click ? "main-container" : ""} onClick={() => Close()} />
          <nav className="navbar" onClick={e => e.stopPropagation()}>
              <div className="nav-container">
                  <div className="topLeft">
                      {/* <img src= {Image} height="60px" width="180px"/>       */}
                      Logo
                  </div>
                  <ul className={click ? "nav-menu active" : "nav-menu"}>
                      <li className="nav-item">
                          <Link
                              exact
                              to="/"
                              activeClassName="active"
                              className="nav-links-home"
                              onClick={click ? handleClick : null}
                          >
                              Home
                          </Link>
                      </li>
                      <li className="nav-item">
                          <Link
                              exact
                              to="/about us"
                              activeClassName="active"
                              className="nav-links-about"
                              onClick={click ? handleClick : null}
                          >
                              About Us
                          </Link>
                      </li>
                      <li className="nav-item">
                          <Link
                              exact
                              to="/branches"
                              activeClassName="active"
                              className="nav-links-branches"
                              onClick={click ? handleClick : null}
                          >
                              Branches
                          </Link>
                      </li>
                      <li className="nav-item">
                          <Link
                              exact
                              to="/academics"
                              activeClassName="active"
                              className="nav-links-academics"
                              onClick={click ? handleClick : null}
                          >
                              Academics
                          </Link>
                      </li>
                      <li className="nav-item">
                          <Link
                              exact
                              to="/admission"
                              activeClassName="active"
                              className="nav-links-admission"
                              onClick={click ? handleClick : null}
                          >
                              Admission
                          </Link>
                      </li>
                      <li className="nav-item">
                          <Link
                              exact
                              to="/alumini"
                              activeClassName="active"
                              className="nav-links-alumini"
                              onClick={click ? handleClick : null}
                          >
                              Alumini
                          </Link>
                      </li>
                      <li className="nav-item">
                          <Link
                              exact
                              to="/blog"
                              activeClassName="active"
                              className="nav-links-blog"
                              onClick={click ? handleClick : null}
                          >
                              Blog
                          </Link>
                      </li>
                      <li className="nav-item-results">
                          <Link
                              exact
                              to="/results"
                              activeClassName="active"
                              className="nav-links-results"
                              onClick={click ? handleClick : null}
                          >
                              Results
                          </Link>
                      </li>
                  </ul>
                  <div className="nav-icon" onClick={handleClick}>
                      <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
                  </div>

              </div>
          </nav>
      </ div>
  );
}
export default Navbar;