import React from 'react'
import footerbg from "./assets/img/footer-bg.jpg";
import headerlogo from "./assets/img/header-logo.png";
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";

const Footer = () => {

  const location = useLocation();
  const { pathname } = location;

  return (

    <div>

<footer>
          {" "}
          <img src={footerbg} alt="" class="img-overlay" />
          <div class="footer--wrapper">
            <div class="footer-logo" data-aos="fade-up">
              {" "}
              <a href="#">
                <img src={headerlogo} alt="" />
              </a>{" "}
            </div>
            <div class="footer-link" data-aos="fade-up">
              <ul>
                <li class= {pathname == "/" ? "active" : "" } >
                   <Link to="/">Home</Link>
                </li>

                <li class= {pathname == "/explore" ? "active" : "" } >
                   <Link to="/explore">Explore</Link>
                </li>

                <li class= {pathname == "/about-us" ? "active" : "" } >
                  <Link to="/about-us" >About Us</Link>
                </li>
                <li class= {pathname == "/gyms" ? "active" : "" } >
                  <Link to="/gyms">Gyms</Link>
                </li>
                <li class= {pathname == "/trainers" ? "active" : "" } >
                  <a href="trainers.html">Trainers</a>
                </li>
                <li class= {pathname == "/faqs" ? "active" : "" } >
                  <Link to="/faqs">FAQs</Link>
                </li>
                <li class= {pathname == "/terms-conditions" ? "active" : "" } >
                  <Link to="/terms-conditions">Terms & Conditions</Link>
                </li>
                <li class= {pathname == "/privacy-policy" ? "active" : "" } >
                <Link to="/privacy-policy">Privacy Policy</Link>
                </li>
                <li class= {pathname == "/contact-us" ? "active" : "" } >
                  <Link to="/contact-us">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div class="footer-socal-icon" data-aos="fade-up">
              <ul>
                <li>
                  <a href="https://www.facebook.com/" target="_blank">
                    <i class="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/" target="_blank">
                    <i class="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/" target="_blank">
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/" target="_blank">
                    <i class="fa-brands fa-linkedin-in"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/" target="_blank">
                    <i class="fa-brands fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div class="copy-right">
              <p>
                © All Copyrights reserved{" "}
                <script>document. write(new Date(). getFullYear());</script> By{" "}
                <a style={{fontWeight:"bold"}} href="#">MORPH CO. LTD</a>
              </p>
            </div>
          </div>
        </footer>


    </div>
  )
}

export default Footer