import React from 'react'
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { NavLink, useLocation } from "react-router-dom";
import $ from "jquery";
import { useEffect } from 'react';
import user from "../assets/img/user.png"
import { useState } from 'react';


const SelectUser = () => {

  const navigate = useNavigate();

  const [checkusertyp, setCheckusertyp] = useState("user-registeration");
 
  const handlechngepath = () => {
  if(checkusertyp){
  navigate(`/${checkusertyp}`)
}
};

useEffect(() => {

  $(document).ready(function() {
    $(".tab-content ul li a").click(function() {
      $('.tab-content ul li a').removeClass();
      $(this).addClass('select');
      $('.tab-content ul li').addClass('deselect');
      var index = $('.tab-content ul li a').index($(this));
      $('.tab-details > div').hide();
      $('.tab-details > div').filter(':eq(' + index + ')').show();
      });
  });

}, [])

  return (

<body class="graphic-bg">
<div class="log-reg-section clearfix">
  <div class="row g-0">
    <div class="col-xl-7 order-xl-2">
      <div class="right-panel">
        <div class="small-logo"><a href="home.html">
        <img src="assets/img/log-reg-logo.png" alt=""/></a></div>
        <div class="reg-heading">
          <h3>What best describes you?</h3>
          <p>Click on the options below to find out more.</p>
        </div>
         <div class="tab-content">
          <ul>
            <li onClick={()=>setCheckusertyp("user-registeration")}  >
              <div  class="img-box"><img src="assets/img/user.png" alt=""/></div>
              <div   class="img-txt"><img src="assets/img/icon-select-01.png" alt=""/><span   class="d-block">I’m a User</span></div>
              <a href="javascript:void(0)">&nbsp;</a> </li>
            <li onClick={()=>setCheckusertyp("trainer-registeration")} >
              <div class="img-box"><img src="assets/img/user.png" alt=""/></div>
              <div class="img-txt"><img src="assets/img/icon-select-02.png" alt=""/><span   class="d-block">I’m a Trainer</span></div>
              <a href="javascript:void(0)">&nbsp;</a> </li>
            <li onClick={()=>setCheckusertyp("owner-register")} >
              <div class="img-box"><img src="assets/img/user.png" alt=""/></div>
              <div class="img-txt"><img src="assets/img/icon-select-03.png" alt=""/><span   class="d-block">I’m an Owner</span></div>
              <a href="javascript:void(0)"></a> </li>
          </ul>
        </div>
        <div class="tab-details">
          <div style={{display:"none"}} >
            <p>Book gym slots to exercise and keep fit!</p>
          </div>
          <div style={{display:"none"}}>
            <p>Book gym slots for your personal training sessions!</p>
            <p>For trainers who are also gym owners, you can choose either option.</p>
          </div>
          <div style={{display:"none"}}>
            <p>Gain popularity as you rent out your gym spaces to the community!</p>
            <p>For gym ownners who are also trainers, you can choose either option</p>
          </div>
        </div>


      <div class="reg-button">
          <button style={{fontWeight:"bold"}}  type="button" onClick={() => handlechngepath()} >Continue</button>
        </div>


     
        <div class="copyrights">All Copyrights Reserved by  <div class="copyrights">
                All Copyrights Reserved by{" "}
                <span style={{ fontWeight: "bold" }} >
                  MORPH CO. LTD
                </span>
              </div></div>
      </div>
    </div>
    <div class="col-xl-5">
      <div class="left-panel">
        <div class="back-to-home"><i class="fa-solid fa-arrow-leftm"></i> <Link to="/"   >Back to Home</Link></div>
        <div class="no-account">
          <h4>Already have an account?</h4>
          <div class="link">
          <Link to="/login">Login Now</Link>
           <i  class="fa-solid fa-arrow-rightm"></i></div>
        </div>
        <img src="assets/img/login-img.png" alt=""/>
        </div>
    </div>
  </div>
</div>
<script src="assets/js/jquery.min.js"></script> 
</body>




//     <body class="graphic-bg" >    
//     <div class="log-reg-section clearfix">
//   <div class="row g-0">
//     <div class="col-lg-7 col-md-6 order-lg-2 order-md-2">
//       <div class="right-panel">
//         <div class="small-logo"><a href="index.html"><img src="assets/img/log-reg-logo.png" alt=""/></a></div>
//         <div class="reg-heading">
//           <h3>What best describes you?</h3>
//           <p>Click on the options below to find out more.</p>
//         </div>
//         <div class="row mt-5">
//           <div class="col-md-4">
//             <div class="reg-select" 
//             onClick={() => handlechngepath()}            
//             >
//               <div class="img-box"><img src="assets/img/user.png" alt=""/></div>
//               <div class="img-txt"><img src="assets/img/icon-select-01.png" alt=""/><span class="d-block">I’m a User</span></div>
//               <div class="img-clr cursor"></div>
//             </div>
//           </div>
//           <div class="col-md-4">
//             <div class="reg-select"   onClick={() => handlechngepath()}>
//               <div class="img-box"><img src="assets/img/trainer.png" alt=""/></div>
//               <div class="img-txt"><img src="assets/img/icon-select-02.png" alt=""/><span class="d-block">I’m a Trainer</span></div>
//               <div class="img-clr cursor"></div>
//             </div>
//           </div>
//           <div class="col-md-4"
//             <div class="reg-select"   onClick={() => handlechngepath()}>
//               <div class="img-box"><img src="assets/img/owner.png" alt=""/></div>
//               <div class="img-txt"><img src="assets/img/icon-select-03.png" alt=""/><span class="d-block">I’m an Owner</span></div>
//               <div class="img-clr cursor"></div>
//             </div>
//           </div>
//         </div>
//         <div class="reg-text"></div>
//         <div class="reg-button">
//           <button type="button" onClick={() => handlechngepath()}>Continue</button>
//         </div>
//         <div class="copyrights">All Copyrights Reserved by <a style={{fontWeight:"bold"}} href="#">MORPH CO. LTD</a></div>
//       </div>
//     </div>

//     <div class="col-lg-5 col-md-6">
//       <div class="left-panel">
//         <div class="back-to-home"><i style={{marginRight:"5px"}} class="fa-solid fa-arrow-left-long"></i>
//         <Link  to="/">Back to Home</Link>

        
//          </div>
//         <div class="no-account">
//           <h4>Already have an account?</h4>
//           <div class="link"><a   href="login.html">Login Now</a> <i class="fa-solid fa-arrow-right-long"></i></div>
//         </div>
//         <img src="assets/img/login-img.png" alt=""/></div>
//     </div>

//   </div>
// </div>

// </body>


  )
}

export default SelectUser