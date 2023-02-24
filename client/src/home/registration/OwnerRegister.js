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

const mytime = [
  "00:00",
  "00:15",
  "00:30",
  "00:45",
  "01:00",
  "01:15",
  "01:30",
  "01:45",
  "02:00",
  "02:15",
  "02:30",
  "02:45",
  "03:00",
  "03:15",
  "03:30",
  "03:45",
  "04:00",
  "04:15",
  "04:30",
  "04:45",
  "05:00",
  "05:15",
  "05:30",
  "05:45",
  "06:00",
  "06:15",
  "06:30",
  "06:45",
  "07:00",
  "07:15",
  "07:30",
  "07:45",
  "08:00",
  "08:15",
  "08:30",
  "08:45",
  "09:00",
  "09:15",
  "09:30",
  "09:45",
  "10:00",
  "10:15",
  "10:30",
  "10:45",
  "11:00",
  "11:15",
  "11:30",
  "11:45",
  "12:00",
  "12:15",
  "12:30",
  "12:45",
  "13:00",
  "13:15",
  "13:30",
  "13:45",
  "14:00",
  "14:15",
  "14:30",
  "14:45",
  "15:00",
  "15:15",
  "15:30",
  "15:45",
  "16:00",
  "16:15",
  "16:30",
  "16:45",
  "17:00",
  "17:15",
  "17:30",
  "17:45",
  "18:00",
  "18:15",
  "18:30",
  "18:45",
  "19:00",
  "19:15",
  "19:30",
  "19:45",
  "20:00",
  "20:15",
  "20:30",
  "20:45",
  "21:00",
  "21:15",
  "21:30",
  "21:45",
  "22:00",
  "22:15",
  "22:30",
  "22:45",
  "23:00",
  "23:15",
  "23:30",
  "23:45",
  "00:00",
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
  gymName: "",
  gymAddress: "",
  GymRentalRate: "",
  gymImg: "",
  gymAccessImg: "",
  starttime: "",
  endtime: "",
};

const OwnerRegister = () => {
  const [personName, setPersonName] = React.useState([]);
  const [showem, setShowem] = React.useState(false);
  const location = useLocation();
  const { pathname } = location;
  const [Loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [allquestions, setAllQuestions] = useState([]);
  const [step3questions, setStep3questions] = useState([]);
  const [step4questions, setStep4questions] = useState([]);
  const [step5questions, setStep5questions] = useState([]);
  const [gender3, setgender3] = useState("");

  const [dropdown2, setDropdown2] = React.useState(false);
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

  const getAllQuestions = async () => {
    setLoading(true);
    const usertyp = "owner";
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
  const checkboxstp3Ref = useRef(null);

  const [previose, setPreviose] = useState("animate__fadeInRight");
  const [message, setMessage] = useState("");
  const [submitcount, setSubmitcount] = useState(0);
  const [dropdown, setDropdown] = useState("");
  const [mytoga3, setmytoga3] = useState(false);
  const [mytoga33, setmytoga33] = useState(false);
  const [mytoga4, setmytoga4] = useState(false);
  const [mytoga5, setmytoga5] = useState(false);
  const [mycheck3, setmycheck3] = useState(false);

  let list = window.localStorage.getItem("veryfyowner");

  // let newdata = [[...getCdata,...list]]
  let data = list == null ? [] : JSON.parse(list);

  let checkme = window.localStorage.getItem("ownerstatus");

  // let newdata = [[...getCdata,...list]]
  let check = checkme == null ? [] : JSON.parse(checkme);

  // const [dropdown2, setDropdown2] = useState(false);

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
    gymImg,
    idproofimg,
    gymName,
    gymAddress,
    GymRentalRate,
    gymAccessImg,
    starttime,
    endtime,
  } = user;

  useEffect(() => {
    localStorage.removeItem("veryfyowner");
  }, []);

  //for display data on page lode
  useEffect(() => {
    if (check.ownerstatus == true && check.email == email) {
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

              const responce = await axios.post("/api/v1/gymowner/sendemail", {
                email: email,
              });

              if (responce.data.message === "Email is already registered") {
                setMessage("Email is already registered");
                handleOpen();
                setLoading(false);
              }
              // console.log(responce.data.message === "Email sent successfully")
              if (responce.data.message === "Email sent successfully") {
                setMessage("");
                handleOpen();
                setLoading(false);
                // console.log("local store");
                localStorage.setItem(
                  "veryfyowner",
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
        setMessage("Please fill out this field");
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
        //   setMessage("Please fill out this field");
        // }
      } else {
        setMessage("Please fill out this field");
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
      let val1;

      let check = valuesArray.find(
        (element) => element.length == 0 || element == ""
      );

      if (check == undefined) {
        val1 = true;
      } else {
        val1 = false;
      }

      if (
        multipleExist &&
        gymName &&
        gymAddress &&
        GymRentalRate &&
        gymImg &&
        starttime &&
        endtime &&
        val1 &&
        (Object.values(gymImg).map(data => !data.name.match(/\.(jpg|jpeg|png)$/)).every(bool => !bool ? true : false))
      ) {
        setMysteps(no);
        setMessage("");
      } else {
        setMessage("Please fill out this field");
      }
      // }
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
        (element) => element.length == 0 || element == ""
      );

      if (check == undefined) {
        value = true;
      } else {
        value = false;
      }

      if (
        multipleExist &&
        gymAccessImg &&
        value &&
        (Object.values(gymAccessImg).map(data => !data.name.match(/\.(jpg|jpeg|png)$/)).every(bool => !bool ? true : false))
      ) {
        setMysteps(no);
        setMessage("");
      } else {
        setMessage("Please fill out this field");
      }
      // }

      if (datastp4 == "No / Skip") {
        setMysteps(no);
        setMessage("");
      }
    }

    if (no == 1) {
      setSubmitcount(5);
      const arr = Object.keys(user);

      const values = step5questions.map((data) => data.questionText);

      let values3 = values.filter(
        (e) => e !== "Please share with us if there are any other comments." && e !== "Are you a Personal Trainer and also provide Personal Training services"
      );

      const multipleExist = values3.every((value) => {
        return arr.includes(value);
      });

      let check1 = values3.map((e) => user[e]);

      let valuesArray = Object.values(check1);
      let val2;

      let check = valuesArray.find(
        (element) => element?.length == 0 || element == ""
      );

      if (check == undefined) {
        val2 = true;
      } else {
        val2 = false;
      }
      if (multipleExist && val2) {
        console.log("if called ");
        submituserdata();
        localStorage.removeItem("ownerstatus");
        setMysteps(no);
        setMessage("");
      } else {
        setMessage("Please fill out this field");
      }

      // if (datastp5 == "No / Skip") {
      //   // submituserdata();
      //   // localStorage.removeItem("ownerstatus");
      //   // setMysteps(no);
      //   // setMessage("");
      // }
    }
  };

  // When the button is clicked log the current state

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

  // for close the dropdown on click outside step 3
  const ref3 = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref3.current && !ref3.current.contains(event.target)) {
        setmytoga3(false);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [mytoga3]);

  // for close the dropdown on click outside step 4
  const ref4 = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref4.current && !ref4.current.contains(event.target)) {
        setmytoga4(false);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [mytoga4]);

  // for close the dropdown on click outside step 5
  const ref5 = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref5.current && !ref5.current.contains(event.target)) {
        setmytoga5(false);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [mytoga5]);

  const [datastp4, setDataatp4] = useState({});
  const [datastp5, setDataatp5] = useState({});

  const [datacheckstp3, setDatacheckstp3] = useState([]);
  const [datacheckstp4, setDatacheckstp4] = useState([]);
  const [datacheckstp5, setDatacheckstp5] = useState([]);

  const [checkboxdata, setcheckboxdata] = useState("");

  // const [Otherfildstp3, setOtherfildstp3] = useState(false);
  // const [Otherfildstp4, setOtherfildstp4] = useState(false);
  // const [Otherfildstp5, setOtherfildstp5] = useState(false);

  const [isOtherChecked, setIsOtherChecked] = useState({});

  const [otherdatastep3, setotherdatastep3] = useState("");

  const [otherdatastep4, setotherdatastep4] = useState("");

  const [otherdatastep5, setotherdatastep5] = useState("");

  const [otherValues, setotherValues] = useState([]);

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
  };

  const forotherstp4 = (e, qustionname) => {
    !e.target.checked &&
      user[qustionname]?.includes(otherValues[qustionname]) &&
      user[qustionname].pop() &&
      setotherValues({ ...otherValues, [qustionname]: "" });
    setotherdatastep4(qustionname);
  };

  const forotherstp5 = (e, qustionname) => {
    !e.target.checked &&
      user[qustionname]?.includes(otherValues[qustionname]) &&
      user[qustionname].pop() &&
      setotherValues({ ...otherValues, [qustionname]: "" });
    setotherdatastep5(qustionname);
  };

  const onValueChangestp3checkbox = (e, qustionname) => {
    let arrayids = [];
    //get the valu from the checkbox using getEliment
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
    document.getElementsByName("Selectyourpreferredareas[]").forEach((e) => {
      if (e.checked) {
        arrayids.push(e.value);
      }
    });
    setcheckboxdata(qustionname);
    setUser({ ...user, [e.target.name.split("[]").join("")]: arrayids });
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
    setUser({ ...user, [e.target.name.split("[]").join("")]: data });
  };

  const onValueChangestp4 = (e) => {
    setDataatp4({ ...datastp4, [e.target.name]: e.target.value });
  };

  const onValueChangestp5 = (e) => {
    setDataatp5({ ...datastp5, [e.target.name]: e.target.value });
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

    for (var x = 0; x < gymImg.length; x++) {
      formdata.append("gymImg", user.gymImg[x], user.gymImg[x].name);
    }

    for (var x = 0; x < gymAccessImg.length; x++) {
      formdata.append(
        "gymAccessImg",
        user.gymAccessImg[x],
        user.gymAccessImg[x].name
      );
    }

    formdata.append("data", JSON.stringify(user));
    const responce = await axios.post(
      "/api/v1/gymowner/registration",
      formdata
    );
  };

  return (
    <body class="graphic-bg">
      <div class="log-reg-section clearfix">
        <div class="row g-0">
          <div class="col-lg-7 order-lg-2">
            <div class="right-panel">
              <div class="reg-heading">
                <h3 style={{ fontWeight: "bold" }}>Owner Registration</h3>
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
                  <form action="#">
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
                            Please fill out this field
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
                            // type="checkbox"
                            // onChange={(e) => e.checke ? setTndc({tandc:true}) : setTndc({tandc:false})}
                            // name="tandc"
                            // value={tandc}
                            // id="defaultCheck1[]"
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
                            and <Link target="_blank"  to="/privacy-policy">Privacy Policy</Link>{" "}
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
                            <a href="#">
                              <img src="assets/img/google.png" alt="" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img src="assets/img/facebook.png" alt="" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img src="assets/img/instagram.png" alt="" />
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
                              {/* <flatpickr
                              clearIcon={null} className="DatePicker" onChange={onChange}
                             value={value}
                             /> */}
                              <input
                                style={{ display: "flex" }}
                                type="date"
                                class="mydatepic data"
                                placeholder="YYYY/MM/DD"
                                onChange={(e) => onValueChange(e)}
                                name="birthday"
                                value={birthday}
                                ref={inputRef}
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

                          {/* <div>
                            {phone?.length !== 10 && submitcount > 1 ? (
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
                                {/* <input name="file" type="file"/> */}
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
                                  Please select valid image
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
                                <input
                                  type="file"
                                  onChange={(e) => handlePhoto(e)}
                                  name="idproofimg"
                                  multiple
                                  id="fileField2"
                                />
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
                                  Please select valid image
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
                      <div class="row">
                        <div class="col-md-6">
                          <div class="field-box">
                            <label>Gym Name</label>
                            <textarea
                              type="text"
                              placeholder="Enter your Gym Name"
                              onChange={(e) => onValueChange(e)}
                              name="gymName"
                              value={gymName}
                            />
                          </div>
                          <div>
                            {!gymName && submitcount > 2 ? (
                              <p className="worningmsg">
                                Please fill out this field
                              </p>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>

                        <div class="col-md-6">
                          <div class="field-box">
                            <label>Gym Address</label>
                            <textarea
                              type="text"
                              placeholder="Enter your Gym Address"
                              onChange={(e) => onValueChange(e)}
                              name="gymAddress"
                              value={gymAddress}
                            />
                          </div>
                          <div>
                            {!gymAddress & (submitcount > 2) ? (
                              <p className="worningmsg">
                                Please fill out this field
                              </p>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                      </div>

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
                                            name={myqustion.questionText}
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
                                      Please fill out this field
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
                                              : myqustion?.placeholder}
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

                                            {myqustion.questionText ===
                                              "Operating Days" ? (
                                              ""
                                            ) : (
                                              <div class="form-check  ">
                                                <div
                                                  style={{ display: "flex" }}
                                                >
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
                                            )}
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
                                              Please fill out this field
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
                                        Please fill out this field
                                      </p>
                                    ) : (
                                      ""
                                    )}
                                  </div>
                                ) : (
                                  ""
                                )}
                              </div>

                              <div className="row">
                                <div class="col-md-6">
                                  <div class="field-box">
                                    <label>Start time:</label>

                                    <select
                                      name="starttime"
                                      onChange={(e) => onValueChange(e)}
                                      value={starttime}
                                    >
                                      <option value="">Select</option>

                                      {mytime.map((e, index) => {
                                        return <option value={e}>{e}</option>;
                                      })}
                                    </select>
                                  </div>
                                  {!starttime && submitcount > 2 ? (
                                    <p className="worningmsg">
                                      Please fill out this field
                                    </p>
                                  ) : (
                                    ""
                                  )}
                                </div>

                                <div class="col-md-6">
                                  <div class="field-box">
                                    <label>End time:</label>

                                    <select
                                      name="endtime"
                                      onChange={(e) => onValueChange(e)}
                                      value={endtime}
                                    >
                                      <option value="">Select</option>

                                      {mytime.map((e, index) => {
                                        return <option value={e}>{e}</option>;
                                      })}
                                    </select>
                                  </div>
                                  {!endtime && submitcount > 2 ? (
                                    <p className="worningmsg">
                                      Please fill out this field
                                    </p>
                                  ) : (
                                    ""
                                  )}
                                </div>
                              </div>

                              <div class="field-box">
                                <label>Gym Rental Rate (By 30mins)</label>
                                <input
                                  onChange={(e) => onValueChange(e)}
                                  name="GymRentalRate"
                                  value={GymRentalRate}
                                  type="number"
                                  placeholder="Enter GymRental Rate"
                                />
                              </div>

                              <div>
                                {!GymRentalRate && submitcount > 2 ? (
                                  <p className="worningmsg">
                                    Please fill out this field
                                  </p>
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
                                        0 && submitcount > 2 ? (
                                        <p className="worningmsg">
                                          Please fill out this field
                                        </p>
                                      ) : (
                                        ""
                                      )}
                                    </>

                                    {!user.hasOwnProperty(
                                      myqustion?.questionText
                                    ) &
                                      (submitcount > 2) ? (
                                      <p className="worningmsg">
                                        Please fill out this field
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
                        </Box>
                      </ClickAwayListener>

                      <div class="col-6">
                        <div class="field mt30">
                          <div class="form-group">
                            <label for="fileField3" class="attachment">
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
                                      {gymImg && (Object.values(gymImg).map(data => !data.name.match(/\.(jpg|jpeg|png)$/)).every(bool => !bool ? true : false))
                                        ?
                                        Object.values(gymImg).map(img => <p className="imgWrite">{img.name}</p>)
                                        :
                                        <div>
                                          Please share pictures of your gym{" "}
                                        </div>}
                                      {/* {gymImg ? (
                                        <div>
                                          {" "}
                                          {gymImg &&
                                            Object.values(gymImg).map(
                                              (data) => {
                                                return (
                                                  <p className="imgWrite">
                                                    {data.name}
                                                  </p>
                                                );
                                              }
                                            )}
                                        </div>
                                      ) : (
                                        <div>
                                          Please share pictures of your gym{" "}
                                        </div>
                                      )} */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <input
                                type="file"
                                onChange={(e) => handlePhoto(e)}
                                name="gymImg"
                                // value={profileimg}
                                multiple
                                id="fileField3"
                              />
                            </label>
                          </div>
                        </div>
                        <div>
                          {!gymImg & (submitcount > 2) ? (
                            <p className="worningmsg">
                              Please fill out this field
                            </p>
                          ) : (
                            ""
                          )}
                          {gymImg &&
                            (Object.values(gymImg).map((data) => !data.name.match(/\.(jpg|jpeg|png)$/)).find((e) => e === true)) && (
                              <p className="worningmsg">
                                Please select valid image
                              </p>
                            )}
                        </div>
                      </div>

                      <div class="field btns mt-5">
                        <button
                          type="button"
                          onClick={() => (
                            setMysteps(2), setPreviose("animate__fadeInLeft")
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
                    </div>

                    <div class="page">
                      <ClickAwayListener
                        onClickAway={() => {
                          {
                          }
                          handleClickAwaystep4();
                        }}
                      >
                        <Box sx={{ position: "relative" }}>
                          {step4questions.map((myqustion, index) => (
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
                                            name={myqustion.questionText}
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
                                  ) && submitcount > 3 ? (
                                    <p className="worningmsg">
                                      Please fill out this field
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
                                            togee4(myqustion.questionText)
                                          }
                                          href="#"
                                        >
                                          {" "}
                                          {/* {console.log(datacheckstp3,"keys")} */}
                                          <span class="hida">
                                            {user[myqustion.questionText]?.join(
                                              ","
                                            )
                                              ? user[
                                                myqustion.questionText
                                              ]?.join("," + "  ")
                                              : myqustion?.placeholder}
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
                                                      class="form-check  "
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
                                              Please fill out this field
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
                                        Please fill out this field
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
                                {/* <div class="row"> */}
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
                                          Please fill out this field
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
                                        Please fill out this field
                                      </p>
                                    ) : (
                                      ""
                                    )}
                                  </div>
                                ) : (
                                  ""
                                )}

                                {/* </div> */}
                              </>

                              <>
                                {myqustion.questionType == "Textarea" ? (
                                  <div class="field-box">
                                    <label>{myqustion.questionText}</label>
                                    <div class="field-box">
                                      <label>{myqustion.questionText}</label>
                                      <textarea
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
                                          Please fill out this field
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
                                        Please fill out this field
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
                        </Box>
                      </ClickAwayListener>

                      <div class="col-6">
                        <div class="field mt30">
                          <div class="form-group">
                            <label for="fileField4" class="attachment">
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
                                      {gymAccessImg && (Object.values(gymAccessImg).map(data => !data.name.match(/\.(jpg|jpeg|png)$/)).every(bool => !bool ? true : false))
                                        ?
                                        Object.values(gymAccessImg).map(img => <p className="imgWrite">{img.name}</p>)
                                        :
                                        <div>
                                          Gym Access Images
                                        </div>}
                                      {/* {gymAccessImg ? (
                                        <div>
                                          {" "}
                                          {gymAccessImg &&
                                            Object.values(gymAccessImg).map(
                                              (data) => {
                                                return (
                                                  <p className="imgWrite">
                                                    {data.name}
                                                  </p>
                                                );
                                              }
                                            )}
                                        </div>
                                      ) : (
                                        <div>Gym Access Images </div>
                                      )} */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <input
                                type="file"
                                onChange={(e) => handlePhoto(e)}
                                name="gymAccessImg"
                                // value={profileimg}
                                multiple
                                id="fileField4"
                              />
                            </label>
                          </div>
                        </div>
                        <div>
                          {!gymAccessImg & (submitcount > 3) ? (
                            <p className="worningmsg">
                              Please fill out this field
                            </p>
                          ) : (
                            ""
                          )}
                          {gymAccessImg &&
                            (Object.values(gymAccessImg).map((data) => !data.name.match(/\.(jpg|jpeg|png)$/)).find((e) => e === true)) && (
                              <p className="worningmsg">
                                Please select valid image
                              </p>
                            )}
                        </div>
                      </div>

                      <div class="field btns mt-5">
                        <button
                          type="button"
                          onClick={() => (
                            setMysteps(3), setPreviose("animate__fadeInLeft")
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
                    </div>

                    <div className="page">
                      <ClickAwayListener
                        onClickAway={() => handleClickAwaystep5()}
                      >
                        <Box sx={{ position: "relative" }}>
                          {step5questions.map((myqustion, index) => (
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
                                            name={myqustion.questionText}
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
                                  ) &&
                                        myqustion?.questionText !==
                                        "Are you a Personal Trainer and also provide Personal Training services"  &&   submitcount > 4 ? (
                                    <p className="worningmsg">
                                      Please fill out this field
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
                                          {/* {console.log(datacheckstp3,"keys")} */}
                                          <span class="hida">
                                            {user[myqustion.questionText]?.join(
                                              ","
                                            )
                                              ? user[
                                                myqustion.questionText
                                              ]?.join("," + "  ")
                                              : myqustion?.placeholder}
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
                                                      class="form-check  "
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
                                                    forotherstp5(
                                                      e,
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
                                              Please fill out this field
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
                                        Please fill ut this field
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
                                        0 &&
                                        myqustion?.questionText !==
                                        "Please share with us if there are any other comments."  &&
                                        submitcount > 4 ? (
                                        <p className="worningmsg">
                                          Please fill out this field
                                        </p>
                                      ) : (
                                        ""
                                      )}
                                    </>
                                    {!user.hasOwnProperty(
                                      myqustion?.questionText
                                    ) &&
                                      myqustion?.questionText !==
                                      "Please share with us if there are any other comments."  &&
                                      submitcount > 4 ? (
                                      <p className="worningmsg">
                                        Please fill out this field 
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

                          {/* <>
                        {datastp5.RadioOptions == "Yes" ? (
                          <div ref={ref5} class="field-box">
                            <label>
                              Please select your preferred areas to have
                              training sessions
                            </label>
                            <dl style={{ textAlign: "left" }} class="dropdown3">
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
                                  {datacheckstp5[0] ? (
                                    <span class="hida">
                                      {datacheckstp5.join(",")}
                                    </span>
                                  ) : (
                                    <span class="hida">
                                      Select your preferred areas...
                                    </span>
                                  )}
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
                                          overflowX: "hidden",overflowY: "auto",
                                          height: "220px",
                                        }}
                                        class="col-md-6"
                                      >
                                        {options.map(
                                          (optionsstp5map, index) => {
                                            return (
                                              <li key={index}>
                                                <div                                                 style={{display:"flex"}}
 class="form-check">
                                                  <input
                                                     id={optionsstp5map}
                                                    class="form-check-input"
                                                    type="checkbox"
                                                    value={optionsstp5map}
                                                    name="ids[]"
                                                    onChange={(e) =>
                                                      onValueChangestp5checkboxstatic(
                                                        e
                                                      )
                                                    }
                                                   
                                                  />
                                                  <label
                                                    class="form-check-label"
                                                    style={{width:"100%"}}
                                                   htmlFor={optionsstp5map} 
                                                    >
                                                    {optionsstp5map}
                                                  </label>
                                                </div>
                                              </li>
                                            );
                                          }
                                        )}
                                      </div>
                                    </div>
                                  </ul>
                                </div>
                              </dd>
                            </dl>
                          </div>
                        ) : (
                          ""
                        )}
                      </> */}

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
          <Link to="/login">Login Now</Link>
           <i  class="fa-solid fa-arrow-rightm"></i></div>
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

  //static qustions of registration page

  // return (
  //   <body class="graphic-bg">
  //     <div class="log-reg-section clearfix">
  //       <div class="row g-0">
  //         <div class="col-lg-7 order-lg-2">
  //           <div class="right-panel">
  //             <div class="reg-heading">
  //               <h3 style={{ fontWeight: "bold" }}>User Registration</h3>
  //             </div>
  //             {/* <div> */}
  //             <p>{email}</p>
  //             {/* </div> */}
  //             <div class="reg-container">
  //               <div class="reg-progress-bar">
  //                 <div class="step">
  //                   <div
  //                     class={
  //                       mysteps == 2 ||
  //                       mysteps == 3 ||
  //                       mysteps == 4 ||
  //                       mysteps == 5
  //                         ? "bullet active"
  //                         : "bullet"
  //                     }
  //                   >
  //                     {" "}
  //                     <span>1</span>{" "}
  //                   </div>
  //                   <div
  //                     class={
  //                       mysteps == 2 ||
  //                       mysteps == 3 ||
  //                       mysteps == 4 ||
  //                       mysteps == 5
  //                         ? "check fas fa-check active"
  //                         : "check fas fa-check"
  //                     }
  //                   ></div>
  //                   <p
  //                     className={
  //                       mysteps == 2 ||
  //                       mysteps == 3 ||
  //                       mysteps == 4 ||
  //                       mysteps == 5
  //                         ? "active"
  //                         : ""
  //                     }
  //                   >
  //                     Step 1
  //                   </p>
  //                 </div>
  //                 <div class="step">
  //                   <div
  //                     class={
  //                       mysteps == 3 || mysteps == 4 || mysteps == 5
  //                         ? "bullet active"
  //                         : "bullet"
  //                     }
  //                   >
  //                     {" "}
  //                     <span>2</span>{" "}
  //                   </div>
  //                   <div
  //                     class={
  //                       mysteps == 3 || mysteps == 4 || mysteps == 5
  //                         ? "check fas fa-check active"
  //                         : "check fas fa-check"
  //                     }
  //                   ></div>
  //                   <p
  //                     className={
  //                       mysteps == 3 || mysteps == 4 || mysteps == 5
  //                         ? "active"
  //                         : ""
  //                     }
  //                   >
  //                     Step 2
  //                   </p>
  //                 </div>
  //                 <div class="step">
  //                   <div
  //                     class={
  //                       mysteps == 4 || mysteps == 5
  //                         ? "bullet active"
  //                         : "bullet"
  //                     }
  //                   >
  //                     {" "}
  //                     <span>3</span>{" "}
  //                   </div>
  //                   <div
  //                     class={
  //                       mysteps == 4 || mysteps == 5
  //                         ? "check fas fa-check active"
  //                         : "check fas fa-check"
  //                     }
  //                   ></div>
  //                   <p className={mysteps == 4 || mysteps == 5 ? "active" : ""}>
  //                     Step 3
  //                   </p>
  //                 </div>
  //                 <div class="step">
  //                   <div class={mysteps == 5 ? "bullet active" : "bullet"}>
  //                     {" "}
  //                     <span>4</span>{" "}
  //                   </div>
  //                   <div
  //                     class={
  //                       mysteps == 5
  //                         ? "check fas fa-check active"
  //                         : "check fas fa-check"
  //                     }
  //                   ></div>
  //                   <p className={mysteps == 5 ? "active" : ""}>Step 4</p>
  //                 </div>
  //                 <div class="step">
  //                   <div class={mysteps == 6 ? "bullet active" : "bullet"}>
  //                     {" "}
  //                     <span>5</span>{" "}
  //                   </div>
  //                   <div
  //                     class={
  //                       mysteps == 6
  //                         ? "check fas fa-check active"
  //                         : "check fas fa-check"
  //                     }
  //                   ></div>
  //                   <p className={mysteps == 6 ? "active" : ""}>Step 5</p>
  //                 </div>
  //               </div>
  //               <div class="form-outer">
  //                 <form action="#">
  //                   <div
  //                     class="page"
  //                     style={{
  //                       "margin-left": "-" + (100 / 5) * (mysteps - 1) + "%",
  //                     }}
  //                   >
  //                     <div class="field-box">
  //                       <a href="#modal01">
  //                         <label>Email Address</label>
  //                         <input
  //                           onChange={(e) => onValueChange(e)}
  //                           name="email"
  //                           value={email}
  //                           id="my-input"
  //                           type="email"
  //                           class="input-email"
  //                           placeholder="Enter your email address"
  //                         />
  //                       </a>{" "}
  //                     </div>
  //                     <div class="field-box">
  //                       <label>Password</label>
  //                       <input
  //                         id="password-field"
  //                         type="password"
  //                         placeholder="Create your password"
  //                       />
  //                       <span
  //                         toggle="#password-field"
  //                         class="fa fa-fw fa-eye field-icon toggle-password"
  //                       ></span>{" "}
  //                     </div>
  //                     <div class="field-box">
  //                       <label>Confirm Password</label>
  //                       <input
  //                         id="retype-password-field"
  //                         type="password"
  //                         placeholder="Retype your password to confirm"
  //                       />
  //                       <span
  //                         toggle="#retype-password-field"
  //                         class="fa fa-fw fa-eye field-icon toggle-password"
  //                       ></span>
  //                     </div>
  //                     <div class="field mt-3">
  //                       <div style={{ textAlign: "left" }} class="form-check">
  //                         <input
  //                           class="form-check-input"
  //                           type="checkbox"
  //                           value=""
  //                           id="defaultCheck1"
  //                         />
  //                         <label class="form-check-label" for="defaultCheck1">
  //                           {" "}
  //                           I accept the <a href="#">
  //                             Terms & Conditions
  //                           </a> and <a href="#">Privacy Policy</a>{" "}
  //                         </label>
  //                       </div>
  //                     </div>
  //                     <div class="field mt-3 clearfix">
  //                       <button
  //                         type="button"
  //                         onClick={() => (
  //                           setMysteps(2), setPreviose("animate__fadeInRight")
  //                         )}
  //                         class="firstNext next"
  //                       >
  //                         Continue
  //                       </button>
  //                     </div>

  //                     <div class="social-login clearfix">
  //                       <h6>Or continue with</h6>
  //                       <ul>
  //                         <li>
  //                           <a href="#">
  //                             <img src="assets/img/google.png" alt="" />
  //                           </a>
  //                         </li>
  //                         <li>
  //                           <a href="#">
  //                             <img src="assets/img/facebook.png" alt="" />
  //                           </a>
  //                         </li>
  //                         <li>
  //                           <a href="#">
  //                             <img src="assets/img/instagram.png" alt="" />
  //                           </a>
  //                         </li>
  //                       </ul>
  //                     </div>
  //                   </div>

  //                   <div class="page">
  //                     <div class="row">
  //                       <div class="col-md-6">
  //                         <div class="field-box">
  //                           <label>First name</label>
  //                           <input
  //                             type="text"
  //                             placeholder="Enter your first name"
  //                           />
  //                         </div>
  //                       </div>
  //                       <div class="col-md-6">
  //                         <div class="field-box">
  //                           <label>Last name</label>
  //                           <input
  //                             type="text"
  //                             placeholder="Enter your last name"
  //                           />
  //                         </div>
  //                       </div>
  //                       <div class="col-md-6">
  //                         <div class="field-box">
  //                           <label>Gender</label>
  //                           <input
  //                             type="text"
  //                             placeholder="Enter your gender"
  //                           />
  //                         </div>
  //                       </div>

  //                       <div class="col-md-6">
  //                         <div class="field-box">
  //                           <label>Date of Birth</label>
  //                           <div className=" position-relative">
  //                             {/* <flatpickr
  //                             clearIcon={null} className="DatePicker" onChange={onChange}
  //                            value={value}
  //                            /> */}
  //                             <input
  //                               style={{ display: "flex" }}
  //                               type="date"
  //                               class="mydatepic"
  //                               placeholder="YYYY/MM/DD"
  //                               ref={inputRef}
  //                             />
  //                             <span className="position-absolute mt-3 me-3 mydatepic top-0 end-0" >
  //                               <DateRangeIcon onClick={()=>{  inputRef.current.focus()}}  />
  //                             </span>
  //                           </div>
  //                         </div>
  //                       </div>
  //                       <div class="col-md-6">
  //                         <div class="field-box">
  //                           <label>Phone Number</label>
  //                           <input
  //                             type="tel"
  //                             placeholder="Enter your phone number"
  //                           />
  //                         </div>
  //                       </div>
  //                       <div class="col-md-6">&nbsp;</div>
  //                       <div class="col-6">
  //                         <div class="field mt30">
  //                           <div class="form-group">
  //                             <label for="fileField" class="attachment">
  //                               <div class="row btn-file">
  //                                 <div class="btn-file__preview"></div>
  //                                 <div class="btn-file__actions">
  //                                   <div class="btn-file__actions__item col-xs-12 text-center">
  //                                     <div class="btn-file__actions__item--shadow">
  //                                       {" "}
  //                                       <img
  //                                         src="assets/img/icon-picture.png"
  //                                         alt=""
  //                                       />
  //                                       <div class="visible-lg-block mt-3"></div>
  //                                       Upload profile picture{" "}
  //                                     </div>
  //                                   </div>
  //                                 </div>
  //                               </div>
  //                               <input name="file" type="file" id="fileField" />
  //                             </label>
  //                           </div>
  //                         </div>
  //                       </div>
  //                       <div class="col-6">
  //                         <div class="field mt30">
  //                           <div class="form-group">
  //                             <label for="fileField" class="attachment">
  //                               <div class="row btn-file">
  //                                 <div class="btn-file__preview"></div>
  //                                 <div class="btn-file__actions">
  //                                   <div class="btn-file__actions__item col-xs-12 text-center">
  //                                     <div class="btn-file__actions__item--shadow">
  //                                       {" "}
  //                                       <img
  //                                         src="assets/img/icon-idproof.png"
  //                                         alt=""
  //                                       />
  //                                       <div class="visible-lg-block mt-3"></div>
  //                                       Upload ID (Driver’s License / Passport /
  //                                       My Number Card etc.)
  //                                     </div>
  //                                   </div>
  //                                 </div>
  //                               </div>
  //                               <input name="file" type="file" id="fileField" />
  //                             </label>
  //                           </div>
  //                         </div>
  //                       </div>
  //                     </div>
  //                     <div class="field btns mt-3">
  //                       <button
  //                         type="button"
  //                         onClick={() => (
  //                           setMysteps(1), setPreviose("animate__fadeInLeft")
  //                         )}
  //                         class="prev-1 prev"
  //                       >
  //                         <i class="fa-solid fa-arrow-left-long"></i> Previous
  //                       </button>
  //                       <button
  //                         type="button"
  //                         onClick={() => (
  //                           setMysteps(3), setPreviose("animate__fadeInRight")
  //                         )}
  //                         class="next-1 next"
  //                       >
  //                         Next
  //                       </button>
  //                     </div>
  //                   </div>

  //                   <div class="page">
  //                     <div class="field mt30">
  //                       <div class="form-check form-check-inline">
  //                         <label class="form-check-label font18">
  //                           Experience Level:
  //                         </label>
  //                       </div>
  //                       <div class="form-check form-check-inline">
  //                         <input
  //                           class="form-check-input"
  //                           type="radio"
  //                           name="inlineRadioOptions"
  //                           id="inlineRadio1"
  //                           value="option1"
  //                         />
  //                         <label
  //                           class="form-check-label font18"
  //                           for="inlineRadio1"
  //                         >
  //                           Beginner
  //                         </label>
  //                       </div>
  //                       <div class="form-check form-check-inline">
  //                         <input
  //                           class="form-check-input"
  //                           type="radio"
  //                           name="inlineRadioOptions"
  //                           id="inlineRadio2"
  //                           value="option2"
  //                         />
  //                         <label
  //                           class="form-check-label font18"
  //                           for="inlineRadio2"
  //                         >
  //                           Intermediate
  //                         </label>
  //                       </div>
  //                       <div class="form-check form-check-inline">
  //                         <input
  //                           class="form-check-input"
  //                           type="radio"
  //                           name="inlineRadioOptions"
  //                           id="inlineRadio3"
  //                           value="option3"
  //                         />
  //                         <label
  //                           class="form-check-label font18"
  //                           for="inlineRadio3"
  //                         >
  //                           Expert
  //                         </label>
  //                       </div>
  //                     </div>
  //                     <div class="field-box">
  //                       <label>Fitness Goals</label>
  //                       <dl style={{ textAlign: "left" }} class="dropdown">
  //                         <dt>
  //                           {" "}
  //                           <a
  //                             onClick={() => (
  //                               setDropdown(!dropdown), setDropdown2(false)
  //                             )}
  //                             href="#"
  //                           >
  //                             {" "}
  //                             <span class="hida">Select fitness goals..</span>
  //                             <p class="multiSel"></p>
  //                           </a>{" "}
  //                         </dt>
  //                         <dd>
  //                           <div class="mutliSelect">
  //                             <ul
  //                               style={
  //                                 dropdown
  //                                   ? { display: "block" }
  //                                   : { display: "none" }
  //                               }
  //                             >
  //                               <li>
  //                                 <div class="form-check">
  //                                   <input
  //                                     class="form-check-input"
  //                                     type="checkbox"
  //                                     value="Lose Weight"
  //                                     id="defaultCheck2"
  //                                   />
  //                                   <label
  //                                     class="form-check-label"
  //                                     for="defaultCheck2"
  //                                   >
  //                                     {" "}
  //                                     Lose Weight{" "}
  //                                   </label>
  //                                 </div>
  //                               </li>
  //                               <li>
  //                                 <div class="form-check">
  //                                   <input
  //                                     class="form-check-input"
  //                                     type="checkbox"
  //                                     value="Build Muscles"
  //                                     id="defaultCheck3"
  //                                   />
  //                                   <label
  //                                     class="form-check-label"
  //                                     for="defaultCheck3"
  //                                   >
  //                                     {" "}
  //                                     Build Muscles{" "}
  //                                   </label>
  //                                 </div>
  //                               </li>
  //                               <li>
  //                                 <div class="form-check">
  //                                   <input
  //                                     class="form-check-input"
  //                                     type="checkbox"
  //                                     value="Stay Healthy"
  //                                     id="defaultCheck4"
  //                                   />
  //                                   <label
  //                                     class="form-check-label"
  //                                     for="defaultCheck4"
  //                                   >
  //                                     {" "}
  //                                     Stay Healthy{" "}
  //                                   </label>
  //                                 </div>
  //                               </li>
  //                               <li>
  //                                 <div class="form-check">
  //                                   <input
  //                                     class="form-check-input"
  //                                     type="checkbox"
  //                                     value="Improve Flexibilty"
  //                                     id="defaultCheck5"
  //                                   />
  //                                   <label
  //                                     class="form-check-label"
  //                                     for="defaultCheck5"
  //                                   >
  //                                     {" "}
  //                                     Improve Flexibilty{" "}
  //                                   </label>
  //                                 </div>
  //                               </li>
  //                               <li>
  //                                 <div class="form-check">
  //                                   <input
  //                                     class="form-check-input"
  //                                     type="checkbox"
  //                                     value="Others (short answer text)"
  //                                     id="defaultCheck6"
  //                                   />
  //                                   <label
  //                                     class="form-check-label"
  //                                     for="defaultCheck6"
  //                                   >
  //                                     {" "}
  //                                     Others (short answer text){" "}
  //                                   </label>
  //                                 </div>
  //                               </li>
  //                             </ul>
  //                           </div>
  //                         </dd>
  //                       </dl>
  //                     </div>
  //                     <div class="field-box">
  //                       <label>
  //                         What training would you like to do? (Can be updated
  //                         later on profile page)
  //                       </label>
  //                       <dl class="dropdown2">
  //                         <dt style={{ textAlign: "left" }}>
  //                           {" "}
  //                           <a
  //                             onClick={() => (
  //                               setDropdown2(!dropdown2), setDropdown(false)
  //                             )}
  //                             href="#"
  //                           >
  //                             {" "}
  //                             <span class="hida">
  //                               Select your favorite equpment..
  //                             </span>
  //                             <p class="multiSel"></p>
  //                           </a>{" "}
  //                         </dt>
  //                         <dd>
  //                           <div
  //                             style={{ textAlign: "left" }}
  //                             class="mutliSelect"
  //                           >
  //                             <ul
  //                               className=""
  //                               style={
  //                                 dropdown2
  //                                   ? { display: "block" }
  //                                   : { display: "none" }
  //                               }
  //                             >
  //                               <li>
  //                                 <div class="form-check">
  //                                   <input
  //                                     class="form-check-input"
  //                                     type="checkbox"
  //                                     value="Lose Weight"
  //                                     id="defaultCheck2"
  //                                   />
  //                                   <label
  //                                     class="form-check-label"
  //                                     for="defaultCheck2"
  //                                   >
  //                                     {" "}
  //                                     Lose Weight{" "}
  //                                   </label>
  //                                 </div>
  //                               </li>
  //                               <li>
  //                                 <div class="form-check">
  //                                   <input
  //                                     class="form-check-input"
  //                                     type="checkbox"
  //                                     value="Build Muscles"
  //                                     id="defaultCheck3"
  //                                   />
  //                                   <label
  //                                     class="form-check-label"
  //                                     for="defaultCheck3"
  //                                   >
  //                                     {" "}
  //                                     Build Muscles{" "}
  //                                   </label>
  //                                 </div>
  //                               </li>
  //                               <li>
  //                                 <div class="form-check">
  //                                   <input
  //                                     class="form-check-input"
  //                                     type="checkbox"
  //                                     value="Stay Healthy"
  //                                     id="defaultCheck4"
  //                                   />
  //                                   <label
  //                                     class="form-check-label"
  //                                     for="defaultCheck4"
  //                                   >
  //                                     {" "}
  //                                     Stay Healthy{" "}
  //                                   </label>
  //                                 </div>
  //                               </li>
  //                               <li>
  //                                 <div class="form-check">
  //                                   <input
  //                                     class="form-check-input"
  //                                     type="checkbox"
  //                                     value="Improve Flexibilty"
  //                                     id="defaultCheck5"
  //                                   />
  //                                   <label
  //                                     class="form-check-label"
  //                                     for="defaultCheck5"
  //                                   >
  //                                     {" "}
  //                                     Improve Flexibilty{" "}
  //                                   </label>
  //                                 </div>
  //                               </li>
  //                               <li>
  //                                 <div class="form-check">
  //                                   <input
  //                                     class="form-check-input"
  //                                     type="checkbox"
  //                                     value="Others (short answer text)"
  //                                     id="defaultCheck6"
  //                                   />
  //                                   <label
  //                                     class="form-check-label"
  //                                     for="defaultCheck6"
  //                                   >
  //                                     {" "}
  //                                     Others (short answer text){" "}
  //                                   </label>
  //                                 </div>
  //                               </li>
  //                             </ul>
  //                           </div>
  //                         </dd>
  //                       </dl>
  //                     </div>
  //                     <div class="field btns mt-5">
  //                       <button
  //                         type="button"
  //                         onClick={() => (
  //                           setMysteps(2), setPreviose("animate__fadeInLeft")
  //                         )}
  //                         class="prev-2 prev"
  //                       >
  //                         <i class="fa-solid fa-arrow-left-long"></i> Previous
  //                       </button>
  //                       <button
  //                         type="button"
  //                         onClick={() => (
  //                           setMysteps(4), setPreviose("animate__fadeInRight")
  //                         )}
  //                         class="next-2 next"
  //                       >
  //                         Next
  //                       </button>
  //                     </div>
  //                   </div>

  //                   <div style={{ textAlign: "left" }} class="page">
  //                     <div class="field mt30">
  //                       <label class="font18">
  //                         Would you like to customise your preferred training
  //                         equipment now?
  //                       </label>
  //                     </div>
  //                     <div class="field mt-2">
  //                       <div class="form-check form-check-inline">
  //                         <input
  //                           class="form-check-input"
  //                           type="radio"
  //                           name="inlineRadioOptions"
  //                           id="inlineRadio11"
  //                           value="option1"
  //                         />
  //                         <label
  //                           class="form-check-label font18"
  //                           for="inlineRadio11"
  //                         >
  //                           Yes
  //                         </label>
  //                       </div>
  //                       <div class="form-check form-check-inline">
  //                         <input
  //                           class="form-check-input"
  //                           type="radio"
  //                           name="inlineRadioOptions"
  //                           id="inlineRadio12"
  //                           value="option2"
  //                         />
  //                         <label
  //                           class="form-check-label font18"
  //                           for="inlineRadio12"
  //                         >
  //                           No / Skip
  //                         </label>
  //                       </div>
  //                     </div>
  //                     <div class="field-box">
  //                       <label>What equipment would you like to use?</label>
  //                       <input type="text" placeholder="Enter equipement..." />
  //                     </div>
  //                     <div class="field btns mt-5">
  //                       <button
  //                         type="button"
  //                         onClick={() => (
  //                           setMysteps(3), setPreviose("animate__fadeInLeft")
  //                         )}
  //                         class="prev-3 prev"
  //                       >
  //                         <i class="fa-solid fa-arrow-left-long"></i> Previous
  //                       </button>
  //                       <button
  //                         type="button"
  //                         onClick={() => (
  //                           setMysteps(5), setPreviose("animate__fadeInRight")
  //                         )}
  //                         class="next-3 next"
  //                       >
  //                         Next
  //                       </button>
  //                     </div>
  //                   </div>

  //                   <div style={{ textAlign: "left" }} className="page">
  //                     <div class="field mt30">
  //                       <label class="font18">
  //                         Are you looking for a personal trainer now?
  //                       </label>
  //                     </div>
  //                     <div class="field mt-2">
  //                       <div class="form-check form-check-inline">
  //                         <input
  //                           class="form-check-input"
  //                           type="radio"
  //                           name="inlineRadioOptions"
  //                           id="inlineRadio21"
  //                           value="option1"
  //                         />
  //                         <label
  //                           class="form-check-label font18"
  //                           for="inlineRadio21"
  //                         >
  //                           Yes
  //                         </label>
  //                       </div>
  //                       <div class="form-check form-check-inline">
  //                         <input
  //                           class="form-check-input"
  //                           type="radio"
  //                           name="inlineRadioOptions"
  //                           id="inlineRadio22"
  //                           value="option2"
  //                         />
  //                         <label
  //                           class="form-check-label font18"
  //                           for="inlineRadio22"
  //                         >
  //                           No / Skip
  //                         </label>
  //                       </div>
  //                     </div>
  //                     <div class="field-box">
  //                       <label>
  //                         Please select your preferred areas to have training
  //                         sessions
  //                       </label>
  //                       <dl style={{ textAlign: "left" }} class="dropdown3">
  //                         <dt>
  //                           {" "}
  //                           <a
  //                             onClick={() => (
  //                               setDropdown(!dropdown), setDropdown2(false)
  //                             )}
  //                             href="#"
  //                           >
  //                             {" "}
  //                             <span class="hida">
  //                               Select your preferred areas...
  //                             </span>
  //                             <p class="multiSel"></p>
  //                           </a>{" "}
  //                         </dt>
  //                         <dd>
  //                           <div class="mutliSelect">
  //                             <ul
  //                               style={
  //                                 dropdown
  //                                   ? { display: "block" }
  //                                   : { display: "none" }
  //                               }
  //                             >
  //                               <div class="row">
  //                                 <div class="col-md-6">
  //                                   <iframe
  //                                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50921.95570487541!2d-95.7479105244765!3d37.090303318752795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m3!3e6!4m0!4m0!5e0!3m2!1sen!2sin!4v1668257351929!5m2!1sen!2sin"
  //                                     width="100%"
  //                                     height="200"
  //                                     style={{ border: "0" }}
  //                                     allowfullscreen=""
  //                                     loading="lazy"
  //                                     referrerpolicy="no-referrer-when-downgrade"
  //                                   ></iframe>
  //                                 </div>
  //                                 <div class="col-md-6">
  //                                   <li>
  //                                     <div class="form-check">
  //                                       <input
  //                                         class="form-check-input"
  //                                         type="checkbox"
  //                                         value="Strength and Conditioning"
  //                                         id="defaultCheck2"
  //                                       />
  //                                       <label
  //                                         class="form-check-label"
  //                                         for="defaultCheck2"
  //                                       >
  //                                         {" "}
  //                                         Strength and Conditioning{" "}
  //                                       </label>
  //                                     </div>
  //                                   </li>
  //                                   <li>
  //                                     {/* <div class="form-check">
  //                                       <input
  //                                         class="form-check-input"
  //                                         type="checkbox"
  //                                         value="High Intensity Interval Training (HIIT)"
  //                                         id="defaultCheck3"
  //                                       />
  //                                       <label
  //                                         class="form-check-label"
  //                                         for="defaultCheck3"
  //                                       >
  //                                         {" "}
  //                                         High Intensity Interval Training
  //                                         (HIIT){" "}
  //                                       </label>
  //                                     </div> */}

  //                                     <li>
  //                                       <div class="form-check">
  //                                         <input
  //                                           class="form-check-input"
  //                                           type="checkbox"
  //                                           value="High Intensity Interval Training (HIIT)"
  //                                           id="defaultCheck5"
  //                                         />
  //                                         <label
  //                                           class="form-check-label"
  //                                           for="defaultCheck5"
  //                                         >
  //                                           {/* {" "} */}
  //                                           High Intensity Interval Training
  //                                           {/* (HIIT){" "} */}
  //                                         </label>
  //                                       </div>
  //                                     </li>
  //                                   </li>
  //                                   <li>
  //                                     <div class="form-check">
  //                                       <input
  //                                         class="form-check-input"
  //                                         type="checkbox"
  //                                         value="Pilates"
  //                                         id="defaultCheck4"
  //                                       />
  //                                       <label
  //                                         class="form-check-label"
  //                                         for="defaultCheck4"
  //                                       >
  //                                         {" "}
  //                                         Pilates{" "}
  //                                       </label>
  //                                     </div>
  //                                   </li>
  //                                   <li>
  //                                     <div class="form-check">
  //                                       <input
  //                                         class="form-check-input"
  //                                         type="checkbox"
  //                                         value="Senior Fitness"
  //                                         id="defaultCheck5"
  //                                       />
  //                                       <label
  //                                         class="form-check-label"
  //                                         for="defaultCheck5"
  //                                       >
  //                                         {" "}
  //                                         Senior Fitness{" "}
  //                                       </label>
  //                                     </div>
  //                                   </li>
  //                                   <li>
  //                                     <div class="form-check">
  //                                       <input
  //                                         class="form-check-input"
  //                                         type="checkbox"
  //                                         value="Corrective Exercise"
  //                                         id="defaultCheck6"
  //                                       />
  //                                       <label
  //                                         class="form-check-label"
  //                                         for="defaultCheck6"
  //                                       >
  //                                         {" "}
  //                                         Corrective Exercise{" "}
  //                                       </label>
  //                                     </div>
  //                                   </li>
  //                                   <li>
  //                                     <div class="form-check">
  //                                       <input
  //                                         class="form-check-input"
  //                                         type="checkbox"
  //                                         value="Nutrition"
  //                                         id="defaultCheck6"
  //                                       />
  //                                       <label
  //                                         class="form-check-label"
  //                                         for="defaultCheck6"
  //                                       >
  //                                         {" "}
  //                                         Nutrition{" "}
  //                                       </label>
  //                                     </div>
  //                                   </li>
  //                                 </div>
  //                               </div>
  //                             </ul>
  //                           </div>
  //                         </dd>
  //                       </dl>
  //                     </div>
  //                     <div class="field btns mt-5">
  //                       <button
  //                         type="button"
  //                         onClick={() => (
  //                           setMysteps(4), setPreviose("animate__fadeInLeft")
  //                         )}
  //                         class="prev-4 prev"
  //                       >
  //                         <i class="fa-solid fa-arrow-left-long"></i> Previous
  //                       </button>
  //                       <button
  //                         onClick={() => (
  //                           setMysteps(1), setPreviose("animate__fadeInRight")
  //                         )}
  //                         class="submit"
  //                       >
  //                         Submit
  //                       </button>
  //                     </div>
  //                   </div>
  //                 </form>
  //               </div>
  //             </div>
  //             <div class="copyrights">
  //               All Copyrights Reserved by{" "}
  //               <a style={{ fontWeight: "bold" }} href="#">
  //                 MORPH CO. LTD
  //               </a>
  //             </div>
  //           </div>
  //         </div>
  //         <div class="col-lg-5">
  //           <div class="left-panel">
  //             <div class="back-to-home">
  //               <i
  //                 style={{ marginRight: "5px" }}
  //                 class="fa-solid fa-arrow-left-long"
  //               ></i>

  //               <Link to="/">Back to Home</Link>

  //               {/* <a href="index.html"></a> */}
  //             </div>
  //             <div class="no-account">
  //               <h4>Already have an account?</h4>
  //               <div class="link">
  //                 <Link style={{ marginRight: "4px" }} to="/login">
  //                   Login Now
  //                 </Link>
  //                 {/* <a href="login.html"></a> */}
  //                 <i class="fa-solid fa-arrow-rightmlong"></i>
  //               </div>
  //             </div>
  //             <img
  //               style={email ? { maxWidth: "100.5%" } : { maxWidth: "100%" }}
  //               src="assets/img/login-img.png"
  //               alt=""
  //             />
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //     <div
  //       class="remodal"
  //       data-remodal-id="modal01"
  //       role="dialog"
  //       aria-labelledby="modal1Title"
  //       aria-describedby="modal1Desc"
  //     >
  //       <button
  //         data-remodal-action="close"
  //         class="remodal-close"
  //         aria-label="Close"
  //       ></button>
  //       <div class="clearfix">
  //         <p>
  //           <img src="assets/img/icon-envolop.png" alt="" />
  //         </p>
  //         <h3>Please check your email to confirm your email address.</h3>
  //         <button
  //           data-remodal-action="close"
  //           aria-label="Close"
  //           type="button"
  //           class="verify"
  //         >
  //           Verify
  //         </button>
  //       </div>
  //     </div>
  //   </body>
  // );
};

export default OwnerRegister;
