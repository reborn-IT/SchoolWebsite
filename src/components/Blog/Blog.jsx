import React from "react";
import "../Blog/blog.css";
import image from "../images/blog.jpg";

function Blog() {
    return(
      <>  
      <div className="blog-headimage">
        <img src={image} alt="blog" />
      </div>
        <div class="blog">
          <div class="blog-container">
            <div class="blog-title">
              <h2>Latest Blog</h2>
              <p>recent blogs about art & design</p>
            </div>
            <div class="blog-content">

              <div class="blog-item">
                <div class="blog-img">
                  <img src="" alt="" />
                  <span><i class="far fa-heart"></i></span>
                </div>
                <div class="blog-text">
                  <span>20 January, 2020</span>
                  <h2>Lorem ipsum, dolor sit amet consectetur adipisicing</h2>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis libero quas ipsum laudantium nihil! Quaerat.</p>
                  <a href="#">Read More</a>
                </div>
              </div>

              <div class="blog-item">
                <div class="blog-img">
                  <img src="" alt="" />
                  <span><i class="far fa-heart"></i></span>
                </div>
                <div class="blog-text">
                  <span>20 January, 2020</span>
                  <h2>Lorem ipsum, dolor sit amet consectetur adipisicing</h2>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis libero quas ipsum laudantium nihil! Quaerat.</p>
                  <a href="#">Read More</a>
                </div>
              </div>

              <div class="blog-item">
                <div class="blog-img">
                  <img src="" alt="" />
                  <span><i class="far fa-heart"></i></span>
                </div>
                <div class="blog-text">
                  <span>20 January, 2020</span>
                  <h2>Lorem ipsum, dolor sit amet consectetur adipisicing</h2>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis libero quas ipsum laudantium nihil! Quaerat.</p>
                  <a href="#">Read More</a>
                </div>
              </div>

              <div class="blog-item">
                <div class="blog-img">
                  <img src="" alt="" />
                  <span><i class="far fa-heart"></i></span>
                </div>
                <div class="blog-text">
                  <span>20 January, 2020</span>
                  <h2>Lorem ipsum, dolor sit amet consectetur adipisicing</h2>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis libero quas ipsum laudantium nihil! Quaerat.</p>
                  <a href="#">Read More</a>
                </div>
              </div>

              <div class="blog-item">
                <div class="blog-img">
                  <img src="" alt="" />
                  <span><i class="far fa-heart"></i></span>
                </div>
                <div class="blog-text">
                  <span>20 January, 2020</span>
                  <h2>Lorem ipsum, dolor sit amet consectetur adipisicing</h2>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis libero quas ipsum laudantium nihil! Quaerat.</p>
                  <a href="#">Read More</a>
                </div>
              </div>

              <div class="blog-item">
                <div class="blog-img">
                  <img src="" alt="" />
                  <span><i class="far fa-heart"></i></span>
                </div>
                <div class="blog-text">
                  <span>20 January, 2020</span>
                  <h2>Lorem ipsum, dolor sit amet consectetur adipisicing</h2>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis libero quas ipsum laudantium nihil! Quaerat.</p>
                  <a href="#">Read More</a>
                </div>
              </div>

            </div>
          </div>
        </div>
    

      </>
    )
}

export default Blog;