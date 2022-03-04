import { faTruckLoading } from '@fortawesome/free-solid-svg-icons';
import '../Admission/admission.css';

export const Admissions=(props)=>{
    return (
    <div id='admission'>

                    {/* Admission header image */}
           <div>
             <div className="main" style={{backgroundImage:"{props.data ? props.data.adminMainImage : 'Loading.....''}"}}>
                {/* Blured Div */}
                <div className="filterBlur mainTxt">Admissions</div>
             </div>
            </div>

            {/* Nursery,Primary             */}
           <div className='row NurseryDiv'>

              {/* Recent Programs */}
              <div className='col-sm-4 recents'>
                    <div className='recentProgramTxt'>Recent Programs</div>
                    <div className='recentCard'>

                        {/* Card */}
                    <div class="card mb-3" style={{maxWidth:"540px"}}>
                        <div class="row g-0">
                            <div class="col-md-4 roundDiv">
                                <div><h4>24</h4></div>
                                <div>Feb</div>
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Paper Craft Competition</h5>
                                    <p class="card-text"><i class="fa fa-clock"></i> 10am-12pm</p>
                                    <p class="card-text"><i class="fa fa-location-dot"></i> Location</p>
                                </div>
                            </div>
                            </div>
                        </div>


                    </div>

                    <div className='recentCard'>
                           {/* Card */}
                    <div class="card mb-3" style={{maxWidth:"540px"}}>
                        <div class="row g-0">
                            <div class="col-md-4 roundDiv">
                                <div><h4>24</h4></div>
                                <div>Feb</div>
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Paper Craft Competition</h5>
                                    <p class="card-text"><i class="fa fa-clock"></i> 10am-12pm</p>
                                    <p class="card-text"><i class="fa fa-location-dot"></i> Location</p>
                                </div>
                            </div>
                            </div>
                        </div>

                    </div>

                    <div className='recentCard'>
                             {/* Card */}
                    <div class="card mb-3" style={{maxWidth:"540px"}}>
                        <div class="row g-0">
                            <div class="col-md-4 roundDiv">
                                <div><h4>24</h4></div>
                                <div>Feb</div>
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Paper Craft Competition</h5>
                                    <p class="card-text"><i class="fa fa-clock"></i> 10am-12pm</p>
                                    <p class="card-text"><i class="fa fa-location-dot"></i> Location</p>
                                </div>
                            </div>
                            </div>
                        </div>

                    </div>
              </div>



              {/* Nursary */}
              <div className='col-sm-8'>


                  {/* Nursery */}
                  <div className='nursarymain'>
                      {/* Image */}
                      <div className='col-sm-2 nursaryImg'><img src={props.data ? props.data.nursaryImage:"Loading...."} alt="Image" /></div>
                      <div className='col-sm-10 textSize'>
                          {/* Title */}
                          <div><h3>Curriculam Framework - Nursery Age 2-5 years</h3></div>
                          <div className='fustify'>{props.data ? props.data.NursaryText:"Loading..."}
                         </div>
                         <div className='seeDetails'><a href="">Admission Details</a></div>
                      </div>
                  </div>



                  {/* Primary */}

                  <div className='nursarymain'>
                      {/* Title */}
                      <div className='col-sm primarycontent textSize'>
                          
                      <div><h3>Curriculam Framework - Primary</h3></div>
                          <div className='fustify'>{props.data ? props.data.PrimaryText:"Loading..."}
                         </div>
                         <div className='seeDetails'><a href="">Admission Details</a></div>
                          
                         
                      <div className='col-sm primaryDiv'>
                          {/* Image */}
                          <img className='primaryImg' src={props.data ? props.data.nursaryImage:"Loading...."} alt="Image" />
                          </div>
                      </div>
                  </div>
                  
             </div> 
           </div>

     


           {/* Secondary */}
           <div className='secondaryDiv'>
                {/* Image */}
                <div className='col-sm-2 secondaryImg'><img src={props.data ? props.data.secondaryImage:"Loading...."} alt="Image" /></div>
                      <div className='col-sm-10 textSize'>
                          {/* Title */}
                          <div><h3>Curriculam Framework - Secondary</h3></div>
                          <div className='fustify'>{props.data ? props.data.Secondary:"Loading..."}
                         </div>
                         <div className='seeDetails'><a href="">Admission Details</a></div>
                      </div>
           </div>


           

           {/* Admission Form */}
           <div className='row formdiv'>
               {/* Admission Form */}
               <div className='col-sm-6 formcontent'>
                   <div className='formTitle'>For Admissions</div>
                   <form action="" className='adminForm'>
                            <div><input type="text" name='name' placeholder='Name' /></div>
                            <div><input type="text" name='contact' placeholder='Contact number' /></div>
                            <div><input type="text" name='email' placeholder='Email' /></div>
                            <div><input type="text" name="branch" placeholder='Preffered branch' /></div>
                            <div><textarea rows="1" cols="200" name="message" id="" cols="30" rows="10" placeholder='Message'></textarea></div>
                            <div className='formSubmit'><button className='btn btn-primary'>Submit</button></div>
                   </form>
               </div>
               <div className='adminImg col-sm-6'><img src={props.data ? props.data.formImage:"Loading...."} alt="Image" /></div>
           </div>
    </div>
    )
}