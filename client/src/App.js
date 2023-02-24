
import './App.css';
import React, { useEffect } from 'react';
import { Fragment } from "react";
import {
  Routes,
  Route,
} from 'react-router-dom';
import  {useState} from "react"
import Home from './home/Home';
import UserRegistration from './home/registration/UserRegistration';
import SelectUser from './home/registration/SelectUser';
import Login from './home/registration/Login';
import Main from './home/Main';
import PrivacyPolicy from './static/PrivacyPolicy';
import TermsAndcondition from './static/TermsAndcondition';
import ScrollToTop from './ScrollToTop';
import ContectUs from './static/ContectUs';
import TreinerRegistration from './home/registration/TreinerRegistration';
import OwnerRegister from './home/registration/OwnerRegister';
import UserVerification from './home/verificationPages/UserVerification';
import TreinerVerification from './home/verificationPages/TreinerVerification';
import OwnerVerification from './home/verificationPages/OwnerVerification';
import { GoogleOAuthProvider } from '@react-oauth/google';
import AboutUs from './static/AboutUs';
import Gyms from './home/Gyms';
import Faqs from './static/Faqs';

function App() {

  return (

    <div className="App">
     
     <ScrollToTop/>
       <Routes>
       <Route exact path="/explore" element={  <Home/>}  /> 
       <Route exact path="/" element={  <Main/>}  /> 
       <Route exact path="/login" element={ <Login/>} />
       <Route exact path="/user/verify/:token" element={  <UserVerification/>} />
       <Route exact path="/trainer/verify/:token" element={  <TreinerVerification/>} />
       <Route exact path="/user-registeration" element={  <UserRegistration/>}  /> 
       <Route exact path="/trainer-registeration" element={  <TreinerRegistration/>}  /> 
       <Route exact path="/gymowner/verify/:token" element={  <OwnerVerification/>}  /> 
       <Route exact path="/owner-register" element={  <OwnerRegister/>}  /> 
       <Route exact path="/select-user" element={ <SelectUser/>} />
       <Route exact path="/privacy-policy" element={ <PrivacyPolicy/>} />
       <Route exact path="/terms-conditions" element={ <TermsAndcondition/>} />
       <Route exact path="/contact-us" element={ <ContectUs/>} />
       <Route exact path="/about-us" element={ <AboutUs/>} />
       <Route exact path="/gyms" element={ <Gyms/>} />
       <Route exact path="/faqs" element={ <Faqs/>} />
     
       </Routes>
       
    </div>
  );
}

export default App;
