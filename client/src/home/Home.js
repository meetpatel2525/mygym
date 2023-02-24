import React from "react";
import noscrolllogo from "./assets/img/no-scroll-logo.png";
import banner from "./assets/img/banner.jpg";
import banneroverlaycontent from "./assets/img/banner-overlay-content.png";
import makemovementhappen from "./assets/img/make-movement-happen-bg.png";
import makemovementrightbg from "./assets/img/make-movement-right-bg.png";
import makerightbox1 from "./assets/img/make-right-box1.png";
import book from "./assets/img/book.png";
import makerightbox2 from "./assets/img/make-right-box2.png";
import makerightbox3 from "./assets/img/make-right-box3.png";
import mapbg from "./assets/img/map-bg.png";
import img01 from "./assets/img/img-01.png";
import img02 from "./assets/img/img-02.png";
import img03 from "./assets/img/img-03.png";
import img04 from "./assets/img/img-04.png";
import img05 from "./assets/img/img-05.png";
import img06 from "./assets/img/img-06.png";
import featuredtrainersbg from "./assets/img/featured-trainers-bg.jpg";
import featuredtrainers1 from "./assets/img/featured-trainers-1.png";
import yellowstara from "./assets/img/yellow-stara.png";
import whitestar from "./assets/img/white-star.png";
import featuredtrainers2 from "./assets/img/featured-trainers-2.png";
import featuredtrainers3 from "./assets/img/featured-trainers-3.png";
import featuredtrainers4 from "./assets/img/featured-trainers-4.png";
import featuredtrainers5 from "./assets/img/featured-trainers-5.png";
import treinerbanber from "./assets/img/trainer-banner.png";
import whatourclientbg from "./assets/img/what-our-client-bg.jpg";
import whatourslider from "./assets/img/what-our-slider.png";
import faquoteleft from "./assets/img/fa_quote-left.png";
import faquoteright from "./assets/img/fa_quote-right.png";
import faqbg from "./assets/img/faq-bg.png";
import trainerbanner02 from "./assets/img/trainer-banner-02.jpg";
import trainerbanner03 from "./assets/img/trainer-banner-03.jpg";

import "owl.carousel/dist/assets/owl.carousel.css";
import AOS from "aos";
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Hidden } from "@mui/material";

// import style  from "./MainSlider.module.scss";

// import "./slick.css";

// ..

AOS.init();

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  maxWidth: "1420px",
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: 5,
  boxShadow: 24,
  pl: 3,
  pr: 2,
};

const options  = {
  loop: true,
  margin: 10,
  dots: false,
  nav: true,

    responsive:{
      0:{
          items:1,
          nav:true
      },
      600:{
          items:2,
          nav:false
      },
      1000:{
          items:3,
          nav:true,
          loop:false
      }
  
  }
}

const style2 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  maxWidth: "800px",
  bgcolor: "background.paper",
  // border: "2px solid #000",
  borderRadius: 5,
  boxShadow: 24,
  // p: 4,
};

const Home = () => {
  // slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // dotsClass: `slick-dots${style.dots}` ,
    arrows: true,
  };

  let location = useLocation();

  const [openmm, setOpenmm] = useState(false);
  const [opensm, setOpensm] = useState(false);

  const [modelname, setModelname] = useState("");

  // for view more for map
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // for view for star
  const [Accesstaropen, setAccesstarOpen] = React.useState(false);
  const handleAccessstarOpen = () => setAccesstarOpen(true);
  const handleCloseAccessstar = () => setAccesstarOpen(false);

  const [openTab, setOpenTab] = useState("");

  const [headerClassName, setHeaderClassName] = useState("");

  const handleScroll = (headerClassName) => {
    if (headerClassName !== "sticky" && window.pageYOffset >= 100) {
      setHeaderClassName("sticky");
    } else if (headerClassName === "sticky" && window.pageYOffset < 100) {
      setHeaderClassName("");
    }
  };

  useEffect(() => {});

  React.useEffect(() => {
    window.onscroll = () => handleScroll(headerClassName);
  }, [headerClassName]); // IMPORTANT, This will cause react to update depending on change of this value

  return (

    <>
      <div id="top">

        <Header handleScroll={handleScroll} headerClassName={headerClassName} />

        <section class="masthead">
          <img src={banner} class="img-overlay" alt="" />
          <img src={banneroverlaycontent} class="img-overlay" alt="" />
          <div class="container">
            <div class="masthead__wrap">
              <div class="text-center masthead__wrap-item">
                <h1
                  data-aos="fade-up"
                  data-text="On-demand private fitness spaces"
                >
                  On-demand private fitness spaces
                </h1>
                <p data-aos="fade-up">
                  Unlock your full potential with Silofit’s network of
                  fully-equipped modern spaces created for coaches and
                  gym-goers. Download the Silofit app to get started.
                </p>
                <Link
                  data-aos="fade-up"
                  to="/select-user"
                  class="btn btn-primary"
                >
                  Join Us
                </Link>{" "}
              </div>
            </div>
          </div>
        </section>

        <section class="make-movement-happen--item">
          <img src={makemovementhappen} class="img-overlay" alt="" />
          <div class="container">
            <div class="make-movement-happen--wrapper">
              <div
                style={{ textAlign: "left", textAlign: "justify" }}
                class="make-movement-left-box"
                data-aos="fade-right"
              >
                <h2>Make movement happen</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  ultricies pulvinar donec risus orci. In magnis orci, imperdiet
                  ultricies Lorem ipsum dolor sit amet, Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Ut ultricies pulvinar donec
                  risus orci. In magnis orci, imperdiet ultricies Lorem ipsum
                  dolor sit
                </p>
              </div>
              <div class="make-movement-right-box">
                <img src={makemovementrightbg} class="img-overlay" alt="" />

                {/* <!--  --> */}
                <div class="make-movement-right-flex">
                  <div class="single-right-div-left">
                    <div
                      class="make-movement-right-flex-col"
                      data-aos="fade-down"
                    >
                      <img src={makerightbox1} alt="" />
                      <div class="make-movement-right-flex-content">
                        <div class="make-movement-right-flex-content-left">
                          <p>01</p>
                          <span>
                            <img src={book} alt="" />
                          </span>{" "}
                        </div>
                        <div
                          style={{ textAlign: "justify" }}
                          class="make-movement-right-flex-content-right"
                        >
                          <h3>Book</h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            Lorem ipsum dolor sit amet, conectr.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      class="make-movement-right-flex-col"
                      data-aos="fade-up"
                    >
                      <img src={makerightbox2} alt="" />
                      <div class="make-movement-right-flex-content">
                        <div class="make-movement-right-flex-content-left">
                          <p>03</p>
                          <span>
                            <img src={book} alt="" />
                          </span>{" "}
                        </div>
                        <div
                          style={{ textAlign: "left", textAlign: "justify" }}
                          class="make-movement-right-flex-content-right"
                        >
                          <h3>Book</h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            Lorem ipsum dolor sit amet, conectr.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="single-right-div" data-aos="fade-left">
                    <div class="make-movement-right-flex-col">
                      <img src={makerightbox3} alt="" />
                      <div class="make-movement-right-flex-content">
                        <div class="make-movement-right-flex-content-left">
                          <p>02</p>
                          <span>
                            <img src={book} alt="" />
                          </span>
                        </div>
                        <div
                          style={{ textAlign: "left", textAlign: "justify" }}
                          class="make-movement-right-flex-content-right"
                        >
                          <h3>Book</h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            Lorem ipsum dolor sit amet, conectr.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!--  -->  */}
              </div>
            </div>
          </div>
        </section>

        <section class="location-section">
          <img src={mapbg} class="img-overlay" alt="" />
          <div class="container">
            <div class="row">
              <div class="col-lg-4" data-aos="fade-right">
                <div
                  style={{ textAlign: "left", textAlign: "justify" }}
                  class="location-section-left-box"
                >
                  <h2>We are located in these cities</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    ultricies pulvinar donec risus orci. In magnis orci,
                    imperdiet ultricies Lorem ipsum dolor sit amet, Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit. Ut ultricies
                    pulvinar donec risus orci.
                  </p>
                </div>
              </div>
              <div class="col-lg-8">
                <div class="location-section-right-box">
                  <div class="info-box">
                    <h2>
                      158 <span>Gyms</span>
                    </h2>
                    <h2>
                      60 <span>Cities</span>
                    </h2>
                  </div>

                  <div class="map-box">
                    <div class="point01">
                      <a
                        style={{ fontWeight: "bold", cursor: "pointer" }}
                        onClick={(e) => handleOpen()}
                      >
                        3
                      </a>
                    </div>
                    <div class="point02">
                      <a
                        style={{ fontWeight: "bold", cursor: "pointer" }}
                        onClick={(e) => handleOpen()}
                      >
                        24
                      </a>
                    </div>
                    <div class="point03">
                      <a
                        style={{ fontWeight: "bold", cursor: "pointer" }}
                        onClick={(e) => handleOpen()}
                      >
                        569
                      </a>
                    </div>
                    <div class="point04">
                      <a
                        style={{ fontWeight: "bold", cursor: "pointer" }}
                        onClick={(e) => handleOpen()}
                      >
                        187
                      </a>
                    </div>

                    {/* remodal remodal-map   remodal-is-initialized remodal-is-opened */}

                    {/* remodal remodal-map remodal-is-initialized remodal-is-closed */}

                    {/* <div
                    class={location == "/home/#modal101" ? "remodal remodal-map   remodal-is-initialized remodal-is-opened" : "remodal remodal-map "}
                      class="remodal remodal-map "
                      data-remodal-id="modal101"
                      role="dialog"
                      aria-labelledby="modal1Title"
                      aria-describedby="modal1Desc"
                    > */}

                    <div
                    // class="remodal remodal-map "
                    // data-remodal-id="modal101"
                    // role="dialog"
                    // aria-labelledby="modal1Title"
                    // aria-describedby="modal1Desc"
                    >
                      <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                      >
                        <Box sx={style}>
                          <button
                            onClick={() => handleClose()}
                            // data-remodal-action="close"
                            class="remodal-close"
                            // aria-label="Close"
                          ></button>

                          <div
                            style={{ padding: "40px 50px" }}
                            class="clearfix"
                          >
                            <h4
                              style={{
                                fontSize: "30px",

                                padding: "0px 0px 30px 0px",
                                textAlign: "center",
                              }}
                            >
                              Heading would be here
                            </h4>
                            <div>
                              <div class="map-slider owl-carousel owl-loaded owl-drag">
                                <OwlCarousel {...options} loop margin={10} nav>
                                  <div
                                    style={{ paddingRight: "4px" }}
                                    class="item"
                                  >
                                    <figure>
                                      <img src={img01} alt="" />
                                    </figure>
                                    <article>
                                      <h6>2420 NE Miami Gardens Dr </h6>
                                      <h4>TOKYO</h4>
                                      <p>25 Trainers</p>
                                    </article>
                                  </div>

                                  <div
                                    style={{ paddingRight: "4px" }}
                                    class="item"
                                  >
                                    <figure>
                                      <img src={img02} alt="" />
                                    </figure>
                                    <article>
                                      <h6>2420 NE Miami Gardens Dr </h6>
                                      <h4>TOKYO</h4>
                                      <p>25 Trainers</p>
                                    </article>
                                  </div>

                                  <div
                                    style={{ paddingRight: "4px" }}
                                    class="item"
                                  >
                                    <figure>
                                      <img src={img03} alt="" />
                                    </figure>
                                    <article>
                                      <h6> </h6>
                                      <h4
                                        style={{
                                          textAlign: "center",
                                          padding: "30px",
                                        }}
                                      >
                                        {" "}
                                        COMING SOON
                                      </h4>
                                      <p> </p>
                                    </article>
                                  </div>

                                  <div
                                    style={{ paddingRight: "4px" }}
                                    class="item"
                                  >
                                    <figure>
                                      <img src={img04} alt="" />
                                    </figure>
                                    <article>
                                      <h6>2420 NE Miami Gardens Dr </h6>
                                      <h4>TOKYO</h4>
                                      <p>25 Trainers</p>
                                    </article>
                                  </div>

                                  <div
                                    style={{ paddingRight: "4px" }}
                                    class="item"
                                  >
                                    <figure>
                                      <img src={img05} alt="" />
                                    </figure>
                                    <article>
                                      <h6>2420 NE Miami Gardens Dr </h6>
                                      <h4>TOKYO</h4>
                                      <p>25 Trainers</p>
                                    </article>
                                  </div>

                                  <div class="item">
                                    <figure>
                                      <img src={img06} alt="" />
                                    </figure>
                                    <article>
                                      <h6>2420 NE Miami Gardens Dr </h6>
                                      <h4>TOKYO</h4>
                                      <p>25 Trainers</p>
                                    </article>
                                  </div>
                                </OwlCarousel>

                                <div class="owl-nav">
                                  <div class="owl-prev"></div>
                                  <div class="owl-next"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Box>
                      </Modal>
                    </div>

                    <svg
                      width="620"
                      height="805"
                      viewBox="0 0 620 805"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g filter="url(#filter0_d_407_2271)">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M440.033 33.4917C440.25 28.7832 446.206 29.3328 448.755 32.2133L461.689 46.801C463.194 48.4982 465.005 49.7552 466.576 51.6134C468.721 54.1497 470.512 56.0808 472.291 57.3282C475.127 59.3165 477.872 62.1291 480.562 64.9979C482.663 67.2373 484.431 69.7735 486.804 70.7127C487.952 71.1673 489.065 71.873 490.187 72.9685C490.9 73.6644 491.573 74.3838 492.819 75.1491C494.023 75.8888 493.931 76.0184 495.3 77.1793C497.492 79.0367 500.931 81.6343 503.421 81.7662C506.311 81.9191 509.172 84.335 511.618 86.1274C515.386 88.8894 519.691 90.1312 523.724 90.4887C528.632 90.9237 536.619 91.6889 539.214 92.0677C543.992 92.7655 549.442 92.8101 550.718 91.391C552.618 89.2792 554.92 88.9737 556.057 87.6313C557.692 85.7022 558.986 84.6759 559.29 83.0445C559.866 79.9658 561.465 77.5934 564.404 74.9235C570.238 69.6229 569.587 68.8439 569.291 75.7507C569.187 78.1776 568.71 80.5765 567.261 82.2173C565.794 83.8794 565.176 85.3884 564.479 86.1274C562.741 87.9704 562.792 93.6065 563.201 96.5794C563.469 98.5293 564.384 101.049 564.479 102.069C564.598 103.342 565.112 104.699 566.058 105.753C567.092 106.905 567.621 107.736 568.088 108.686C568.521 109.566 568.924 110.521 569.742 111.393C571.098 112.837 571.589 114.543 572.525 115.98C575.239 120.147 578.197 121.62 582.225 119.965C596.852 113.952 586.325 119.421 584.781 122.145C582.734 125.758 580.978 128.794 576.51 130.266C573.401 131.291 570.28 132.961 568.013 135.68C565.527 138.662 563.399 140.523 560.87 137.41C556.656 132.222 554.338 137.931 556.584 140.643C559.661 144.359 558.841 143.809 555.681 143.952C553.719 144.041 551.417 144.18 549.215 143.35C545.169 141.826 541.381 139.932 537.409 143.425C536.382 144.329 536.374 145.049 534.176 146.809C530.127 150.052 527.352 153.306 524.551 156.735C523.465 158.064 522.865 159.753 521.694 160.494C519.776 161.708 519.094 163.161 518.535 164.78C517.772 166.992 516.266 168.115 515.528 169.367C513.185 173.341 513.091 177.742 512.896 183.353L512.595 192.001C512.373 198.382 512.619 198.306 507.632 195.384C505.157 193.934 502.661 193.236 498.308 192.377C494.685 191.661 490.974 191.347 487.555 189.82C486.716 189.445 485.924 188.465 484.548 188.166C483.133 187.858 482.158 187.027 480.788 185.835C480.028 185.173 479.272 184.342 478.156 183.88C476.249 183.089 475.969 182.523 475.148 181.774C473.504 180.273 471.997 178.482 469.509 177.187C467.324 176.051 465.881 175.094 464.32 173.804C462.913 172.64 461.312 172.129 458.681 172.074C454.782 171.993 451.111 171.698 447.552 172.751C446.544 173.049 444.657 173.328 442.965 173.729C439.053 174.655 439.059 175.492 437.927 176.811L429.806 186.286C426.739 189.865 427.119 189.171 425.896 186.06C424.872 183.454 424.259 181.918 422.964 180.195C421.627 178.417 420.129 176.808 416.272 176.887C415.049 176.911 413.602 177.238 411.835 177.488C410.787 177.636 409.868 177.674 408.451 178.842C407.616 179.53 407.245 179.757 406.421 180.421C403.46 182.804 404.059 185.589 404.165 188.241L404.316 192.001C405.841 195.816 409.696 197.295 412.737 197.941C414.688 198.355 418.771 198.399 421.31 198.091C423.437 197.833 424.523 198.576 424.393 200.798L424.242 203.355C424.161 204.728 425.341 204.926 426.272 205.31C429.692 206.72 432.688 208.033 435.22 208.543C439.061 209.317 438.602 210.789 437.025 212.679C435.692 214.276 434.45 215.267 433.491 216.514C431.904 218.576 430.217 218.708 428.303 218.093C427.255 217.756 426.176 217.625 424.543 217.416C423.051 217.226 421.9 216.394 420.858 215.01C419.167 212.763 418.04 213.598 417.249 214.484C415.485 216.459 413.599 218.462 412.361 220.65C411.565 222.057 410.878 222.958 411.384 226.364C411.723 228.648 411.259 230.408 410.858 232.079C410.577 233.244 409.612 234.014 408.978 234.861C407.628 236.663 406.223 236.663 404.541 235.463C403.699 234.861 402.552 234.964 401.308 234.56C398.676 233.706 397.563 231.556 396.42 229.748C395.257 227.907 394.887 222.199 397.398 220.274L399.654 218.544C401.137 217.49 401.375 216.681 401.458 214.784L400.857 210.047C400.655 208.462 399.889 207.473 397.473 205.385C396.675 204.695 396.255 203.461 395.217 202.829C393.684 201.894 392.101 201.001 390.781 199.67C390.046 198.93 389.077 198.135 387.773 197.565C385.255 196.466 385.381 195.233 385.216 193.053V185.008C385.216 183.499 385.131 181.924 386.194 180.646C386.859 179.846 386.802 178.512 387.773 177.263C389.31 175.285 389.949 174.27 390.856 173.804C392.221 173.102 393.172 172.819 393.939 172.149C395.092 171.142 395.869 170.812 396.42 170.57C398.012 169.872 399.022 168.938 399.729 168.315C401.948 166.359 403.862 164.434 405.444 162.449C407.686 159.636 408.839 155.132 406.045 153.05C404.104 151.604 402.903 150.069 402.436 148.238C401.999 146.524 401.219 144.666 403.94 142.222C406.183 140.207 411.98 139.91 415.068 141.395C416.841 142.247 415.69 144.667 420.558 144.177C423.704 143.861 427.19 144.126 429.731 144.027C435.045 143.82 437.426 140.182 438.153 136.808L438.379 125.755C438.414 123.991 438.686 122.662 437.326 122.597C433.75 122.423 436.611 117.01 437.476 116.28C438.987 115.005 439.575 114.336 440.409 113.799C441.673 112.984 443.022 111.453 442.965 108.986L442.74 99.1361C442.698 97.3208 442.572 96.3409 441.462 95.9027C439.518 95.1358 440.381 93.6793 441.612 92.8948C443.032 91.9896 442.795 91.0275 442.815 89.9623L443.041 78.232C443.072 76.5761 443.33 75.0983 444.394 73.7956C445.261 72.7349 445.345 70.532 444.77 68.8328C444.43 67.8262 443.824 66.815 443.642 65.5994C443.457 64.3638 442.444 62.8407 440.258 60.7871C438.385 59.0265 436.71 57.1863 436.574 55.8243C436.463 54.7157 435.047 54.0602 434.393 52.9669C432.485 49.7768 433.315 45.5258 434.995 43.342L437.927 41.0862C439.478 39.8933 439.943 39.7565 439.958 38.7552L440.033 33.4916L440.033 33.4917Z"
                          fill="url(#paint0_linear_407_2271)"
                        />
                      </g>
                      <g filter="url(#filter1_d_407_2271)">
                        <path
                          d="M430.785 236.516C430.359 231.817 436.033 230.427 438.154 233.207C440.803 236.68 444.433 236.457 446.425 235.012C449.134 233.047 451.001 232.557 451.012 236.516C451.022 239.87 451.223 241.098 451.313 242.23C451.439 243.815 451.291 245.551 451.839 247.043C452.282 248.248 453.491 248.401 453.794 252.231C453.94 254.077 453.729 257.605 453.569 259.45C453.316 262.35 453.686 264.108 454.321 265.315C455.015 266.636 455.889 268.584 456.652 269.15C458.698 270.67 460.397 273.028 461.614 274.714C462.908 276.504 464.371 278.207 465.675 279.376C468.546 281.951 470.87 285.382 472.593 288.099C474.969 291.847 476.708 296.379 481.014 300.355C483.548 302.695 485.817 308.407 487.331 313.514C488.522 317.534 490.182 321.735 487.782 328.553C487.27 330.008 487.068 332.191 487.03 332.914C486.851 336.36 485.737 339.883 485.376 342.088C485.148 343.477 482.256 347.878 481.014 348.855C476.454 352.446 473.116 362.857 476.202 371.113C476.887 372.946 477.931 375.722 479.21 377.204C481.034 379.317 480.728 382.387 477.856 381.715C477.046 381.526 476.235 381.426 475.6 380.888C474.353 379.83 470.93 379.469 468.758 380.662C466.516 381.895 463.295 384.741 461.013 386.828C459.513 388.201 458.366 390.978 458.456 392.769C458.623 396.068 458.925 399.603 459.359 402.694C459.702 405.144 460.992 408.14 462.517 410.063C464.924 413.101 466.845 418.073 467.931 421.794C468.492 423.717 468.533 426.477 469.059 428.411C469.524 430.124 470.296 432.479 470.337 434.426C470.387 436.804 470.28 439.839 470.187 441.795C470.049 444.693 469.249 448.042 467.931 449.615C464.742 453.422 465.172 455.329 464.622 456.984C460.082 453.885 454.666 453.773 452.727 457.56C451.438 460.079 450.383 462.673 445.051 457.869C442.222 455.321 439.536 452.823 437.013 450.055C429.327 441.624 423.66 449.629 419.144 454.833C417.706 456.49 415.51 457.646 413.603 458.985C410.638 461.066 407.001 460.649 402.883 459.474C402.331 456.55 401.793 453.711 399.169 451.418C397.333 449.814 396.373 448.006 396.362 441.64C396.352 438.365 396.646 435.751 401.881 435.184C404.042 434.95 410.954 432.748 410.132 425.578C409.755 422.293 410.555 420.88 414.007 415.955C410.803 414.183 408.169 410.217 408.554 406.712C408.82 404.294 408.566 402.473 412.359 399.613C417.635 395.633 415.277 392.799 408.942 388.062C406.699 386.385 403.399 384.951 401.212 382.384C401.6 381.327 401.787 380.561 401.76 379.76C401.665 376.908 403.113 374.183 405.068 371.564C407.234 368.664 409.772 361.441 409.58 359.307C409.262 355.762 409.091 352.619 410.633 350.51C411.66 349.104 412.157 346.682 412.287 344.945C412.53 341.69 412.287 333.712 412.287 329.756C412.287 328.126 412.345 325.677 411.084 324.643C409.788 323.581 409.051 321.386 409.129 319.68C409.196 318.192 408.995 316.179 409.279 314.717C409.875 311.656 407.358 308.6 407.249 314.567C407.224 316.012 406.879 316.737 406.497 317.575C403.608 323.916 396.884 320.903 397.098 317.424C397.288 314.32 400.085 311.704 401.76 310.507C403.489 309.271 406.116 305.219 406.272 301.558C406.356 299.575 406.636 296.679 406.572 295.017C406.504 293.232 406.223 291.134 404.392 289.753C403.12 288.794 401.823 287.204 401.309 286.294C400.686 285.194 399.837 283.686 398.903 282.835C395.476 279.717 398.387 277.981 400.406 276.97C401.403 276.471 402.932 276.226 403.865 275.616C408.764 272.418 409.989 269.223 410.858 265.992C411.205 264.701 410.747 254.746 410.783 253.66C410.854 251.582 411.914 246.953 413.791 247.569C415.024 247.974 416.779 247.25 417.701 246.742C421.742 244.517 423.29 248.175 424.318 251.178C424.693 252.274 424.09 256.301 424.318 258.623C424.529 260.766 426.221 262.432 427.476 263.811C428.706 265.161 431.641 266.538 433.191 261.931C434.099 259.233 437.122 256.807 440.711 260.352C442.5 262.12 443.272 262.521 445.523 258.999C446.528 257.425 445.692 250.429 445.749 247.193C445.833 242.343 442.775 242.543 440.109 245.689C438.962 247.042 434.91 251.881 428.228 249.148C425.581 248.065 428.157 243.479 429.281 241.478C429.917 240.346 430.964 238.497 430.785 236.516H430.785Z"
                          fill="url(#paint1_linear_407_2271)"
                        />
                      </g>
                      <g filter="url(#filter2_d_407_2271)">
                        <path
                          d="M402.883 459.474C401.416 456.837 394.493 457.339 392.247 463.932C390.285 469.691 388.256 472.856 383.975 472.652C381.117 474.426 379.134 477.233 376.513 479.315C371.849 483.021 371.303 490.962 380.17 491.577C384.002 491.845 383.803 496.439 383.418 499.763C382.899 504.249 384.173 506.582 386.314 508.301C388.501 510.057 390.474 512.041 393.098 514.332C395.623 516.537 398.855 517.86 403.029 518.888C404.619 519.838 406.211 520.206 407.31 521.298C411.198 525.165 407.497 530.008 404.082 530.478C401.169 530.879 399.041 534.03 399.333 535.359C400.647 535.49 401.746 535.478 402.469 536.178C404.701 538.339 404.246 540.123 404.254 541.32C404.276 544.445 406.771 546.975 410.24 547.051C410.048 545.467 410.427 543.657 410.708 542.706C411.482 540.087 413.456 538.486 415.22 537.517C417.307 536.371 420.586 536.654 422.965 536.54C426.269 536.382 427.096 538.127 427.476 540.149C428.523 545.72 438.269 540.691 431.687 532.63C430.79 531.531 429.61 529.19 429.431 526.915C429.174 523.638 429.268 520.7 432.589 519.17C433.781 518.621 435.457 517.985 436.65 517.441C441.635 515.164 448.928 517.098 443.793 522.855C442.976 523.771 440.875 525.916 439.958 526.84C438.408 528.404 436.734 527.187 436.725 533.908C436.725 536.66 436.643 540.409 436.8 543.157C436.864 544.252 437.377 546.051 437.853 547.142C438.377 548.342 438.46 549.677 438.304 550.977C437.965 553.804 439.657 554.833 441.462 554.586C443.832 554.263 445.924 552.42 446.425 550.075C446.625 549.139 446.793 546.908 449.959 545.037C451.506 544.123 453.584 541.895 455.599 541.052C458.109 540.001 460.02 538.602 459.509 532.555C459.255 529.548 459.952 525.659 459.885 523.231C459.788 519.729 459.347 515.406 464.321 513.38C466.134 512.642 468.043 511.213 469.81 510.372C474.855 507.974 472.398 505.48 470.337 503.455C468.696 501.842 466.273 499.333 464.772 497.589C461.511 493.801 459.414 487.972 459.434 483.002C459.446 480.069 459.458 476.007 459.359 473.076C459.274 470.595 460.038 467.288 461.163 464.955C462.294 462.612 463.686 459.804 464.622 456.985C460.082 453.886 454.666 453.773 452.727 457.56C451.438 460.079 450.384 462.673 445.051 457.869C442.222 455.321 439.536 452.823 437.013 450.055C429.327 441.625 423.66 449.629 419.144 454.833C417.706 456.49 415.51 457.647 413.603 458.985C410.638 461.066 407.001 460.65 402.883 459.474H402.883Z"
                          fill="url(#paint2_linear_407_2271)"
                        />
                      </g>
                      <g filter="url(#filter3_d_407_2271)">
                        <path
                          d="M410.24 547.051C406.77 546.975 404.275 544.445 404.254 541.32C404.244 540.123 404.701 538.339 402.469 536.178C401.745 535.478 400.647 535.49 399.333 535.359C399.041 534.03 401.168 530.879 404.082 530.478C407.497 530.008 411.198 525.165 407.309 521.298C406.211 520.206 404.618 519.838 403.029 518.888C398.855 517.86 395.623 516.537 393.098 514.332C390.474 512.041 388.501 510.057 386.314 508.301C384.172 506.582 382.899 504.249 383.418 499.763C383.803 496.439 384.002 491.845 380.17 491.577C371.303 490.962 371.849 483.021 376.513 479.315C379.134 477.233 381.117 474.426 383.974 472.652C388.255 472.856 390.285 469.691 392.247 463.932C394.492 457.339 401.416 456.837 402.882 459.474C402.33 456.55 401.793 453.711 399.169 451.418C397.332 449.814 396.373 448.006 396.361 441.641C396.351 438.365 396.646 435.751 401.881 435.185C404.042 434.951 410.954 432.748 410.131 425.578C409.755 422.294 410.554 420.88 414.006 415.955C410.802 414.184 408.169 410.217 408.554 406.712C408.82 404.295 408.566 402.473 412.358 399.613C417.635 395.633 415.277 392.8 408.942 388.062C406.699 386.385 403.399 384.951 401.211 382.384C400.74 383.669 400.136 384.954 399.428 385.851C398.637 386.854 398.974 392.67 398.902 395.476C398.727 402.348 393.407 410.762 387.773 413.522C385.387 414.692 377.614 421.921 376.945 427.283C376.771 428.685 375.82 431.329 374.088 433.825C372.865 435.587 372.05 439.01 371.532 440.592C370.909 442.494 370.143 444.749 368.9 446.232C367.567 447.821 365.887 450.268 364.162 451.42C362.865 452.288 361.132 453.561 359.952 454.729C358.874 455.795 357.279 457.126 355.891 457.736C354.506 458.346 352.979 459.428 352.131 460.368C351 461.623 348.749 462.287 347.319 463.602C345.502 465.271 343.828 465.538 340.176 466.76C338.389 467.357 335.312 466.855 333.859 467.963C333.046 468.583 331.755 470.223 330.776 470.519C330.211 470.691 329.039 471.948 329.047 473.452C329.061 476.002 326.707 479.082 322.355 478.49C317.575 477.84 314.23 469.972 315.587 468.564C317.527 466.552 316.651 465.021 313.783 464.354C310.632 463.621 312.635 460.253 314.835 459.09C316.922 457.987 320.687 455.793 322.204 453.225C322.618 452.525 323.874 450.39 324.535 449.916C325.304 449.366 326.581 444.884 325.362 443.149C323.498 440.494 317.944 442.36 316.64 444.803C315.898 446.192 314.843 448.305 309.271 448.864C307.73 449.018 304.532 451.237 303.556 452.623C302.838 453.644 301.737 454.904 300.849 455.781C297.638 458.954 299.773 462.97 301.451 466.158C302.819 468.76 304.555 482.305 301.225 487.213C300.395 488.435 299.493 490.498 298.669 491.724C296.006 495.686 292.074 500.644 289.269 504.507C287.806 506.523 285.495 509.01 284.457 511.275C283.273 513.855 281.352 515.933 279.72 517.666C276.959 520.598 278.669 523.459 281.599 526.765C282.975 528.316 287.315 534.442 279.569 538.645C278.41 539.274 275.663 538.809 274.606 542.104C274.217 543.319 272.894 544.567 271.824 545.262C270.77 545.947 269.302 546.096 267.914 546.766C266.941 547.236 265.408 547.879 263.977 546.961C263.072 550.611 268.222 554.218 274.353 552.895C276.7 551.119 278.072 550.241 279.174 548.901C280.089 547.787 281.089 547.472 281.954 546.958C283.023 546.322 283.88 546.119 284.742 545.052C287.079 542.162 288.287 541.72 289.514 540.448C291.242 538.657 291.759 537.808 292.816 536.257C294.175 538.387 296.319 541.345 297.48 545.148C298.361 548.034 299.783 547.845 300.179 549.829C301.78 557.849 303.197 560.855 311.3 560.083C312.479 563.824 315.203 563.978 316.114 566.843C320.071 565.582 320.783 564.739 320.4 570.076C320.278 571.771 320.565 574.192 321.452 575.641C324.83 581.156 324.561 578.46 330.325 576.543C331.291 576.222 332.62 575.882 333.634 575.791C340.66 575.158 337.087 579.273 335.438 580.303C324.631 587.053 332.111 584.832 336.942 583.01C339.946 581.877 348.795 580.011 349.65 579.852C356.074 578.652 366.983 579.959 373.487 579.1C376.038 578.763 377.911 580.247 378.6 574.513C378.708 573.614 378.403 571.402 381.382 568.572C382.851 567.178 383.788 564.324 383.863 560.903C383.908 558.887 385.55 556.538 387.322 555.94C388.595 555.51 390.42 553.999 392.962 552.857C395.526 551.705 399.184 551.365 398.902 557.143C398.817 558.894 398.927 563.504 398.752 566.467C398.486 570.981 403.109 577.418 405.068 572.332C405.548 571.087 404.284 569.967 407.625 567.971C408.776 567.283 409.615 565.548 410.783 564.888C412.184 564.097 413.597 562.415 413.339 559.549C413.178 557.752 413.245 555.336 413.339 553.534C413.431 551.772 412.316 550.422 411.159 549.248C410.615 548.696 410.344 547.907 410.24 547.051Z"
                          fill="url(#paint3_linear_407_2271)"
                        />
                      </g>
                      <g filter="url(#filter4_d_407_2271)">
                        <path
                          d="M263.975 546.961C263.071 550.611 268.221 554.218 274.352 552.895C276.699 551.119 278.071 550.241 279.173 548.901C280.088 547.787 281.088 547.472 281.953 546.958C283.022 546.322 283.879 546.119 284.741 545.052C287.078 542.162 288.286 541.72 289.513 540.448C291.241 538.657 291.757 537.808 292.815 536.257C294.174 538.387 296.318 541.345 297.479 545.148C298.36 548.034 299.782 547.845 300.178 549.829C301.779 557.849 303.195 560.855 311.299 560.083C312.478 563.824 315.202 563.978 316.112 566.843C315.064 567.177 311.719 569.214 311.074 570.377C310.203 571.949 308.657 574.757 307.916 576.167C306.94 578.026 306.007 580.1 308.217 581.431C309.433 582.163 312.246 583.729 313.405 584.889C314.425 585.91 316.709 586.87 318.143 587.596C321.382 589.238 333.566 596.214 322.203 601.206C321.37 601.573 319.374 600.831 317.767 601.507C315.063 602.645 310.487 603.245 307.766 604.966C305.015 606.706 301.961 606.769 302.352 611.734C302.727 616.498 301.11 617.289 297.088 620.607C291.705 625.048 291.869 623.426 291.9 630.983C291.917 635.101 292.739 638.75 289.719 639.48C287.424 640.035 285.88 642.101 285.433 642.488C284.324 643.45 283.404 645.298 280.922 644.969C280.405 644.901 279.411 644.053 278.44 644.067C277.411 644.082 276.427 643.659 275.132 642.563C273.696 641.349 271.582 640.101 269.718 639.856C269.051 639.768 268.259 639.586 265.432 637.6C264.847 637.19 264.069 635.737 263.477 635.119C262.483 634.083 261.265 633.163 260.995 631.886C260.613 630.077 259.094 628.256 256.935 627.825C255.018 627.442 253.062 624.217 253.776 621.359C254.341 619.097 254.132 615.864 253.776 614.29C252.423 608.29 253.039 607.053 255.732 605.643C257.006 604.976 259.099 603.439 259.867 602.334C260.532 601.379 261.259 600.138 262.198 599.327C263.79 597.952 264.842 596.01 264.68 593.913C264.499 591.583 265.11 588.226 260.77 588.875C258.293 589.245 254.464 591.227 249.415 589.476C247.37 588.767 244.508 588.197 242.046 588.424C238.89 588.713 236.074 587.52 232.948 586.995C228.343 586.222 222.57 586.194 221.067 587.897C216.548 582.484 213.73 570.995 220.029 565.582C227.031 559.565 228.358 554.421 219.338 544.285C221.664 542.909 221.129 542.018 225.729 541.878C230.286 541.738 232.303 543.265 235.279 543.458C240.285 543.782 240.225 542.661 242.648 541.051C243.634 540.396 244.521 538.86 245.204 537.893C246.834 535.59 248.058 534.334 249.716 534.585C252.276 534.972 252.684 536.416 252.573 538.194C252.436 540.393 251.926 542.512 252.122 543.608C253.123 549.203 255.964 550.062 256.935 546.766C257.784 543.883 261.171 542.252 262.123 544.435C262.559 545.434 263.271 546.508 263.975 546.961Z"
                          fill="url(#paint4_linear_407_2271)"
                        />
                      </g>
                      <g filter="url(#filter5_d_407_2271)">
                        <path
                          d="M221.068 587.897C216.549 582.484 213.731 570.995 220.03 565.582C227.032 559.565 228.359 554.421 219.339 544.285C217.528 545.355 214.962 547.134 212.872 547.368C209.273 547.77 207.773 549.773 205.654 550.526C203.89 551.152 201.575 551.912 199.713 552.105C197.498 552.335 193.15 552.364 190.239 552.105C183.559 551.509 182.945 555.167 178.659 555.714C176.958 555.931 174.27 555.58 172.568 555.789C170.632 556.028 168.519 554.169 169.861 552.857C171.069 551.676 171.167 549.864 167.305 549.924C165.284 549.956 163.283 550.246 162.417 551.804C161.69 553.113 159.11 554.633 156.853 555.94C153.697 557.766 150.713 560.776 150.386 562.331C150.021 564.066 148.146 566.101 146.701 567.52C142.832 571.32 137.127 575.721 133.392 580.303C131.493 582.632 130.06 584.97 126.7 587.822C124.436 589.743 122.247 592.658 120.534 594.89C116.989 599.51 115.157 600.526 112.488 600.154C109.444 599.729 106.089 603.705 104.743 606.47C103.768 608.472 102.736 611.299 99.1788 612.335C97.4942 612.826 95.2763 612.628 93.3137 614.215C92.5656 614.82 90.2819 614.729 88.9525 614.591C85.2954 614.213 84.4471 616.626 84.2904 618.351C84.0863 620.598 84.3813 624.105 83.6137 626.096C82.9196 627.897 83.9255 629.072 85.3431 628.878C85.8502 628.809 87.2199 629.894 87.4486 630.231C88.0234 631.08 89.1292 631.59 90.1556 630.983C92.6088 629.534 92.7508 632 93.3137 632.938C93.6045 633.423 93.9896 634.075 94.216 634.593C95.443 637.4 98.0251 636.971 99.7804 635.946C100.532 635.507 101.32 634.108 103.239 633.239C104.273 632.771 105.38 631.82 106.097 630.983C107.537 629.302 113.937 628.331 120.083 630.457C120.742 630.685 122.451 631.721 123.391 632.186C124.855 632.911 125.996 634.182 126.549 634.893C127.277 635.828 128.463 636.996 129.557 637.45C130.25 637.738 130.961 637.812 131.663 638.653C134.271 641.78 133.592 636.468 133.843 635.044C134.098 633.603 133.822 628.962 135.798 627.224C136.448 626.652 138.495 621.498 137.528 618.952C135.386 613.315 145.215 610.226 148.506 616.546C150.898 621.139 155.949 619.465 157.529 616.772C158.65 614.863 163.273 613.032 165.951 612.786C168.654 612.538 171.866 611.54 173.922 608.5C174.75 607.276 179.338 604.313 181.742 606.169C183.761 607.728 186.211 607.194 186.103 604.665C186.033 603.021 188.794 601.379 190.765 601.808C193.094 602.315 194.412 601.916 195.126 600.755C196.196 599.018 198.826 600.397 199.788 601.658C200.945 603.174 206.762 602.196 207.458 599.252C207.648 598.45 208.583 596.337 213.323 594.214C215.06 593.435 218.979 590.265 221.068 587.897Z"
                          fill="url(#paint5_linear_407_2271)"
                        />
                      </g>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M236.934 605.868C236.779 603.493 237.554 602.581 238.213 601.282C238.918 599.89 239.96 599.419 240.393 598.951C240.951 598.347 241.9 597.338 242.273 596.469C242.652 595.588 244.317 595.126 244.679 594.138C245.028 593.189 246.358 592.796 247.461 593.161C249.137 593.714 249.832 595.222 249.341 596.77C249.121 597.463 248.973 598.713 248.74 599.402C248.396 600.417 247.907 601.264 247.161 602.034C245.324 603.926 245.56 605.619 245.581 605.944C245.978 611.851 240.793 612.211 238.664 609.778C237.856 608.856 237.132 608.891 236.934 605.868Z"
                        fill="#73A4DC"
                      />
                      <g filter="url(#filter6_d_407_2271)">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M210.616 607.372C211.531 608.069 213.794 609.117 214.376 608.124C215.088 606.908 216.415 606.787 217.985 607.523C218.83 607.919 219.568 608.944 221.143 609.027C224.356 609.195 224.536 610.835 224.602 611.057C224.962 612.277 228.439 612.652 229.64 612.41C233.193 611.697 233.471 613.033 233.324 614.29C233.006 617.012 234.628 620.564 236.107 620.982C237.665 621.423 238.282 623.704 238.588 626.472C238.86 628.937 237.394 631.311 235.881 632.337C231.371 635.396 225.887 640.59 222.872 644.894C222.166 645.903 221.583 648.273 220.466 650.158C219.422 651.921 218.985 653.719 218.436 655.496C217.774 657.637 216.507 659.663 213.924 656.85C212.83 655.659 210.796 655.079 209.262 652.639C208.527 651.47 206.759 650.383 205.653 649.556C203.793 648.166 201.629 647.206 198.134 647.376C196.103 647.474 193.009 646.78 191.592 649.932C191.052 651.132 189.161 653.047 187.381 653.767C183.991 655.138 180.521 656.503 180.388 661.437C180.291 665.018 179.254 666.603 177.906 668.655C176.786 670.361 175.38 672.808 173.62 674.295C171.228 676.316 169.052 678.932 171.064 680.912C172.376 682.204 173.482 686.149 169.56 685.424C167.737 685.087 164.989 685.503 163.544 687.078C161.653 689.14 159.129 690.106 157.379 687.078C156.239 685.106 154.508 682.603 153.168 680.762C151.474 678.437 149.027 677.729 147.002 681.514C145.852 683.662 140.743 690.148 145.498 680.762C146.455 678.872 148.099 676.763 148.43 674.671C148.881 671.832 149.299 669.401 150.385 668.43C151.867 667.106 151.959 665.528 151.062 664.821C149.999 663.982 149.409 661.531 148.581 660.459C145.009 655.837 141.893 657.728 137.527 657.752C127.825 657.807 132.564 656.732 137.527 655.948C143.684 654.975 145.948 650.772 149.408 647.751C150.394 646.891 151.654 645.465 152.792 644.819C155.165 643.47 155.757 642.264 155.95 640.382C156.116 638.758 156.857 636.923 157.83 636.096C159.651 634.549 159.476 632.45 159.484 631.961C159.536 628.786 161.415 626.201 163.394 624.366C167.84 620.244 169.837 623.341 172.267 626.472C174.016 628.726 176.164 631.823 178.583 628.727C180.185 626.678 183.615 626.455 184.749 626.622C189.402 627.308 193.398 623.316 193.472 620.682C193.574 617.008 193.126 615.243 197.833 612.561C199.442 611.644 201.435 609.982 202.796 608.726C205.179 606.527 208.293 605.607 210.616 607.372Z"
                          fill="url(#paint6_linear_407_2271)"
                        />
                      </g>
                      <g filter="url(#filter7_d_407_2271)">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M86.8466 633.089C87.0557 632.88 89.7718 639.547 91.3583 642.413C93.7077 646.657 98.7799 650.327 102.111 650.759C105.987 651.261 108.179 650.041 108.803 649.33C114.032 643.384 123.585 651.382 117.225 658.354C114.886 660.918 113.48 665.434 120.158 665.196C123.988 665.06 124.825 668.424 125.948 670.084C127.45 672.304 128.989 675.699 130.61 677.603C132.825 680.206 132.706 684.107 130.309 686.627C128.173 688.872 128.18 690.005 128.053 691.665C127.832 694.552 125.189 697.207 123.917 698.357C119.547 702.308 119.393 709.661 119.33 711.666C119.175 716.68 117.834 717.447 116.774 719.712C114.443 724.694 114.911 727.472 114.668 730.39C114.22 735.786 114.986 743.111 114.593 748.511C114.431 750.745 113.958 754.075 113.014 756.106C111.058 760.317 107.561 759.605 106.397 757.159C105.493 755.257 102.387 752.798 100.682 757.384C100.019 759.168 100.065 761.511 99.9305 763.174C99.6661 766.442 98.8288 767.62 96.9228 768.588C92.2515 770.96 90.7543 773.131 89.629 773.701C83.7276 776.695 78.5629 774.462 85.9444 767.536C89.9332 763.793 88.5598 759.818 85.4932 757.309C81.9212 754.386 81.9217 756.242 81.8087 750.767C81.7405 747.464 82.4463 746.953 84.2901 747.083C87.5431 747.312 87.0742 743.358 82.7862 745.579C81.119 746.442 79.1555 748.036 77.6731 749.188C72.3317 753.34 76.7418 757.493 78.6506 759.715C80.2488 761.576 84.0657 764.664 80.3801 769.791C79.5773 770.908 76.6882 770.618 74.9661 770.242C72.731 769.755 68.9563 768.651 67.5971 768.814C62.3262 769.443 59.0052 761.987 64.2885 758.061C68.0865 755.239 67.527 746.901 63.8374 745.428C59.5967 743.736 58.2488 733.43 59.6265 731.292C63.446 725.365 67.1545 720.599 70.3041 717.306C71.8014 715.74 73.6482 713.379 73.763 711.215C74.0758 705.321 73.8934 702.316 72.9358 702.117C71.5748 701.833 69.146 701.318 72.6351 699.56C73.564 699.092 77.2296 692.404 73.1614 687.83C70.7414 685.109 68.0744 680.853 66.6947 677.904C64.8012 673.857 58.5074 671.555 57.5211 677.603C57.2363 679.349 57.019 686.164 57.0699 687.078C57.3139 691.455 59.9336 689.676 61.2807 689.334C68.0637 687.612 69.4713 692.977 66.6195 695.725C65.3111 696.985 64.2584 698.622 63.0855 699.71C59.547 702.994 56.5103 702.121 57.6715 697.605C58.6861 693.659 57.0188 690.256 51.8063 695.199C50.0198 696.893 47.4809 699.237 45.866 700.462C42.5946 702.945 39.0959 703.354 41.2039 699.485C42.8425 696.478 39.3317 692.844 37.369 691.439C35.1358 689.84 34.2818 683.374 36.0156 682.115C37.066 681.352 41.1998 683.288 41.8808 687.228C42.3176 689.756 43.5023 690.583 45.0388 691.138C48.4984 692.388 49.633 689.779 48.4977 687.379C47.3245 684.898 43.57 681.176 41.8808 681.213C38.8505 681.276 35.9558 679.2 34.5117 676.551C33.9161 675.458 32.3169 674.636 31.504 673.693C27.0876 668.573 33.3721 664.175 37.8202 666.024C41.7148 667.642 42.5736 668.629 42.1063 663.693C41.5423 657.735 45.7324 658.64 47.7458 658.655C51.328 658.68 53.2657 659.314 53.6862 655.271C54.025 652.013 56.7564 650.281 59.6265 651.887C63.3219 653.955 66.2217 649.86 66.2435 647.3C66.2574 645.632 67.2226 643.661 69.9281 640.834C72.7709 637.863 75.6554 636.026 77.9739 636.472C80.3389 636.928 81.0732 636.459 82.1095 635.645C82.8404 635.072 83.6722 633.903 84.5909 633.765C86.0303 633.55 86.8758 633.096 86.8468 633.089H86.8466Z"
                          fill="url(#paint7_linear_407_2271)"
                        />
                      </g>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M541.923 686.221C544.414 676.907 553.17 682.722 547.487 689.228C545.694 691.281 544.574 693.729 542.524 694.943C540.565 696.104 538.367 698.154 538.765 699.229C539.301 700.678 538.671 701.464 538.013 702.011C534.958 704.553 536.39 705.903 537.787 706.824C540.7 708.744 539.95 710.244 536.509 711.486C532.14 713.063 532.857 715.359 534.102 716.449C540.303 721.871 527.334 729.942 527.185 717.351C527.162 715.386 530.675 715.358 528.087 710.884C526.733 708.544 526.475 707.182 529.816 704.869C533.851 702.076 533.756 697.972 533.2 697.349C531.452 695.392 528.253 694.516 534.253 693.891C538.115 693.488 540.104 693.021 541.923 686.221Z"
                        fill="#4F8EFF"
                      />
                      <path
                        d="M409.561 353.287C409.561 353.287 413.722 353.224 415.46 353.182C417.653 353.129 419.783 353.665 421.202 354.235C424.778 355.672 428.733 356.981 431.842 358.291C437.884 360.838 439.529 359.125 442.009 357.448C443.64 356.345 446.13 354.608 447.645 355.078C449.053 355.515 450.758 356.442 452.438 356.289C453.445 356.198 455.732 356.979 456.547 357.712C457.897 358.926 460.18 359.473 461.551 360.925C464.546 364.095 468.051 363.509 470.769 362.4C472.023 361.888 475.194 361.188 475.194 361.188"
                        stroke="#353535"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M359.951 401.641C362.167 394.938 369.23 399.32 365.817 403.747C365.15 404.611 365.002 406.035 364.614 407.055C363.076 411.093 365.056 412.185 366.193 411.868C369.164 411.039 369.467 413.814 367.847 416.379C366.441 418.606 363.5 420.734 361.831 422.771C360.651 424.212 358.414 426.648 358.072 422.094C358.006 421.229 358.257 419.796 358.372 418.936C358.703 416.463 357.755 415.523 357.094 415.327C355.522 414.86 354.041 412.5 356.117 410.289C357.251 409.079 358.324 409.477 358.297 406.529C358.283 404.945 359.454 403.146 359.951 401.641Z"
                        fill="#3E97FF"
                      />
                      <path
                        d="M404.842 290.354C404.842 290.354 406.905 288.985 408.376 288.249C409.777 287.548 411.531 286.93 413.339 286.971C418.921 287.097 424.98 287.136 430.408 286.971C434.534 286.845 434.224 285.379 434.618 284.64C435.816 282.398 441.337 281.374 441.687 284.264C441.945 286.397 441.578 288.027 442.063 289.828C443.411 294.84 450.114 291.952 452.74 289.903C454.382 288.622 453.816 285.43 459.508 285.166C464.609 284.933 467.027 280.504 467.027 280.504M443.717 291.783C441.538 293.585 440.297 295.255 439.957 301.784C439.704 306.651 439.668 313.883 439.874 318.387C440.184 325.169 438.46 323.387 437.776 326.974C437.514 328.353 437.165 330.911 436.949 332.388C436.28 336.961 437.68 337.755 439.656 339.531C440.385 340.186 441.127 341.284 441.687 342.088C442.531 343.3 443.503 345.02 444.243 346.299C447.138 351.298 447.866 353.983 442.404 357.193C438.014 359.772 436.772 361.537 438.345 366.752C439.01 368.956 440.182 368.472 440.394 373.988C440.588 379.032 440.321 382.566 440.246 386.047C440.146 390.73 437.034 395.485 435.487 396.895C426.848 404.772 432.869 404.789 436.859 409.024M413.708 415.669C413.708 415.669 416.294 416.394 418.392 416.402C420.133 416.412 424.879 416.213 428.042 416.346C432.362 416.528 434.25 413.235 434.87 411.832C435.524 410.35 437.189 408.816 438.425 407.769C439.063 407.228 440.077 406.731 440.795 406.302C444.229 404.248 447.437 405.909 449.749 407.11C453.627 409.125 460.892 407.389 460.602 407.035M464.621 456.985C460.08 453.886 454.664 453.774 452.726 457.56C451.437 460.079 450.382 462.673 445.05 457.87C442.221 455.321 439.535 452.823 437.012 450.056C429.326 441.625 423.659 449.629 419.143 454.833C417.705 456.49 415.508 457.647 413.602 458.985C410.637 461.067 407 460.65 402.881 459.474C402.33 456.55 401.792 453.711 399.168 451.419C397.331 449.814 396.372 448.007 396.36 441.641C396.35 438.365 396.645 435.752 401.88 435.185C404.041 434.951 410.953 432.748 410.131 425.579C409.754 422.294 410.553 420.88 414.005 415.955C410.801 414.184 408.168 410.217 408.553 406.713C408.819 404.295 408.565 402.474 412.357 399.613C417.634 395.633 415.276 392.8 408.941 388.062C406.698 386.385 403.398 384.951 401.211 382.385M402.881 459.474C401.415 456.837 394.491 457.339 392.246 463.932C390.284 469.692 388.254 472.856 383.973 472.652C381.116 474.426 379.133 477.233 376.512 479.316C371.848 483.021 371.302 490.962 380.169 491.577C384.001 491.846 383.802 496.44 383.417 499.764C382.898 504.249 384.171 506.583 386.313 508.302C388.5 510.057 390.473 512.042 393.097 514.333C395.622 516.537 398.854 517.861 403.028 518.888C404.618 519.838 406.21 520.206 407.309 521.298C411.197 525.165 407.496 530.008 404.081 530.478C401.167 530.879 399.04 534.03 399.332 535.359C400.646 535.49 401.745 535.478 402.468 536.179C404.7 538.339 404.244 540.123 404.253 541.32C404.275 544.445 406.769 546.975 410.239 547.051M263.976 546.961C263.071 550.612 268.221 554.219 274.352 552.896C276.699 551.12 278.072 550.242 279.173 548.902C280.089 547.788 281.088 547.473 281.953 546.959C283.022 546.323 283.879 546.119 284.741 545.053C287.078 542.163 288.286 541.721 289.514 540.449C291.241 538.658 291.758 537.809 292.816 536.258C294.175 538.388 296.319 541.346 297.479 545.148C298.36 548.035 299.782 547.846 300.178 549.83C301.779 557.85 303.196 560.856 311.299 560.084C312.478 563.825 315.202 563.979 316.113 566.844M221.067 587.898C216.548 582.485 213.73 570.995 220.029 565.583C227.031 559.566 228.358 554.422 219.338 544.286M443.266 455.782C442.719 458.993 442.196 461.108 442.814 463.001C443.225 464.257 443.605 465.304 443.566 466.159C443.461 468.466 443.75 471.658 444.093 474.054C444.472 476.708 443.837 479.442 442.965 480.371C440.729 482.75 437.254 486.099 435.37 487.965C433.748 489.572 431.437 491.236 428.603 492.326C426.723 493.05 424.831 494.211 422.362 494.206C420.533 494.206 417.94 494.24 416.121 494.056C407.642 493.198 408.145 492.957 404.09 495.785C400.593 498.224 398.404 500.785 394.465 505.109C390.53 509.429 389.93 511.325 389.427 512.629C387.195 518.413 385.53 516.921 383.411 517.216C381.175 517.526 376.674 517.153 375.892 517.141C372.547 517.083 372.971 518.065 372.959 519.547C372.938 522.196 373.56 525.694 373.335 528.194C373.173 530.003 373.097 532.099 371.982 533.533C370.568 535.35 369.909 536.282 369.801 537.894C369.702 539.384 368.446 540.588 367.696 541.879C367.098 542.907 366.374 543.956 365.741 544.962C364.83 546.41 363.837 548.613 362.582 549.775C361.072 551.174 358.805 554.14 357.244 556.693C356.268 558.288 355.958 559.739 353.86 561.279C350.335 563.868 346.774 568.398 345.965 572.408C345.493 574.748 345.467 576.645 345.664 580.379M408.902 524.66C408.902 524.66 415.375 524.681 418.151 524.66C420.536 524.642 421.195 524.54 422.286 523.908C423.475 523.22 423.412 523.142 425.971 523.006C426.962 522.953 429.43 523.081 429.43 523.081M403.488 460.068C406.388 461.69 406.87 462.46 406.947 465.632C407.082 471.18 408.686 472.242 409.579 473.603C410.029 474.29 411.517 475.537 411.007 477.663C410.76 478.695 410.797 480.07 410.932 481.122C411.192 483.139 412.257 484.166 413.188 485.559C414.031 486.82 415.973 488.523 417.023 489.619C419.642 492.354 423.119 494.431 425.37 496.537C427.805 498.817 433.794 502.478 433.866 518.87M403.939 519.471C400.619 516.051 404.151 510.575 411.91 515.185C413.266 515.991 417.004 517.164 421.685 516.012C422.748 515.751 424.879 515.412 425.971 515.336C427.689 515.215 429.492 515.501 430.332 514.584C431.241 513.593 433.716 513.907 433.716 513.907M428.377 499.62C428.377 499.62 431.533 500.926 432.739 500.898C434.491 500.859 437.706 502.369 439.732 504.357C442.626 507.198 447.348 508.812 449.281 505.034C449.816 503.99 450.954 502.586 453.116 501.876C454.282 501.493 455.722 501.317 456.876 500.898C460.923 499.431 464.612 501.38 466.125 503.605C468.2 506.66 470.998 506.852 472.742 506.763M371.686 533.444C371.686 533.444 379.116 542.737 380.73 544.749C385.763 551.02 386.361 543.848 386.76 541.118C387.253 537.743 389.457 536.981 392.378 536.87C394.112 536.804 398.187 537.116 399.983 535.294M311.375 560.226C312.223 557.407 314.327 558.137 314.534 553.835C314.686 550.653 317.402 548.56 319.948 548.571C320.94 548.571 323.174 548.516 324.158 548.646C326.567 548.965 329.691 549.627 331.076 550.677C333.693 552.66 334.937 552.352 338.37 552.331C340.727 552.316 343.006 552.151 345.363 552.181C346.863 552.199 349.175 552.036 350.552 552.632C353.047 553.711 359.5 553.158 359.5 553.158M338.445 466.76C338.445 466.76 342.773 471.792 344.987 473.302C347.587 475.075 348.842 473.686 349.499 472.776C351.209 470.405 353.839 470.35 354.537 471.873C355.04 472.972 356.159 474.511 357.545 472.7C358.021 472.077 360.157 471.484 361.755 471.422C364.223 471.326 365.76 470.16 367.245 467.963C368.072 466.739 368.771 466.021 369.952 463.903C372.481 459.364 376.103 460.951 377.997 463.226C380.423 466.139 380.754 470.496 384.163 472.625M346.566 474.054C346.566 474.054 343.556 478.71 343.558 482.1C343.558 485.192 343.859 489.272 343.709 492.401C343.489 496.993 343.246 495.533 342.355 496.537C341.5 497.501 342.312 499.54 342.43 500.823C342.53 501.891 342.903 502.985 342.957 504.056C343.083 506.567 342.979 508.952 342.882 512.253C342.807 514.794 341.544 518.444 339.423 519.847C334.702 522.97 337.794 526.049 340.475 527.818C343.347 529.711 345.469 534.22 346.491 537.593C347.697 541.573 347.05 546.461 346.19 552.481M289.644 503.455C289.644 503.455 296.002 508.234 298.216 510.523C301.158 513.564 302.603 513.867 307.164 513.982M312.503 500.372C312.503 500.372 314.667 499.861 315.285 501.049C317.373 505.056 320.183 500.942 321.151 499.319C323.006 496.208 325.043 496.13 327.692 496.161C332.517 496.216 342.506 496.161 342.506 496.161M293.028 536.089C293.963 532.957 298.026 529.768 303.931 529.397C309.512 529.046 315.265 524.16 308.969 520.073C306.868 518.709 306.011 513.263 309.119 511.049C312.782 508.442 312.358 502.761 311.977 496.913C311.879 495.41 311.284 493.23 311.3 491.725C311.339 488.094 311.445 482.731 311.375 478.942C311.279 473.678 313.473 472.617 315.586 472.024M238.362 543.383C239.355 545.285 241.045 547.021 243.475 548.571C248.206 551.589 246.494 553.904 245.28 555.038C240.764 559.255 247.507 561.313 249.566 561.053C252.583 560.673 256.817 563.918 258.063 566.693C259.58 570.072 261.89 572.737 266.033 572.408C268.918 572.178 271.187 575.802 273.101 577.972C275.517 580.71 276.608 583.215 278.967 582.935C279.645 582.854 281.853 583.122 282.501 583.386C284.704 584.285 286.083 581.653 287.464 579.702C289.824 576.365 292.822 574.92 294.682 574.889C297.552 574.842 302.041 572.55 301.901 568.949C301.739 564.807 301.775 558.948 301.525 555.64M263.101 572.182C265.293 583.053 265.367 579.169 264.529 589.928M261.522 600.53C263.679 601.816 269.352 601.015 274.906 600.756M274.229 552.557C276 554.552 278.866 559.263 278.215 563.836C277.863 566.306 278.889 569.21 279.869 571.205C280.443 572.373 281.51 574.306 282.05 575.491C283.674 579.055 285.483 581.745 288.516 585.04C290.102 586.762 292.331 586.9 292.577 592.785C292.774 597.519 292.595 603.465 292.727 608.2C292.825 611.732 291.585 614.213 290.171 616.095C289.177 617.417 288.434 619.066 287.163 620.081C283.678 622.861 280.851 624.171 285.508 628.277C287.629 630.146 289.476 630.985 292.426 631.585M274.756 580.153C274.231 581.552 274.137 582.647 274.154 584.364C274.185 587.432 273.929 592.056 274.154 595.116C274.305 597.159 274.412 599.009 275.207 601.132C276.081 603.465 276.085 607.639 274.305 609.478C272.786 611.047 271.879 614.532 271.974 616.622C272.046 618.202 271.771 621.125 272.575 622.487C273.47 624.003 274.578 623.734 275.508 624.292C276.438 624.85 278.26 625.487 279.343 625.419C280.876 625.325 283.102 625.419 283.102 625.419M113.314 600.305C112.967 605.058 113.121 607.791 118.352 611.208C128.123 617.589 126.979 608.677 128.278 604.741C129.49 601.07 131.567 597.619 134.218 595.267C135.109 594.476 137.424 593.539 138.279 592.71C140.182 590.863 141.84 590.765 143.993 590.981C150.701 591.653 152.793 586.839 154.821 583.386C159.77 574.961 159.758 576.328 167.529 576.393C175.812 576.462 175.327 576.352 182.117 570.528C184.142 568.791 186.166 565.626 188.809 564.212C189.765 563.7 191.004 563.423 192.418 562.858C193.943 562.249 195.06 562.04 196.554 562.332C198.22 562.657 199.515 562.524 202.269 560.677C206.633 557.751 207.773 560.081 209.111 561.505C210.795 563.296 213.368 564.034 215.052 563.986C217.241 563.922 221.819 563.836 221.819 563.836M177.981 555.339C177.593 558.56 178.188 561.512 173.62 564.813C168.285 568.669 169.147 574.27 173.169 575.34C175.389 575.931 177.431 578.947 176.928 580.303C176.199 582.273 178.179 585.346 178.959 585.943C180.913 587.439 180.769 589.245 181.29 590.68C181.741 591.924 182.48 593.933 183.245 595.116C184.713 597.391 187.497 602.41 187.455 602.41M127.676 607.223C127.676 607.223 130.156 610.266 131.21 611.659C132.207 612.976 132.591 614.791 134.594 616.171C135.425 616.743 137.527 617.75 137.527 617.75M155.047 682.191C159.893 676.386 159.476 678.26 158.28 674.672C157.999 673.827 156.961 673.553 156.776 672.04C156.616 670.728 156.468 669.951 156.626 669.333C156.906 668.24 158.155 667.215 159.032 666.626C160.231 665.821 162.371 663.293 163.92 662.114C165.439 660.958 165.75 658.788 165.499 657.151C165.171 655.013 166.261 652.893 167.755 651.888C170.787 649.845 172.88 645.691 174.597 642.789C175.683 640.955 175.296 638.979 178.808 636.999C180.444 636.077 183.205 634.747 184.372 633.691C185.583 632.596 189.385 632.275 192.268 630.608C193.73 629.762 198.023 629.617 200.088 631.285C201.352 632.306 202.974 632.793 204.75 632.638C207.729 632.378 208.336 632.993 210.314 634.142C215.093 636.916 223.398 645.271 223.398 645.271M196.103 629.856C196.103 629.856 195.322 625.802 197.155 624.668C198.168 624.041 200.352 622.847 201.066 622.111C202.428 620.707 204.803 620.402 206.705 620.006C208.195 619.695 209.716 619.58 211.066 618.878C211.907 618.44 214.248 617.963 215.277 617.9C220.047 617.611 223.339 613.733 225.579 611.809M192.569 621.66C195.624 624.322 196.005 626.684 195.877 629.931M41.5791 667.378C41.5791 667.378 41.2082 671.342 41.7295 672.265C42.2295 673.151 43.0561 673.918 43.9101 674.897C45.2993 676.49 47.1764 678.527 48.7978 678.958C50.6092 679.439 51.9567 680.115 53.4598 681.289C54.6062 682.184 57.2947 682.717 57.2947 682.717M50.2264 659.106C52.1666 661.629 53.9053 661.602 55.7156 661.663C60.7256 661.831 66.2553 661.78 70.0025 661.738C72.4611 661.709 74.4925 662.564 72.2583 665.573C71.3524 666.793 70.5447 667.426 69.5513 668.731C67.72 671.137 66.5276 672.021 64.0621 674.295M68.3482 682.191C68.3482 682.191 70.0356 680.019 71.0552 679.559C72.0511 679.11 73.4414 678.427 74.1381 677.98C75.8075 676.909 77.7567 676.956 79.6273 676.627C80.5512 676.464 84.8526 675.362 85.1164 671.889C85.2555 670.059 85.4902 667.252 85.2668 665.347C84.9633 662.76 86.8151 659.649 91.5832 657.678C94.636 656.416 98.8771 649.858 98.877 649.857M84.4397 674.145C88.8064 678.058 89.8731 679.739 91.7335 675.875C94.3161 670.51 100.983 668.943 100.23 676.927C99.8202 681.281 106.55 689.982 111.585 689.936C113.311 689.92 115.712 689.506 117.149 690.462C118.268 691.207 120.701 690.415 121.811 688.883C123.628 686.376 129.972 687.089 130.007 687.154M105.494 686.853C105.494 686.853 101.645 692.371 98.7266 695.575C96.0368 698.529 91.3863 701.425 95.3428 706.403C96.5158 707.879 97.5203 710.385 97.5987 712.269C97.6767 714.142 97.6293 716.176 97.373 717.758C96.8663 720.883 95.5871 723.175 92.0342 723.924C88.83 724.599 84.4397 727.006 84.4397 727.006M65.4908 723.472C65.4908 723.472 75.5859 722.368 79.4017 723.623C82.8585 724.76 86.4448 728.375 87.8986 731.969C89.5389 736.024 91.8537 739.108 94.3653 740.617C99.3743 743.626 99.0724 743.943 100.907 745.128C105.834 748.311 104.141 754.979 104.141 754.979"
                        stroke="#353535"
                      />
                      <path
                        d="M464.621 456.985C460.08 453.886 454.664 453.774 452.726 457.56C451.436 460.079 450.382 462.673 445.049 457.87C442.221 455.322 439.535 452.823 437.011 450.056C429.325 441.625 423.658 449.629 419.142 454.833C417.705 456.49 415.508 457.647 413.602 458.985C410.637 461.067 406.999 460.65 402.881 459.474M402.881 459.474C402.329 456.55 401.792 453.711 399.168 451.419C397.331 449.814 396.372 448.007 396.36 441.641C396.35 438.365 396.645 435.752 401.879 435.185C404.04 434.951 410.952 432.748 410.13 425.579C409.754 422.294 410.553 420.88 414.005 415.955C410.801 414.184 408.167 410.217 408.553 406.713C408.819 404.295 408.565 402.474 412.357 399.613C417.634 395.633 415.276 392.8 408.941 388.062C406.698 386.385 403.397 384.951 401.21 382.385M402.881 459.474C401.414 456.837 394.491 457.339 392.245 463.932C390.284 469.692 388.254 472.856 383.973 472.652C381.116 474.426 379.133 477.233 376.512 479.316C371.848 483.021 371.301 490.962 380.169 491.577C384 491.846 383.802 496.44 383.417 499.764C382.897 504.25 384.171 506.583 386.313 508.302C388.5 510.057 390.473 512.042 393.097 514.333C395.621 516.537 398.854 517.861 403.028 518.888C404.617 519.838 406.21 520.206 407.308 521.299C411.197 525.165 407.496 530.009 404.08 530.478C401.167 530.879 399.04 534.03 399.331 535.359C400.646 535.49 401.744 535.479 402.468 536.179C404.7 538.339 404.244 540.123 404.253 541.321C404.274 544.446 406.769 546.975 410.239 547.051M263.975 546.962C263.071 550.612 268.221 554.219 274.352 552.896C276.699 551.12 278.071 550.242 279.173 548.902C280.088 547.788 281.088 547.473 281.953 546.959C283.022 546.323 283.879 546.12 284.741 545.053C287.078 542.163 288.286 541.721 289.513 540.449C291.241 538.658 291.757 537.809 292.815 536.258C294.174 538.388 296.318 541.346 297.479 545.149C298.36 548.035 299.782 547.846 300.178 549.83C301.779 557.85 303.196 560.856 311.299 560.084C312.478 563.825 315.202 563.979 316.112 566.844M221.067 587.898C216.548 582.485 213.73 570.996 220.029 565.583C227.031 559.566 228.358 554.422 219.338 544.286"
                        stroke="white"
                      />
                      <path
                        d="M571.467 641.534C505.965 641.534 452.865 694.634 452.865 760.136H455.398C455.398 696.028 507.359 644.067 571.467 644.067V641.534Z"
                        fill="white"
                      />
                      <defs>
                        <filter
                          id="filter0_d_407_2271"
                          x="355.215"
                          y="0"
                          width="264.674"
                          height="266.299"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset />
                          <feGaussianBlur stdDeviation="15" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_407_2271"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_407_2271"
                            result="shape"
                          />
                        </filter>
                        <filter
                          id="filter1_d_407_2271"
                          x="366.361"
                          y="201.783"
                          width="152.646"
                          height="288.779"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset />
                          <feGaussianBlur stdDeviation="15" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_407_2271"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_407_2271"
                            result="shape"
                          />
                        </filter>
                        <filter
                          id="filter2_d_407_2271"
                          x="343.199"
                          y="416.379"
                          width="159.586"
                          height="168.242"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset />
                          <feGaussianBlur stdDeviation="15" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_407_2271"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_407_2271"
                            result="shape"
                          />
                        </filter>
                        <filter
                          id="filter3_d_407_2271"
                          x="233.873"
                          y="352.384"
                          width="211.395"
                          height="262.489"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset />
                          <feGaussianBlur stdDeviation="15" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_407_2271"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_407_2271"
                            result="shape"
                          />
                        </filter>
                        <filter
                          id="filter4_d_407_2271"
                          x="186.367"
                          y="504.553"
                          width="170.584"
                          height="170.455"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset />
                          <feGaussianBlur stdDeviation="15" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_407_2271"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_407_2271"
                            result="shape"
                          />
                        </filter>
                        <filter
                          id="filter5_d_407_2271"
                          x="53.3887"
                          y="514.285"
                          width="202.307"
                          height="155.338"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset />
                          <feGaussianBlur stdDeviation="15" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_407_2271"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_407_2271"
                            result="shape"
                          />
                        </filter>
                        <filter
                          id="filter6_d_407_2271"
                          x="101.891"
                          y="576.444"
                          width="166.73"
                          height="142.56"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset />
                          <feGaussianBlur stdDeviation="15" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_407_2271"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_407_2271"
                            result="shape"
                          />
                        </filter>
                        <filter
                          id="filter7_d_407_2271"
                          x="0"
                          y="603.084"
                          width="162.191"
                          height="201.916"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset />
                          <feGaussianBlur stdDeviation="15" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_407_2271"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_407_2271"
                            result="shape"
                          />
                        </filter>
                        <linearGradient
                          id="paint0_linear_407_2271"
                          x1="435.5"
                          y1="41.5"
                          x2="524.5"
                          y2="187.5"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#4F8EFF" />
                          <stop offset="1" stop-color="#1153C7" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_407_2271"
                          x1="419.123"
                          y1="244.537"
                          x2="521.791"
                          y2="313.283"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#4F8EFF" />
                          <stop offset="1" stop-color="#1153C7" />
                        </linearGradient>
                        <linearGradient
                          id="paint2_linear_407_2271"
                          x1="397.666"
                          y1="452.413"
                          x2="445.894"
                          y2="525.78"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#4F8EFF" />
                          <stop offset="1" stop-color="#1153C7" />
                        </linearGradient>
                        <linearGradient
                          id="paint3_linear_407_2271"
                          x1="301.068"
                          y1="393.672"
                          x2="397.177"
                          y2="512.485"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#4F8EFF" />
                          <stop offset="1" stop-color="#1153C7" />
                        </linearGradient>
                        <linearGradient
                          id="paint4_linear_407_2271"
                          x1="243.536"
                          y1="540.71"
                          x2="290.988"
                          y2="619.263"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#4F8EFF" />
                          <stop offset="1" stop-color="#1153C7" />
                        </linearGradient>
                        <linearGradient
                          id="paint5_linear_407_2271"
                          x1="118.351"
                          y1="549.599"
                          x2="150.56"
                          y2="629.093"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#4F8EFF" />
                          <stop offset="1" stop-color="#1153C7" />
                        </linearGradient>
                        <linearGradient
                          id="paint6_linear_407_2271"
                          x1="158.113"
                          y1="611.046"
                          x2="188.872"
                          y2="676.796"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#4F8EFF" />
                          <stop offset="1" stop-color="#1153C7" />
                        </linearGradient>
                        <linearGradient
                          id="paint7_linear_407_2271"
                          x1="55.1071"
                          y1="640.995"
                          x2="122.95"
                          y2="721.772"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#4F8EFF" />
                          <stop offset="1" stop-color="#1153C7" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="featured-trainers-item">
          <img src={featuredtrainersbg} alt="" class="img-overlay" />
          <div class="text-center heading-all">
            <h2 data-aos="fade-up">Explore Our Featured Trainers</h2>
            <p data-aos="fade-up">
              We work with several certified personal trainers, so you’re sure
              to find the one that meets your needs.
            </p>
          </div>
          <div class="what-our-client--wrapper" data-aos="fade-up">
            <div class="what-our-client-img--box-flex">
              <div class="what-our-client-img--box">
                {" "}
                <a onClick={(e) => (handleAccessstarOpen(), setModelname("1"))}>
                  {" "}
                  <img src={featuredtrainers1} alt="" />
                  <div class="what-our-client-content--box">
                    <h4>Magdalina Qubica</h4>
                    <ul class="what-our-client--content">
                      <li>Specialization 1</li>
                      <li>Specialization 2</li>
                      <li>Specialization 3</li>
                      <li>Experience 15 Years</li>
                    </ul>
                    <ul class="d-flex">
                      <li>
                        <img src={yellowstara} alt="" />
                      </li>
                      <li>
                        <img src={yellowstara} alt="" />
                      </li>
                      <li>
                        <img src={yellowstara} alt="" />
                      </li>
                      <li>
                        <img src={yellowstara} alt="" />
                      </li>
                      <li>
                        <img src={whitestar} alt="" />
                      </li>
                    </ul>
                  </div>
                </a>{" "}
              </div>
              <div class="what-our-client-img--box">
                {" "}
                <a onClick={(e) => (handleAccessstarOpen(), setModelname("2"))}>
                  {" "}
                  <img src={featuredtrainers2} alt="" />
                  <div class="what-our-client-content--box">
                    <h4>Magdalina Qubica</h4>
                    <ul class="what-our-client--content">
                      <li>Specialization 1</li>
                      <li>Specialization 2</li>
                      <li>Specialization 3</li>
                      <li>Experience 15 Years</li>
                    </ul>
                    <ul class="d-flex">
                      <li>
                        <img src={yellowstara} alt="" />
                      </li>
                      <li>
                        <img src={yellowstara} alt="" />
                      </li>
                      <li>
                        <img src={yellowstara} alt="" />
                      </li>
                      <li>
                        <img src={yellowstara} alt="" />
                      </li>
                      <li>
                        <img src={whitestar} alt="" />
                      </li>
                    </ul>
                  </div>
                </a>{" "}
              </div>
              <div class="what-our-client-img--box">
                {" "}
                <a onClick={(e) => (handleAccessstarOpen(), setModelname("3"))}>
                  {" "}
                  <img src={featuredtrainers3} alt="" />
                  <div class="what-our-client-content--box">
                    <h4>Magdalina Qubica</h4>
                    <ul class="what-our-client--content">
                      <li>Specialization 1</li>
                      <li>Specialization 2</li>
                      <li>Specialization 3</li>
                      <li>Experience 15 Years</li>
                    </ul>
                    <ul class="d-flex">
                      <li>
                        <img src={yellowstara} alt="" />
                      </li>
                      <li>
                        <img src={yellowstara} alt="" />
                      </li>
                      <li>
                        <img src={yellowstara} alt="" />
                      </li>
                      <li>
                        <img src={yellowstara} alt="" />
                      </li>
                      <li>
                        <img src={whitestar} alt="" />
                      </li>
                    </ul>
                  </div>
                </a>{" "}
              </div>
              <div class="what-our-client-img--box">
                {" "}
                <a onClick={(e) => (handleAccessstarOpen(), setModelname("4"))}>
                  {" "}
                  <img src={featuredtrainers4} alt="" />
                  <div class="what-our-client-content--box">
                    <h4>Magdalina Qubica</h4>
                    <ul class="what-our-client--content">
                      <li>Specialization 1</li>
                      <li>Specialization 2</li>
                      <li>Specialization 3</li>
                      <li>Experience 15 Years</li>
                    </ul>
                    <ul class="d-flex">
                      <li>
                        <img src={yellowstara} alt="" />
                      </li>
                      <li>
                        <img src={yellowstara} alt="" />
                      </li>
                      <li>
                        <img src={yellowstara} alt="" />
                      </li>
                      <li>
                        <img src={yellowstara} alt="" />
                      </li>
                      <li>
                        <img src={whitestar} alt="" />
                      </li>
                    </ul>
                  </div>
                </a>{" "}
              </div>
              <div class="what-our-client-img--box">
                {" "}
                <a onClick={(e) => (handleAccessstarOpen(), setModelname("5"))}>
                  {" "}
                  <img src={featuredtrainers5} alt="" />
                  <div class="what-our-client-content--box">
                    <h4>Magdalina Qubica</h4>
                    <ul class="what-our-client--content">
                      <li>Specialization 1</li>
                      <li>Specialization 2</li>
                      <li>Specialization 3</li>
                      <li>Experience 15 Years</li>
                    </ul>
                    <ul class="d-flex">
                      <li>
                        <img src={yellowstara} alt="" />
                      </li>
                      <li>
                        <img src={yellowstara} alt="" />
                      </li>
                      <li>
                        <img src={yellowstara} alt="" />
                      </li>
                      <li>
                        <img src={yellowstara} alt="" />
                      </li>
                      <li>
                        <img src={whitestar} alt="" />
                      </li>
                    </ul>
                  </div>
                </a>{" "}
              </div>
            </div>

            {/* // */}

            <div class="what-our-client-img--box-flex">
              <div class="what-our-client-img--box">
                {" "}
                <a onClick={(e) => (handleAccessstarOpen(), setModelname("4"))}>
                  {" "}
                  <img src={featuredtrainers4} alt="" />
                  <div class="what-our-client-content--box">
                    <h4>Magdalina Qubica</h4>
                    <ul class="what-our-client--content">
                      <li>Specialization 1</li>
                      <li>Specialization 2</li>
                      <li>Specialization 3</li>
                      <li>Experience 15 Years</li>
                    </ul>
                    <ul class="d-flex">
                      <li>
                        <img src={yellowstara} alt="" />
                      </li>
                      <li>
                        <img src={yellowstara} alt="" />
                      </li>
                      <li>
                        <img src={yellowstara} alt="" />
                      </li>
                      <li>
                        <img src={yellowstara} alt="" />
                      </li>
                      <li>
                        <img src={whitestar} alt="" />
                      </li>
                    </ul>
                  </div>
                </a>{" "}
              </div>
              <div class="what-our-client-img--box">
                {" "}
                <a onClick={(e) => (handleAccessstarOpen(), setModelname("3"))}>
                  {" "}
                  <img src={featuredtrainers3} alt="" />
                  <div class="what-our-client-content--box">
                    <h4>Magdalina Qubica</h4>
                    <ul class="what-our-client--content">
                      <li>Specialization 1</li>
                      <li>Specialization 2</li>
                      <li>Specialization 3</li>
                      <li>Experience 15 Years</li>
                    </ul>
                    <ul class="d-flex">
                      <li>
                        <img src={yellowstara} alt="" />
                      </li>
                      <li>
                        <img src={yellowstara} alt="" />
                      </li>
                      <li>
                        <img src={yellowstara} alt="" />
                      </li>
                      <li>
                        <img src={yellowstara} alt="" />
                      </li>
                      <li>
                        <img src={whitestar} alt="" />
                      </li>
                    </ul>
                  </div>
                </a>{" "}
              </div>
              <div class="what-our-client-img--box">
                {" "}
                <a onClick={(e) => (handleAccessstarOpen(), setModelname("2"))}>
                  {" "}
                  <img src={featuredtrainers2} alt="" />
                  <div class="what-our-client-content--box">
                    <h4>Magdalina Qubica</h4>
                    <ul class="what-our-client--content">
                      <li>Specialization 1</li>
                      <li>Specialization 2</li>
                      <li>Specialization 3</li>
                      <li>Experience 15 Years</li>
                    </ul>
                    <ul class="d-flex">
                      <li>
                        <img src={yellowstara} alt="" />
                      </li>
                      <li>
                        <img src={yellowstara} alt="" />
                      </li>
                      <li>
                        <img src={yellowstara} alt="" />
                      </li>
                      <li>
                        <img src={yellowstara} alt="" />
                      </li>
                      <li>
                        <img src={whitestar} alt="" />
                      </li>
                    </ul>
                  </div>
                </a>{" "}
              </div>
              <div class="what-our-client-img--box">
                {" "}
                <a onClick={(e) => (handleAccessstarOpen(), setModelname("1"))}>
                  {" "}
                  <img src={featuredtrainers1} alt="" />
                  <div class="what-our-client-content--box">
                    <h4>Magdalina Qubica</h4>
                    <ul class="what-our-client--content">
                      <li>Specialization 1</li>
                      <li>Specialization 2</li>
                      <li>Specialization 3</li>
                      <li>Experience 15 Years</li>
                    </ul>
                    <ul class="d-flex">
                      <li>
                        <img src={yellowstara} alt="" />
                      </li>
                      <li>
                        <img src={yellowstara} alt="" />
                      </li>
                      <li>
                        <img src={yellowstara} alt="" />
                      </li>
                      <li>
                        <img src={yellowstara} alt="" />
                      </li>
                      <li>
                        <img src={whitestar} alt="" />
                      </li>
                    </ul>
                  </div>
                </a>{" "}
              </div>
            </div>
            <div class="what-our-client-img--box-flex">
              <div class="what-our-client-img--box">
                {" "}
                <a onClick={(e) => (handleAccessstarOpen(), setModelname("1"))}>
                  {" "}
                  <img src={featuredtrainers1} alt="" />
                  <div class="what-our-client-content--box">
                    <h4>Magdalina Qubica</h4>
                    <ul class="what-our-client--content">
                      <li>Specialization 1</li>
                      <li>Specialization 2</li>
                      <li>Specialization 3</li>
                      <li>Experience 15 Years</li>
                    </ul>
                    <ul class="d-flex">
                      <li>
                        <img src={yellowstara} alt="" />
                      </li>
                      <li>
                        <img src={yellowstara} alt="" />
                      </li>
                      <li>
                        <img src={yellowstara} alt="" />
                      </li>
                      <li>
                        <img src={yellowstara} alt="" />
                      </li>
                      <li>
                        <img src={whitestar} alt="" />
                      </li>
                    </ul>
                  </div>
                </a>{" "}
              </div>
              <div class="what-our-client-img--box">
                {" "}
                <a onClick={(e) => (handleAccessstarOpen(), setModelname("2"))}>
                  {" "}
                  <img src={featuredtrainers2} alt="" />
                  <div class="what-our-client-content--box">
                    <h4>Magdalina Qubica</h4>
                    <ul class="what-our-client--content">
                      <li>Specialization 1</li>
                      <li>Specialization 2</li>
                      <li>Specialization 3</li>
                      <li>Experience 15 Years</li>
                    </ul>
                    <ul class="d-flex">
                      <li>
                        <img src={yellowstara} alt="" />
                      </li>
                      <li>
                        <img src={yellowstara} alt="" />
                      </li>
                      <li>
                        <img src={yellowstara} alt="" />
                      </li>
                      <li>
                        <img src={yellowstara} alt="" />
                      </li>
                      <li>
                        <img src={whitestar} alt="" />
                      </li>
                    </ul>
                  </div>
                </a>{" "}
              </div>
              <div class="what-our-client-img--box">
                {" "}
                <a onClick={(e) => (handleAccessstarOpen(), setModelname("3"))}>
                  <img src={featuredtrainers3} alt="" />
                  <div class="what-our-client-content--box">
                    <h4>Magdalina Qubica</h4>
                    <ul class="what-our-client--content">
                      <li>Specialization 1</li>
                      <li>Specialization 2</li>
                      <li>Specialization 3</li>
                      <li>Experience 15 Years</li>
                    </ul>
                    <ul class="d-flex">
                      <li>
                        <img src={yellowstara} alt="" />
                      </li>
                      <li>
                        <img src={yellowstara} alt="" />
                      </li>
                      <li>
                        <img src={yellowstara} alt="" />
                      </li>
                      <li>
                        <img src={yellowstara} alt="" />
                      </li>
                      <li>
                        <img src={whitestar} alt="" />
                      </li>
                    </ul>
                  </div>
                </a>{" "}
              </div>
            </div>
          </div>

          <div
          // class="remodal remodal-trainer"
          // data-remodal-id="modal201"
          // role="dialog"
          // aria-labelledby="modal1Title"
          // aria-describedby="modal1Desc"
          >
            <Modal
              open={Accesstaropen}
              onClose={handleCloseAccessstar}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
              sx={{ 
    "& > .MuiBackdrop-root" : {
            backdropFilter: "blur(5px)"
          }
    }}
       
            >
              <Box sx={style2}>
                <button
                  style={{ backgroundColor: "white", borderRadius: "5px" }}
                  onClick={(e) => handleCloseAccessstar()}
                  data-remodal-action="close"
                  class="remodal-close"
                  // aria-label="Close"
                ></button>

                <div
                  class="remodal remodal-trainer remodal-is-initialized remodal-is-opened"
                  data-remodal-id="modal201"
                  role="dialog"
                  aria-labelledby="modal1Title"
                  aria-describedby="modal1Desc"
                  tabindex="-1"
                >
                  {modelname == "1" ? (
                    <>
                      <div class="trainer-banner clearfix">
                        <img src={treinerbanber} alt="" class="img-overlay" />
                      </div>
                      <div class="trainer-content clearfix">
                        <div class="row">
                          <div class="col-md-4">
                            <div class="trainer-profile-picture">
                              <img src={featuredtrainers1} alt="" />
                            </div>
                          </div>
                          <div class="col-md-8">
                            <h4>Magdalina Qubica</h4>
                            <p>
                              <i class="fas fa-star yellow"></i>
                              <i class="fas fa-star yellow"></i>
                              <i class="fas fa-star yellow"></i>
                              <i class="fas fa-star yellow"></i>
                              <i
                                style={{ color: "black" }}
                                class="fas fa-star black"
                              ></i>
                            </p>
                            <p>15 years experience</p>
                            <ul class="specialization">
                              <li class="color01">Specialization 1</li>
                              <li class="color02">Specialization 2</li>
                              <li class="color03">Specialization 3</li>
                            </ul>
                          </div>
                          <div class="col-md-12">
                            <p
                              style={{
                                textAlign: "left",
                                textAlign: "justify",
                              }}
                            >
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Ut ultricies pulvinar donec risus orci. In
                              magnis orci, imperdiet ultricies Lorem ipsum dolor
                              sit amet, Lorem ipsum dolor sit amet, consectetur
                              adipiscing elit. Ut ultricies pulvinar donec risus
                              orci. In magnis orci, imperdiet ultricies Lorem
                              ipsum dolor sit
                            </p>
                            <p class="text-right">
                              <a
                                style={{ marginRight: "5px" }}
                                onClick={(e) => handleCloseAccessstar()}
                                href="#"
                              >
                                More Details
                              </a>
                              <i class="fas  fa-long-arrow-alt-right"></i>
                            </p>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    ""
                  )}

                  {modelname == "2" ? (
                    <>
                      <div class="trainer-banner clearfix">
                        <img src={trainerbanner02} alt="" class="img-overlay" />
                      </div>
                      <div class="trainer-content clearfix">
                        <div class="row">
                          <div class="col-md-4">
                            <div class="trainer-profile-picture">
                              <img src={featuredtrainers2} alt="" />
                            </div>
                          </div>
                          <div class="col-md-8">
                            <h4>Magdalina Qubica</h4>
                            <p>
                              <i class="fas fa-star yellow"></i>
                              <i class="fas fa-star yellow"></i>
                              <i class="fas fa-star yellow"></i>
                              <i class="fas fa-star yellow"></i>
                              <i
                                style={{ color: "black" }}
                                class="fas fa-star black"
                              ></i>
                            </p>
                            <p>15 years experience</p>
                            <ul class="specialization">
                              <li class="color01">Specialization 1</li>
                              <li class="color02">Specialization 2</li>
                              <li class="color03">Specialization 3</li>
                            </ul>
                          </div>
                          <div class="col-md-12">
                            <p
                              style={{
                                textAlign: "left",
                                textAlign: "justify",
                              }}
                            >
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Ut ultricies pulvinar donec risus orci. In
                              magnis orci, imperdiet ultricies Lorem ipsum dolor
                              sit amet, Lorem ipsum dolor sit amet, consectetur
                              adipiscing elit. Ut ultricies pulvinar donec risus
                              orci. In magnis orci, imperdiet ultricies Lorem
                              ipsum dolor sit
                            </p>
                            <p class="text-right">
                              <a
                                onClick={(e) => handleCloseAccessstar()}
                                style={{ marginRight: "5px" }}
                                href="#"
                              >
                                More Details
                              </a>
                              <i class="fas fa-long-arrow-alt-right"></i>
                            </p>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    ""
                  )}

                  {modelname == "3" ? (
                    <>
                      <div class="trainer-banner clearfix">
                        <img src={trainerbanner03} alt="" class="img-overlay" />
                      </div>
                      <div class="trainer-content clearfix">
                        <div class="row">
                          <div class="col-md-4">
                            <div class="trainer-profile-picture">
                              <img src={featuredtrainers3} alt="" />
                            </div>
                          </div>
                          <div class="col-md-8">
                            <h4>Magdalina Qubica</h4>
                            <p>
                              <i class="fas fa-star yellow"></i>
                              <i class="fas fa-star yellow"></i>
                              <i class="fas fa-star yellow"></i>
                              <i class="fas fa-star yellow"></i>
                              <i
                                style={{ color: "black" }}
                                class="fas fa-star black"
                              ></i>
                            </p>
                            <p>15 years experience</p>
                            <ul class="specialization">
                              <li class="color01">Specialization 1</li>
                              <li class="color02">Specialization 2</li>
                              <li class="color03">Specialization 3</li>
                            </ul>
                          </div>
                          <div class="col-md-12">
                            <p
                              style={{
                                textAlign: "left",
                                textAlign: "justify",
                              }}
                            >
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Ut ultricies pulvinar donec risus orci. In
                              magnis orci, imperdiet ultricies Lorem ipsum dolor
                              sit amet, Lorem ipsum dolor sit amet, consectetur
                              adipiscing elit. Ut ultricies pulvinar donec risus
                              orci. In magnis orci, imperdiet ultricies Lorem
                              ipsum dolor sit
                            </p>
                            <p class="text-right">
                              <a
                                onClick={(e) => handleCloseAccessstar()}
                                style={{ marginRight: "5px" }}
                                href="#"
                              >
                                More Details
                              </a>
                              <i class="fas fa-long-arrow-alt-right"></i>
                            </p>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    ""
                  )}

                  {modelname == "4" ? (
                    <>
                      <div class="trainer-banner clearfix">
                        <img src={trainerbanner03} alt="" class="img-overlay" />
                      </div>
                      <div class="trainer-content clearfix">
                        <div class="row">
                          <div class="col-md-4">
                            <div class="trainer-profile-picture">
                              <img src={featuredtrainers4} alt="" />
                            </div>
                          </div>
                          <div class="col-md-8">
                            <h4>Magdalina Qubica</h4>
                            <p>
                              <i class="fas fa-star yellow"></i>
                              <i class="fas fa-star yellow"></i>
                              <i class="fas fa-star yellow"></i>
                              <i class="fas fa-star yellow"></i>
                              <i
                                style={{ color: "black" }}
                                class="fas fa-star black"
                              ></i>
                            </p>
                            <p>15 years experience</p>
                            <ul class="specialization">
                              <li class="color01">Specialization 1</li>
                              <li class="color02">Specialization 2</li>
                              <li class="color03">Specialization 3</li>
                            </ul>
                          </div>
                          <div class="col-md-12">
                            <p
                              style={{
                                textAlign: "left",
                                textAlign: "justify",
                              }}
                            >
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Ut ultricies pulvinar donec risus orci. In
                              magnis orci, imperdiet ultricies Lorem ipsum dolor
                              sit amet, Lorem ipsum dolor sit amet, consectetur
                              adipiscing elit. Ut ultricies pulvinar donec risus
                              orci. In magnis orci, imperdiet ultricies Lorem
                              ipsum dolor sit
                            </p>
                            <p class="text-right">
                              <a
                                onClick={(e) => handleCloseAccessstar()}
                                style={{ marginRight: "5px" }}
                                href="#"
                              >
                                More Details
                              </a>
                              <i class="fas fa-long-arrow-alt-right"></i>
                            </p>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    ""
                  )}

                  {modelname == "5" ? (
                    <>
                      <div class="trainer-banner clearfix">
                        <img src={trainerbanner03} alt="" class="img-overlay" />
                      </div>
                      <div class="trainer-content clearfix">
                        <div class="row">
                          <div class="col-md-4">
                            <div class="trainer-profile-picture">
                              <img src={featuredtrainers5} alt="" />
                            </div>
                          </div>
                          <div class="col-md-8">
                            <h4>Magdalina Qubica</h4>
                            <p>
                              <i class="fas fa-star yellow"></i>
                              <i class="fas fa-star yellow"></i>
                              <i class="fas fa-star yellow"></i>
                              <i class="fas fa-star yellow"></i>
                              <i
                                style={{ color: "black" }}
                                class="fas fa-star black"
                              ></i>
                            </p>
                            <p>15 years experience</p>
                            <ul class="specialization">
                              <li class="color01">Specialization 1</li>
                              <li class="color02">Specialization 2</li>
                              <li class="color03">Specialization 3</li>
                            </ul>
                          </div>
                          <div class="col-md-12">
                            <p
                              style={{
                                textAlign: "left",
                                textAlign: "justify",
                              }}
                            >
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Ut ultricies pulvinar donec risus orci. In
                              magnis orci, imperdiet ultricies Lorem ipsum dolor
                              sit amet, Lorem ipsum dolor sit amet, consectetur
                              adipiscing elit. Ut ultricies pulvinar donec risus
                              orci. In magnis orci, imperdiet ultricies Lorem
                              ipsum dolor sit
                            </p>
                            <p class="text-right">
                              <a
                                onClick={(e) => handleCloseAccessstar()}
                                style={{ marginRight: "5px" }}
                                href="#"
                              >
                                More Details
                              </a>
                              <i class="fas fa-long-arrow-alt-right"></i>
                            </p>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    ""
                  )}
                </div>
              </Box>
            </Modal>
          </div>
        </section>

        <section class="what-our-client  ">
          {" "}
          <img src={whatourclientbg} alt="" class="img-overlay" />
          <div class="container">
            <div class="text-center heading-all">
              <h2 data-aos="fade-up">What our clients say about us</h2>
              <p data-aos="fade-up">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mollis
                mauris scelerisque dignissim.
              </p>
            </div>

            <div class="what-our-client-item" data-aos="fade-up">
              <div class="what-our-client-slider">
           
                <Slider {...settings}>
                  <div class="what-our-client-slider--wrapper">
                    <div class="left-our-client-img">
                      {" "}
                      <img src={whatourslider} alt="" />{" "}
                    </div>
                    <div class="left-our-client-content">
                      {" "}
                      <img
                        src={faquoteleft}
                        class="fa_quote-left"
                        alt=""
                      />{" "}
                      <img src={faquoteright} class="fa_quote-right" alt="" />
                      <div class="sub-heading">
                        <h4>Saimon Jhonson</h4>
                        <p>Company Name</p>
                      </div>
                      <p style={{ textAlign: "left", textAlign: "justify" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mollis mauris scelerisque dignissim neque, mauris,
                        dictumst vulputate pulvinar dictum. Arcu ac vitae
                        rhoncus sed enim nullam ornare. Tellus non erat faucibus
                        consectetur interdum molestie ut. Arcu ac vitae rhoncus
                        sed enim nullam ornare. Arcu ac vitae rhoncus sed enim
                        nullam.
                      </p>
                    </div>
                  </div>

                  <div class="what-our-client-slider--wrapper">
                    <div class="left-our-client-img">
                      {" "}
                      <img src={whatourslider} alt="" />{" "}
                    </div>
                    <div class="left-our-client-content">
                      {" "}
                      <img
                        src={faquoteleft}
                        class="fa_quote-left"
                        alt=""
                      />{" "}
                      <img src={faquoteright} class="fa_quote-right" alt="" />
                      <div class="sub-heading">
                        <h4>Saimon Jhonson</h4>
                        <p>Company Name</p>
                      </div>
                      <p style={{ textAlign: "left", textAlign: "justify" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mollis mauris scelerisque dignissim neque, mauris,
                        dictumst vulputate pulvinar dictum. Arcu ac vitae
                        rhoncus sed enim nullam ornare. Tellus non erat faucibus
                        consectetur interdum molestie ut. Arcu ac vitae rhoncus
                        sed enim nullam ornare. Arcu ac vitae rhoncus sed enim
                        nullam.
                      </p>
                    </div>
                  </div>

                  <div class="what-our-client-slider--wrapper">
                    <div class="left-our-client-img">
                      {" "}
                      <img src={whatourslider} alt="" />{" "}
                    </div>
                    <div class="left-our-client-content">
                      {" "}
                      <img
                        src={faquoteleft}
                        class="fa_quote-left"
                        alt=""
                      />{" "}
                      <img src={faquoteright} class="fa_quote-right" alt="" />
                      <div class="sub-heading">
                        <h4>Saimon Jhonson</h4>
                        <p>Company Name</p>
                      </div>
                      <p style={{ textAlign: "left", textAlign: "justify" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mollis mauris scelerisque dignissim neque, mauris,
                        dictumst vulputate pulvinar dictum. Arcu ac vitae
                        rhoncus sed enim nullam ornare. Tellus non erat faucibus
                        consectetur interdum molestie ut. Arcu ac vitae rhoncus
                        sed enim nullam ornare. Arcu ac vitae rhoncus sed enim
                        nullam.
                      </p>
                    </div>
                  </div>

                  <div class="what-our-client-slider--wrapper">
                    <div class="left-our-client-img">
                      {" "}
                      <img src={whatourslider} alt="" />{" "}
                    </div>
                    <div class="left-our-client-content">
                      {" "}
                      <img
                        src={faquoteleft}
                        class="fa_quote-left"
                        alt=""
                      />{" "}
                      <img src={faquoteright} class="fa_quote-right" alt="" />
                      <div class="sub-heading">
                        <h4>Saimon Jhonson</h4>
                        <p>Company Name</p>
                      </div>
                      <p style={{ textAlign: "left", textAlign: "justify" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mollis mauris scelerisque dignissim neque, mauris,
                        dictumst vulputate pulvinar dictum. Arcu ac vitae
                        rhoncus sed enim nullam ornare. Tellus non erat faucibus
                        consectetur interdum molestie ut. Arcu ac vitae rhoncus
                        sed enim nullam ornare. Arcu ac vitae rhoncus sed enim
                        nullam.
                      </p>
                    </div>
                  </div>

                  <div class="what-our-client-slider--wrapper">
                    <div class="left-our-client-img">
                      {" "}
                      <img src={whatourslider} alt="" />{" "}
                    </div>
                    <div class="left-our-client-content">
                      {" "}
                      <img
                        src={faquoteleft}
                        class="fa_quote-left"
                        alt=""
                      />{" "}
                      <img src={faquoteright} class="fa_quote-right" alt="" />
                      <div class="sub-heading">
                        <h4>Saimon Jhonson</h4>
                        <p>Company Name</p>
                      </div>
                      <p style={{ textAlign: "left", textAlign: "justify" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mollis mauris scelerisque dignissim neque, mauris,
                        dictumst vulputate pulvinar dictum. Arcu ac vitae
                        rhoncus sed enim nullam ornare. Tellus non erat faucibus
                        consectetur interdum molestie ut. Arcu ac vitae rhoncus
                        sed enim nullam ornare. Arcu ac vitae rhoncus sed enim
                        nullam.
                      </p>
                    </div>
                  </div>
                </Slider>
         
              </div>
            </div>
          </div>
        </section>

        <section class="faq-item">
          <img src={faqbg} alt="" class="img-overlay" />
          <div class="container">
            <div class="faq-item-item--content">
              <div class="row">
                <div class="col-md-12">
                  <div class="text-center heading-all">
                    <h2 data-aos="fade-up">Frequently Asked Questions</h2>
                    <p data-aos="fade-up">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Mollis mauris scelerisque dignissim.
                    </p>
                  </div>
                </div>

                <div>
                  <div
                    class={openTab ? "faqtab slide-left" : "faqtab01"}
                    // {openTab ? data-aos="fade-left" : ""}
                    // data-aos={!openTab ? "fade-left" : ""}
                  >
                    <button
                      class={
                        openTab == "firstTab" ? " tablinks active" : "tablinks"
                      }
                      onClick={() => setOpenTab("firstTab")}
                      // onClick="openTab(event, 'firstTab')"
                      id="defaultOpen"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </button>
                    <button
                      class={
                        openTab == "secondTab" ? " tablinks active" : "tablinks"
                      }
                      onClick={() => setOpenTab("secondTab")}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </button>
                    <button
                      class={
                        openTab == "thirdTab" ? " tablinks active" : "tablinks"
                      }
                      onClick={() => setOpenTab("thirdTab")}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </button>
                    <button
                      class={
                        openTab == "fourthTab" ? " tablinks active" : "tablinks"
                      }
                      onClick={() => setOpenTab("fourthTab")}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </button>
                    <button
                      class={
                        openTab == "fifthTab" ? " tablinks active" : "tablinks"
                      }
                      onClick={() => setOpenTab("fifthTab")}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </button>
                  </div>

                  <div
                    className="slide-right"
                    style={
                      !openTab ? { display: "none" } : { display: "block" }
                    }
                  >
                    <div
                      style={
                        openTab == "firstTab"
                          ? { display: "block" }
                          : { display: "none" }
                      }
                      id="firstTab"
                      // className="slide-right"
                      class="tabcontent"
                    >
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin dignissim maximus enim, nec dictum diam
                        pellentesque nec. Nulla facilisis, massa ut egestas
                        bibendum, ex libero varius nisl, a aliquet dui ante sed
                        purus. Donec vitae ullamcorper lacus, ut vehicula metus.
                        Duis molestie ipsum quis nisl ultrices feugiat. Nam at
                        purus ut ligula ultrices aliquet vitae nec eros. Aenean
                        condimentum tellus eu urna tincidunt volutpat. Nunc
                        bibendum quam ut congue dignissim.
                      </p>
                    </div>

                    <div
                      style={
                        openTab == "secondTab"
                          ? { display: "block" }
                          : { display: "none" }
                      }
                      id="secondTab"
                      class="tabcontent"
                    >
                      <p>
                        Cras euismod, urna id blandit maximus, sapien lorem
                        tristique ex, eget maximus nibh tellus in arcu.
                        Suspendisse libero metus, eleifend elementum velit
                        varius, dapibus rutrum ex. Ut tincidunt, felis auctor
                        ornare fermentum, sem quam imperdiet turpis, quis
                        porttitor purus lacus quis quam. Donec erat massa,
                        sodales sit amet mollis pretium, tempor ac ex. Maecenas
                        fermentum tristique venenatis. Vivamus sollicitudin
                        consequat ligula eu facilisis.{" "}
                      </p>
                    </div>

                    <div
                      style={
                        openTab == "thirdTab"
                          ? { display: "block" }
                          : { display: "none" }
                      }
                      id="thirdTab"
                      class="tabcontent"
                    >
                      <p>
                        Suspendisse lacinia sapien eget risus porttitor, sit
                        amet faucibus velit ullamcorper. Quisque dictum erat
                        neque, placerat dignissim ante tempor at. Nullam
                        ullamcorper justo felis, nec pulvinar ex suscipit vel.
                        Donec viverra leo ut ante iaculis, sit amet porta leo
                        vehicula. Suspendisse fermentum congue ligula sed
                        molestie. Praesent lacinia, massa non fringilla
                        scelerisque, tellus arcu sodales nunc, in ultrices
                        sapien ante et ante. In iaculis tellus urna, at
                        convallis massa porta in. Proin vehicula facilisis
                        varius.
                      </p>
                    </div>
                    <div
                      style={
                        openTab == "fourthTab"
                          ? { display: "block" }
                          : { display: "none" }
                      }
                      id="fourthTab"
                      class="tabcontent "
                    >
                      <p>
                        Cras euismod, urna id blandit maximus, sapien lorem
                        tristique ex, eget maximus nibh tellus in arcu.
                        Suspendisse libero metus, eleifend elementum velit
                        varius, dapibus rutrum ex. Ut tincidunt, felis auctor
                        ornare fermentum, sem quam imperdiet turpis, quis
                        porttitor purus lacus quis quam. Donec erat massa,
                        sodales sit amet mollis pretium, tempor ac ex. Maecenas
                        fermentum tristique venenatis. Vivamus sollicitudin
                        consequat ligula eu facilisis.
                      </p>
                    </div>
                    <div
                      style={
                        openTab == "fifthTab"
                          ? { display: "block" }
                          : { display: "none" }
                      }
                      id="fifthTab"
                      class="tabcontent"
                    >
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin dignissim maximus enim, nec dictum diam
                        pellentesque nec. Nulla facilisis, massa ut egestas
                        bibendum, ex libero varius nisl, a aliquet dui ante sed
                        purus. Donec vitae ullamcorper lacus, ut vehicula metus.
                        Duis molestie ipsum quis nisl ultrices feugiat. Nam at
                        purus ut ligula ultrices aliquet vitae nec eros. Aenean
                        condimentum tellus eu urna tincidunt volutpat. Nunc
                        bibendum quam ut congue dignissim.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="col-md-12">
                  <div class="text-center">
                    {" "}
                    <a href="#" class="btn btn-primary">
                      View All
                    </a>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Home;
