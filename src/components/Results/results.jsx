import '../Results/results.css';


export const Results =()=>{
    return(

        <div id="results">
                
            <div className="">

                 {/* Main Header */}
                 <div>
       <div className="main" style={{backgroundImage:'url("img/aboutus/admin.jpg")'}}>
            <div className="filterBlur mainTxt">Results</div>
           {/* <img src={props.data ? props.data.mainimage:"Loading...."} alt="" /> */} 
          
       </div>
       {/* <span className="mainTxt">About Us</span>  */}
       </div>

            
                {/* Results */}
                <div className="">
                    <form action="" className="form">
                    <div className="row">
                        <div className="col sm-6">
                            <input type="text" name="" placeholder="Choose your examination"/>
                        </div>
                        <div className="col sm-6">
                        <input type="text" name="" placeholder="Year"/>
                        </div>
                    </div>

                    <div className="row" className="indextTxt">
                        <input type="text" name="" placeholder="Index Number" />
                    </div>
                    
                    <div className="row">
                        <div className="col sm-6">
                            <button>Subject</button>
                        </div>
                        <div className="col sm-6">
                            <button>Result</button>
                        </div>
                    </div>
                    </form>
                </div>


                
            </div>

           
        </div>
    )
}