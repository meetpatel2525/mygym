import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <body id="top">
        {/* <header id="main-menu">
  <div class="header-menu-wrapper">
    <div class="header-logo"> <a href="index.html"><img src="assets/img/header-logo.png" class="on-scroll-none" alt=""><img src="assets/img/no-scroll-logo.png" class="on-scroll-block" alt=""></a> </div>
    <div class="header-content-right">
      <nav class="menu-iten">
        <ul>
          <li><a href="home.html">Home</a></li>
          <li><a href="about-us.html">About Us</a></li>
          <li><a href="gyms.html">Gyms</a></li>
          <li><a href="trainers.html">Trainers</a></li>
          <li><a href="faqs.html">FAQs</a></li>
          <li><a href="contact-us.html">Contact Us</a></li>
        </ul>
      </nav>
      <div class="header-btn">
        <div class="header-btn-language">
          <div class="custom-select">
            <select>
              <option>Language</option>
              <option>ENG</option>
              <option>HN</option>
            </select>
          </div>
        </div>
        <a href="login.html" class="btn btn-secondary">LOGIN</a>
        <div class="toggle-class">
          <div class="one"></div>
          <div class="two"></div>
          <div class="three"></div>
        </div>
      </div>
    </div>
  </div>
</header> */}
        <Header />

        <section class="masthead">
          <img src="assets/img/landing-bg.jpg" class="img-overlay" alt="" />
          <img
            src="assets/img/banner-overlay-content.png"
            class="img-overlay"
            alt=""
          />
          <div class="container">
            <div class="masthead__wrap">
              <div class="masthead__wrap-item text-center">
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
                  data-aos="fade-right"
                to="/select-user"
                  class="btn btn-primary"
                >
                  Join Us
                </Link>{" "}
                <Link
                  data-aos="fade-left"
                 to="/explore/"
                  class="btn btn-secondary"
                  // style={{fontWeight:"bold"}}
                >

                  Explore Morph
                </Link>{" "}
              </div>
            </div>
          </div>
        </section>
      </body>
    </div>
  );
};

export default Main;
