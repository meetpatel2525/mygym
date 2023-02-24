import React from "react";
import Footer from "../home/Footer";
import Header from "../home/Header";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ContectUs = () => {

  const [headerClassName, setHeaderClassName] = useState("");

  const navigate = useNavigate();

  const handleScroll = (headerClassName) => {
    if (headerClassName !== "sticky" && window.pageYOffset >= 100) {
      setHeaderClassName("sticky");
    } else if (headerClassName === "sticky" && window.pageYOffset < 100) {
      setHeaderClassName("");
    }
  };

  React.useEffect(() => {
    window.onscroll = () => handleScroll(headerClassName);
  }, [headerClassName]); // IMPORTANT, This will cause react to update depending on change of this value

  const initialValue = {
    category: "",
    inquiry: "",
    name: "",
    email: "",
    info: "",
  };

  const [myData, setMyData] = useState(initialValue);
  const [message, setMessage] = useState("");
  const [submitcount, setSubmitcount] = useState(0);
  const [gender2, setgender2] = useState("");

  const onValueChange = (e) => {
    setMyData({ ...myData, [e.target.name]: e.target.value });
  };

  const { category, email, inquiry,name,info} = myData;

  const hundleSubmit = async(e) =>{

    e.preventDefault();

    setSubmitcount(+1)
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;


    if (category && email && inquiry && name && info) {
     
      if (regex.test(email)) {
      const data = await axios.post(`/api/v1/admin/addcontectus`, {
        email: email,
        category: category ,
        inquiry: inquiry,
        name: name ,
        message: info 
      })

      if(data.data.success == false){
      setMessage(data.data.message)
      }

      if (data.data.success == true ){
        setMyData("")
        navigate("/");
        setMessage("")
      } 

    }else {
      setMessage("Email is not valid");
  }
}}

console.log(message,"message");

  return (
    <body id="top">

      <Header handleScroll={handleScroll} headerClassName={headerClassName} />

      <section class="inner-masthead">
        <img src="assets/img/banner-contact.jpg" class="img-overlay" alt="" />
        <img
          src="assets/img/banner-overlay-content-inner.png"
          class="img-overlay"
          alt=""
        />
        <div class="container">
          <div class="inner-masthead__wrap">
            <div class="inner-masthead__wrap-item text-center">
              <h1 data-aos="fade-up">Contact Us</h1>
            </div>
          </div>
        </div>
      </section>
      
      <section class="contact-section">
        <div class="container">
          <div class="row">
            <div
              style={{ textAlign: "left", textAlign: "justify" }}
              class="col-lg-6"
              data-aos="fade-right"
            >
              <h2>Get In Touch</h2>
              <p>We are here for you! How can we help?</p>

              <select value={category} name="category"  onChange={(e) => onValueChange(e)}>
           
              <option value="" >Category</option>
              <option value="Gym" >Gym</option>
              <option value="Trainer" >Trainer</option>
              <option value="Complaint" >Complaint</option>
              </select>


              <div >
                  {!category & (submitcount > 0) ? (
                    <p className="worningmsg-contact">Please fill out this field</p>
                  ) : (
                    ""
                  )}
                </div>

              <select  style={
                              gender2 === "Others"
                                ? { display: "none" }
                                : { display: "block" }
                            } value={inquiry} name="inquiry"  onChange={(e) => ( onValueChange(e), setgender2(e.target.value) )} >

              <option value="" >Inquiry type</option>
              <option value="Bookings" > Bookings </option>
              <option value="Entry & Exit" >Entry & Exit</option>
              <option value="Gym Related" >Gym Related</option>
              <option value="Personal" >Personal</option>
              <option value="Miscellaneous" >Miscellaneous</option>
              <option value="Others" >Others</option>
              </select>

        
                            <input
                            style={
                              gender2 === "Others"
                                ? { display: "block" }
                                : { display: "none" }
                            }
                              value={inquiry}
                              placeholder="Inquiry type"
                              type="text"
                              name="inquiry"
                              onChange={(e) => onValueChange(e)}
                            />


              <div >
                  {!inquiry & (submitcount > 0) ? (
                    <p className="worningmsg-contact">Please fill out this field</p>
                  ) : (
                    ""
                  )}
                </div>

              
              <input onChange={(e) => onValueChange(e)} value={name} name="name" type="text" placeholder="Name" />

              <div >
                  {!name & (submitcount > 0) ? (
                    <p className="worningmsg-contact">Please fill out this field</p>
                  ) : (
                    ""
                  )}
                </div>

              <input onChange={(e) => onValueChange(e)} value={email}  name="email" type="email" placeholder="Email Address" />
            
              <div >
                  {!email & (submitcount > 0) ? (
                    <p className="worningmsg-contact">Please fill out this field</p>
                  ) : (
                    ""
                  )}
                </div>

                

                <div >
                  {message && (submitcount > 0) ? (
                    <p className="worningmsg-contact">{message}</p>
                  ) : (
                    ""
                  )}
                </div>


              <textarea  onChange={(e) => onValueChange(e)} value={info} name="info" type="text" placeholder="Message"></textarea>


              <div >
                  {!info & (submitcount > 0) ? (
                    <p className="worningmsg-contact">Please fill out this field</p>
                  ) : (
                    ""
                  )}
                </div>

              <input  onClick={hundleSubmit} type="submit" value="Send Message" />
            </div>
            <div style={{marginTop:"13px"}} class="col-lg-6 text-center" data-aos="fade-left">
              <p>
                <img src="assets/img/contact-img.png" alt="" />
              </p>
              <ul style={{ textAlign: "left"}}>
                <div style={{ top:"-10px", position: "relative" }} class="d-flex flex-row">
                  <div style={{ top:"-10px", position: "relative" }} >
                   <li><i class="fa-solid fa-location-dot"></i></li> 
                  </div>
                  <div>
                    <li style={{ marginLeft: "10px" ,marginTop: "10px",textAlign: "justify",wordSpacing:"-5px"}} >
                      {" "}
                      Park Tower Shinkawasaki, 1-1-5 Kashimada, Saiwai Ward,
                      Kawasaki City, Kanagawa Prefecture, Japan 212-0058
                    </li>
                  </div>
                </div>

                <li style={{ marginTop: "-15px",textAlign:"center"}} >
                  <i class="fa-solid fa-phone"></i>{" "}
                  <a href="#">+00 1234567890</a>
                </li>
                <li style={{ marginTop: "-10px",textAlign:"center"}}  >
                  <i class="fa-solid fa-envelope"></i>{" "}
                  <a href="mailto:info@morphfitness@gmail.com">
                    info@morphfitness@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="map-section" data-aos="fade-up">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3246.1227529008725!2d139.67148221504522!3d35.55067044472913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60185fc6fbbabd53%3A0x4ecb4588dc553da7!2zSmFwYW4sIOOAkjIxMi0wMDU4IEthbmFnYXdhLCBLYXdhc2FraSwgU2Fpd2FpIFdhcmQsIEthc2hpbWFkYSwgMS1jaMWNbWXiiJIxLCDjg5Hjg7zjgq_jgr_jg6_jg7zmlrDlt53ltI4!5e0!3m2!1sen!2sin!4v1669095572959!5m2!1sen!2sin"
          width="100%"
          height="620"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
      <Footer />
    </body>
  );
};

export default ContectUs;
