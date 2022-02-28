import React from "react";
import "../Tag/tag.css";
import image1 from "../images/4.jpg";

function Tag() {
    return(
        <div className="container">
            <div class="row">
                <div class="col-xs-12 col-sm-6 col-md-3">
                    <div className="circle">
                        <img src={image1} alt="pic" height="128" width="128"/>
                    </div>
                    <div className="circle-text">
                        <h3>Student Centered Learning</h3>
                    </div>
                </div>

                <div class="col-xs-12 col-sm-6 col-md-3">
                    <div className="circle">
                        <img src={image1} height="128" width="128" alt="" />
                    </div>

                    <div className="circle-text">
                        <h3>Well-trained Professionals</h3>
                    </div>
                </div>

                <div class="col-xs-12 col-sm-6 col-md-3">
                    <div className="circle">
                        <img src={image1} height="128" width="128" alt="" />
                    </div>
                    <div className="circle-text">
                        <h3>International Curriculam</h3>
                    </div>
                </div>

                <div class="col-xs-12 col-sm-6 col-md-3">
                    <div className="circle">
                        <img src={image1} height="128" width="128" alt="" />
                    </div>
                    <div className="circle-text">
                        <h3>Extra-curricular Activities</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Tag;