
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import "../Aboutus/aboutus.css";
import mainimage from "../images/aboutus.jpg";



export const About=(props)=>{
    return (
    <div id="about">
    
    <div className="">

        {/* main image */}
        <div>
       <div className="main" style={{backgroundImage:"{mainimage}"}}>
            <div className="filterBlur mainTxt">About Us</div>
           {/* <img src={props.data ? props.data.mainimage:"Loading...."} alt="" /> */} 
          
       </div>
       {/* <span className="mainTxt">About Us</span>  */}
       </div>


            {/* Vision and Mission */}
            <div className="vision-mission">
                    <div className="visionmission">Vision & Mission</div>

                     {/* vision */}
                     <div className="classvision">
                            <div className="visionTitle">Vision</div>
                            <div className="Txt">{props.data ? props.data.vision: "Loading...."}</div>
                     </div>

                    {/* Mission */}
                     <div className="classmission">
                             <div className="missionTitle">Mission</div>
                            <div className="Txt">{props.data ? props.data.mission: "Loading...."}</div>
                    </div>

            </div>
     

       {/* Principal's Note */}
       <div className="principal container">
           <div className="message">Principal's Message</div>
           <div className="row">
               <div className="pricialMessageContent col sm-6">{props.data ? props.data.PricipalNote: "Loading...."}</div>
               <div className="centerTxt floatRight col sm-6">
                   <div><img className="principalPhoto " src={props.data ? props.data.principal:"Loading..."} alt="Principal's Image" /></div>
                   <div className="principalName">{props.data ? props.data.principalName : "Loading...."}</div>
               </div>
               
               
           </div>
       </div>


       {/* Description */}
        <div className="blueDiv">
          <div className='container'>
       <div className="description row">
           <div className="col sm-6 left">
               <div className="descriptionTxt">We offer a high quality blend of co-curricular activities, sports and academics</div>
               <div className="jointodayBTN"><button type="button" class="btn btn-primary btn-lg">Join Today</button></div>
           </div>
           <div className="col sm-6 PicDiv"><img className="Photo" src={props.data ? props.data.description:"Loading..."} alt="Description Image" /></div>
       </div>
       </div>
       </div>


       {/* FAQ */}
       <div className="faq row">
            <div className="col sm-6 PicDiv"><img className="Photo" src={props.data ? props.data.faq:"Loading..."} alt="FAQ Image" /></div>
            <div className="col sm-6">
                <div className="faqTxt">Frequently Asked Questions?</div>

                {/* Accordian */}
                <div>
                <div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Question 1
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Question 2
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      Question 3
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingFour">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
      Question 4
      </button>
    </h2>
    <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the fourth item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
</div>
                </div>
            </div>
       </div>
    
       </div>

     
   </div>
   )
}