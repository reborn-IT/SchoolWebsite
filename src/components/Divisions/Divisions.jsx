import React from "react";
import "../Divisions/divisions.css";
import { Col, Row, Container } from "react-bootstrap";
import image1 from "../images/4.jpg";


function Divisions(){
    return(
        <div id="div-content">
            <br /><br /><br />
            <div class="div-container">
                <div class="flipper">
                    <div class="front">
                        <img src="./assets/img2.jpg" className="division-image" alt="img" />
                        <p class="caption">Nursery</p>
                    </div>
                    <div class="back">
                        <a href="#">
                            <h1>Nursery</h1>
                        </a>
                        <p class="date">23/07/2021</p>
                        <p class="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab nostrum sit
                            delectus quam nisi cupiditate tenetur. Placeat non necessitatibus perferendis impedit.
                        </p>
                    </div>
                </div>
            </div>

            <div class="div-container">
                <div class="flipper">
                    <div class="front">
                        <img src="./assets/img2.jpg" alt="img" />
                        <p class="caption">Primary</p>
                    </div>
                    <div class="back">
                        <a href="#">
                            <h1>Primary</h1>
                        </a>
                        <p class="date">14/07/2021</p>
                        <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed adipisci
                            tenetur, quidem repellat dolorum doloribus voluptatum. At ad, nesciunt in sapiente quibusdam!
                        </p>
                    </div>
                </div>
            </div>

            <div class="div-container">
                <div class="flipper">
                    <div class="front">
                        <img src="./assets/img3.jpg" alt="img" />
                        <p class="caption">Secondary</p>
                    </div>
                    <div class="back">
                        <a href="#">
                            <h1>Secondary</h1>
                        </a>
                        <p class="date">06/08/2021</p>
                        <p class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo adipisci
                            ducimus quam exercitationem temporibus recusandae nemo voluptatum alias inventore!
                        </p>
                    </div>
                </div>
            </div>
        </div>

//         <>
//         <div className="row">
//         <div className="col-xs-12 col-sm-6 col-md-3">
//         <div class="divisions-container">
//         <div class="divisions-inner-container">
//             <div class="divisions-front">
//                 <div class="profile-image">
                    
//                 </div>
//                 <h3>Primary</h3>

//             </div>
//             <div class="divisions-back">
//                <h2>Primary</h2>
//                <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo adipisci
//                    ducimus quam exercitationem temporibus recusandae nemo voluptatum alias inventore!
//                 </h6>
            
//             </div>
//         </div>
//     </div>
//     </div>

//     <div className="col-xs-12 col-sm-6 col-md-3">
//         <div class="divisions-container">
//         <div class="divisions-inner-container">
//             <div class="divisions-front">
//                 <div class="profile-image">
                    
//                 </div>
//                 <h3>Primary</h3>

//             </div>
//             <div class="divisions-back">
//                <h2>Primary</h2>
//                <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo adipisci
//                    ducimus quam exercitationem temporibus recusandae nemo voluptatum alias inventore!
//                 </h6>
            
//             </div>
//         </div>
//     </div>
//     </div>

//     <div className="col-xs-12 col-sm-6 col-md-3">
//         <div class="divisions-container">
//         <div class="divisions-inner-container">
//             <div class="divisions-front">
//                 <div class="profile-image">
                    
//                 </div>
//                 <h3>Primary</h3>

//             </div>
//             <div class="divisions-back">
//                <h2>Primary</h2>
//                <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo adipisci
//                    ducimus quam exercitationem temporibus recusandae nemo voluptatum alias inventore!
//                 </h6>
            
//             </div>
//         </div>
//     </div>
//     </div>
    
//     </div>



// </>
    )
}
export default Divisions;