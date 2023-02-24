import React from "react";
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
import axios from "axios";
import { convert } from "html-to-text";
import parse from "html-react-parser";

AOS.init();

const AboutUs = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    loop: true,
    responsiveClass: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    margin: 15,
    nav: false,
    navText: ["", ""],
    loop: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
      1170: {
        items: 3,
      },
    },
  };

  const [open, setOpen] = useState(false);
  const [addSectionOpen, setaddSectionOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [totalPage, setTotalPage] = useState(1);
  const [page, setPage] = useState(1);
  const [editOpen, setEditOpen] = useState(false);
  const [value, setValue] = useState("");
  const [pageName, setPageName] = useState("");
  const [slug, setSlug] = useState("");
  const [section, setSection] = useState("");
  const [contentId, setContentId] = useState("");
  const [sectionName, setSectionName] = useState([]);

  const [headerClassName, setHeaderClassName] = useState("");
  const [allContent, setAllContent] = useState([]);
  const [aboutUs, setAboutUS] = useState([]);

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

  //for display data on page load
  useEffect(() => {
    getEditor();
  }, [page]);

  const getEditor = async () => {
    const data = await axios.get("/api/v1/allEditor/editor");
    // console.log(data,"data");
    // console.log(data.data.data[0].sections);
    setSectionName(data.data.data[0]?.sections);
    setAllContent(data.data.data);
  };

  useEffect(() => {
    getEditor();
  }, []);

  useEffect(() => {
    setAboutUS(allContent.filter((e) => e.pagename === "about-us"));
  }, [allContent]);

  console.log(allContent, "allcontent about-us");

  return (
    <div id="top">
      <Header handleScroll={handleScroll} headerClassName={headerClassName} />

      <section class="inner-masthead">
        {" "}
        <img src="assets/img/banner-about.jpg" class="img-overlay" alt="" />
        <img
          src="assets/img/banner-overlay-content-inner.png"
          class="img-overlay"
          alt=""
        />
        <div class="container">
          <div class="inner-masthead__wrap">
            <div class="inner-masthead__wrap-item text-center">
              <h1 data-aos="fade-up"> About Us</h1>
            </div>
          </div>
        </div>
      </section>


      <>
        {aboutUs.map((e) => {
          return parse(e.sections[0].content);
        })}
      </>

      <>
        {aboutUs.map((e) => {
          return parse(e.sections[1].content);
        })}
      </>
   
      <section class="team-section">
        <div class="container">

        <>
        {aboutUs.map((e) => {
          return parse(e.sections[2].content);
        })}
      </>  

 {/* <div  class="text-center" data-aos="fade-up">
        <h2>
             Meet our team 
          </h2>
        </div>
         
         <div   class="ck-moto-h6" data-aos="fade-up">
         <p>
           We love what we do and we do it with passion. We value the
            experimentation of the message and smart incentives.
          </p>
         </div> */}

          <div class="team-members" data-aos="fade-up">
            <div class="team-slider ">
              <OwlCarousel {...settings}>
                 
               <>
        {aboutUs.map((e) => {
          return parse(e.sections[3].content);
        })}
      </>       

      {/* <div class="item">
                  <div class="team-box">
                    <div class="ck-slide-img">
                      <img src="assets/img/team-01.png" alt="" />
                    </div>
                    <div class="clearfix ck-slide-t">
                      <h3>Tim Southee</h3>
                      <p>Lorem ipsum dummy text</p>
                    </div>
                  </div>
                </div>

                <div class="item">
                  <div class="team-box">
                    <div class="ck-slide-img">
                      <img src="assets/img/team-02.png" alt="" />
                    </div>
                    <div class="clearfix ck-slide-t">
                      <h3>Tim Southee</h3>
                      <p>Lorem ipsum dummy text</p>
                    </div>
                  </div>
                </div>

                <div class="item">
                  <div class="team-box">
                    <div class="ck-slide-img">
                      <img src="assets/img/team-03.png" alt="" />
                    </div>
                    <div class="clearfix ck-slide-t">
                      <h3>Tim Southee</h3>
                      <p>Lorem ipsum dummy text</p>
                    </div>
                  </div>
                </div>

                <div class="item">
                  <div class="team-box">
                    <div class="ck-slide-img">
                      <img src="assets/img/team-01.png" alt="" />
                    </div>
                    <div class="clearfix ck-slide-t">
                      <h3>Tim Southee</h3>
                      <p>Lorem ipsum dummy text</p>
                    </div>
                  </div>
                </div>


                <div class="item">
                  <div class="team-box">
                    <div class="ck-slide-img">
                      <img src="assets/img/team-02.png" alt="" />
                    </div>
                    <div class="clearfix ck-slide-t">
                      <h3>Tim Southee</h3>
                      <p>Lorem ipsum dummy text</p>
                    </div>
                  </div>
                </div>

                <div class="item">
                  <div class="team-box">
                    <div class="ck-slide-img">
                      <img src="assets/img/team-03.png" alt="" />
                    </div>
                    <div class="clearfix ck-slide-t">
                      <h3>Tim Southee</h3>
                      <p>Lorem ipsum dummy text</p>
                    </div>
                  </div>
                </div>

                <div class="item">
                  <div class="team-box">
                    <div class="ck-slide-img">
                      <img src="assets/img/team-01.png" alt="" />
                    </div>
                    <div class="clearfix ck-slide-t">
                      <h3>Tim Southee</h3>
                      <p>Lorem ipsum dummy text</p>
                    </div>
                  </div>
                </div>


                <div class="item">
                  <div class="team-box">
                    <div class="ck-slide-img">
                      <img src="assets/img/team-02.png" alt="" />
                    </div>
                    <div class="clearfix ck-slide-t">
                      <h3>Tim Southee</h3>
                      <p>Lorem ipsum dummy text</p>
                    </div>
                  </div>
                </div>

                <div class="item">
                  <div class="team-box">
                    <div class="ck-slide-img">
                      <img src="assets/img/team-03.png" alt="" />
                    </div>
                    <div class="clearfix ck-slide-t">
                      <h3>Tim Southee</h3>
                      <p>Lorem ipsum dummy text</p>
                    </div>
                  </div>
                </div> */}

                 {/* <div class="item">
                  <div class="team-box">
                    <figure>
                      <img src="assets/img/team-02.png" alt="" />
                    </figure>
                    <section class="clearfix">
                      <h3>Tim Southee</h3>
                      <p>Lorem ipsum dummy text</p>
                    </section>
                  </div>
                </div>
                <div class="item">
                  <div class="team-box">
                    <figure>
                      <img src="assets/img/team-03.png" alt="" />
                    </figure>
                    <section class="clearfix">
                      <h3>Tim Southee</h3>
                      <p>Lorem ipsum dummy text</p>
                    </section>
                  </div>
                </div>


                <div class="item">
                  <div class="team-box">
                    <figure>
                      <img src="assets/img/team-01.png" alt="" />
                    </figure>
                    <section class="clearfix">
                      <h3>Tim Southee</h3>
                      <p>Lorem ipsum dummy text</p>
                    </section>
                  </div>
                </div>
                <div class="item">
                  <div class="team-box">
                    <figure>
                      <img src="assets/img/team-02.png" alt="" />
                    </figure>
                    <section class="clearfix">
                      <h3>Tim Southee</h3>
                      <p>Lorem ipsum dummy text</p>
                    </section>
                  </div>
                </div>
                <div class="item">
                  <div class="team-box">
                    <figure>
                      <img src="assets/img/team-03.png" alt="" />
                    </figure>
                    <section class="clearfix">
                      <h3>Tim Southee</h3>
                      <p>Lorem ipsum dummy text</p>
                    </section>
                  </div>
                </div>
                
                <div class="item">
                  <div class="team-box">
                    <figure>
                      <img src="assets/img/team-01.png" alt="" />
                    </figure>
                    <section class="clearfix">
                      <h3>Tim Southee</h3>
                      <p>Lorem ipsum dummy text</p>
                    </section>
                  </div>
                </div>
                <div class="item">
                  <div class="team-box">
                    <figure>
                      <img src="assets/img/team-02.png" alt="" />
                    </figure>
                    <section class="clearfix">
                      <h3>Tim Southee</h3>
                      <p>Lorem ipsum dummy text</p>
                    </section>
                  </div>
                </div>
                <div class="item">
                  <div class="team-box">
                    <figure>
                      <img src="assets/img/team-03.png" alt="" />
                    </figure>
                    <section class="clearfix">
                      <h3>Tim Southee</h3>
                      <p>Lorem ipsum dummy text</p>
                    </section>
                  </div>
                </div> */}
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>

      {/* <>
        {allContent[2]?.sections.map((e) => {
          return parse(e.content);
        })}
      </> */}

  {/* {allContent[2]?.sections.map((e) => {
          return parse(e.content);
        })} */}

    {/* <section class="about-section">
        <div class="container">
          <div class="section-01 clearfix">
            <div class="row">
              <div class="col-md-5" data-aos="fade-right">
                <img src="assets/img/about-img-01.png" alt="" />
              </div>
              <div
                style={{ textAlign: "left" }}
                class="col-md-7"
                data-aos="fade-left"
              >
                <aside>
                  <h2>Morph is on-demand private fitness spaces</h2>
                  <p>
                    Lorem ipsum dolor sit amet, adipiscing elit. Ut ultricies
                    pulvinar donec risus orci. In magnis orci, imperdiet
                    ultricies Lorem ipsum dolor sit amet, Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit.
                  </p>
                  <ul>
                    <li>Men Fitness And Workout</li>
                    <li>Women Fitness And Workout</li>
                    <li>Personal Trainings</li>
                  </ul>
                </aside>
              </div>
            </div>
          </div>
          <div style={{ textAlign: "left" }} class="section-02 clearfix">
            <div class="row">
              <div class="col-md-3 col-6" data-aos="fade-up">
                <h3>10k+</h3>
                <p>Satisfied Clients</p>
              </div>
              <div class="col-md-3 col-6" data-aos="fade-up">
                <h3>310+</h3>
                <p>Best Equipments</p>
              </div>
              <div class="col-md-3 col-6" data-aos="fade-up">
                <h3>100k+</h3>
                <p>Fitness Trainers</p>
              </div>
              <div class="col-md-3 col-6" data-aos="fade-up">
                <h3>30k+</h3>
                <p>Years Of Experienced</p>
              </div>
            </div>
          </div>
          <div class="section-03 clearfix">
            <h2 class="text-center" data-aos="fade-down">
              Join the morph community
            </h2>
            <div style={{ textAlign: "left" }} class="row mt-4">
              <div class="col-md-4" data-aos="fade-left">
                <img src="assets/img/icon-gym-users.png" alt="" />
                <h3 >Gym Users</h3>                
                <p>
                  Lorem ipsum dolor sit amet, adipiscing elit. Ut ultricies
                  pulvinar donec risus orci. In magnis orci, imperdiet ultricies
                  Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </p>
              </div>
              <div class="col-md-4" data-aos="fade-up">
                <img src="assets/img/icon-trainers.png" alt="" />
                <h3>Trainers</h3>
                <p>
                  Lorem ipsum dolor sit amet, adipiscing elit. Ut ultricies
                  pulvinar donec risus orci. In magnis orci, imperdiet ultricies
                  Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </p>
              </div>
              <div class="col-md-4" data-aos="fade-right">
                <img src="assets/img/icon-gym-owners.png" alt="" />
                <h3>Gym Owners</h3>
                <p>
                  Lorem ipsum dolor sit amet, adipiscing elit. Ut ultricies
                  pulvinar donec risus orci. In magnis orci, imperdiet ultricies
                  Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>  */}

      {/* <section class="moto-section">
        <div class="container">

        <div  class="text-center" data-aos="fade-up">
        <h2>
            Our Moto 
          </h2>
        </div>
         

         <div   class="ck-moto-h6" data-aos="fade-up">
         <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mollis
            mauris scelerisque dignissim.
          </p>
         </div>
          
          <div class="row mt-3">
            <div class="col-md-6" data-aos="fade-right">
              <div class="img-left">
                <img src="assets/img/about-img-02.png" alt="" />
              </div>
            </div>
            <div
              style={{ textAlign: "left" }}
              class="col-md-6"
              data-aos="fade-left"
            >
              <div class="article">
                <h3>Mision</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vulputate lacus, ipsum ut purus bibendum. Ultricies
                  pellentesque sit cursus ultrices. Nulla amet eros, viverra
                  commodo vel. Facilisi molestie convallis nibh dictumst ac
                  mattis. Amet in sollicitudin mollis nunc. Pharetra fermentum
                  at euismod non commodo. Elementum sem euismod tortor nulla
                  gravida non ut eleifend in. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Vulputate lacus, ipsum ut purus
                  bibendum. Ultricies pellentesque sit cursus ultrices. Nulla
                  amet eros, viverra commodo vel. Facilisi molestie convallis
                  nibh dictumst ac mattis. Amet in sollicitudin mollis nunc.
                  Pharetra fermentum at euismod non commodo. Elementum sem
                  euismod tortor nulla gravida non ut eleifend in. ipsum ut
                  purus bibendum. Ultricies pellentesque sit cursus ultrices.
                  Nulla amet eros, viverra commodo vel.
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 order-md-2" data-aos="fade-right">
              <div class="img-right">
                <img src="assets/img/about-img-03.png" alt="" />
              </div>
            </div>
            <div
              style={{ textAlign: "left" }}
              class="col-md-6"
              data-aos="fade-left"
            >
              <div class="article">
                <h3>Values</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vulputate lacus, ipsum ut purus bibendum. Ultricies
                  pellentesque sit cursus ultrices. Nulla amet eros, viverra
                  commodo vel. Facilisi molestie convallis nibh dictumst ac
                  mattis. Amet in sollicitudin mollis nunc. Pharetra fermentum
                  at euismod non commodo. Elementum sem euismod tortor nulla
                  gravida non ut eleifend in. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Vulputate lacus, ipsum ut purus
                  bibendum. Ultricies pellentesque sit cursus ultrices. Nulla
                  amet eros, viverra commodo vel. Facilisi molestie convallis
                  nibh dictumst ac mattis. Amet in sollicitudin mollis nunc.
                  Pharetra fermentum at euismod non commodo. Elementum sem
                  euismod tortor nulla gravida non ut eleifend in. ipsum ut
                  purus bibendum. Ultricies pellentesque sit cursus ultrices.
                  Nulla amet eros, viverra commodo vel.
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6" data-aos="fade-right">
              <div class="img-left">
                <img src="assets/img/about-img-04.png" alt="" />
              </div>
            </div>
            <div
              style={{ textAlign: "left" }}
              class="col-md-6"
              data-aos="fade-left"
            >
              <div class="article">
                <h3>Origin</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vulputate lacus, ipsum ut purus bibendum. Ultricies
                  pellentesque sit cursus ultrices. Nulla amet eros, viverra
                  commodo vel. Facilisi molestie convallis nibh dictumst ac
                  mattis. Amet in sollicitudin mollis nunc. Pharetra fermentum
                  at euismod non commodo. Elementum sem euismod tortor nulla
                  gravida non ut eleifend in. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Vulputate lacus, ipsum ut purus
                  bibendum. Ultricies pellentesque sit cursus ultrices. Nulla
                  amet eros, viverra commodo vel. Facilisi molestie convallis
                  nibh dictumst ac mattis. Amet in sollicitudin mollis nunc.
                  Pharetra fermentum at euismod non commodo. Elementum sem
                  euismod tortor nulla gravida non ut eleifend in. ipsum ut
                  purus bibendum. Ultricies pellentesque sit cursus ultrices.
                  Nulla amet eros, viverra commodo vel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}


      

      <Footer />
    </div>
  );
};

export default AboutUs;
