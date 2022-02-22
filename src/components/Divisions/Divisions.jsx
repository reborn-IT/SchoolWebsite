import React from "react";
import "../Divisions/divisions.css";
import { Col, Row, Container } from "react-bootstrap";



function Divisions(){
    return(
        <div id="div-content">
        <div class="div-container">
            <div class="flipper">
                <div class="front">
                    <img src="./assets/img1.jpg" alt="img" />
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

    )
}
export default Divisions;