import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Footer/footer.css';
import { Link } from "react-router-dom";

function Footer(){
    return(
        <div>
            <footer class="site-footer">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-md-6">
                            {/* <img src={logo} height="60" width="100" alt="logo" /> */}
                            <h6>Logo</h6>
                            <p class="text-justify">Description</p>
                        </div>

                        <div class="col-xs-6 col-md-3">
                            <h6>Quick Links</h6>
                            <ul class="footer-links">
                                <Link to="/"><li className="footer-list">Home</li></Link>
                                <Link to="/about"><li className="footer-list">About us</li></Link>
                                <Link to="/branches"><li className="footer-list">Branches</li></Link>
                                <Link to="/academics"><li className="footer-list">Academics</li></Link>
                                <Link to="/admission"><li className="footer-list">Admission</li></Link>
                                <Link to="/alumini"><li className="footer-list">Alumini</li></Link>
                                <Link to="/blog"><li className="footer-list">Blog</li></Link>
                                <Link to="/results"><li className="footer-list">Results</li></Link>
                            </ul>
                        </div>

                        <div class="col-xs-6 col-md-3">
                            <h6>Connect with us</h6>
                            <ul class="footer-links">
                                <li>No-12, <br /> Main street, <br />Colombo-4</li>
                                <li>123456789</li>
                                <li>info@gmail.com</li>
                            </ul>
                        </div>

                    </div>
                    <br />
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 col-sm-6 col-xs-12">
                            <p class="copyright-text">Copyright &copy;  All Rights Reserved by
                                <a href="#"> School name</a>.
                            </p>
                        </div>

                        <div class="col-md-4 col-sm-6 col-xs-12">
                            <ul class="social-icons">
                                <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
                                <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
                                <li><a class="dribbble" href="#"><i class="fa fa-instagram"></i></a></li>
                                <li><a class="linkedin" href="#"><i class="fa fa-youtube"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
export default Footer;