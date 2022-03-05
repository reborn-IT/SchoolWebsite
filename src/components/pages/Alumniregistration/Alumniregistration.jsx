import React from "react";
import "../Alumniregistration/alumniregistration.css";

function Alumniregistration(){
    return(
        <div class="form-body">
            <div class="container-form">

            <br /><br />
                <div class="left-form">
                    <h1>Alumni Registration</h1>
                    <p></p>

                    <form>
                        <label for="text">First Name</label>
                        <input type="text" name="firstname" id="firstname" />

                        <label for="text">Last Name</label>
                        <input type="text" name="lastname" id="lastname" />

                        <label for="text">Date of Birth</label>
                        <input type="text" name="dob" id="dob" />

                        <label for="text">Educational Qualification</label>
                        <input type="text" name="qualification" id="qualification" />

                        <label for="text">Contact Number</label>
                        <input type="text" name="contactnumber" id="contactnumber" />

                        <label for="email">Email</label>
                        <input type="text" name="email" id="email" />

                        {/* <label for="password">Password</label>
                        <input type="password" name="password" id="password" />

                        <label for="confirm">Confirm Password</label>
                        <input type="password" name="confirm" id="confirm" /> */}

                        <div class="accept">
                            <input type="checkbox" />
                            <p>I agree to the <a href="#">terms of service</a></p>
                        </div>

                        <input class="button" type="button" value="Sign Up" />
                    </form>


                </div>

                {/* <div class="right">
                    <img className="form-image" src="https://images.unsplash.com/photo-1581215524789-83361d941827?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
                </div> */}

            </div>
        </div>
        
        

    )
}
export default Alumniregistration;