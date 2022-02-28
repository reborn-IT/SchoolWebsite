import React from "react";
import "../News/news.css";
import image1 from "../images/4.jpg";

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
                    <img src={image1} alt="" />
                  </div>
                  <div className="news-details">
                    <div className="name">Covid-19 vaccinations for students</div>
                    <div className="job">February 2022</div>
                    <div className="news-btn">Read More</div>
                  </div>
                  {/* <div className="media-icons">
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-youtube"></i></a>
                  </div> */}
                </div>
              </div>
              <div className="news-card">
                <div className="news-content">
                  <div className="news-img">
                    <img src={image1} alt="" />
                  </div>
                  <div className="news-details">
                    <div className="name">Covid-19 vaccinations for students</div>
                    <div className="job">February 2022</div>
                    <div className="news-btn">Read More</div>
                  </div>
                  {/* <div className="media-icons">
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-youtube"></i></a>
                  </div> */}
                </div>
              </div>
              <div className="news-card">
                <div className="news-content">
                  <div className="news-img">
                    <img src={image1} alt="" />
                  </div>
                  <div className="news-details">
                    <div className="name">Covid-19 vaccinations for students</div>
                    <div className="job">February 2022</div>
                    <div className="news-btn">Read More</div>
                  </div>
                  {/* <div className="media-icons">
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-youtube"></i></a>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="news-cards">
              <div className="news-card">
                <div className="news-content">
                  <div className="news-img">
                    <img src={image1} alt="" />
                  </div>
                  <div className="news-details">
                    <div className="name">Covid-19 vaccinations for students</div>
                    <div className="job">February 2022</div>
                    <div className="news-btn">Read More</div>
                  </div>
                  {/* <div className="media-icons">
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-youtube"></i></a>
                  </div> */}
                </div>
              </div>
              <div className="news-card">
                <div className="news-content">
                  <div className="news-img">
                    <img src={image1} alt="" />
                  </div>
                  <div className="news-details">
                    <div className="name">Covid-19 vaccinations for students</div>
                    <div className="job">February 2022</div>
                    <div className="news-btn">Read More</div>
                  </div>
                  {/* <div className="media-icons">
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-youtube"></i></a>
                  </div> */}
                </div>
              </div>
              <div className="news-card">
                <div className="news-content">
                  <div className="news-img">
                    <img src={image1} alt="" />
                  </div>
                  <div className="news-details">
                    <div className="name">Covid-19 vaccinations for students</div>
                    <div className="job">February 2022</div>
                    <div className="news-btn">Read More</div>
                  </div>
                  {/* <div className="media-icons">
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-youtube"></i></a>
                  </div> */}
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
