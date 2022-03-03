import React from "react";
import "../Alumni/alumni.css";
import { Link } from "react-router-dom";
import image from "../../images/academic.jpg";
import image1 from "../../images/alumni.jpg";
import image2 from "../../images/member.jpg";

function Alumni(){
    return(
        <>
            <div className="alumni-headimage">
                <img src={image} alt="alumni" width="100%" height="100%"/>
            </div>

            <div className="alumni-heading">Our Alumni</div>
            <div className="alumni-description">
                
                {/* <div class="alumni-image"> */}
                    <img src={image1} alt="alumni" width="100%" height="100%" className="alumni-image"/>
                {/* </div> */}
                <div className="alumni-text"> 
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, 
                    magna sed pulvinar ultricies, purus lectus malesuada libero, 
                    sit amet commodo magna eros quis urna.  Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, 
                    magna sed pulvinar ultricies, purus lectus malesuada libero, 
                    sit amet commodo magna eros quis urna.  Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.   
                </div>
                
            </div>
            
            <Link to ="/alumniregistration"> <button className="btn-register">For Registrations</button> </Link>
            
            <br /><br />

            <div className="alumni-members">
                <h2>Alumni Members</h2> <br/>
            <div className="container">
            <div class="row">
                <div class="col-xs-12 col-sm-6 col-md-3">
                    <div className="member">
                        <img src={image2} alt="pic" height="128" width="128"/>
                    </div>
                    <div className="member-text">
                        <h3>Member</h3>
                    </div>
                </div>

                <div class="col-xs-12 col-sm-6 col-md-3">
                    <div className="member">
                        <img src={image} height="128" width="128" alt="" />
                    </div>

                    <div className="member-text">
                        <h3>Member</h3>
                    </div>
                </div>

                <div class="col-xs-12 col-sm-6 col-md-3">
                    <div className="member">
                        <img src={image} height="128" width="128" alt="" />
                    </div>
                    <div className="member-text">
                        <h3>Member</h3>
                    </div>
                </div>

                <div class="col-xs-12 col-sm-6 col-md-3">
                    <div className="member">
                        <img src={image} height="128" width="128" alt="" />
                    </div>
                    <div className="member-text">
                        <h3>Member</h3>
                    </div>
                </div>
            </div>
            <br />

            <div class="row">
                <div class="col-xs-12 col-sm-6 col-md-3">
                    <div className="member">
                        <img src={image} alt="pic" height="128" width="128"/>
                    </div>
                    <div className="member-text">
                        <h3>Member</h3>
                    </div>
                </div>

                <div class="col-xs-12 col-sm-6 col-md-3">
                    <div className="member">
                        <img src={image} height="128" width="128" alt="" />
                    </div>

                    <div className="member-text">
                        <h3>Member</h3>
                    </div>
                </div>

                <div class="col-xs-12 col-sm-6 col-md-3">
                    <div className="member">
                        <img src={image} height="128" width="128" alt="" />
                    </div>
                    <div className="member-text">
                        <h3>Member</h3>
                    </div>
                </div>

                <div class="col-xs-12 col-sm-6 col-md-3">
                    <div className="member">
                        <img src={image} height="128" width="128" alt="" />
                    </div>
                    <div className="member-text">
                        <h3>Member</h3>
                    </div>
                </div>
            </div>

        </div>
            </div>
            <br />

        </>
    )
}
export default Alumni;