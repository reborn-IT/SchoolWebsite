import React from "react";
import "../Alumniregistration/alumniregistration.css";

function Alumniregistration(){
    return(
        <div class="form animated flipInX">
            <h2>Login To Your Account</h2>
            <form>
                <input placeholder="Username" type="text"></input>
                <input placeholder="Password" type="password"></input>
                <button>Login</button>
            </form>
        </div>
    )
}
export default Alumniregistration;