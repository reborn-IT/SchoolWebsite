import React from "react";
import "../Staff/staff.css";

function Staff(){
    return(
        <div className="staff-rectangle">
            <div class="staff-main">
  <h1>Qualified staff</h1>
  <ul class="staff-cards">
    <li class="staff-cards_item">
      <div class="staff-card">
        <div class="staff-card_image"><img src="https://picsum.photos/500/300/?image=10" /></div>
        <div class="staff-card_content">
          <h2 class="staff-card_title">Teacher 1</h2>
          <p class="staff-card_text">description</p>
          <button class="btn card_btn">Read More</button>
        </div>
      </div>
    </li>
    <li class="staff-cards_item">
      <div class="staff-card">
        <div class="staff-card_image"><img src="https://picsum.photos/500/300/?image=5" /></div>
        <div class="staff-card_content">
          <h2 class="staff-card_title">Teacher 2</h2>
          <p class="staff-card_text">description</p>
          <button class="btn card_btn">Read More</button>
        </div>
      </div>
    </li>
    <li class="staff-cards_item">
      <div class="staff-card">
        <div class="staff-card_image"><img src="https://picsum.photos/500/300/?image=11" /></div>
        <div class="staff-card_content">
          <h2 class="staff-card_title">Teacher 3</h2>
          <p class="staff-card_text">description</p>
          <button class="btn card_btn">Read More</button>
        </div>
      </div>
    </li>
    
  </ul>
</div>

        </div>
    )
}
export default Staff;