import React from "react";
import "../News/news.css";

function News(){
    return(
        <div className="news">
            <div className="news-heading">Latest News and Updates</div>
        
  <div className="news-container">
    <input type="radio" name="dot" id="one" />
    <input type="radio" name="dot" id="two" />
    <div className="news-card">
      <div className="news-cards">
        <div className="news-card">
         <div className="news-content">
           <div className="news-img">
            {/* <!--- <img src="images/img1.jpg" alt="">--> */}
           </div>
           <div className="news-details">
             <div className="name">Andrew Neil</div>
             <div className="job">Web Designer</div>
           </div>
           <div className="media-icons">
             <a href="#"><i className="fab fa-facebook-f"></i></a>
             <a href="#"><i className="fab fa-twitter"></i></a>
             <a href="#"><i className="fab fa-instagram"></i></a>
             <a href="#"><i className="fab fa-youtube"></i></a>
           </div>
         </div>
        </div>
        <div className="news-card">
         <div className="news-content">
           <div className="news-img">
            {/* <!--- <img src="images/img2.jpg" alt="">---> */}
           </div>
           <div className="news-details">
             <div className="name">Jasmine Carter</div>
             <div className="job">UI Designer</div>
           </div>
           <div className="media-icons">
             <a href="#"><i className="fab fa-facebook-f"></i></a>
             <a href="#"><i className="fab fa-twitter"></i></a>
             <a href="#"><i className="fab fa-instagram"></i></a>
             <a href="#"><i className="fab fa-youtube"></i></a>
           </div>
         </div>
        </div>
        <div className="news-card">
         <div className="news-content">
           <div className="news-img">
            {/* <!-- <img src="images/img3.jpg" alt="">----> */}
           </div>
           <div className="news-details">
             <div className="name">Justin Chung</div>
             <div className="job">Web Devloper</div>
           </div>
           <div className="media-icons">
             <a href="#"><i className="fab fa-facebook-f"></i></a>
             <a href="#"><i className="fab fa-twitter"></i></a>
             <a href="#"><i className="fab fa-instagram"></i></a>
             <a href="#"><i className="fab fa-youtube"></i></a>
           </div>
         </div>
        </div>
      </div>
      <div className="news-cards">
        <div className="news-card">
         <div className="news-content">
           <div className="news-img">
             {/* <!---<img src="images/img4.jpg" alt="">---> */}
           </div>
           <div className="news-details">
             <div className="name">Appolo Reef</div>
             <div className="job">Web Designer</div>
           </div>
           <div className="media-icons">
             <a href="#"><i className="fab fa-facebook-f"></i></a>
             <a href="#"><i className="fab fa-twitter"></i></a>
             <a href="#"><i className="fab fa-instagram"></i></a>
             <a href="#"><i className="fab fa-youtube"></i></a>
           </div>
         </div>
        </div>
        <div className="news-card">
         <div className="news-content">
           <div className="news-img">
             {/* <!--<img src="images/img5.jpg" alt="">----> */}
           </div>
           <div className="news-details">
             <div className="name">Adrina Calvo</div>
             <div className="job">UI Designer</div>
           </div>
           <div className="media-icons">
             <a href="#"><i className="fab fa-facebook-f"></i></a>
             <a href="#"><i className="fab fa-twitter"></i></a>
             <a href="#"><i className="fab fa-instagram"></i></a>
             <a href="#"><i className="fab fa-youtube"></i></a>
           </div>
         </div>
        </div>
        <div className="news-card">
         <div className="news-content">
           <div className="news-img">
             {/* <!--<img src="images/img6.jpeg" alt="">---> */}
           </div>
           <div className="news-details">
             <div className="name">Nicole Lewis</div>
             <div className="job">Web Devloper</div>
           </div>
           <div className="media-icons">
             <a href="#"><i className="fab fa-facebook-f"></i></a>
             <a href="#"><i className="fab fa-twitter"></i></a>
             <a href="#"><i className="fab fa-instagram"></i></a>
             <a href="#"><i className="fab fa-youtube"></i></a>
           </div>
         </div>
        </div>
      </div>
    </div>
    <div className="news-button">
      <label for="one" className=" active one"></label>
      <label for="two" className="two"></label>
    </div>
  </div>
  </div>


    )
}
  
export default News;
