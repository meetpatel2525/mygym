import React, { useState, useEffect, useRef } from "react";
import { Link, useFetcher } from "react-router-dom";
import $ from "jquery";
import "animate.css";
import flatpickr from "flatpickr";
import DateRangeIcon from "@mui/icons-material/DateRange";
import axios from "axios";
import { red } from "@mui/material/colors";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { useLocation } from "react-router-dom";
import ClickAwayListener from "@mui/base/ClickAwayListener";
import { useGoogleLogin } from "@react-oauth/google";
import { useCallback } from "react";
import FacebookLogin from "@greatsumini/react-facebook-login";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import {
  LoginSocialFacebook,
  LoginSocialInstagram,
} from "reactjs-social-login";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

// for enter numebr only
// const onInputChange = (e) => {
//   const { value } = e.target;
//   // console.log("Input value: ", value);
//   const re = /^[A-Za-z]+$/;
//   if (value === "" || re.test(value)) {
//     setName(value);
//   }
// };

//options for select map step 5
const options = [
  "Tokyo",
  "Chiyoda",
  "Chuo",
  "Minato",
  "Shinjuku",
  "Bunkyo",
  "Taito",
  "Sumida",
  "Koto",
  "Shinagawa",
  "Meguro",
  "Ota",
  "Setagaya",
  "Shibuya",
  "Nakano",
  "Suginami",
  "Toshima",
  "Kita",
  "Arakawa",
  "Itabashi",
  "Nerima",
  "Adachi",
  "Katsushika",
  "Edogawa",
];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  maxWidth: "600px",
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: 5,
  boxShadow: 24,
  // pl: 3,
  // pr: 2,
};

const initialValue = {
  email: "",
  password: "",
  confirmpassword: "",
  firstname: "",
  lastname: "",
  gender: "",
  birthday: "",
  phone: "",
  profileimg: "",
  idproofimg: "",
};

const UserRegistration = () => {
  const [showem, setShowem] = React.useState(false);
  const location = useLocation();
  const [Loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [step3questions, setStep3questions] = useState([]);
  const [step4questions, setStep4questions] = useState([]);
  const [step5questions, setStep5questions] = useState([]);
  const [gender3, setgender3] = useState("");

  // for view more for map
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [passwordShown, setPasswordShown] = useState(false);
  const [conformpasswordShown, setConformPasswordShown] = useState(false);

  // Password toggle handler
  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };

  const toggleConformPassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setConformPasswordShown(!conformpasswordShown);
  };

  //for display data on page lode
  useEffect(() => {
    getAllQuestions();
  }, []);

  const REDIRECT_URI = window.location.href;

  // console.log(check, " my very fy is called  ");

  const getAllQuestions = async () => {
    setLoading(true);
    const usertyp = "user";

    try {
      const responce = await axios.get(
        `/api/v1/get/user/question/?userType=${usertyp}`
      );

      const step3data = responce.data.data.filter((myqustion) => {
        return myqustion.stepNo === "3";
      });

      const step4data = responce.data.data.filter((myqustion) => {
        return myqustion.stepNo === "4";
      });

      const step5data = responce.data.data.filter((myqustion) => {
        return myqustion.stepNo === "5";
      });

      setStep3questions(step3data);
      setStep4questions(step4data);
      setStep5questions(step5data);
      setLoading(false);
      //pagination logic end
    } catch (error) {
      setLoading(false);
      setError("some error ocured  ");
    }
  };

  flatpickr(".mydatepic", {
    // altInput: true,
    altFormat: "F j, Y",
    dateFormat: "Y-m-d",
  });

  flatpickr(".data", {
    maxDate: new Date(),
    onChange: function (dateObj, dateStr) {
      setUser({ ...user, birthday: dateStr });
    },
  });
  const inputRef = useRef(null);

  const [previose, setPreviose] = useState("animate__fadeInRight");
  const [message, setMessage] = useState("");
  const [submitcount, setSubmitcount] = useState(0);
  const [dropdown, setDropdown] = useState("");
  const [mytoga3, setmytoga3] = useState(false);
  const [mytoga33, setmytoga33] = useState(false);
  const [mytoga4, setmytoga4] = useState(false);
  const [mytoga5, setmytoga5] = useState(false);
  const [mycheck3, setmycheck3] = useState(false);

  let list = window.localStorage.getItem("veryfyuser");
  // let newdata = [[...getCdata,...list]]
  let data = list == null ? [] : JSON.parse(list);

  let checkme = window.localStorage.getItem("userstatus");
  // let newdata = [[...getCdata,...list]]
  let check = checkme == null ? [] : JSON.parse(checkme);

  // console.log(data);

  const [tandc, setTndc] = useState(data.tandc ? true : false);
  const [user, setUser] = useState(data ? data : initialValue);
  const [mysteps, setMysteps] = useState(data ? "" : 1);

  const {
    email,
    password,
    confirmpassword,
    firstname,
    lastname,
    gender,
    birthday,
    phone,
    profileimg,
    idproofimg,
  } = user;

  useEffect(() => {
    localStorage.removeItem("veryfyuser");
  }, []);

  //for display data on page lode
  useEffect(() => {
    if (check.userstatus == true && check.email == email) {
      setMysteps(2);
      // Mysteps(2)
      handleClose();
    }
  }, []);

  const Mysteps = async (no) => {
    if (no == 2) {
      setSubmitcount(1);

      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

      if (email && password && tandc && confirmpassword) {
        if (password == confirmpassword) {
          if (regex.test(email)) {
            if (check.email == email) {
              setMysteps(2);
              // handleClose()
              setMessage("");
              setLoading(false);
            } else {
              setLoading(true);

              const responce = await axios.post("/api/v1/user/sendemail", {
                email: email,
              });

              if (responce.data.message === "Email is already registered") {
                setMessage("Email is already registered");
                handleOpen();
                setLoading(false);
              }
              if (responce.data.message === "Email sent successfully") {
                setMessage("");
                handleOpen();
                setLoading(false);
                // console.log("local store");
                localStorage.setItem(
                  "veryfyuser",
                  JSON.stringify({
                    email: email,
                    password: password,
                    confirmpassword: confirmpassword,
                    tandc: tandc,
                  })
                );
              }
            }

            // setMysteps(no);
          } else {
            setMessage("Email is not valid");
          }
        } else {
          setMessage("Passwords don't match");
        }
      } else {
        setMessage("Please Fill Out this Field");
      }
    }

    if (no == 3) {
      setSubmitcount(2);

      // const pattern = new RegExp(/^[0-9\b]+$/);

      if (
        firstname &&
        lastname &&
        gender &&
        birthday &&
        phone &&
        profileimg &&
        idproofimg &&
        (Object.values(idproofimg).map(data => !data.name.match(/\.(jpg|jpeg|png|pdf|doc|docx)$/)).every(bool => !bool ? true : false)) &&
        profileimg[0].name.match(/\.(jpg|jpeg|png)$/)
      ) {
        // if (pattern.test(phone) && phone.length === 10) {
        setMessage("");
        setMysteps(no);
        // } else {
        //   setMessage("Please Fill Out this Field");
        // }
      } else {
        setMessage("Please Fill Out this Field");
      }
    }

    // -----  for step 3 values --- //

    if (no == 4) {
      setSubmitcount(3);
      const arr = Object.keys(user);
      const values = step3questions.map((data) => data.questionText);

      const multipleExist = values.every((value) => {
        return arr.includes(value);
      });

      let check1 = values.map((e) => user[e]);

      let valuesArray = Object.values(check1);
      let value;

      let check = valuesArray.find(
        (element) => element?.length == 0 || element == ""
      );

      if (check == undefined) {
        value = true;
      } else {
        value = false;
      }

      // console.log(user,"user");

      if (multipleExist && value) {
        setMysteps(no);
        setMessage("");
      } else {
        setMessage("Please Fill Out this Field");
      }
    }

    if (no == 5) {
      setSubmitcount(4);
      const arr = Object.keys(user);
      const values = step4questions.map((data) => data.questionText);
      const multipleExist = values.every((value) => {
        return arr.includes(value);
      });

      let check1 = values.map((e) => user[e]);

      let valuesArray = Object.values(check1);
      let value;

      let check = valuesArray.find(
        (element) => element?.length == 0 || element == ""
      );

      if (check == undefined) {
        value = true;
      } else {
        value = false;
      }

      if (datastp4 === "No / Skip") {
        setMysteps(no);
        setMessage("");
      } else if (datastp4 === "Yes")
        if (multipleExist && value) {
          setMysteps(no);
          setMessage("");
        } else {
          setMessage("Please Fill Out this Field");
        }
    }

    if (no == 1) {
      setSubmitcount(5);
      const arr = Object.keys(user);
      const values = step5questions.map((data) => data.questionText);

      const multipleExist = values.every((value) => {
        return arr.includes(value);
      });

      let check1 = values.map((e) => user[e]);

      let valuesArray = Object.values(check1);
      let value;

      let check = valuesArray.find(
        (element) => element?.length == 0 || element == ""
      );

      if (check == undefined) {
        value = true;
      } else {
        value = false;
      }

      if (datastp5 == "No / Skip") {
        submituserdata();
        localStorage.removeItem("userstatus");
        setMysteps(no);
        setMessage("");
      } else if (datastp5 == "Yes") {
        // console.log("called ");
        if (multipleExist && value) {
          if (
            user["Select your preferred areas"] &&
            user["Select your preferred areas"]?.length !== 0
          ) {
            submituserdata();
            localStorage.removeItem("userstatus");
            setMysteps(no);
            setMessage("");
          } else {
            setMessage("Please Fill Out this Field");
          }
        }
      }
    }
  };

  // my togel
  const togee3 = (name) => {
    setDropdown(name);
    setmytoga3(!mytoga3);
  };

  const togee4 = (name) => {
    setDropdown(name);
    setmytoga4(!mytoga4);
  };

  const togee5 = (name) => {
    setDropdown(name);
    setmytoga5(!mytoga5);
  };

  const handleClickAwaystep3 = () => {
    // console.log("handleClickAway");
    setmytoga3(false);
  };

  const handleClickAwaystep4 = () => {
    // console.log("handleClickAway");
    setmytoga4(false);
  };

  const handleClickAwaystep5 = () => {
    // console.log("handleClickAway");
    setmytoga5(false);
  };

  const [datastp4, setDataatp4] = useState({});
  const [datastp5, setDataatp5] = useState({});

  const [datacheckstp3, setDatacheckstp3] = useState({});
  const [datacheckstp4, setDatacheckstp4] = useState({});
  const [datacheckstp5, setDatacheckstp5] = useState({});
  const [checkboxdata, setcheckboxdata] = useState("");

  // const [Otherfildstp3, setOtherfildstp3] = useState(false);
  // const [Otherfildstp4, setOtherfildstp4] = useState(false);
  // const [Otherfildstp5, setOtherfildstp5] = useState(false);

  const [isOtherChecked, setIsOtherChecked] = useState({});

  const [otherdatastep3, setotherdatastep3] = useState("");

  const [otherdatastep4, setotherdatastep4] = useState("");

  const [otherdatastep5, setotherdatastep5] = useState("");

  const [otherValues, setotherValues] = useState([]);

  // const [otherDataValues, setOtherDataValues] = useState({});

  const checkgender = (e) => {
    if (e.target.value !== "Others") {
      setUser({ ...user, [e.target.name]: e.target.value });
    } else {
      setUser({ ...user, [e.target.name]: "" });
    }
  };

  const forotherstp3 = (e, qustionname) => {
    !e.target.checked &&
      user[qustionname]?.includes(otherValues[qustionname]) &&
      user[qustionname].pop() &&
      setotherValues({ ...otherValues, [qustionname]: "" });
    setotherdatastep3(qustionname);

    // if(Otherfildstp3){
    //   user[qustionname].pop();
    // }
    //   console.log(qustionname,"user----meet");
  };

  //  console.log(user,"user");
  const forotherstp4 = (e, qustionname) => {
    !e.target.checked &&
      user[qustionname]?.includes(otherValues[qustionname]) &&
      user[qustionname].pop() &&
      setotherValues({ ...otherValues, [qustionname]: "" });
    setotherdatastep4(qustionname);
    console.log(otherValues[qustionname]);
  };

  const forotherstp5 = (e, qustionname) => {
    console.log(otherValues);
    !e.target.checked &&
      user[qustionname]?.includes(otherValues[qustionname]) &&
      user[qustionname].pop() &&
      setotherValues({ ...otherValues, [qustionname]: "" });
    setotherdatastep5(qustionname);
  };

  // const [otherValues1, setotherValues1] = useState([]);
  // const [otherValues2, setotherValues2] = useState([]);

  const onValueChangestp3checkbox = (e, qustionname) => {
    let arrayids = []; //get the valu from the checkbox using getEliment
    document.getElementsByName(`${qustionname}[]`).forEach((data) => {
      if (data.checked) {
        // console.log(,"e");
        arrayids.push(data.value);
      }
    });
    setcheckboxdata(qustionname);
    setUser({ ...user, [e.target.name.split("[]").join("")]: arrayids });
    otherValues[qustionname] && arrayids.push(otherValues[qustionname]);
    setDatacheckstp3({
      ...datacheckstp3,
      [e.target.name.split("[]").join("")]: arrayids,
    });
  };

  const onValueChangestp3checkbox2 = (e, qustionname) => {
    let data = [];
    if (datacheckstp3[qustionname]) {
      data = [...datacheckstp3[qustionname], e.target.value];
    } else {
      data = [e.target.value];
    }
    setUser({ ...user, [e.target.name.split("[]").join("")]: data });
  };

  const onValueChangestp4checkbox = (e, qustionname) => {
    let arrayids = [];

    //get the valu from the checkbox using getEliment
    document.getElementsByName(`${qustionname}[]`).forEach((e) => {
      if (e.checked) {
        arrayids.push(e.value);
      }
    });

    setcheckboxdata(qustionname);
    setUser({ ...user, [e.target.name.split("[]").join("")]: arrayids });
    otherValues[qustionname] && arrayids.push(otherValues[qustionname]);
    setDatacheckstp4({
      ...datacheckstp4,
      [e.target.name.split("[]").join("")]: arrayids,
    });
  };

  const onValueChangestp4checkbox2 = (e, qustionname) => {
    let data = [];

    if (datacheckstp4[qustionname]) {
      data = [...datacheckstp4[qustionname], e.target.value];
    } else {
      data = [e.target.value];
    }
    setUser({ ...user, [e.target.name.split("[]").join("")]: data });
  };

  const onValueChangestp5checkbox = (e, qustionname) => {
    let arrayids = [];

    //get the valu from the checkbox using getEliment
    document.getElementsByName(`${qustionname}[]`).forEach((e) => {
      if (e.checked) {
        arrayids.push(e.value);
      }
    });
    setcheckboxdata(qustionname);
    setUser({ ...user, [e.target.name.split("[]").join("")]: arrayids });
    otherValues[qustionname] && arrayids.push(otherValues[qustionname]);
    setDatacheckstp5({
      ...datacheckstp5,
      [e.target.name.split("[]").join("")]: arrayids,
    });
  };

  const onValueChangestp5checkbox2 = (e, qustionname) => {
    let data = [];

    if (datacheckstp5[qustionname]) {
      data = [...datacheckstp5[qustionname], e.target.value];
    } else {
      data = [e.target.value];
    }
    setUser({ ...user, [e.target.name.split("[]").join("")]: data });
  };

  const onValueChangestp5checkboxstatic = (e, qustionname) => {
    let arrayids = [];
    //get the valu from the checkbox using getEliment
    document.getElementsByName("Select your preferred areas[]").forEach((e) => {
      if (e.checked) {
        arrayids.push(e.value);
      }
    });
    setcheckboxdata(qustionname);
    setUser({ ...user, [e.target.name.split("[]").join("")]: arrayids });
    otherValues[qustionname] && arrayids.push(otherValues[qustionname]);
    setDatacheckstp5({
      ...datacheckstp5,
      [e.target.name.split("[]").join("")]: arrayids,
    });
  };

  const onValueChangestp5checkboxstatic2 = (e, qustionname) => {
    let data = [];

    if (datacheckstp5[qustionname]) {
      data = [...datacheckstp5[qustionname], e.target.value];
    } else {
      data = [e.target.value];
    }
    setotherValues({ ...otherValues, [qustionname]: e.target.value });
    setUser({ ...user, [e.target.name.split("[]").join("")]: data });
  };

  // for static values
  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const [uploadedImg, setUploadedImg] = useState({});
  // for imagis
  const handlePhoto = (e) => {
    //for image uplode multiple files
    setUser({ ...user, [e.target.name]: e.target.files });

    var file = e.target.files[0];
    var reader = new FileReader();
    var url = reader.readAsDataURL(file);

    reader.onloadend = () => {
      setUploadedImg({ ...uploadedImg, [e.target.name]: reader.result });
      // console.log(reader.result,"hello")
    };
  };

  // submit data
  const submituserdata = async () => {
    const formdata = new FormData();
    for (var x = 0; x < profileimg.length; x++) {
      formdata.append(
        "profileimg",
        user.profileimg[x],
        user.profileimg[x].name
      );
    }

    for (var x = 0; x < idproofimg.length; x++) {
      formdata.append(
        "idproofimg",
        user.idproofimg[x],
        user.idproofimg[x].name
      );
    }

    formdata.append("data", JSON.stringify(user));

    const responce = await axios.post("/api/v1/user/registration", formdata);
    // console.log(responce,"responce of submit");
  };

  //google

  const googlelogin = useGoogleLogin({

    onSuccess: async (respose) => {
      try {
        const res = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${respose.access_token}`,
            },
          }
        );

        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    },
  });

  // console.log(gender3, " 3-----------------");
  // console.log(gender4, " 4-----------------");
  console.log(user,"0-------------" );


  const [provider, setProvider] = useState('')
  const [profile, setProfile] = useState("")

  const onLoginStart = useCallback(() => {
    alert('login start')
  }, [])

  const onLogoutSuccess = useCallback(() => {
    setProfile(null)
    setProvider('')
    alert('logout success')
  }, [])

  return (
    <body class="graphic-bg">
      <div class="log-reg-section clearfix">
        <div class="row g-0">
          <div class="col-lg-7 order-lg-2">
            <div class="right-panel">
              <div class="reg-heading">
                <h3 style={{ fontWeight: "bold" }}>User Registration</h3>
              </div>

              <div
                style={
                  showem == true && mysteps == 2
                    ? { display: "block" }
                    : { display: "none" }
                }
              >
                <p style={{ textDecorationLine: "underline" }}>{email}</p>
              </div>

              <div class="reg-container">
                <div class="reg-progress-bar">
                  <div class="step">
                    <div
                      style={
                        mysteps == 1
                          ? {
                            backgroundColor: "white",
                            border: "2px solid #0BC7B6",
                            "--stepColor": "#0BC7B6",
                          }
                          : { "--stepColor": "#BABABA" }
                      }
                      class={
                        mysteps == 2 ||
                          mysteps == 3 ||
                          mysteps == 4 ||
                          mysteps == 5
                          ? "bullet active"
                          : "bullet"
                      }
                    >
                      {" "}
                      <span
                        style={
                          mysteps == 1
                            ? { color: "#0BC7B6" }
                            : { color: "white" }
                        }
                      >
                        1
                      </span>{" "}
                    </div>

                    <div
                      style={mysteps == 1 ? { backgroundColor: "white" } : {}}
                      class={
                        mysteps == 2 ||
                          mysteps == 3 ||
                          mysteps == 4 ||
                          mysteps == 5
                          ? "check fas fa-check active"
                          : "check fas fa-check"
                      }
                    ></div>
                    <p
                      style={mysteps == 1 ? { color: "#0BC7B6" } : {}}
                      className={
                        mysteps == 2 ||
                          mysteps == 3 ||
                          mysteps == 4 ||
                          mysteps == 5
                          ? "active"
                          : ""
                      }
                    >
                      Step 1
                    </p>
                  </div>
                  <div class="step">
                    <div
                      style={
                        mysteps == 2
                          ? {
                            backgroundColor: "white",
                            border: "2px solid #0BC7B6",
                            "--stepColor": "#0BC7B6",
                          }
                          : { "--stepColor": "#BABABA" }
                      }
                      class={
                        mysteps == 3 || mysteps == 4 || mysteps == 5
                          ? "bullet active"
                          : "bullet"
                      }
                    >
                      {" "}
                      <span
                        style={
                          mysteps == 2
                            ? { color: "#0BC7B6" }
                            : { color: "white" }
                        }
                      >
                        2
                      </span>{" "}
                    </div>
                    <div
                      style={
                        mysteps == 2
                          ? { backgroundColor: "white", "--stepColor": "white" }
                          : { "--stepColor": "#BABABA" }
                      }
                      class={
                        mysteps == 3 || mysteps == 4 || mysteps == 5
                          ? "check fas fa-check active"
                          : "check fas fa-check"
                      }
                    ></div>
                    <p
                      style={mysteps == 2 ? { color: "#0BC7B6" } : {}}
                      className={
                        mysteps == 3 || mysteps == 4 || mysteps == 5
                          ? "active"
                          : ""
                      }
                    >
                      Step 2
                    </p>
                  </div>
                  <div class="step">
                    <div
                      style={
                        mysteps == 3
                          ? {
                            backgroundColor: "white",
                            border: "2px solid #0BC7B6",
                            "--stepColor": "#0BC7B6",
                          }
                          : { "--stepColor": "#BABABA" }
                      }
                      class={
                        mysteps == 4 || mysteps == 5
                          ? "bullet active"
                          : "bullet"
                      }
                    >
                      {" "}
                      <span
                        style={
                          mysteps == 3
                            ? { color: "#0BC7B6" }
                            : { color: "white" }
                        }
                      >
                        3
                      </span>{" "}
                    </div>
                    <div
                      class={
                        mysteps == 4 || mysteps == 5
                          ? "check fas fa-check active"
                          : "check fas fa-check"
                      }
                    ></div>
                    <p
                      style={mysteps == 3 ? { color: "#0BC7B6" } : {}}
                      className={mysteps == 4 || mysteps == 5 ? "active" : ""}
                    >
                      Step 3
                    </p>
                  </div>
                  <div class="step">
                    <div
                      style={
                        mysteps == 4
                          ? {
                            backgroundColor: "white",
                            "--stepColor": "#0BC7B6",
                          }
                          : { "--stepColor": "#BABABA" }
                      }
                      class={mysteps == 5 ? "bullet active" : "bullet"}
                    >
                      {" "}
                      <span
                        style={
                          mysteps == 4
                            ? { color: "#0BC7B6" }
                            : { color: "white" }
                        }
                      >
                        4
                      </span>{" "}
                    </div>
                    <div
                      class={
                        mysteps == 5
                          ? "check fas fa-check active"
                          : "check fas fa-check"
                      }
                    ></div>
                    <p
                      style={mysteps == 4 ? { color: "#0BC7B6" } : {}}
                      className={mysteps == 5 ? "active" : ""}
                    >
                      Step 4
                    </p>
                  </div>
                  <div class="step">
                    <div
                      style={
                        mysteps == 5
                          ? {
                            backgroundColor: "white",
                            border: "2px solid #0BC7B6",
                            "--stepColor": "#0BC7B6",
                          }
                          : { "--stepColor": "#BABABA" }
                      }
                      class={mysteps == 6 ? "bullet active" : "bullet"}
                    >
                      {" "}
                      <span
                        style={
                          mysteps == 5
                            ? { color: "#0BC7B6" }
                            : { color: "white" }
                        }
                      >
                        5
                      </span>{" "}
                    </div>
                    <div
                      class={
                        mysteps == 6
                          ? "check fas fa-check active"
                          : "check fas fa-check"
                      }
                    ></div>
                    <p
                      style={mysteps == 5 ? { color: "#0BC7B6" } : {}}
                      className={mysteps == 6 ? "active" : ""}
                    >
                      Step 5
                    </p>
                  </div>
                </div>

                <div class="form-outer">
                  <form encType="multipart/form-data" method="post" action="#">
                    <div
                      class="page"
                      style={{
                        "margin-left": "-" + (100 / 5) * (mysteps - 1) + "%",
                      }}
                    >
                      <div class="field-box">
                        {/* <a href="#modal01"> */}
                        <label>Email Address</label>
                        <input
                          onChange={(e) => onValueChange(e)}
                          name="email"
                          value={email}
                          id="my-input"
                          type="email"
                          class="input-email"
                          placeholder="Enter your email address"
                        />

                        {/* </a>{" "} */}
                      </div>

                      <div>
                        {!email & (submitcount > 0) &&
                          message !== "Email is not valid" ? (
                          <p className="worningmsg">
                            Please Fill Out this Field
                          </p>
                        ) : (
                          ""
                        )}
                      </div>

                      <div>
                        {message == "Email is not valid" ||
                          message == "Email is already registered" ? (
                          <p className="worningmsg">{message}</p>
                        ) : (
                          ""
                        )}
                      </div>
                      <div class="field-box">
                        <label>Password</label>
                        <input
                          onChange={(e) => onValueChange(e)}
                          id="password-field"
                          name="password"
                          value={password}
                          type={passwordShown ? "text" : "password"}
                          placeholder="Create your password"
                        />
                        <span
                          onClick={togglePassword}
                          toggle="#password-field"
                          class={
                            passwordShown
                              ? "fa fa-fw field-icon toggle-password fa-eye-slash"
                              : "fa fa-fw field-icon toggle-password fa-eye"
                          }
                        ></span>{" "}
                      </div>
                      <div>
                        {!password & (submitcount > 0) ? (
                          <p className="worningmsg">{message}</p>
                        ) : (
                          ""
                        )}
                      </div>

                      <div class="field-box">
                        <label>Confirm Password</label>
                        <input
                          onChange={(e) => onValueChange(e)}
                          name="confirmpassword"
                          value={confirmpassword}
                          id="retype-password-field"
                          type={conformpasswordShown ? "text" : "password"}
                          placeholder="Retype your password to confirm"
                        />
                        <span
                          onClick={toggleConformPassword}
                          toggle="#retype-password-field"
                          class={
                            conformpasswordShown
                              ? "fa fa-fw field-icon toggle-password fa-eye-slash"
                              : "fa fa-fw field-icon toggle-password fa-eye"
                          }
                        ></span>
                      </div>

                      {/* <div>
                        {!confirmpassword & (submitcount > 0) ? (
                          <p className="worningmsg">{message}</p>
                        ) : (
                          ""
                        )}
                      </div> */}

                      <div>
                        {(password !== confirmpassword) & (submitcount > 0) ? (
                          <p className="worningmsg">Passwords don't match</p>
                        ) : (
                          ""
                        )}
                      </div>

                      <div class="field mt-3">
                        <div style={{ textAlign: "left" }} class="form-check">
                          <input
                            class="form-check-input"
                            onChange={() => setTndc((tandc) => !tandc)}
                            type="checkbox"
                            checked={tandc}
                          />
                          <label class="form-check-label" for="defaultCheck1">
                            {" "}
                            I accept the{" "}
                            <Link target="_blank" to="/terms-conditions">
                              Terms & Conditions
                            </Link>{" "}
                            and <Link target="_blank" to="/privacy-policy">Privacy Policy</Link>{" "}
                          </label>
                        </div>
                        <div>
                          {!tandc & (submitcount > 0) ? (
                            <p className="worningmsg">{message}</p>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>

                      <div class="field mt-3 clearfix">
                        <a>
                          <button
                            type="button"
                            onClick={() => (
                              Mysteps(2),
                              setPreviose("animate__fadeInRight"),
                              setShowem(true)
                            )}
                            class="firstNext next"
                          >
                            {Loading ? (
                              <div
                                class="spinner-border"
                                style={{ marginTop: "-4px" }}
                                role="status"
                              >
                                <span
                                  style={{ marginBottom: "50px" }}
                                  class="sr-only"
                                >
                                  Loading...
                                </span>
                              </div>
                            ) : (
                              "Continue"
                            )}
                          </button>
                        </a>
                      </div>

                      <div class="social-login clearfix">
                        <h6>Or continue with</h6>
                        <ul>
                          <li>
                            <a onClick={googlelogin} href="#">
                              <img src="assets/img/google.png" alt="" />
                            </a>
                          </li>

                          <li style={{ position: "relative" }}>
                            <a href="#">
                              <img src="assets/img/facebook.png" alt="" />

                              <FacebookLogin
                                style={{
                                  width: "100%",
                                  border: "none",
                                  top: "0",
                                  background: "transparent",
                                  position: "absolute",
                                }}
                                appId="574640207665112"
                                onSuccess={(response) => {
                                  console.log("Login Success!", response);
                                }}
                                children=""
                                // fields="name,email,picture"
                                scope="public_profile,user_friends"
                                onFail={(error) => {
                                  console.log("Login Failed!", error);
                                }}
                                onProfileSuccess={(response) => {
                                  console.log("Get Profile Success!", response);
                                }}
                                autoLoad={false}
                              />
                            </a>
                          </li>
                          <li style={{ position: "relative" }} >
                            <a  href="#">
                              
                              <img src="assets/img/instagram.png" alt="" />


                          <LoginSocialInstagram
                                  
          client_id="605154911522174"
          client_secret="277ce85ae1b69648be84639f81b75651"
          redirect_uri={REDIRECT_URI}
          onLoginStart={onLoginStart}
          onLogoutSuccess={onLogoutSuccess}
          onReject={(err) => {
            console.log(err);
          }}

        >
        
        <button  style={{
                                  width: "100%",
                                  border: "none",
                                  height:"100%",
                                  top: "0",
                                  left:"0",
                                  background: "transparent",
                                  position: "absolute",
                                }} ></button>

        </LoginSocialInstagram>


  

                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="page">
                      <div class="row">
                        <div class="col-md-6">
                          <div class="field-box">
                            <label>First name</label>
                            <input
                              type="text"
                              placeholder="Enter your first name"
                              onChange={(e) => onValueChange(e)}
                              name="firstname"
                              value={firstname}
                            />
                          </div>
                          <div>
                            {!firstname & (submitcount > 1) ? (
                              <p className="worningmsg">{message}</p>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>

                        <div class="col-md-6">
                          <div class="field-box">
                            <label>Last name</label>
                            <input
                              type="text"
                              pattern="[A-Za-z]"
                              placeholder="Enter your last name"
                              onChange={(e) => onValueChange(e)}
                              name="lastname"
                              value={lastname}
                            />
                          </div>
                          <div>
                            {!lastname & (submitcount > 1) ? (
                              <p className="worningmsg">{message}</p>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>

                        <div class="col-md-6">
                          <div
                            style={
                              gender3 === "Others"
                                ? { display: "none" }
                                : { display: "block" }
                            }
                            class="field-box"
                          >
                            <label>Gender</label>
                            <select
                              name="gender"
                              onChange={(e) => (
                                setgender3(e.target.value), checkgender(e)
                              )}
                              value={gender3}
                            >
                              <option value="">Select</option>
                              <option value="Male">Male</option>
                              <option value="Female">Female</option>
                              <option value="Others">Others</option>
                            </select>
                          </div>

                          <div
                            style={
                              gender3 === "Others"
                                ? { display: "block" }
                                : { display: "none" }
                            }
                            class="field-box"
                          >
                            <label>Gender</label>
                            <input
                              value={gender}
                              placeholder="Enter your gender"
                              type="text"
                              name="gender"
                              onChange={(e) => onValueChange(e)}
                            />
                          </div>

                          <div>
                            {!gender & (submitcount > 1) ? (
                              <p className="worningmsg">{message}</p>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>

                        <div class="col-md-6">
                          <div class="field-box">
                            <label>Date of Birth</label>
                            <div className=" position-relative">
                              <input
                                style={{ display: "flex" }}
                                type="date"
                                class="mydatepic data"
                                placeholder="YYYY/MM/DD"
                                onChange={(e) => onValueChange(e)}
                                name="birthday"
                                value={birthday}
                                ref={inputRef}
                              // max='2022-12-28'
                              />
                              <span className="position-absolute mt-3 me-3 mydatepic top-0 end-0">
                                <DateRangeIcon
                                  onClick={() => {
                                    inputRef.current.focus();
                                  }}
                                />
                              </span>
                            </div>
                          </div>
                          <div>
                            {!birthday & (submitcount > 1) ? (
                              <p className="worningmsg">{message}</p>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>

                        <div class="col-md-6">
                          <div class="field-box">
                            <label>Phone Number</label>
                            <input
                              onChange={(e) => onValueChange(e)}
                              name="phone"
                              value={phone}
                              type="number"
                              placeholder="Enter your phone number"
                            />
                          </div>
                          {/* 
                          <div>
                            {
                              (phone?.length !== 10) &&
                              (submitcount > 1) ? (
                              <p className="worningmsg">Number is not valid</p>
                            ) : (
                              ""
                            )}
                          </div> */}

                          <div>
                            {!phone && submitcount > 1 ? (
                              <p className="worningmsg">{message}</p>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>

                        <div class="col-md-6">&nbsp;</div>
                        <div class="col-6">
                          <div class="field mt30">
                            <div class="form-group">
                              <label for="fileField" class="attachment">
                                <div class="row btn-file">
                                  <div class="btn-file__preview"></div>
                                  <div class="btn-file__actions">
                                    <div class="btn-file__actions__item col-xs-12 text-center">
                                      <div class="btn-file__actions__item--shadow">
                                        {" "}
                                        <img
                                          src="assets/img/icon-picture.png"
                                          alt=""
                                        />
                                        <div class="visible-lg-block mt-3"></div>
                                        {profileimg &&
                                          profileimg[0]?.name.match(
                                            /\.(jpg|jpeg|png)$/
                                          ) ? (
                                          <div>
                                            <img
                                              src={uploadedImg.profileimg}
                                              style={{
                                                width: "100px",
                                                height: "80px",
                                              }}
                                            />
                                          </div>
                                        ) : (
                                          <div>Upload profile picture </div>
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <input
                                  type="file"
                                  onChange={(e) => handlePhoto(e)}
                                  name="profileimg"
                                  id="fileField"
                                />
                              </label>
                            </div>
                          </div>
                          <div>
                            {!user.profileimg & (submitcount > 1) ? (
                              <p className="worningmsg">{message}</p>
                            ) : (
                              ""
                            )}
                            {profileimg &&
                              !profileimg[0]?.name.match(
                                /\.(jpg|jpeg|png)$/
                              ) && (
                                <p className="worningmsg">
                                  Please Select Valid Image
                                </p>
                              )}
                          </div>
                        </div>

                        <div class="col-6">
                          <div class="field mt30">
                            <div class="form-group">
                              <label for="fileField2" class="attachment">
                                <div class="row btn-file">
                                  <div class="btn-file__preview"></div>
                                  <div class="btn-file__actions">
                                    <div class="btn-file__actions__item col-xs-12 text-center">
                                      <div class="btn-file__actions__item--shadow">
                                        {" "}
                                        <img
                                          src="assets/img/icon-idproof.png"
                                          alt=""
                                        />
                                        <div class="visible-lg-block mt-3"></div>
                                        {console.log(idproofimg)}

                                        {idproofimg && (Object.values(idproofimg).map(data => !data.name.match(/\.(jpg|jpeg|png|pdf|doc|docx)$/)).every(bool => !bool ? true : false))
                                          ?
                                          Object.values(idproofimg).map(img => <p className="imgWrite">{img.name}</p>)
                                          :
                                          <div>
                                            Upload ID (Driver’s License /
                                            Passport / My Number Card etc.)
                                          </div>}
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <input type="file" onChange={(e) => handlePhoto(e)} name="idproofimg" multiple id="fileField2"/>
                              </label>
                            </div>
                          </div>

                          <div>
                            {!user.idproofimg & (submitcount > 1) ? (
                              <p className="worningmsg">{message}</p>
                            ) : (
                              ""
                            )}
                            {idproofimg &&
                              (Object.values(idproofimg).map((data) => !data.name.match(/\.(jpg|jpeg|png|pdf|doc|docx)$/)).find((e) => e === true)) && (
                                <p className="worningmsg">
                                  Please Select Valid Image
                                </p>
                              )}
                          </div>
                        </div>
                      </div>
                      <div class="field btns mt-3">
                        <button
                          type="button"
                          onClick={() => (
                            setMysteps(1),
                            setPreviose("animate__fadeInLeft"),
                            setShowem(false)
                          )}
                          class="prev-1 prev"
                        >
                          <i class="fa-solid fa-arrow-leftm"></i> Previous
                        </button>
                        <button
                          type="button"
                          onClick={() => (
                            Mysteps(3), setPreviose("animate__fadeInRight")
                          )}
                          class="next-1 next"
                        >
                          Next
                        </button>
                      </div>
                    </div>
                    {/* // dynamic qustions start */}

                    <div class="page">
                      <ClickAwayListener
                        onClickAway={() => {
                          {
                            // console.log("i got called step 3 ");
                          }
                          handleClickAwaystep3();
                        }}
                      >
                        <Box sx={{ position: "relative" }}>
                          {step3questions.map((myqustion, index) => (
                         
                            <div key={index}>


                            {myqustion.questionType == "Radio_Button" ? (
                                <div
                                  style={{ textAlign: "left" }}
                                  class="field mt30"
                                >
                                  <div class="form-check form-check-inline">
                                    <label class="form-check-label font18">
                                      {myqustion.questionText}:
                                    </label>
                                  </div>
                                  {myqustion.options.map(
                                    (optionsdata, index) => {
                                      return (
                                        <div
                                          key={index}
                                          class="form-check form-check-inline"
                                        >
                                          <input
                                            class="form-check-input"
                                            type="radio"
                                            name={
                                              myqustion.questionText
                                              // .split(" ")
                                              // .join("")
                                            }
                                            onChange={(e) => onValueChange(e)}
                                            id={myqustion.questionText}
                                            value={optionsdata}
                                          />
                                          <label
                                            class="form-check-label font18"
                                            for="inlineRadio1"
                                          >
                                            {optionsdata}
                                          </label>
                                        </div>
                                      );
                                    }
                                  )}
                                  {!Object.hasOwn(
                                    user,
                                    myqustion.questionText
                                  ) && submitcount > 2 ? (
                                    <p className="worningmsg">
                                      Please Fill Out this Field
                                    </p>
                                  ) : (
                                    ""
                                  )}
                                </div>
                              ) : (
                                ""
                              )}



                              <div>
                                {myqustion.questionType == "Check_Box" ? (
                                  <div class="field-box">
                                    <label>{myqustion.questionText}</label>
                                    <dl
                                      style={{ textAlign: "left",marginBottom:"0px" }}
                                      class="dropdown"
                                    >
                                      <dt>
                                        {" "}
                                        <a
                                          onClick={() =>
                                            togee3(myqustion.questionText)
                                          }
                                          href="#"
                                        >
                                          {" "}
                                          <span class="hida">
                                            {user[myqustion.questionText]?.join(
                                              ","
                                            )
                                              ? user[
                                                myqustion.questionText
                                              ]?.join("," + "  ")
                                              : myqustion.placeholder}
                                          </span>
                                          <p class="multiSel"></p>
                                        </a>
                                      </dt>
                                      <dd>
                                        <div class="mutliSelect">
                                          <ul
                                            style={
                                              dropdown ==
                                                myqustion.questionText &&
                                                mytoga3
                                                ? { display: "block" }
                                                : { display: "none" }
                                            }
                                          >
                                            {myqustion.options.map(
                                              (optionsdata, index) => {
                                                return (
                                                  <li>
                                                    <div
                                                      style={{
                                                        display: "flex",
                                                      }}
                                                      class="form-check  "
                                                    >
                                                      <input
                                                      
                                                        id={optionsdata}
                                                        class="form-check-input"
                                                        type="checkbox"
                                                        value={optionsdata}
                                                        name={`${myqustion.questionText}[]`}
                                                        onChange={(e) =>
                                                          onValueChangestp3checkbox(
                                                            e,
                                                            myqustion.questionText
                                                          )
                                                        }
                                                      />
                                                      <label
                                                        style={{
                                                          width: "100%",
                                                        }}
                                                        htmlFor={optionsdata}
                                                        class="form-check-label"
                                                      >
                                                        {optionsdata}
                                                      </label>
                                                    </div>
                                                  </li>
                                                );
                                              }
                                            )}
                                            <div class="form-check">
                                              <div style={{ display: "flex" }}>
                                                <input
                                                  id={`${myqustion.questionText}`}
                                                  class="form-check-input"
                                                  type="checkbox"
                                                  checked={
                                                    otherValues[
                                                    myqustion.questionText
                                                    ] ||
                                                    isOtherChecked[
                                                    myqustion.questionText
                                                    ]
                                                  }
                                                  onChange={(e) => (
                                                    forotherstp3(
                                                      e,
                                                      myqustion.questionText
                                                    ),
                                                    setIsOtherChecked({
                                                      ...isOtherChecked,
                                                      [myqustion.questionText]:
                                                        e.target.checked,
                                                    })
                                                    // setOtherfildstp3(
                                                    //   e.target.checked
                                                    // )
                                                  )}
                                                />
                                                <label
                                                  style={{
                                                    width: "100%",
                                                  }}
                                                  htmlFor={`${myqustion.questionText}`}
                                                  class="form-check-label"
                                                >
                                                  Others
                                                </label>
                                              </div>
                                              <div>
                                                <input
                                                  style={
                                                    otherValues[
                                                      myqustion.questionText
                                                    ] ||
                                                      isOtherChecked[
                                                      myqustion.questionText
                                                      ]
                                                      ? { display: "block" }
                                                      : { display: "none" }
                                                  }
                                                  id={`${myqustion.questionText}[]`}
                                                  // htmlFor="Others (short answer text)"
                                                  placeholder="enter a text"
                                                  type="text"
                                                  name={`${myqustion.questionText}[]`}
                                                  value={
                                                    otherValues &&
                                                    otherValues[
                                                    myqustion.questionText
                                                    ]
                                                  }
                                                  onKeyUp={(e) =>
                                                    onValueChangestp3checkbox2(
                                                      e,
                                                      myqustion.questionText
                                                    )
                                                  }
                                                  onChange={(e) => {
                                                    setotherValues({
                                                      ...otherValues,
                                                      [myqustion.questionText]:
                                                        e.target.value,
                                                    });
                                                    datacheckstp3[
                                                      myqustion.questionText
                                                    ] &&
                                                      datacheckstp3[
                                                        myqustion.questionText
                                                      ].find(
                                                        (value) =>
                                                          value ===
                                                          otherValues[
                                                          myqustion
                                                            .questionText
                                                          ]
                                                      ) &&
                                                      datacheckstp3[
                                                        myqustion.questionText
                                                      ].pop();
                                                  }}
                                                />
                                              </div>
                                            </div>
                                          </ul>
                                        </div>
                                      </dd>
                                    </dl>

                                    {checkboxdata && submitcount > 2 ? (
                                      <div>
                                        {user[myqustion.questionText]?.length ==
                                          0 ||
                                          user[myqustion.questionText] == "" ? (
                                          <>
                                            <p className="worningmsg">
                                              Please Fill Out this Field
                                            </p>
                                          </>
                                        ) : (
                                          ""
                                        )}
                                      </div>
                                    ) : (
                                      ""
                                    )}
                                    {!user.hasOwnProperty(
                                      myqustion.questionText
                                    ) && submitcount > 2 ? (
                                      <p className="worningmsg">
                                        Please Fill Out this Field
                                      </p>
                                    ) : (
                                      ""
                                    )}
                                  </div>
                                ) : (
                                  ""
                                )}
                              </div>
                         
                              <>
                                {myqustion.questionType == "Text" ? (
                                  <div class="field-box">
                                    <label>{myqustion.questionText}</label>
                                    <div class="field-box">
                                      <label>{myqustion.questionText}</label>
                                      <input
                                        type="text"
                                        name={myqustion.questionText}
                                        onChange={(e) => onValueChange(e)}
                                        placeholder={myqustion?.placeholder}
                                      />
                                    </div>

                                    <>
                                      {user[myqustion?.questionText]?.length ===
                                        0 && submitcount > 3 ? (
                                        <p className="worningmsg">
                                          Please Fill Out this Field
                                        </p>
                                      ) : (
                                        ""
                                      )}
                                    </>

                                    {!user.hasOwnProperty(
                                      myqustion?.questionText
                                    ) &
                                      (submitcount > 3) ? (
                                      <p className="worningmsg">
                                        Please Fill Out this Field
                                      </p>
                                    ) : (
                                      ""
                                    )}
                                  </div>
                                ) : (
                                  ""
                                )}
                              </>
                            </div>
                          ))}

                          <div class="field btns mt-5">
                            <button
                              type="button"
                              onClick={() => (
                                setMysteps(2),
                                setPreviose("animate__fadeInLeft")
                              )}
                              class="prev-2 prev"
                            >
                              <i class="fa-solid fa-arrow-leftm"></i> Previous
                            </button>
                            <button
                              type="button"
                              onClick={() => (
                                Mysteps(4), setPreviose("animate__fadeInRight")
                              )}
                              class="next-2 next"
                            >
                              Next
                            </button>
                          </div>
                        </Box>
                      </ClickAwayListener>
                    </div>

                    <div style={{ textAlign: "left" }} class="page">
                      <ClickAwayListener
                        onClickAway={() => {
                          {
                            // console.log("i got called step 4 ");
                          }
                          handleClickAwaystep4();
                        }}
                      >
                        <Box sx={{ position: "relative" }}>
                          {step4questions.map((myqustion, index) => (
                            <div key={index}>
                              {myqustion.questionType == "Radio_Button" ? (
                                <div class="field mt30">
                                  <div class="form-check form-check-inline">
                                    <label class="form-check-label font18">
                                      {myqustion.questionText}:
                                    </label>
                                  </div>

                                  {myqustion.options.map(
                                    (optionsdata, index) => {
                                      return (
                                        <div
                                          key={index}
                                          class="form-check form-check-inline"
                                        >
                                          <input
                                            class="form-check-input"
                                            type="radio"
                                            name={myqustion.questionText}
                                            onChange={(e) => (
                                              onValueChange(e),
                                              setDataatp4(e.target.value)
                                            )}
                                            id={myqustion.questionText}
                                            value={optionsdata}
                                          />
                                          <label
                                            class="form-check-label font18"
                                            for="inlineRadio1"
                                          >
                                            {optionsdata}
                                          </label>
                                        </div>
                                      );
                                    }
                                  )}

                                  {!Object.hasOwn(
                                    user,
                                    myqustion.questionText
                                  ) &
                                    (submitcount > 3) ? (
                                    <p className="worningmsg">
                                      Please Fill Out this Field
                                    </p>
                                  ) : (
                                    ""
                                  )}
                                </div>
                              ) : (
                                ""
                              )}

                              <>
                                {myqustion.questionType == "Check_Box" &&
                                  datastp4 === "Yes" ? (
                                  <div class="field-box">
                                    <label>{myqustion.questionText}</label>
                                    <dl
                                      style={{ textAlign: "left",marginBottom:"0px" }}
                                      class="dropdown"
                                    >
                                      <dt>
                                        {" "}
                                        <a
                                          onClick={() =>
                                            togee4(myqustion.questionText)
                                          }
                                          href="#"
                                        >
                                          {" "}
                                          <span class="hida">
                                            {user[myqustion.questionText]?.join(
                                              ","
                                            )
                                              ? user[
                                                myqustion.questionText
                                              ]?.join("," + "  ")
                                              : myqustion.placeholder}
                                          </span>
                                          <p class="multiSel"></p>
                                        </a>{" "}
                                      </dt>
                                      <dd>
                                        <div class="mutliSelect">
                                          <ul
                                            style={
                                              dropdown ==
                                                myqustion.questionText &&
                                                mytoga4
                                                ? { display: "block" }
                                                : { display: "none" }
                                            }
                                          >
                                            {myqustion.options.map(
                                              (optionsdata, index) => {
                                                return (
                                                  <li>
                                                    <div
                                                      style={{
                                                        display: "flex",
                                                      }}
                                                      class="form-check"
                                                    >
                                                      <input
                                                        id={optionsdata}
                                                        class="form-check-input"
                                                        type="checkbox"
                                                        value={optionsdata}
                                                        name={`${myqustion.questionText}[]`}
                                                        onChange={(e) =>
                                                          onValueChangestp4checkbox(
                                                            e,
                                                            myqustion.questionText
                                                          )
                                                        }
                                                      />
                                                      <label
                                                        style={{
                                                          width: "100%",
                                                        }}
                                                        htmlFor={optionsdata}
                                                        class="form-check-label"
                                                      >
                                                        {optionsdata}
                                                      </label>
                                                    </div>
                                                  </li>
                                                );
                                              }
                                            )}

                                            <div class="form-check  ">
                                              <div style={{ display: "flex" }}>
                                                <input
                                                  id={`${myqustion.questionText}`}
                                                  class="form-check-input"
                                                  checked={
                                                    otherValues[
                                                    myqustion.questionText
                                                    ] ||
                                                    isOtherChecked[
                                                    myqustion.questionText
                                                    ]
                                                  }
                                                  type="checkbox"
                                                  onChange={(e) => (
                                                    forotherstp4(
                                                      e,
                                                      myqustion.questionText
                                                    ),
                                                    setIsOtherChecked({
                                                      ...isOtherChecked,
                                                      [myqustion.questionText]:
                                                        e.target.checked,
                                                    })
                                                    // setOtherfildstp4(
                                                    //   e.target.checked
                                                    // )
                                                  )}
                                                />
                                                <label
                                                  style={{
                                                    width: "100%",
                                                  }}
                                                  htmlFor={`${myqustion.questionText}`}
                                                  class="form-check-label"
                                                >
                                                  Others
                                                  {/* {console.log(Otherfildstp4,"Otherfildstp4")} */}
                                                </label>
                                              </div>
                                              <div>
                                                <input
                                                  style={
                                                    otherValues[
                                                      myqustion.questionText
                                                    ] ||
                                                      isOtherChecked[
                                                      myqustion.questionText
                                                      ]
                                                      ? { display: "block" }
                                                      : { display: "none" }
                                                  }
                                                  id="Others (short answer text)"
                                                  htmlFor="Others (short answer text)"
                                                  placeholder="enter a text"
                                                  type="text"
                                                  name={`${myqustion.questionText}[]`}
                                                  value={
                                                    otherValues &&
                                                    otherValues[
                                                    myqustion.questionText
                                                    ]
                                                  }
                                                  onKeyUp={(e) =>
                                                    onValueChangestp4checkbox2(
                                                      e,
                                                      myqustion.questionText
                                                    )
                                                  }
                                                  onChange={(e) => {
                                                    setotherValues({
                                                      ...otherValues,
                                                      [myqustion.questionText]:
                                                        e.target.value,
                                                    });
                                                    datacheckstp4[
                                                      myqustion.questionText
                                                    ] &&
                                                      datacheckstp4[
                                                        myqustion.questionText
                                                      ].find(
                                                        (value) =>
                                                          value ===
                                                          otherValues[
                                                          myqustion
                                                            .questionText
                                                          ]
                                                      ) &&
                                                      datacheckstp4[
                                                        myqustion.questionText
                                                      ].pop();
                                                  }}
                                                />
                                              </div>
                                            </div>
                                          </ul>
                                        </div>
                                      </dd>
                                    </dl>
                                    {checkboxdata && submitcount > 3 ? (
                                      <div>
                                        {user[myqustion.questionText]?.length ==
                                          0 ||
                                          user[myqustion.questionText] == "" ? (
                                          <>
                                            <p className="worningmsg">
                                              Please Fill Out this Field
                                            </p>
                                          </>
                                        ) : (
                                          ""
                                        )}
                                      </div>
                                    ) : (
                                      ""
                                    )}
                                    {!user.hasOwnProperty(
                                      myqustion.questionText
                                    ) && submitcount > 3 ? (
                                      <p className="worningmsg">
                                        Please Fill Out this Field
                                      </p>
                                    ) : (
                                      ""
                                    )}
                                  </div>
                                ) : (
                                  ""
                                )}
                              </>

                              <>
                                {myqustion.questionType == "Text" ? (
                                  <div class="field-box">
                                    <label>{myqustion.questionText}</label>
                                    <div class="field-box">
                                      <label>{myqustion.questionText}</label>
                                      <input
                                        type="text"
                                        name={myqustion.questionText}
                                        onChange={(e) => onValueChange(e)}
                                        placeholder={myqustion?.placeholder}
                                      />
                                    </div>

                                    <>
                                      {user[myqustion?.questionText]?.length ===
                                        0 && submitcount > 3 ? (
                                        <p className="worningmsg">
                                          Please Fill Out this Field
                                        </p>
                                      ) : (
                                        ""
                                      )}
                                    </>

                                    {!user.hasOwnProperty(
                                      myqustion?.questionText
                                    ) &
                                      (submitcount > 3) ? (
                                      <p className="worningmsg">
                                        Please Fill Out this Field
                                      </p>
                                    ) : (
                                      ""
                                    )}
                                  </div>
                                ) : (
                                  ""
                                )}
                              </>
                            </div>
                          ))}

                          <div class="field btns mt-5">
                            <button
                              type="button"
                              onClick={() => (
                                setMysteps(3),
                                setPreviose("animate__fadeInLeft")
                              )}
                              class="prev-3 prev"
                            >
                              <i class="fa-solid fa-arrow-leftm"></i> Previous
                            </button>
                            <button
                              type="button"
                              onClick={() => (
                                Mysteps(5), setPreviose("animate__fadeInRight")
                              )}
                              class="next-3 next"
                            >
                              Next
                            </button>
                          </div>
                        </Box>
                      </ClickAwayListener>
                    </div>

                    <div style={{ textAlign: "left" }} className="page">
                      <ClickAwayListener
                        onClickAway={() => {
                          {
                            // console.log("i got called  step 5");
                          }
                          handleClickAwaystep5();
                        }}
                      >
                        <Box sx={{ position: "relative" }}>
                          {step5questions.map((myqustion, index) => (
                            <div key={index}>
                              {myqustion.questionType == "Radio_Button" ? (
                                <div class="field mt30">
                                  <div class="form-check form-check-inline">
                                    <label class="form-check-label font18">
                                      {myqustion.questionText}:
                                    </label>
                                  </div>
                                  {myqustion.options.map(
                                    (optionsdata, index) => {
                                      return (
                                        <div
                                          key={index}
                                          class="form-check form-check-inline"
                                        >
                                          <input
                                            class="form-check-input"
                                            type="radio"
                                            name={myqustion.questionText}
                                            onChange={(e) => (
                                              onValueChange(e),
                                              setDataatp5(e.target.value)
                                            )}
                                            id={myqustion.questionText}
                                            value={optionsdata}
                                          />
                                          <label
                                            class="form-check-label font18"
                                            for="inlineRadio1"
                                          >
                                            {optionsdata}
                                          </label>
                                        </div>
                                      );
                                    }
                                  )}

                                  {!Object.hasOwn(
                                    user,
                                    myqustion.questionText
                                  ) &
                                    (submitcount > 4) ? (
                                    <p className="worningmsg">
                                      Please Fill Out this Field
                                    </p>
                                  ) : (
                                    ""
                                  )}
                                </div>
                              ) : (
                                ""
                              )}

                              <>
                                {myqustion.questionType == "Check_Box" ? (
                                  <div class="field-box">
                                    <label>{myqustion.questionText}</label>
                                    <dl
                                      style={{ textAlign: "left",marginBottom:"0px" }}
                                      class="dropdown"
                                    >
                                      <dt>
                                        {" "}
                                        <a
                                          onClick={() =>
                                            togee5(myqustion.questionText)
                                          }
                                          href="#"
                                        >
                                          {" "}
                                          <span class="hida">
                                            {user[myqustion.questionText]?.join(
                                              ","
                                            )
                                              ? user[
                                                myqustion.questionText
                                              ]?.join("," + "  ")
                                              : myqustion.placeholder}
                                          </span>
                                          <p class="multiSel"></p>
                                        </a>{" "}
                                      </dt>
                                      <dd>
                                        <div class="mutliSelect">
                                          <ul
                                            style={
                                              dropdown ==
                                                myqustion.questionText &&
                                                mytoga5
                                                ? { display: "block" }
                                                : { display: "none" }
                                            }
                                          >
                                            {myqustion.options.map(
                                              (optionsdata, index) => {
                                                return (
                                                  <li>
                                                    <div
                                                      style={{
                                                        display: "flex",
                                                      }}
                                                      class="form-check"
                                                    >
                                                      <input
                                                        id={optionsdata}
                                                        class="form-check-input"
                                                        type="checkbox"
                                                        value={optionsdata}
                                                        name={`${myqustion.questionText}[]`}
                                                        onChange={(e) =>
                                                          onValueChangestp5checkbox(
                                                            e,
                                                            myqustion.questionText
                                                          )
                                                        }
                                                      />
                                                      <label
                                                        class="form-check-label"
                                                        style={{
                                                          width: "100%",
                                                        }}
                                                        htmlFor={optionsdata}
                                                      >
                                                        {" "}
                                                        {optionsdata}
                                                      </label>
                                                    </div>
                                                  </li>
                                                );
                                              }
                                            )}

                                            <div class="form-check">
                                              <div style={{ display: "flex" }}>
                                                <input
                                                  id={`${myqustion.questionText}`}
                                                  class="form-check-input"
                                                  checked={
                                                    otherValues[
                                                    myqustion.questionText
                                                    ] ||
                                                    isOtherChecked[
                                                    myqustion.questionText
                                                    ]
                                                  }
                                                  type="checkbox"
                                                  onChange={(e) => (
                                                    forotherstp5(
                                                      myqustion.questionText
                                                    ),
                                                    setIsOtherChecked({
                                                      ...isOtherChecked,
                                                      [myqustion.questionText]:
                                                        e.target.checked,
                                                    })
                                                    // setOtherfildstp5(
                                                    //   e.target.checked
                                                    // )
                                                  )}
                                                />
                                                <label
                                                  style={{
                                                    width: "100%",
                                                  }}
                                                  htmlFor={`${myqustion.questionText}`}
                                                  class="form-check-label"
                                                >
                                                  Others
                                                  {/* {console.log(Otherfildstp4,"Otherfildstp4")} */}
                                                </label>
                                              </div>
                                              <div>
                                                <input
                                                  style={
                                                    otherValues[
                                                      myqustion.questionText
                                                    ] ||
                                                      isOtherChecked[
                                                      myqustion.questionText
                                                      ]
                                                      ? { display: "block" }
                                                      : { display: "none" }
                                                  }
                                                  id="Others (short answer text)"
                                                  htmlFor="Others (short answer text)"
                                                  placeholder="enter a text"
                                                  type="text"
                                                  name={`${myqustion.questionText}[]`}
                                                  onKeyUp={(e) =>
                                                    onValueChangestp5checkbox2(
                                                      e,
                                                      myqustion.questionText
                                                    )
                                                  }
                                                  onChange={(e) => {
                                                    setotherValues({
                                                      ...otherValues,
                                                      [myqustion.questionText]:
                                                        e.target.value,
                                                    });
                                                    datacheckstp5[
                                                      myqustion.questionText
                                                    ] &&
                                                      datacheckstp5[
                                                        myqustion.questionText
                                                      ].find(
                                                        (value) =>
                                                          value ===
                                                          otherValues[
                                                          myqustion
                                                            .questionText
                                                          ]
                                                      ) &&
                                                      datacheckstp5[
                                                        myqustion.questionText
                                                      ].pop();
                                                  }}
                                                />
                                              </div>
                                            </div>
                                          </ul>
                                        </div>
                                      </dd>
                                    </dl>
                                    {checkboxdata && submitcount > 4 ? (
                                      <div>
                                        {user[myqustion.questionText]?.length ==
                                          0 ||
                                          user[myqustion.questionText] == "" ? (
                                          <>
                                            <p className="worningmsg">
                                              Please Fill Out this Field
                                            </p>
                                          </>
                                        ) : (
                                          ""
                                        )}
                                      </div>
                                    ) : (
                                      ""
                                    )}
                                    {!user.hasOwnProperty(
                                      myqustion.questionText
                                    ) && submitcount > 4 ? (
                                      <p className="worningmsg">
                                        Please Fill Out this Field
                                      </p>
                                    ) : (
                                      ""
                                    )}
                                  </div>
                                ) : (
                                  ""
                                )}
                              </>

                              <>
                                {myqustion.questionType == "Text" ? (
                                  <div class="field-box">
                                    <label>{myqustion.questionText}</label>
                                    <div class="field-box">
                                      <label>{myqustion.questionText}</label>
                                      <input
                                        type="text"
                                        name={myqustion.questionText}
                                        onChange={(e) => onValueChange(e)}
                                        placeholder={myqustion?.placeholder}
                                      />
                                    </div>

                                    <>
                                      {user[myqustion?.questionText]?.length ===
                                        0 && submitcount > 4 ? (
                                        <p className="worningmsg">
                                          Please Fill Out this Field
                                        </p>
                                      ) : (
                                        ""
                                      )}
                                    </>

                                    {!user.hasOwnProperty(
                                      myqustion?.questionText
                                    ) &
                                      (submitcount > 4) ? (
                                      <p className="worningmsg">
                                        Please Fill Out this Field
                                      </p>
                                    ) : (
                                      ""
                                    )}
                                  </div>
                                ) : (
                                  ""
                                )}
                              </>
                            </div>
                          ))}

                          <>
                            {datastp5 == "Yes" ? (
                              <div class="field-box">
                                <label>
                                  Please select your preferred areas to have
                                  training sessions
                                </label>
                                <dl
                                  style={{ textAlign: "left",marginBottom:"0px" }}
                                  class="dropdown3"
                                >
                                  <dt>
                                    {" "}
                                    <a
                                      onClick={() =>
                                        togee5(
                                          "Please select your preferred areas to have trainingsessions"
                                        )
                                      }
                                      href="#"
                                    >
                                      {" "}
                                      <span class="hida">
                                        {user[
                                          "Select your preferred areas"
                                        ]?.join(",")
                                          ? user[
                                            "Select your preferred areas"
                                          ]?.join("," + "  ")
                                          : "Select your preferred areas..."}
                                      </span>
                                      <p class="multiSel"></p>
                                    </a>{" "}
                                  </dt>
                                  <dd>
                                    <div class="mutliSelect">
                                      <ul
                                        style={
                                          dropdown ==
                                            "Please select your preferred areas to have trainingsessions" &&
                                            mytoga5
                                            ? { display: "block" }
                                            : { display: "none" }
                                        }
                                      >
                                        <div class="row">
                                          <div class="col-md-6">
                                            <iframe
                                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50921.95570487541!2d-95.7479105244765!3d37.090303318752795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m3!3e6!4m0!4m0!5e0!3m2!1sen!2sin!4v1668257351929!5m2!1sen!2sin"
                                              width="100%"
                                              height="200"
                                              style={{ border: "0" }}
                                              allowfullscreen=""
                                              loading="lazy"
                                              referrerpolicy="no-referrer-when-downgrade"
                                            ></iframe>
                                          </div>
                                          <div
                                            style={{
                                              overflowX: "hidden",
                                              overflowY: "auto",
                                              height: "220px",
                                            }}
                                            class="col-md-6"
                                          >
                                            {options.map(
                                              (optionsstp5map, index) => {
                                                return (
                                                  <li key={index}>
                                                    <div
                                                      style={{
                                                        display: "flex",
                                                      }}
                                                      class="form-check"
                                                    >
                                                      <input
                                                        id={optionsstp5map}
                                                        class="form-check-input"
                                                        type="checkbox"
                                                        value={optionsstp5map}
                                                        name="Select your preferred areas[]"
                                                        onChange={(e) =>
                                                          onValueChangestp5checkboxstatic(
                                                            e,
                                                            "Select your preferred areas"
                                                          )
                                                        }
                                                      />
                                                      <label
                                                        class="form-check-label"
                                                        style={{
                                                          width: "100%",
                                                        }}
                                                        htmlFor={optionsstp5map}
                                                      >
                                                        {optionsstp5map}
                                                      </label>
                                                    </div>
                                                  </li>
                                                );
                                              }
                                            )}

                                            {/* <div class="form-check  ">
                                              <div style={{ display: "flex" }}>
                                                <input
                                                  id="Select your preferred areas"
                                                  class="form-check-input"
                                                  type="checkbox"
                                                  checked={
                                                    otherValues[
                                                      'Select your preferred areas'
                                                    ] || isOtherChecked['Select your preferred areas']
                                                  }
                                                  onChange={(e) => (
                                                    forotherstp5(
                                                      e,
                                                      "Select your preferred areas"
                                                    ),
                                                    setIsOtherChecked({...isOtherChecked,['Select your preferred areas']:e.target.checked})
                                                    // setOtherfildstp5(
                                                    //   e.target.checked
                                                    // )
                                                  )}
                                                />
                                                <label
                                                  style={{
                                                    width: "100%",
                                                  }}
                                                  htmlFor="Select your preferred areas"
                                                  class="form-check-label"
                                                >
                                                  Others
                                                </label>
                                              </div>
                                              <div>
                                                <input
                                                  style={
                                                    otherValues[
                                                      'Select your preferred areas'
                                                    ] || isOtherChecked['Select your preferred areas']
                                                      ? { display: "block" }
                                                      : { display: "none" }
                                                  }
                                                  id="Others (short answer text)"
                                                  htmlFor="Others (short answer text)"
                                                  placeholder="enter a text"
                                                  type="text"
                                                  name="Select your preferred areas[]"
                                                  value={
                                                    otherValues &&
                                                    otherValues[
                                                      "Select your preferred areas"
                                                    ]
                                                  }
                                                  onKeyUp={(e) =>
                                                    onValueChangestp5checkboxstatic2(
                                                      e,
                                                      "Select your preferred areas"
                                                    )
                                                  }
                                                  onChange={(e) => {
                                                    setotherValues({
                                                      ...otherValues,
                                                      ["Select your preferred areas"]:
                                                        e.target.value,
                                                    });
                                                    datacheckstp5[
                                                      "Select your preferred areas"
                                                    ] &&
                                                      datacheckstp5[
                                                        "Select your preferred areas"
                                                      ].find(
                                                        (value) =>
                                                          value ===
                                                          otherValues[
                                                            "Select your preferred areas"
                                                          ]
                                                      ) &&
                                                      datacheckstp5[
                                                        "Select your preferred areas"
                                                      ].pop();
                                                  }}
                                                />
                                              </div>
                                            </div> */}
                                          </div>
                                        </div>
                                      </ul>
                                    </div>
                                  </dd>
                                </dl>

                                {checkboxdata && submitcount > 4 ? (
                                  <div>
                                    {user["Select your preferred areas"]
                                      ?.length == 0 ||
                                      user["Select your preferred areas"] ==
                                      "" ? (
                                      <>
                                        <p className="worningmsg">
                                          Please Fill Out this Field
                                        </p>
                                      </>
                                    ) : (
                                      ""
                                    )}
                                  </div>
                                ) : (
                                  ""
                                )}
                                {!user.hasOwnProperty(
                                  "Select your preferred areas"
                                ) && submitcount > 4 ? (
                                  <p className="worningmsg">
                                    Please Fill Out this Field
                                  </p>
                                ) : (
                                  ""
                                )}
                              </div>
                            ) : (
                              ""
                            )}
                          </>

                          <div class="field btns mt-5">
                            <button
                              type="button"
                              onClick={() => (
                                setMysteps(4),
                                setPreviose("animate__fadeInLeft")
                              )}
                              class="prev-4 prev"
                            >
                              <i class="fa-solid fa-arrow-leftm"></i> Previous
                            </button>
                            <button
                              type="button"
                              onClick={() => (
                                Mysteps(1), setPreviose("animate__fadeInRight")
                              )}
                              class="submit"
                            >
                              Submit
                            </button>
                          </div>
                        </Box>
                      </ClickAwayListener>
                    </div>
                  </form>
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
              {/* <a href="index.html"></a> */}
            </div>
            <div class="no-account">
              <h4>Already have an account?</h4>
              <div class="link">
                <Link
                  // style={{ marginRight: "4px" }}
                  to="/login"
                >
                  Login Now
                </Link>
                {/* <a href="login.html"></a> */}
                <i class="fa-solid fa-arrow-rightm"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <button
              onClick={() => handleClose()}
              data-remodal-action="close"
              class="remodal-close"
              aria-label="Close"
            ></button>

            <div
              class="remodal remodal-is-initialized remodal-is-opened"
              data-remodal-id="modal01"
              role="dialog"
              aria-labelledby="modal1Title"
              aria-describedby="modal1Desc"
              tabindex="-1"
            >
              {/* <button data-remodal-action="close" class="remodal-close" aria-label="Close"></button> */}
              <div class="clearfix">
                <p>
                  <img src="assets/img/icon-envolop.png" alt="" />
                </p>

                {message === "Email is already registered" ? (
                  <h3 style={{ textAlign: "center", fontSize: "30px" }}>
                    This email is already registered
                    <span style={{ color: "#0BC7B6", padding: "5px" }}>
                      {email}
                    </span>
                  </h3>
                ) : (
                  <h3 style={{ textAlign: "center", fontSize: "30px" }}>
                    Thanks for your interest! Continue registering by clicking
                    on the verification link sent to
                    <span style={{ color: "#0BC7B6", padding: "5px" }}>
                      {email}
                    </span>
                  </h3>
                )}

                {/* <button data-remodal-action="close" aria-label="Close" type="button" class="verify">Verify</button> */}
              </div>
            </div>
          </Box>
        </Modal>
      </div>
    </body>
  );
};

export default UserRegistration;
