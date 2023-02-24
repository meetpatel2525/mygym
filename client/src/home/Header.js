import React from "react";
import { Link } from "react-router-dom";
import headerlogo from "./assets/img/header-logo.png";
import noscrolllogo from "./assets/img/no-scroll-logo.png";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Select from "react-select";

const Header = ({ handleScroll, headerClassName }) => {

  const location = useLocation();
  const { pathname } = location;

  const [openmtr, setOpenmtr] = useState(false);



  return (
    <div>
      <header id="main-menu" class={headerClassName}>
        <div class="header-menu-wrapper">
          <div class="header-logo">
            <Link to="/">
              <img src={headerlogo} class="on-scroll-none" alt="" />
              <img src={noscrolllogo} class="on-scroll-block" alt="" />
            </Link>
          </div>

          <div class="header-content-right">
            <nav class={openmtr ? "menu-iten open" : "menu-iten"}>
              <ul>
                <li class={pathname == "/" ? "active" : ""}>
                  <Link to="/">Home</Link>
                </li>

                <li class={pathname == "/explore" ? "active" : ""}>
                  <Link to="/explore">Explore</Link>
                </li>

                <li class={pathname == "/about-us" ? "active" : ""} >
                  <Link  to="/about-us" >About Us</Link>
                </li>

                <li  class={pathname == "/gyms" ? "active" : ""}   >
                  <Link to="/gyms"  >Gyms</Link>
                </li>

                <li>
                  <a href="trainers.html">Trainers</a>
                </li>

                <li class={pathname == "/faqs" ? "active" : ""}  >
                  <Link  to="/faqs">FAQs</Link>
                </li>

                <li class={pathname == "/contact-us" ? "active" : ""}>
                  <Link to="/contact-us">Contact Us</Link>
                </li>

              </ul>
            </nav>
            <div class="header-btn">
              <div class="header-btn-language">
                <div class="header-btn-language">
                  <select
                    style={{ cursor: "pointer" }}
                    class="my-select"
                    //  aria-label="Default select example"
                  >
                    <option disabled selected className="my1-selected">
                      Language
                    </option>
                    <option
                      style={{ cursor: "pointer" }}
                      className="my1-selected"
                    >
                      ENG
                    </option>
                    <option
                      style={{ cursor: "pointer" }}
                      className="my1-selected"
                      value="HN"
                    >
                      HN{" "}
                    </option>
                  </select>



                </div>
              </div>
              <Link class="btn btn-secondary" to="/login">
                Login
              </Link>
              <div
                onClick={() => setOpenmtr(!openmtr)}
                class={openmtr ? "toggle-class on " : "toggle-class"}
              >
                <div class="one"></div>
                <div class="two"></div>
                <div class="three"></div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
