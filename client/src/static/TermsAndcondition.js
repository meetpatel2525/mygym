import React from 'react'
import Footer from '../home/Footer'
import Header from '../home/Header'
import { useEffect, useState } from "react";

const TermsAndcondition = () => {

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

    <body id="top">

<Header handleScroll={handleScroll} headerClassName={headerClassName} />
<section class="inner-masthead"> 
<img src="assets/img/banner-terms-conditions.jpg" class="img-overlay" alt=""/>
 <img src="assets/img/banner-overlay-content-inner.png" class="img-overlay" alt=""/>
  <div class="container">
    <div class="inner-masthead__wrap">
      <div class="inner-masthead__wrap-item text-center">
        <h1 style={{marginTop:"15px"}} data-aos="fade-up">Terms & Conditions</h1>
      </div>
    </div>
  </div>
</section>
<section style={{ textAlign: "left" ,textAlign:"justify"}}  class="cms-section">
  <div class="container">
    <h2>Terms &  Conditions</h2>
    <p>Welcome to the website (the “Site”) of Shef, Inc. (“Shef,” “we,” “us,” or “our”). Shef provides an online marketplace in which personal chefs, caterers and other individuals can list, offer, sell and deliver food items and meal orders to the general public, and customers can browse and purchase Meals (collectively, including the Site and any related mobile applications, the “Service”).  Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies pulvinar donec risus orci. In magnis orci, imperdiet ultricies Lorem ipsum dolor sit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies pulvinar donec risus orci. In magnis orci, imperdiet ultricies Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies pulvinar donec risus orci. In magnis orci, imperdiet ultricies Lorem ipsum dolor sit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies pulvinar donec risus orci. In magnis orci, imperdiet ultricies Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet.</p>
    <h5>1. Agreement to Terms</h5>
    <p>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies pulvinar donec risus orci. In magnis orci, imperdiet ultricies Lorem ipsum dolor sit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies pulvinar donec risus orci. In magnis orci, imperdiet ultricies Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet.</p>
    <h5>2. Acceptable Use</h5>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod tempus, fames donec at aliquet lectus adipiscing nibh. Aliquam et nulla eu habitant aliquam. In sed vel donec et. Lacus convallis in eu fusce sed quis orci. Lectus interdum purus magnis id eros, molestie massa adipiscing sit. In proin mattis sit at tempor, blandit vitae. Libero amet phasellus aliquam diam feugiat quis. Velit velit, fames sit euismod auctor fringilla. Ac sagittis lectus pharetra pulvinar amet. Vulputate pretium suspendisse eu eget lacinia egestas lorem. Tempor eleifend condimentum quis imperdiet tellus in amet. Volutpat maecenas quam velit, scelerisque et maecenas gravida ipsum.
      Nunc ut ut adipiscing ut. Eu, a bibendum tristique imperdiet aliquam tincidunt. Augue vivamus bibendum purus eget aliquet ornare. Euismod elit eget tellus duis aliquet placerat dolor pulvinar. Viverra consectetur pellentesque purus massa. Laoreet non quisque arcu pharetra, etiam dapibus auctor egestas sed. Eget quam pulvinar amet ornare facilisis egestas mattis quis. Pretium id condimentum cras nec convallis felis, amet, amet, risus.
      Ullamcorper ac integer mattis eu aliquet. Mauris elit sit mattis sit lorem morbi. Arcu sodales egestas a egestas tortor, cursus. Vitae platea lorem aenean laoreet aenean aliquet felis id. A.</p>
    <h5>3. Information you provide to us</h5>
    <p>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies pulvinar donec risus orci. In magnis orci, imperdiet ultricies Lorem ipsum dolor sit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies pulvinar donec risus orci. In magnis orci, imperdiet ultricies Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet. Ullamcorper ac integer mattis eu aliquet. Mauris elit sit mattis sit lorem morbi. Arcu sodales egestas a egestas tortor, cursus. Vitae platea lorem aenean laoreet aenean aliquet felis id. A</p>
    <h5>4. Content you provide to us</h5>
    <p>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies pulvinar donec risus orci. In magnis orci, imperdiet ultricies Lorem ipsum dolor sit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies pulvinar donec risus orci. In magnis orci, imperdiet ultricies Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet.</p>
    <h5>5. Information you provide to us</h5>
    <p>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies pulvinar donec risus orci. In magnis orci, imperdiet ultricies Lorem ipsum dolor sit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies pulvinar donec risus orci. In magnis orci, imperdiet ultricies Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet. Ullamcorper ac integer mattis eu aliquet. Mauris elit sit mattis sit lorem morbi. Arcu sodales egestas a egestas tortor, cursus. Vitae platea lorem aenean laoreet aenean aliquet felis id. A</p>
    <h5>6. Link to third party content</h5>
    <p>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies pulvinar donec risus orci. In magnis orci, imperdiet ultricies Lorem ipsum dolor sit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies pulvinar donec risus orci. In magnis orci, imperdiet ultricies Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet. Ullamcorper ac integer mattis eu aliquet. Mauris elit sit mattis sit lorem morbi. Arcu sodales egestas a egestas tortor, cursus. Vitae platea lorem aenean laoreet aenean aliquet felis id. A</p>
    <h5>7. Site Management</h5>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod tempus, fames donec at aliquet lectus adipiscing nibh. Aliquam et nulla eu habitant aliquam. In sed vel donec et. Lacus convallis in eu fusce sed quis orci. Lectus interdum purus magnis id eros, molestie massa adipiscing sit. In proin mattis sit at tempor, blandit vitae. Libero amet phasellus aliquam diam feugiat quis. Velit velit, fames sit euismod auctor fringilla. Ac sagittis lectus pharetra pulvinar amet. Vulputate pretium suspendisse eu eget lacinia egestas lorem. Tempor eleifend condimentum quis imperdiet tellus in amet. Volutpat maecenas quam velit, scelerisque et maecenas gravida ipsum.
      Nunc ut ut adipiscing ut. Eu, a bibendum tristique imperdiet aliquam tincidunt. Augue vivamus bibendum purus eget aliquet ornare. Euismod elit eget tellus duis aliquet placerat dolor pulvinar. Viverra consectetur pellentesque purus massa. Laoreet non quisque arcu pharetra, etiam dapibus auctor egestas sed. Eget quam pulvinar amet ornare facilisis egestas mattis quis. Pretium id condimentum cras nec convallis felis, amet, amet, risus.
      Ullamcorper ac integer mattis eu aliquet. Mauris elit sit mattis sit lorem morbi. Arcu sodales egestas a egestas tortor, cursus. Vitae platea lorem aenean laoreet aenean aliquet felis id. A.</p>
  </div>
</section> 
<Footer/>
</body>

  )
}

export default TermsAndcondition