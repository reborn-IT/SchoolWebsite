import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Header/header.css";
import image1 from "../images/headerimage.jpg";

function Header() {
    return(
        <div className="header-container">
            <ul>
                <li>
                    <div class="header-left">
                            <img src={image1} alt="student" width="100%"/>                 
                    </div>
                    <div class="header-right"><br />
                        <div class="header-title">Practical Teaching & Social Development</div><br /><br />
                        <div class="header-content">
                        We aim at success by creating skills necessary for students to enrich and empower in studies and extra 
                        curricular activities. 
                        </div>
                    </div>

                </li>
            </ul>
        </div>
    )
}

export default Header;