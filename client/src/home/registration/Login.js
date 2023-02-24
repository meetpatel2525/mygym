import React from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  // Initialize a boolean state
  const [passwordShown, setPasswordShown] = useState(false);

  const navigate = useNavigate();

  // Password toggle handler
  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };

  const initialValue = {
    email: "",
    password: "",
  };

  const [open, setOpen] = React.useState(false);

  const [message, setMessage] = useState("");

  const [user, setUser] = useState(initialValue);
  const [submitcount, setSubmitcount] = useState(0);

  // const hundleSubmit = async () => {

  //   if (!email && !password) {
  //     setOpen(true);
  //     setMessage("Please Enter Email and Password");
  //   } else {
  //     const data = await axios.post("/api/v1/allEmail/login", {
  //       email: email,
  //       password: password,
  //     });
    
  //   }

  //   // console.log(data);
  // };

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const {email, password } = user;

  const hundleSubmit = async(e) =>{

    e.preventDefault();

    setSubmitcount(+1)

    if (email && password) {
      const data = await axios.post("/api/v1/allEmail/login", {
        email: email,
        password: password,
      })

      if(data.data.success == false){
      setMessage(data.data.message)
      }

      if (data.data.success == true ){

        setMessage("")

        sessionStorage.setItem(data.data.logintype, email); //hear we customerlog JSON.stringify for convert the object in to string

        navigate("/");
      }

    }
  }

  return (
    <body class="graphic-bg">
      <div class="log-reg-section clearfix">
        <div class="row g-0">
          <div class="col-lg-7 col-md-6 order-lg-2 order-md-2">
            <div class="right-panel">
              <div class="logo">
                <a href="index.html">
                  <img src="assets/img/log-reg-logo.png" alt="" />
                </a>
              </div>

              {/* <div style={{textAlign:"left" ,marginLeft:"-16px" }} class="field mt30">
                <div  class="form-check form-check-inline">
                  <label class="form-check-label font18">
                    User Type  :
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    onChange={(e) => onValueChange(e)}
                    name="usertype"
                    id="inlineRadio1"
                    value="user"
                  />
                  <label class="form-check-label font18" for="inlineRadio1">
                    User
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    onChange={(e) => onValueChange(e)}
                    name="usertype"
                    id="inlineRadio2"
                    value="trainer"
                  />
                  <label class="form-check-label font18" for="inlineRadio2">
                    Trainer
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    onChange={(e) => onValueChange(e)}
                    name="usertype"
                    value="gymowner"
                    id="inlineRadio3"
                  />
                  <label class="form-check-label font18" for="inlineRadio3">
                    Owner
                  </label>
                </div>

                <div style={{textAlign:"left" ,marginLeft:"16px" }} >
                  {!usertype   & (submitcount > 0) ? (
                    <p className="worningmsg">Please fill out this field</p>
                  ) : (
                    ""
                  )}
                </div>
               
              </div> */}
              <div class="field-box">
                <label>Email Address</label>
                <input
                  type="email"
                  class="input-email"
                  onChange={(e) => onValueChange(e)}
                  name="email"
                  value={email}
                  placeholder="Enter your email address"
                />

                <div>
                  {!email & (submitcount > 0) ? (
                    <p className="worningmsg">Please fill out this field</p>
                  ) : (
                    ""
                  )}
                </div>

                <div>
                  {message ? <p className="worningmsg">{message}</p> : ""}
                </div>
              </div>
              <div class="field-box">
                <label>Password</label>
                <input
                  id="password-field"
                  type={passwordShown ? "text" : "password"}
                  placeholder="Enter your password"
                  onChange={(e) => onValueChange(e)}
                  name="password"
                  value={password}
                />
                <span
                  onClick={togglePassword}
                  toggle="#password-field"
                  style={{ cursor: "pointer" }}
                  class={
                    passwordShown
                      ? "fa fa-fw field-icon toggle-password fa-eye-slash"
                      : "fa fa-fw field-icon toggle-password fa-eye"
                  }
                ></span>{" "}
                <div>
                  {!password & (submitcount > 0) ? (
                    <p className="worningmsg">Please fill out this field</p>
                  ) : (
                    ""
                  )}
                </div>
                <div>
                  {message ? <p className="worningmsg">{message}</p> : ""}
                </div>
              </div>

              <div class="forgot-password">
                <a href="#">Forgot Password?</a>
              </div>

              <div style={{ padding: "30px" }}>
                <div class="field-box  LoginNow">
                  <button type="submit" onClick={hundleSubmit}>
                    Login Now
                  </button>
                  {/* <input type="submit" value="Login Now"/> */}
                </div>
                <div class="field-box">
                  <Link
                    style={{
                      color: "#0BC7B6",
                      border: "2px solid #0BC7B6",
                      padding: "10px 36px",
                      borderRadius: "8px",
                      fontWeight: "bold",
                    }}
                    to="/select-user"
                  >
                    Register Now
                  </Link>

                  {/* <button type="button"> <Link style={{"color": "#0BC7B6"}} to="/select-user">Register Now</Link></button> */}
                </div>
              </div>

              <div class="copyrights">
                All Copyrights Reserved by{" "}
                <span style={{ fontWeight: "bold" }} >
                  MORPH CO. LTD
                </span>
              </div>
            </div>
          </div>

          <div class="col-lg-5 left-panel">
            <div class="back-to-home">
              <i
                // style={{ marginRight: "5px" }}
                class="fa-solid fa-arrow-leftm"
              ></i>
              <Link to="/">Back to Home</Link>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Login;
