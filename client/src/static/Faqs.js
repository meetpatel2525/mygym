import React from "react";
import Footer from "../home/Footer";
import Header from "../home/Header";
import "owl.carousel/dist/assets/owl.carousel.css";
import AOS from "aos";
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import parse from "html-react-parser";

const Faqs = () => {

  const [dreg, setDreg] = React.useState("faq01");
  const [headerClassName, setHeaderClassName] = useState("");
  const [showp, setShowp] = useState(false);
  const [showno, setShowno] = useState(0);

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

  const [allContent, setAllContent] = useState([]);
  const [faq, setFaq] = useState([]);
  const [entry, setEntry] = useState([]);
  const [gymrelated, setGymrelated] = useState([]);
  const [personal, setPersonal] = useState([]);
  const [miscellan, setMiscellan] = useState([]);
  const [other, setOther] = useState([]);

  const navigate = useNavigate();
  const showandhide = (no) => {
    console.log();
    setShowno(no);
    showno === no ? setShowp(!showp) : setShowp(true);
  };

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

  const { category, email, inquiry, name, info } = myData;
  const hundleSubmit = async (e) => {
    e.preventDefault();

    setSubmitcount(+1);
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (category && email && inquiry && name && info) {
      if (regex.test(email)) {
        const data = await axios.post(`/api/v1/admin/addcontectus`, {
          email: email,
          category: category,
          inquiry: inquiry,
          name: name,
          message: info,
        });

        if (data.data.success == false) {
          setMessage(data.data.message);
        }

        if (data.data.success == true) {
          setMyData("");
          navigate("/");
          setMessage("");
        }
      } else {
        setMessage("Email is not valid");
      }
    }
  };

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
    let data = allContent.filter((e) => e.pagename === "Booking");
    let data1 = allContent.filter((e) => e.pagename === "Entry & Exit");
    let data2 = allContent.filter((e) => e.pagename === "Gym Related");
    let data3 = allContent.filter((e) => e.pagename === "Personal");
    let data4 = allContent.filter((e) => e.pagename === "Miscellaneous");
    let data5 = allContent.filter((e) => e.pagename === "Others");

    setFaq(data);
    setEntry(data1)
    setGymrelated(data2)
    setPersonal(data3)
    setMiscellan(data4)
    setOther(data5)
  }, [allContent]);


  console.log(faq, "faq");

  return (
    <div id="top">
      <Header handleScroll={handleScroll} headerClassName={headerClassName} />

      <section class="inner-masthead">
        <img src="assets/img/banner-faqs.jpg" class="img-overlay" alt="" />
        <img
          src="assets/img/banner-overlay-content-inner.png"
          class="img-overlay"
          alt=""
        />
        <div class="container">
          <div class="inner-masthead__wrap">
            <div class="inner-masthead__wrap-item text-center">
              <h1 data-aos="fade-up">Frequently Asked Questions</h1>
            </div>
          </div>
        </div>
      </section>
      <section class="frequently_aq__section">
        <div class="frequently_aq__section__werap">
          <div class="container">
            <div class="faq__icon__box">
              <ul>
                <li>
                  {" "}
                  <a
                    onClick={() => setDreg("faq01")}
                    href="#faq01"
                    rel=""
                    id="anchor1"
                    class="anchorLink"
                  >
                    <h6>
                      <i class="icon-bookings"></i> Bookings{" "}
                    </h6>
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a
                    href="#faq01"
                    onClick={() => setDreg("faq02")}
                    rel=""
                    id="anchor2"
                    class="anchorLink"
                  >
                    <h6>
                      {" "}
                      <i class="icon-entry__exit"></i> Entry & Exit{" "}
                    </h6>
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a
                    href="#faq01"
                    rel=""
                    onClick={() => setDreg("faq03")}
                    id="anchor3"
                    class="anchorLink"
                  >
                    <h6>
                      {" "}
                      <i class="icon-gym_related"></i> Gym Related{" "}
                    </h6>
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a
                    href="#faq01"
                    rel=""
                    onClick={() => setDreg("faq04")}
                    id="anchor4"
                    class="anchorLink"
                  >
                    <h6>
                      {" "}
                      <i class="icon-personal"></i> Personal{" "}
                    </h6>
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a
                    href="#faq01"
                    onClick={() => setDreg("faq05")}
                    rel=""
                    id="anchor5"
                    class="anchorLink"
                  >
                    <h6>
                      {" "}
                      <i class="icon-miscellaneous"></i> Miscellaneous{" "}
                    </h6>
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a
                    href="#faq01"
                    onClick={() => setDreg("faq06")}
                    rel=""
                    id="anchor6"
                    class="anchorLink"
                  >
                    <h6>
                      {" "}
                      <i class="icon-others"></i> Others{" "}
                    </h6>
                  </a>{" "}
                </li>
              </ul>
            </div>

            <a name="faq01" id="faq01"></a>
            <div
              id="faq1"
              class="gym__related"
              style={
                dreg == "faq01"
                  ? { display: "block", textAlign: "left" }
                  : { display: "none" }
              }
            >
              <h3 className="main-h3">Bookings</h3>

              <main class="main">
                <div class="accordion">

                  <div
                    class={
                      showp && showno == 1
                        ? "accordion-item active"
                        : "accordion-item "
                    }
                  >

                    <div class="title">
                      <span onClick={() => showandhide(1)}>
                        <>
                          {faq.map((e) => {
                            return parse(e.sections[0]?.content);
                          })}
                        </>
                      </span>
                      <i
                        onClick={() => showandhide(1)}
                        class="fas fa-chevron-right"
                      ></i>{" "}
                    </div>

                    <p
                      style={
                        showp && showno == 1
                          ? { display: "block", textAlign: "justify" }
                          : { display: "none" }
                      }
                      class="paragraph"
                    >
                      <>
                        {faq.map((e) => {
                          return parse(e.sections[1]?.content);
                        })}
                      </>
                    </p>
                  </div>

                  <div
                    class={
                      showp && showno == 2
                        ? "accordion-item active"
                        : "accordion-item "
                    }
                  >

                    <div class="title">
                      <span onClick={() => showandhide(2)}>
                        <>
                          {faq.map((e) => {
                            return parse(e.sections[2]?.content);
                          })}
                        </>
                      </span>
                      <i
                        onClick={() => showandhide(2)}
                        class="fas fa-chevron-right  "
                      ></i>{" "}
                    </div>
                    <p
                      style={
                        showp && showno == 2
                          ? { display: "block", textAlign: "justify" }
                          : { display: "none" }
                      }
                      class="paragraph"
                    >
                      <>
                        {faq.map((e) => {
                          return parse(e.sections[3]?.content);
                        })}
                      </>
                    </p>
                  </div>

                  <div
                    class={
                      showp && showno == 3
                        ? "accordion-item active"
                        : "accordion-item "
                    }
                  >
                    <div class="title">
                      <span onClick={() => showandhide(3)}>
                        <>
                          {faq.map((e) => {
                            return parse(e.sections[4]?.content);
                          })}
                        </>
                      </span>
                      <i
                        onClick={() => showandhide(3)}
                        class="fas fa-chevron-right  "
                      ></i>{" "}
                    </div>
                    <p
                      style={
                        showp && showno == 3
                          ? { display: "block", textAlign: "justify" }
                          : { display: "none" }
                      }
                      class="paragraph"
                    >
                      <>
                        {faq.map((e) => {
                          return parse(e.sections[5]?.content);
                        })}
                      </>
                    </p>
                  </div>


                  <div
                    class={
                      showp && showno == 4
                        ? "accordion-item active"
                        : "accordion-item "
                    }
                  >
                    <div class="title">
                      <span onClick={() => showandhide(4)}>
                        <>
                          {faq.map((e) => {
                            return parse(e.sections[6]?.content);
                          })}
                        </>
                      </span>
                      <i
                        onClick={() => showandhide(4)}
                        class="fas fa-chevron-right  "
                      ></i>{" "}
                    </div>
                    <p
                      style={
                        showp && showno == 4
                          ? { display: "block", textAlign: "justify" }
                          : { display: "none" }
                      }
                      class="paragraph"
                    >
                      <>
                        {faq.map((e) => {
                          return parse(e.sections[7]?.content);
                        })}
                      </>
                    </p>
                  </div>


                  <div
                    class={
                      showp && showno == 5
                        ? "accordion-item active"
                        : "accordion-item "
                    }
                  >
                    <div class="title">
                      <span onClick={() => showandhide(5)}>
                        <>
                          {faq.map((e) => {
                            return parse(e.sections[8]?.content);
                          })}
                        </>
                      </span>
                      <i
                        onClick={() => showandhide(5)}
                        class="fas fa-chevron-right  "
                      ></i>{" "}
                    </div>
                    <p
                      style={
                        showp && showno == 5
                          ? { display: "block", textAlign: "justify" }
                          : { display: "none" }
                      }
                      class="paragraph"
                    >
                      <>
                        {faq.map((e) => {
                          return parse(e.sections[9]?.content);
                        })}
                      </>
                    </p>
                  </div>


                  <div
                    class={
                      showp && showno == 6
                        ? "accordion-item active"
                        : "accordion-item "
                    }
                  >
                    <div class="title">
                      <span onClick={() => showandhide(6)}>
                        <>
                          {faq.map((e) => {
                            return parse(e.sections[10]?.content);
                          })}
                        </>
                      </span>
                      <i
                        onClick={() => showandhide(6)}
                        class="fas fa-chevron-right  "
                      ></i>{" "}
                    </div>
                    <p
                      style={
                        showp && showno == 6
                          ? { display: "block", textAlign: "justify" }
                          : { display: "none" }
                      }
                      class="paragraph"
                    >
                      <>
                        {faq.map((e) => {
                          return parse(e.sections[11]?.content);
                        })}
                      </>
                    </p>
                  </div>


                  <div
                    class={
                      showp && showno == 7
                        ? "accordion-item active"
                        : "accordion-item "
                    }
                  >
                    <div class="title">
                      <span onClick={() => showandhide(7)}>
                        <>
                          {faq.map((e) => {
                            return parse(e.sections[12]?.content);
                          })}
                        </>
                      </span>
                      <i
                        onClick={() => showandhide(7)}
                        class="fas fa-chevron-right  "
                      ></i>{" "}
                    </div>
                    <p
                      style={
                        showp && showno == 7
                          ? { display: "block", textAlign: "justify" }
                          : { display: "none" }
                      }
                      class="paragraph"
                    >
                      <>
                        {faq.map((e) => {
                          return parse(e.sections[13]?.content);
                        })}
                      </>
                    </p>
                  </div>

                </div>
              </main>
            </div>

            <a name="faq02" id="faq02"></a>
            <div id="faq2" class="gym__related" style={dreg == "faq02" ? { display: "block", textAlign: "left" } : { display: "none" }}>
              <h3 className="main-h3">Entry & Exit</h3>

              <main class="main">
                <div class="accordion">

                  <div
                    class={
                      showp && showno == 8
                        ? "accordion-item active"
                        : "accordion-item "
                    }
                  >

                    <div class="title">
                      <span onClick={() => showandhide(8)}>
                        <>
                          {entry.map((e) => {
                            return parse(e.sections[0]?.content);
                          })}
                        </>
                      </span>
                      <i
                        onClick={() => showandhide(8)}
                        class="fas fa-chevron-right  "
                      ></i>{" "}
                    </div>

                    <p
                      style={
                        showp && showno == 8
                          ? { display: "block", textAlign: "justify" }
                          : { display: "none" }
                      }
                      class="paragraph"
                    >
                      <>
                        {entry.map((e) => {
                          return parse(e.sections[1]?.content);
                        })}
                      </>
                    </p>
                  </div>

                  <div
                    class={
                      showp && showno == 9
                        ? "accordion-item active"
                        : "accordion-item "
                    }
                  >

                    <div class="title">
                      <span onClick={() => showandhide(9)}>
                        <>
                          {entry.map((e) => {
                            return parse(e.sections[2]?.content);
                          })}
                        </>
                      </span>
                      <i
                        onClick={() => showandhide(9)}
                        class="fas fa-chevron-right  "
                      ></i>{" "}
                    </div>
                    <p
                      style={
                        showp && showno == 9
                          ? { display: "block", textAlign: "justify" }
                          : { display: "none" }
                      }
                      class="paragraph"
                    >
                      <>
                        {entry.map((e) => {
                          return parse(e.sections[3]?.content);
                        })}
                      </>
                    </p>
                  </div>


                  <div
                    class={
                      showp && showno == 10
                        ? "accordion-item active"
                        : "accordion-item "
                    }
                  >
                    <div class="title">
                      <span onClick={() => showandhide(10)}>
                        <>
                          {entry.map((e) => {
                            return parse(e.sections[4]?.content);
                          })}
                        </>
                      </span>
                      <i
                        onClick={() => showandhide(10)}
                        class="fas fa-chevron-right  "
                      ></i>{" "}
                    </div>
                    <p
                      style={
                        showp && showno == 10
                          ? { display: "block", textAlign: "justify" }
                          : { display: "none" }
                      }
                      class="paragraph"
                    >
                      <>
                        {entry.map((e) => {
                          return parse(e.sections[5]?.content);
                        })}
                      </>
                    </p>
                  </div>


                  <div
                    class={
                      showp && showno == 11
                        ? "accordion-item active"
                        : "accordion-item "
                    }
                  >
                    <div class="title">
                      <span onClick={() => showandhide(11)}>
                        <>
                          {entry.map((e) => {
                            return parse(e.sections[6]?.content);
                          })}
                        </>
                      </span>
                      <i
                        onClick={() => showandhide(11)}
                        class="fas fa-chevron-right  "
                      ></i>{" "}
                    </div>
                    <p
                      style={
                        showp && showno == 11
                          ? { display: "block", textAlign: "justify" }
                          : { display: "none" }
                      }
                      class="paragraph"
                    >
                      <>
                        {entry.map((e) => {
                          return parse(e.sections[7]?.content);
                        })}
                      </>
                    </p>
                  </div>


                  <div
                    class={
                      showp && showno == 12
                        ? "accordion-item active"
                        : "accordion-item "
                    }
                  >
                    <div class="title">
                      <span onClick={() => showandhide(12)}>
                        <>
                          {entry.map((e) => {
                            return parse(e.sections[8]?.content);
                          })}
                        </>
                      </span>
                      <i
                        onClick={() => showandhide(12)}
                        class="fas fa-chevron-right  "
                      ></i>{" "}
                    </div>
                    <p
                      style={
                        showp && showno == 12
                          ? { display: "block", textAlign: "justify" }
                          : { display: "none" }
                      }
                      class="paragraph"
                    >
                      <>
                        {entry.map((e) => {
                          return parse(e.sections[9]?.content);
                        })}
                      </>
                    </p>
                  </div>


                  <div
                    class={
                      showp && showno == 13
                        ? "accordion-item active"
                        : "accordion-item "
                    }
                  >
                    <div class="title">
                      <span onClick={() => showandhide(13)}>
                        <>
                          {entry.map((e) => {
                            return parse(e.sections[10]?.content);
                          })}
                        </>
                      </span>
                      <i
                        onClick={() => showandhide(13)}
                        class="fas fa-chevron-right  "
                      ></i>{" "}
                    </div>
                    <p
                      style={
                        showp && showno == 13
                          ? { display: "block", textAlign: "justify" }
                          : { display: "none" }
                      }
                      class="paragraph"
                    >
                      <>
                        {entry.map((e) => {
                          return parse(e.sections[11]?.content);
                        })}
                      </>
                    </p>
                  </div>


                  <div
                    class={
                      showp && showno == 14
                        ? "accordion-item active"
                        : "accordion-item "
                    }
                  >
                    <div class="title">
                      <span onClick={() => showandhide(14)}>
                        <>
                          {entry.map((e) => {
                            return parse(e.sections[12]?.content);
                          })}
                        </>
                      </span>
                      <i
                        onClick={() => showandhide(14)}
                        class="fas fa-chevron-right  "
                      ></i>{" "}
                    </div>
                    <p
                      style={
                        showp && showno == 14
                          ? { display: "block", textAlign: "justify" }
                          : { display: "none" }
                      }
                      class="paragraph"
                    >
                      <>
                        {entry.map((e) => {
                          return parse(e.sections[13]?.content);
                        })}
                      </>
                    </p>
                  </div>

                </div>
              </main>


            </div>
            <a name="faq03" id="faq03"></a>
            <div id="faq3" class="gym__related" style={dreg == "faq03" ? { display: "block", textAlign: "left" } : { display: "none" }} >
              <h3 className="main-h3">Gym Related</h3>

              <main class="main">
                <div class="accordion">

                  <div
                    class={
                      showp && showno == 15
                        ? "accordion-item active"
                        : "accordion-item "
                    }
                  >

                    <div class="title">
                      <span onClick={() => showandhide(15)}>
                        <>
                          {gymrelated.map((e) => {
                            return parse(e.sections[0]?.content);
                          })}
                        </>
                      </span>
                      <i
                        onClick={() => showandhide(15)}
                        class="fas fa-chevron-right  "
                      ></i>{" "}
                    </div>

                    <p
                      style={
                        showp && showno == 15
                          ? { display: "block", textAlign: "justify" }
                          : { display: "none" }
                      }
                      class="paragraph"
                    >
                      <>
                        {gymrelated.map((e) => {
                          return parse(e.sections[1]?.content);
                        })}
                      </>
                    </p>
                  </div>

                  <div
                    class={
                      showp && showno == 16
                        ? "accordion-item active"
                        : "accordion-item "
                    }
                  >

                    <div class="title">
                      <span onClick={() => showandhide(16)}>
                        <>
                          {gymrelated.map((e) => {
                            return parse(e.sections[2]?.content);
                          })}
                        </>
                      </span>
                      <i
                        onClick={() => showandhide(16)}
                        class="fas fa-chevron-right  "
                      ></i>{" "}
                    </div>
                    <p
                      style={
                        showp && showno == 16
                          ? { display: "block", textAlign: "justify" }
                          : { display: "none" }
                      }
                      class="paragraph"
                    >
                      <>
                        {gymrelated.map((e) => {
                          return parse(e.sections[3]?.content);
                        })}
                      </>
                    </p>
                  </div>


                  <div
                    class={
                      showp && showno == 17
                        ? "accordion-item active"
                        : "accordion-item "
                    }
                  >
                    <div class="title">
                      <span onClick={() => showandhide(17)}>
                        <>
                          {gymrelated.map((e) => {
                            return parse(e.sections[4]?.content);
                          })}
                        </>
                      </span>
                      <i
                        onClick={() => showandhide(17)}
                        class="fas fa-chevron-right  "
                      ></i>{" "}
                    </div>
                    <p
                      style={
                        showp && showno == 17
                          ? { display: "block", textAlign: "justify" }
                          : { display: "none" }
                      }
                      class="paragraph"
                    >
                      <>
                        {gymrelated.map((e) => {
                          return parse(e.sections[5]?.content);
                        })}
                      </>
                    </p>
                  </div>


                  <div
                    class={
                      showp && showno == 18
                        ? "accordion-item active"
                        : "accordion-item "
                    }
                  >
                    <div class="title">
                      <span onClick={() => showandhide(18)}>
                        <>
                          {gymrelated.map((e) => {
                            return parse(e.sections[6]?.content);
                          })}
                        </>
                      </span>
                      <i
                        onClick={() => showandhide(18)}
                        class="fas fa-chevron-right  "
                      ></i>{" "}
                    </div>
                    <p
                      style={
                        showp && showno == 18
                          ? { display: "block", textAlign: "justify" }
                          : { display: "none" }
                      }
                      class="paragraph"
                    >
                      <>
                        {gymrelated.map((e) => {
                          return parse(e.sections[7]?.content);
                        })}
                      </>
                    </p>
                  </div>


                  <div
                    class={
                      showp && showno == 19
                        ? "accordion-item active"
                        : "accordion-item "
                    }
                  >
                    <div class="title">
                      <span onClick={() => showandhide(19)}>
                        <>
                          {gymrelated.map((e) => {
                            return parse(e.sections[8]?.content);
                          })}
                        </>
                      </span>
                      <i
                        onClick={() => showandhide(19)}
                        class="fas fa-chevron-right  "
                      ></i>{" "}
                    </div>
                    <p
                      style={
                        showp && showno == 19
                          ? { display: "block", textAlign: "justify" }
                          : { display: "none" }
                      }
                      class="paragraph"
                    >
                      <>
                        {gymrelated.map((e) => {
                          return parse(e.sections[9]?.content);
                        })}
                      </>
                    </p>
                  </div>


                  <div
                    class={
                      showp && showno == 20
                        ? "accordion-item active"
                        : "accordion-item "
                    }
                  >
                    <div class="title">
                      <span onClick={() => showandhide(20)}>
                        <>
                          {gymrelated.map((e) => {
                            return parse(e.sections[10]?.content);
                          })}
                        </>
                      </span>
                      <i
                        onClick={() => showandhide(20)}
                        class="fas fa-chevron-right  "
                      ></i>{" "}
                    </div>
                    <p
                      style={
                        showp && showno == 20
                          ? { display: "block", textAlign: "justify" }
                          : { display: "none" }
                      }
                      class="paragraph"
                    >
                      <>
                        {gymrelated.map((e) => {
                          return parse(e.sections[11]?.content);
                        })}
                      </>
                    </p>
                  </div>


                  <div
                    class={
                      showp && showno == 21
                        ? "accordion-item active"
                        : "accordion-item "
                    }
                  >
                    <div class="title">
                      <span onClick={() => showandhide(21)}>
                        <>
                          {gymrelated.map((e) => {
                            return parse(e.sections[12]?.content);
                          })}
                        </>
                      </span>
                      <i
                        onClick={() => showandhide(21)}
                        class="fas fa-chevron-right  "
                      ></i>{" "}
                    </div>
                    <p
                      style={
                        showp && showno == 21
                          ? { display: "block", textAlign: "justify" }
                          : { display: "none" }
                      }
                      class="paragraph"
                    >
                      <>
                        {gymrelated.map((e) => {
                          return parse(e.sections[13]?.content);
                        })}
                      </>
                    </p>
                  </div>

                </div>
              </main>


            </div>


            <a name="faq04" id="faq04"></a>
            <div id="faq4" class="gym__related" style={dreg == "faq04" ? { display: "block", textAlign: "left" } : { display: "none" }}>
              <h3 className="main-h3">Personal</h3>

              {/* <main class="main">
                <div class="accordion">

                  <div
                    class={
                      showp && showno == 1
                        ? "accordion-item active"
                        : "accordion-item "
                    }
                  >

                    <div class="title">
                      <span>
                        <>
                          {personal.map((e) => {
                            return parse(e.sections[0]?.content);
                          })}
                        </>
                      </span>
                      <i
                        onClick={() => showandhide(1)}
                        class="fas fa-chevron-right  "
                      ></i>{" "}
                    </div>

                    <p
                      style={
                        showp && showno == 1
                          ? { display: "block", textAlign: "justify" }
                          : { display: "none" }
                      }
                      class="paragraph"
                    >
                      <>
                        {personal.map((e) => {
                          return parse(e.sections[1]?.content);
                        })}
                      </>
                    </p>
                  </div>

<div
                    class={
                      showp && showno == 2
                        ? "accordion-item active"
                        : "accordion-item "
                    }
                  >

                    <div class="title">
                      <span>
                        <>
                          {personal.map((e) => {
                            return parse(e.sections[2]?.content);
                          })}
                        </>
                      </span>
                      <i
                        onClick={() => showandhide(2)}
                        class="fas fa-chevron-right  "
                      ></i>{" "}
                    </div>
                    <p
                      style={
                        showp && showno == 2
                          ? { display: "block", textAlign: "justify" }
                          : { display: "none" }
                      }
                      class="paragraph"
                    >
                      <>
                        {personal.map((e) => {
                          return parse(e.sections[3]?.content);
                        })}
                      </>
                    </p>
                  </div>


                  <div
                    class={
                      showp && showno == 3
                        ? "accordion-item active"
                        : "accordion-item "
                    }
                  >
                    <div class="title">
                      <span>
                        <>
                          {personal.map((e) => {
                            return parse(e.sections[4]?.content);
                          })}
                        </>
                      </span>
                      <i
                        onClick={() => showandhide(3)}
                        class="fas fa-chevron-right  "
                      ></i>{" "}
                    </div>
                    <p
                      style={
                        showp && showno == 3
                          ? { display: "block", textAlign: "justify" }
                          : { display: "none" }
                      }
                      class="paragraph"
                    >
                      <>
                        {personal.map((e) => {
                          return parse(e.sections[5]?.content);
                        })}
                      </>
                    </p>
                  </div>


                  <div
                    class={
                      showp && showno == 4
                        ? "accordion-item active"
                        : "accordion-item "
                    }
                  >
                    <div class="title">
                      <span>
                        <>
                          {personal.map((e) => {
                            return parse(e.sections[6]?.content);
                          })}
                        </>
                      </span>
                      <i
                        onClick={() => showandhide(4)}
                        class="fas fa-chevron-right  "
                      ></i>{" "}
                    </div>
                    <p
                      style={
                        showp && showno == 4
                          ? { display: "block", textAlign: "justify" }
                          : { display: "none" }
                      }
                      class="paragraph"
                    >
                      <>
                        {personal.map((e) => {
                          return parse(e.sections[7]?.content);
                        })}
                      </>
                    </p>
                  </div>


                  <div
                    class={
                      showp && showno == 5
                        ? "accordion-item active"
                        : "accordion-item "
                    }
                  >
                    <div class="title">
                      <span>
                        <>
                          {personal.map((e) => {
                            return parse(e.sections[8]?.content);
                          })}
                        </>
                      </span>
                      <i
                        onClick={() => showandhide(5)}
                        class="fas fa-chevron-right  "
                      ></i>{" "}
                    </div>
                    <p
                      style={
                        showp && showno == 5
                          ? { display: "block", textAlign: "justify" }
                          : { display: "none" }
                      }
                      class="paragraph"
                    >
                      <>
                        {personal.map((e) => {
                          return parse(e.sections[9]?.content);
                        })}
                      </>
                    </p>
                  </div>


                  <div
                    class={
                      showp && showno == 6
                        ? "accordion-item active"
                        : "accordion-item "
                    }
                  >
                    <div class="title">
                      <span>
                        <>
                          {personal.map((e) => {
                            return parse(e.sections[10]?.content);
                          })}
                        </>
                      </span>
                      <i
                        onClick={() => showandhide(6)}
                        class="fas fa-chevron-right  "
                      ></i>{" "}
                    </div>
                    <p
                      style={
                        showp && showno == 6
                          ? { display: "block", textAlign: "justify" }
                          : { display: "none" }
                      }
                      class="paragraph"
                    >
                      <>
                        {personal.map((e) => {
                          return parse(e.sections[11]?.content);
                        })}
                      </>
                    </p>
                  </div>


                  <div
                    class={
                      showp && showno == 7
                        ? "accordion-item active"
                        : "accordion-item "
                    }
                  >
                    <div class="title">
                      <span>
                        <>
                          {personal.map((e) => {
                            return parse(e.sections[12]?.content);
                          })}
                        </>
                      </span>
                      <i
                        onClick={() => showandhide(7)}
                        class="fas fa-chevron-right  "
                      ></i>{" "}
                    </div>
                    <p
                      style={
                        showp && showno == 7
                          ? { display: "block", textAlign: "justify" }
                          : { display: "none" }
                      }
                      class="paragraph"
                    >
                      <>
                        {personal.map((e) => {
                          return parse(e.sections[13]?.content);
                        })}
                      </>
                    </p>
                  </div>

                </div>
              </main> */}

            </div>
            <a name="faq05" id="faq05"></a>
            <div id="faq5" class="gym__related" style={dreg == "faq05" ? { display: "block", textAlign: "left" } : { display: "none" }}>
              <h3 className="main-h3">Miscellaneous</h3>

              <main class="main">
                <div class="accordion">

                  <div
                    class={
                      showp && showno == 22
                        ? "accordion-item active"
                        : "accordion-item "
                    }
                  >

                    <div class="title">
                      <span onClick={() => showandhide(22)}>
                        <>
                          {miscellan.map((e) => {
                            return parse(e.sections[0]?.content);
                          })}
                        </>
                      </span>
                      <i
                        onClick={() => showandhide(22)}
                        class="fas fa-chevron-right  "
                      ></i>{" "}
                    </div>

                    <p
                      style={
                        showp && showno == 22
                          ? { display: "block", textAlign: "justify" }
                          : { display: "none" }
                      }
                      class="paragraph"
                    >
                      <>
                        {miscellan.map((e) => {
                          return parse(e.sections[1]?.content);
                        })}
                      </>
                    </p>
                  </div>

                  <div
                    class={
                      showp && showno == 23
                        ? "accordion-item active"
                        : "accordion-item "
                    }
                  >

                    <div class="title">
                      <span onClick={() => showandhide(23)}>
                        <>
                          {miscellan.map((e) => {
                            return parse(e.sections[2]?.content);
                          })}
                        </>
                      </span>
                      <i
                        onClick={() => showandhide(23)}
                        class="fas fa-chevron-right  "
                      ></i>{" "}
                    </div>
                    <p
                      style={
                        showp && showno == 23
                          ? { display: "block", textAlign: "justify" }
                          : { display: "none" }
                      }
                      class="paragraph"
                    >
                      <>
                        {miscellan.map((e) => {
                          return parse(e.sections[3]?.content);
                        })}
                      </>
                    </p>
                  </div>


                  <div
                    class={
                      showp && showno == 24
                        ? "accordion-item active"
                        : "accordion-item "
                    }
                  >
                    <div class="title">
                      <span onClick={() => showandhide(24)}>
                        <>
                          {miscellan.map((e) => {
                            return parse(e.sections[4]?.content);
                          })}
                        </>
                      </span>
                      <i
                        onClick={() => showandhide(24)}
                        class="fas fa-chevron-right  "
                      ></i>{" "}
                    </div>
                    <p
                      style={
                        showp && showno == 24
                          ? { display: "block", textAlign: "justify" }
                          : { display: "none" }
                      }
                      class="paragraph"
                    >
                      <>
                        {miscellan.map((e) => {
                          return parse(e.sections[5]?.content);
                        })}
                      </>
                    </p>
                  </div>


                  <div
                    class={
                      showp && showno == 25
                        ? "accordion-item active"
                        : "accordion-item "
                    }
                  >
                    <div class="title">
                      <span onClick={() => showandhide(25)}>
                        <>
                          {miscellan.map((e) => {
                            return parse(e.sections[6]?.content);
                          })}
                        </>
                      </span>
                      <i
                        onClick={() => showandhide(25)}
                        class="fas fa-chevron-right  "
                      ></i>{" "}
                    </div>
                    <p
                      style={
                        showp && showno == 25
                          ? { display: "block", textAlign: "justify" }
                          : { display: "none" }
                      }
                      class="paragraph"
                    >
                      <>
                        {miscellan.map((e) => {
                          return parse(e.sections[7]?.content);
                        })}
                      </>
                    </p>
                  </div>

                  <div
                    class={
                      showp && showno == 26
                        ? "accordion-item active"
                        : "accordion-item "
                    }
                  >
                    <div class="title">
                      <span onClick={() => showandhide(26)}>
                        <>
                          {miscellan.map((e) => {
                            return parse(e.sections[8]?.content);
                          })}
                        </>
                      </span>
                      <i
                        onClick={() => showandhide(26)}
                        class="fas fa-chevron-right  "
                      ></i>{" "}
                    </div>
                    <p
                      style={
                        showp && showno == 26
                          ? { display: "block", textAlign: "justify" }
                          : { display: "none" }
                      }
                      class="paragraph"
                    >
                      <>
                        {miscellan.map((e) => {
                          return parse(e.sections[9]?.content);
                        })}
                      </>
                    </p>
                  </div>

                  <div
                    class={
                      showp && showno == 27
                        ? "accordion-item active"
                        : "accordion-item "
                    }
                  >
                    <div class="title">
                      <span onClick={() => showandhide(27)}>
                        <>
                          {miscellan.map((e) => {
                            return parse(e.sections[10]?.content);
                          })}
                        </>
                      </span>
                      <i
                        onClick={() => showandhide(27)}
                        class="fas fa-chevron-right  "
                      ></i>{" "}
                    </div>
                    <p
                      style={
                        showp && showno == 27
                          ? { display: "block", textAlign: "justify" }
                          : { display: "none" }
                      }
                      class="paragraph"
                    >
                      <>
                        {miscellan.map((e) => {
                          return parse(e.sections[11]?.content);
                        })}
                      </>
                    </p>
                  </div>


                  <div
                    class={
                      showp && showno == 28
                        ? "accordion-item active"
                        : "accordion-item "
                    }
                  >
                    <div class="title">
                      <span onClick={() => showandhide(28)}>
                        <>
                          {miscellan.map((e) => {
                            return parse(e.sections[12]?.content);
                          })}
                        </>
                      </span>
                      <i
                        onClick={() => showandhide(28)}
                        class="fas fa-chevron-right  "
                      ></i>{" "}
                    </div>
                    <p
                      style={
                        showp && showno == 28
                          ? { display: "block", textAlign: "justify" }
                          : { display: "none" }
                      }
                      class="paragraph"
                    >
                      <>
                        {miscellan.map((e) => {
                          return parse(e.sections[13]?.content);
                        })}
                      </>
                    </p>
                  </div>

                </div>
              </main>

            </div>
            <a name="faq06" id="faq06"></a>

            <div id="faq6" class="gym__related" style={dreg == "faq06" ? { display: "block", textAlign: "left" } : { display: "none" }}>
              <h3 className="main-h3" >Others</h3>

              <main class="main">
                <div class="accordion">

                  <div
                    class={
                      showp && showno == 29
                        ? "accordion-item active"
                        : "accordion-item "
                    }
                  >

                    <div class="title">
                      <span onClick={() => showandhide(29)}>
                        <>
                          {other.map((e) => {
                            return parse(e.sections[0]?.content);
                          })}
                        </>
                      </span>
                      <i
                        onClick={() => showandhide(29)}
                        class="fas fa-chevron-right  "
                      ></i>{" "}
                    </div>

                    <p
                      style={
                        showp && showno == 29
                          ? { display: "block", textAlign: "justify" }
                          : { display: "none" }
                      }
                      class="paragraph"
                    >
                      <>
                        {other.map((e) => {
                          return parse(e.sections[1]?.content);
                        })}
                      </>
                    </p>
                  </div>

                  <div
                    class={
                      showp && showno == 30
                        ? "accordion-item active"
                        : "accordion-item "
                    }
                  >

                    <div class="title">
                      <span onClick={() => showandhide(30)}>
                        <>
                          {other.map((e) => {
                            return parse(e.sections[2]?.content);
                          })}
                        </>
                      </span>
                      <i
                        onClick={() => showandhide(30)}
                        class="fas fa-chevron-right  "
                      ></i>{" "}
                    </div>
                    <p
                      style={
                        showp && showno == 30
                          ? { display: "block", textAlign: "justify" }
                          : { display: "none" }
                      }
                      class="paragraph"
                    >
                      <>
                        {other.map((e) => {
                          return parse(e.sections[3]?.content);
                        })}
                      </>
                    </p>
                  </div>

                  <div
                    class={
                      showp && showno == 31
                        ? "accordion-item active"
                        : "accordion-item "
                    }
                  >
                    <div class="title">
                      <span onClick={() => showandhide(31)}>
                        <>
                          {other.map((e) => {
                            return parse(e.sections[4]?.content);
                          })}
                        </>
                      </span>
                      <i
                        onClick={() => showandhide(31)}
                        class="fas fa-chevron-right  "
                      ></i>{" "}
                    </div>
                    <p
                      style={
                        showp && showno == 31
                          ? { display: "block", textAlign: "justify" }
                          : { display: "none" }
                      }
                      class="paragraph"
                    >
                      <>
                        {other.map((e) => {
                          return parse(e.sections[5]?.content);
                        })}
                      </>
                    </p>
                  </div>


                  <div
                    class={
                      showp && showno == 32
                        ? "accordion-item active"
                        : "accordion-item "
                    }
                  >
                    <div class="title">
                      <span onClick={() => showandhide(32)}>
                        <>
                          {other.map((e) => {
                            return parse(e.sections[6]?.content);
                          })}
                        </>
                      </span>
                      <i
                        onClick={() => showandhide(32)}
                        class="fas fa-chevron-right  "
                      ></i>{" "}
                    </div>
                    <p
                      style={
                        showp && showno == 32
                          ? { display: "block", textAlign: "justify" }
                          : { display: "none" }
                      }
                      class="paragraph"
                    >
                      <>
                        {other.map((e) => {
                          return parse(e.sections[7]?.content);
                        })}
                      </>
                    </p>
                  </div>


                  <div
                    class={
                      showp && showno == 33
                        ? "accordion-item active"
                        : "accordion-item "
                    }
                  >
                    <div class="title">
                      <span onClick={() => showandhide(33)}>
                        <>
                          {other.map((e) => {
                            return parse(e.sections[8]?.content);
                          })}
                        </>
                      </span>
                      <i
                        onClick={() => showandhide(33)}
                        class="fas fa-chevron-right  "
                      ></i>{" "}
                    </div>
                    <p
                      style={
                        showp && showno == 33
                          ? { display: "block", textAlign: "justify" }
                          : { display: "none" }
                      }
                      class="paragraph"
                    >
                      <>
                        {other.map((e) => {
                          return parse(e.sections[9]?.content);
                        })}
                      </>
                    </p>
                  </div>


                  <div
                    class={
                      showp && showno == 34
                        ? "accordion-item active"
                        : "accordion-item "
                    }
                  >
                    <div class="title">
                      <span onClick={() => showandhide(34)}>
                        <>
                          {other.map((e) => {
                            return parse(e.sections[10]?.content);
                          })}
                        </>
                      </span>
                      <i
                        onClick={() => showandhide(34)}
                        class="fas fa-chevron-right  "
                      ></i>{" "}
                    </div>
                    <p
                      style={
                        showp && showno == 34
                          ? { display: "block", textAlign: "justify" }
                          : { display: "none" }
                      }
                      class="paragraph"
                    >
                      <>
                        {other.map((e) => {
                          return parse(e.sections[11]?.content);
                        })}
                      </>
                    </p>
                  </div>

                  <div
                    class={
                      showp && showno == 35
                        ? "accordion-item active"
                        : "accordion-item "
                    }
                  >
                    <div class="title">
                      <span onClick={() => showandhide(35)}>
                        <>
                          {other.map((e) => {
                            return parse(e.sections[12]?.content);
                          })}
                        </>
                      </span>
                      <i
                        onClick={() => showandhide(35)}
                        class="fas fa-chevron-right  "
                      ></i>{" "}
                    </div>
                    <p
                      style={
                        showp && showno == 35
                          ? { display: "block", textAlign: "justify" }
                          : { display: "none" }
                      }
                      class="paragraph"
                    >
                      <>
                        {other.map((e) => {
                          return parse(e.sections[13]?.content);
                        })}
                      </>
                    </p>
                  </div>

                </div>
              </main>


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

              <select
                value={category}
                name="category"
                onChange={(e) => onValueChange(e)}
              >
                <option value="">Category</option>
                <option value="Gym">Gym</option>
                <option value="Trainer">Trainer</option>
                <option value="Complaint">Complaint</option>
              </select>

              <div >
                {!category & (submitcount > 0) ? (
                  <p className="worningmsg-contact">Please fill out this field</p>
                ) : (
                  ""
                )}
              </div>

              <select
                style={
                  gender2 === "Others"
                    ? { display: "none" }
                    : { display: "block" }
                }
                value={inquiry}
                name="inquiry"
                onChange={(e) => (onValueChange(e), setgender2(e.target.value))}
              >
                <option value="">Inquiry type</option>
                <option value="Bookings"> Bookings </option>
                <option value="Entry & Exit">Entry & Exit</option>
                <option value="Gym Related">Gym Related</option>
                <option value="Personal">Personal</option>
                <option value="Miscellaneous">Miscellaneous</option>
                <option value="Others">Others</option>
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

              <input
                onChange={(e) => onValueChange(e)}
                value={name}
                name="name"
                type="text"
                placeholder="Name"
              />

              <div >
                {!name & (submitcount > 0) ? (
                  <p className="worningmsg-contact">Please fill out this field</p>
                ) : (
                  ""
                )}
              </div>

              <input
                onChange={(e) => onValueChange(e)}
                value={email}
                name="email"
                type="email"
                placeholder="Email Address"
              />

              <div >
                {!email & (submitcount > 0) ? (
                  <p className="worningmsg-contact">Please fill out this field</p>
                ) : (
                  ""
                )}
              </div>

              <div >
                {message && submitcount > 0 ? (
                  <p className="worningmsg-contact">{message}</p>
                ) : (
                  ""
                )}
              </div>

              <textarea
                onChange={(e) => onValueChange(e)}
                value={info}
                name="info"
                type="text"
                placeholder="Message"
              ></textarea>

              <div >
                {!info & (submitcount > 0) ? (
                  <p className="worningmsg-contact">Please fill out this field</p>
                ) : (
                  ""
                )}
              </div>

              <input
                onClick={hundleSubmit}
                type="submit"
                value="Send Message"
              />
            </div>
            <div
              style={{ marginTop: "13px" }}
              class="col-lg-6 text-center"
              data-aos="fade-left"
            >
              <p>
                <img src="assets/img/contact-img.png" alt="" />
              </p>
              <ul style={{ textAlign: "left" }}>
                <div
                  style={{ top: "-10px", position: "relative" }}
                  class="d-flex flex-row"
                >
                  <div style={{ top: "-10px", position: "relative" }}>
                    <li>
                      <i class="fa-solid fa-location-dot"></i>
                    </li>
                  </div>
                  <div>
                    <li
                      style={{
                        marginLeft: "10px",
                        marginTop: "10px",
                        textAlign: "justify",
                        wordSpacing: "-5px",
                      }}
                    >
                      {" "}
                      Park Tower Shinkawasaki, 1-1-5 Kashimada, Saiwai Ward,
                      Kawasaki City, Kanagawa Prefecture, Japan 212-0058
                    </li>
                  </div>
                </div>

                <li style={{ marginTop: "-15px", textAlign: "center" }}>
                  <i class="fa-solid fa-phone"></i>{" "}
                  <a href="#">+00 1234567890</a>
                </li>
                <li style={{ marginTop: "-10px", textAlign: "center" }}>
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

      <Footer />
    </div>
  );
};

export default Faqs;
