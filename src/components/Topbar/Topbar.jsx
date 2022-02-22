import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Topbar/topbar.css";


function Topbar(){
    const [click, setClick] = React.useState(false);
    const handleClick = () => setClick(!click);
    const Close = () => setClick(false);
    return(
      <div>

        <div className={click ? "main-container" : ""} onClick={() => Close()} />
        <top className="rectangle-topbar" onClick={e => e.stopPropagation()}>
          <div className="topbar-container">
            <div className="topbar-left">
              <Link
                exact
                to="/"
                activeClassName="active"
                className="top-links"
                onClick={click ? handleClick : null}
              >
                <i class="topEnvelopeIcon fas fa-envelope"></i> info@gmail.com
              </Link>

              <Link
                exact
                to="/"
                activeClassName="active"
                className="top-links"
                onClick={click ? handleClick : null}
              >
                <i class="topPhoneIcon fas fa-phone"></i> 123456789
              </Link>
            </div>
            <ul className={click ? "top-menu active" : "top-menu"}>
              <li className="top-item">
                <Link
                  exact
                  to="/programs"
                  activeClassName="active"
                  className="top-links"
                  onClick={click ? handleClick : null}
                >
                  <i className="fa fa-facebook"></i>
                </Link>
              </li>
              <li className="top-item">
                <Link
                  exact
                  to="/features"
                  activeClassName="active"
                  className="top-links"
                  onClick={click ? handleClick : null}
                >
                  <i className="fa fa-twitter"></i>
                </Link>
              </li>
              <li className="top-item">
                <Link
                  exact
                  to="/contact"
                  activeClassName="active"
                  className="top-links"
                  onClick={click ? handleClick : null}
                >
                  <i className="fa fa-instagram"></i>
                </Link>
              </li>
              <li className="top-item">
                <Link
                  exact
                  to="/contact"
                  activeClassName="active"
                  className="top-links"
                  onClick={click ? handleClick : null}
                >
                  <i className="fa fa-youtube"></i>
                </Link>
              </li>
            </ul>
            <div className="top-icon" onClick={handleClick}>
              <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
            </div>

          </div>
        </top>
      </ div>
        
    )
}
export default Topbar;