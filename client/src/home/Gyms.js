import React from 'react'
import Footer from "../home/Footer";
import Header from "../home/Header";
import { useEffect, useState } from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import AOS from "aos";
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Slider from "react-slick";

const style = {
   position: "absolute",
   top: "50%",
   left: "50%",
   transform: "translate(-50%, -50%)",
   width: "100%",
   maxWidth: "1000px",
   // bgcolor: "background.paper",
   // border: "2px solid #000",
   // borderRadius: 5,
   // boxShadow: 24,
   // p: 4,
 };

const options  = {
   slidesToShow: 1,
   slidesToScroll: 1,
   // autoplay: true,
   autoplaySpeed: 2000,
   responsive: [
     {
       breakpoint: 767,
       settings: {
         arrows: false,
       }
     }
   ]
   
 }


const Gyms = () => {

 // for view for star
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

   const [modelname, setModelname] = useState("");

   const [headerClassName, setHeaderClassName] = useState("");

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


  return (

    <div id="top" >
   

   <Header handleScroll={handleScroll} headerClassName={headerClassName} />

      <section class="masthead">
         <img src="assets/img/banner-gyms.jpg" class="img-overlay" alt=""/>
         <div class="masthead__wrap-slider">
            <div class="masthead__wrap masthead-slider">
               <Slider {...options} >
               
               <div class="masthead__wrap-item text-center">
                  <h1>Gym Name / Location / Promotion Banner</h1>
               </div>
               <div class="masthead__wrap-item text-center">
                  <h1>Gym Name / Location</h1>
               </div>

          </Slider>
          
            </div>
         </div>
      </section>

      <section class="product-item contact-section ">

         <div class="container">
            <div class="product-filter">
               <div class="row">
                  <div class="col-md-10">
                     <div class="product-filter-left">
                        <div class="product-from-col">
                           <select>
                              <option>Select prefecture</option>
                           </select>
                        </div>
                        <div class="product-from-col">
                           <select>
                              <option>Select city</option>
                           </select>
                        </div>
                        <div class="product-from-col">
                           <select>
                              <option>Select closest metro</option>
                           </select>
                        </div>
                        <div class="product-from-col product-from-search">
                           <input type="text" placeholder="Your preferred location"/>
                           <button type="submit" class="search-btn">
                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path fill-rule="evenodd" clip-rule="evenodd" d="M1.60002 7.20008C1.60002 4.10725 4.10725 1.60002 7.20008 1.60002C10.2929 1.60002 12.8001 4.10725 12.8001 7.20008C12.8001 8.70826 12.2039 10.0772 11.2344 11.084C11.2065 11.1054 11.1797 11.1288 11.1543 11.1543C11.1288 11.1797 11.1054 11.2065 11.084 11.2344C10.0772 12.2039 8.70826 12.8001 7.20008 12.8001C4.10725 12.8001 1.60002 10.2929 1.60002 7.20008ZM11.6943 12.8257C10.4625 13.811 8.90011 14.4002 7.20008 14.4002C3.22358 14.4002 0 11.1766 0 7.20008C0 3.22358 3.22358 0 7.20008 0C11.1766 0 14.4002 3.22358 14.4002 7.20008C14.4002 8.90011 13.811 10.4625 12.8257 11.6943L15.7657 14.6343C16.0781 14.9467 16.0781 15.4533 15.7657 15.7657C15.4533 16.0781 14.9467 16.0781 14.6343 15.7657L11.6943 12.8257Z" fill="#554B4E"/>
                              </svg>
                           </button>
                        </div>
                     </div>
                  </div>
                  <div class="col-md-2">
                     <div class="product-filter-right">
                        <div class="dropdown-container">
                           <div class="dropdown-toggles click-dropdown"><img src="assets/img/filter.png" alt=""/> Filter</div>
                           <div class="dropdown-menu">
                              <div class="check_box_area">
                                 <input type="checkbox" id="position1" name="check-group"/>
                                 <label for="position1">Pricing</label>
                              </div>
                              <div class="check_box_area">
                                 <input type="checkbox" id="position2" name="check-group" checked/>
                                 <label for="position2">Distance</label>
                              </div>
                              <div class="check_box_area">
                                 <input type="checkbox" id="position3" name="check-group"/>
                                 <label for="position3">Rating</label>
                              </div>
                           </div>
                        </div>
                        <div class="dropdown-container">
                           <div class="dropdown-toggles click-dropdown"><img src="assets/img/short-by.png" alt=""/> Sort by</div>
                           <div class="dropdown-menu">
                              <div class="check_box_area">
                                 <input type="checkbox" id="position4" name="check-group"/>
                                 <label for="position4">Gym equipment</label>
                              </div>
                              <div class="check_box_area">
                                 <input type="checkbox" id="position5" name="check-group" checked/>
                                 <label for="position5">Gym facilities</label>
                              </div>
                              <div class="check_box_area">
                                 <input type="checkbox" id="position6" name="check-group"/>
                                 <label for="position6">Women’s only</label>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div class="product-item">
               <div class="product-flex">
                  <a  onClick={(e) => (handleOpen(), setModelname("2"))} class="product-item-link" data-bs-toggle="modal" data-bs-target="#exampleModal">
                     <div class="product-item-image">
                        <img src="assets/img/product-item-image.png" class="object-fit" alt=""/>
                     </div>
                     <div class="product-item-content">
                        <span>2420 NE Miami Gardens Dr </span>
                        <h3>TOKYO</h3>
                        <p>25 Trainers</p>
                     </div>
                  </a>
                  <a  onClick={(e) => (handleOpen(), setModelname("2"))}class="product-item-link" data-bs-toggle="modal" data-bs-target="#exampleModal">
                     <div class="product-item-image">
                        <img src="assets/img/product-item-image.png" class="object-fit" alt=""/>
                     </div>
                     <div class="product-item-content">
                        <span>2420 NE Miami Gardens Dr </span>
                        <h3>TOKYO</h3>
                        <p>25 Trainers</p>
                     </div>
                  </a>
                  <a  onClick={(e) => (handleOpen(), setModelname("2"))} class="product-item-link" data-bs-toggle="modal" data-bs-target="#exampleModal">
                     <div class="product-item-image">
                        <img src="assets/img/product-item-image.png" class="object-fit" alt=""/>
                     </div>
                     <div class="product-item-content">
                        <span>2420 NE Miami Gardens Dr </span>
                        <h3>TOKYO</h3>
                        <p>25 Trainers</p>
                     </div>
                  </a>
                  <a  onClick={(e) => (handleOpen(), setModelname("2"))} class="product-item-link" data-bs-toggle="modal" data-bs-target="#exampleModal">
                     <div class="product-item-image">
                        <img src="assets/img/product-item-image.png" class="object-fit" alt=""/>
                     </div>
                     <div class="product-item-content">
                        <span>2420 NE Miami Gardens Dr </span>
                        <h3>TOKYO</h3>
                        <p>25 Trainers</p>
                     </div>
                  </a>
                  <a  onClick={(e) => (handleOpen(), setModelname("2"))} class="product-item-link" data-bs-toggle="modal" data-bs-target="#exampleModal">
                     <div class="product-item-image">
                        <img src="assets/img/product-item-image.png" class="object-fit" alt=""/>
                     </div>
                     <div class="product-item-content">
                        <span>2420 NE Miami Gardens Dr </span>
                        <h3>TOKYO</h3>
                        <p>25 Trainers</p>
                     </div>
                  </a>
                  <a  onClick={(e) => (handleOpen(), setModelname("2"))} class="product-item-link" data-bs-toggle="modal" data-bs-target="#exampleModal">
                     <div class="product-item-image">
                        <img src="assets/img/product-item-image.png" class="object-fit" alt=""/>
                     </div>
                     <div class="product-item-content">
                        <span>2420 NE Miami Gardens Dr </span>
                        <h3>TOKYO</h3>
                        <p>25 Trainers</p>
                     </div>
                  </a>
                  <a  onClick={(e) => (handleOpen(), setModelname("2"))} class="product-item-link" data-bs-toggle="modal" data-bs-target="#exampleModal">
                     <div class="product-item-image">
                        <img src="assets/img/product-item-image.png" class="object-fit" alt=""/>
                     </div>
                     <div class="product-item-content">
                        <span>2420 NE Miami Gardens Dr </span>
                        <h3>TOKYO</h3>
                        <p>25 Trainers</p>
                     </div>
                  </a>
                  <a  onClick={(e) => (handleOpen(), setModelname("2"))} class="product-item-link" data-bs-toggle="modal" data-bs-target="#exampleModal">
                     <div class="product-item-image">
                        <img src="assets/img/product-item-image.png" class="object-fit" alt=""/>
                     </div>
                     <div class="product-item-content">
                        <span>2420 NE Miami Gardens Dr </span>
                        <h3>TOKYO</h3>
                        <p>25 Trainers</p>
                     </div>
                  </a>
                  <a  onClick={(e) => (handleOpen(), setModelname("2"))} class="product-item-link" data-bs-toggle="modal" data-bs-target="#exampleModal">
                     <div class="product-item-image">
                        <img src="assets/img/product-item-image.png" class="object-fit" alt=""/>
                     </div>
                     <div class="product-item-content">
                        <span>2420 NE Miami Gardens Dr </span>
                        <h3>TOKYO</h3>
                        <p>25 Trainers</p>
                     </div>
                  </a>
                  <a onClick={(e) => (handleOpen(), setModelname("2"))} class="product-item-link" data-bs-toggle="modal" data-bs-target="#exampleModal">
                     <div class="product-item-image">
                        <img src="assets/img/product-item-image.png" class="object-fit" alt=""/>
                     </div>
                     <div class="product-item-content">
                        <span>2420 NE Miami Gardens Dr </span>
                        <h3>TOKYO</h3>
                        <p>25 Trainers</p>
                     </div>
                  </a>
                  <a  onClick={(e) => (handleOpen(), setModelname("2"))} class="product-item-link" data-bs-toggle="modal" data-bs-target="#exampleModal">
                     <div class="product-item-image">
                        <img src="assets/img/product-item-image.png" class="object-fit" alt=""/>
                     </div>
                     <div class="product-item-content">
                        <span>2420 NE Miami Gardens Dr </span>
                        <h3>TOKYO</h3>
                        <p>25 Trainers</p>
                     </div>
                  </a>
                  <a  onClick={(e) => (handleOpen(), setModelname("2"))} class="product-item-link" data-bs-toggle="modal" data-bs-target="#exampleModal">
                     <div class="product-item-image">
                        <img src="assets/img/product-item-image.png" class="object-fit" alt=""/>
                     </div>
                     <div class="product-item-content">
                        <span>2420 NE Miami Gardens Dr </span>
                        <h3>TOKYO</h3>
                        <p>25 Trainers</p>
                     </div>
                  </a>
               </div>
            </div>
         </div>
      </section>

  <Footer/>

      {/* <!-- popup -->
      <!-- Modal --> */}


      <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                      
                        sx={{ 
    "& > .MuiBackdrop-root" : {
            backdropFilter: "blur(5px)"
          }
    }}
                      >
                        <Box sx={style}>


      <div class=" product-popup" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="product-img-top">
              <img src="assets/img/product-image-overlay.png" alt="" class="object-fit"/>
                <button type="button"  onClick={() => handleClose()} class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="product-body">
              <div class="product-body-wrapp">
                  <div class="product-demo-img">
                    <img src="assets/img/product-demo-img.png" alt="" class="object-fit"/>
                  </div>
                  <div class="product-demo-content">
                    <h3>Tokio</h3>
                    <ul class="ratting-product">
                      <li><i class="fa-solid fa-star"></i></li>
                      <li><i class="fa-solid fa-star"></i></li>
                      <li><i class="fa-solid fa-star"></i></li>
                      <li><i class="fa-solid fa-star"></i></li>
                      <li><i class="fa-solid fa-star"></i></li>
                    </ul>
                    <ul class="product-description">
                      <li>s2420 NE Miami Gardens Dr</li>
                      <li>650 Operating days</li>
                      <li>514278 Operating hours</li>
                    </ul>
                  </div>
                <div class="product-description-text">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies pulvinar donec risus orci. In magnis orci, imperdiet ultricies Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies pulvinar donec risus orci. </p>
                  <div class="product-description-button">
                    <a href="#">Book Now <i class="fa-solid fa-arrow-rightm"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      </Box>
                      </Modal>

      {/* <!-- popup end --> */}


      <script>
       
       
      </script>
 



    </div>
  )
}

export default Gyms
