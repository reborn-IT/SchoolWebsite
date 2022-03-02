import React from "react";
import "../Branches/branches.css";
import image from "../../images/school.jpg";

function Branches(){
    return(
        <>
        <div className="branches-headimage">
            <img src={image} alt="blog" width="100%" height="100%"/>
        </div>
        <div className="branch-description-rectangle">
        <div className="branch-description">
            <br />
            <h2>Branch Name</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, 
                magna sed pulvinar ultricies, purus lectus males
                uada libero, sit amet commodo magna eros quis urna. 
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, 
                magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. 
            </p>
        </div>
        </div>

        <br />
        {/* <div className="pricipal-branch">
        <div className="principal-image">

        </div>
            <h2>Principal's Message</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, 
                magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. 
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, 
                magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.
            </p>
            
        </div> */}

            <div class="half-half-image-text">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <h1>Principal's message</h1>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 col-lg-6">
                            <div class="content">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere,
                                    magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere,
                                    magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.
                                </p>

                            </div>
                        </div>
                        <div class="col-12 col-lg-6">
                            <div class="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROjdw9uiCM65OkTewBvVvgjbtxW_lfBGUoTPFOi2EHRbrNLFuHg0SaFtfSPrvHZIgp5so&usqp=CAU" ></div>
                        </div>
                    </div>
                </div>
            </div>

        <div className="branch-location">
            <h2>Visit us</h2>
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/fe/Location_map_of_greater_Colombo.png" className="location" width="350px" height="250px"/>
        
            <div className="branch-address">
                No-12,
                Main street,
                Colombo-4
            </div>
        </div>
        </>
    )
}
export default Branches;