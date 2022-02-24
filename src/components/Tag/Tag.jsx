import React from "react";
import "../Tag/tag.css";

import image1 from "../images/1.jpg";
function Tag() {
    return(
        // <div className="tag-rectangle">

        //     <Row>
        //         <Col>
        //             <div className="circle1">
        //                 <div className="tag-description1">
        //                     Student centered Learning
        //                 </div>
        //             </div>
        //         </Col>
        //         <Col>
        //             <div className="circle2">
        //             <div className="tag-description2">
        //                     Student centered Learning
        //                 </div>

        //             </div>
        //         </Col>
        //         <Col>
        //             <div className="circle3">
        //             <div className="tag-description3">
        //                     Student centered Learning
        //                 </div>

        //             </div>
        //         </Col>
        //         <Col>
        //             <div className="circle4">
        //             <div className="tag-description4">
        //                     Student centered Learning
        //                 </div>

        //             </div>
        //         </Col>
        //     </Row>
        // </div>
        <div className="container">
            <div class="row">
                <div class="col-xs-12 col-sm-6 col-md-3">
                    <div className="circle">
                        <img src="" alt="pic" height="128" width="128"/>
                    </div>
                    <h3>Student Centered Learning</h3>
                </div>

                <div class="col-xs-12 col-sm-6 col-md-3">
                    <div className="circle">

                        <img height="128" width="128" src="" alt="" />
                    </div>
                    <h3>Well-trained Professionals</h3>
                </div>

                <div class="col-xs-12 col-sm-6 col-md-3">
                    <div className="circle">
                        <img height="128" width="128" src="" alt="" />
                    </div>
                    <h3>International Curriculam</h3>
                </div>

                <div class="col-xs-12 col-sm-6 col-md-3">
                    <div className="circle">
                        <img height="128" width="128" src="" alt="" />
                    </div>
                    <h3>Extra-curricular Activities</h3>
                </div>
            </div>
        </div>
    )
}
export default Tag;