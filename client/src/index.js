import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import {GoogleOAuthProvider} from '@react-oauth/google';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  // <React.StrictMode>
  <BrowserRouter>
       <GoogleOAuthProvider   clientId={"277228600812-8857j836kt2s8flq5s13cjmdffq6d244.apps.googleusercontent.com"}>

    <App />
    </GoogleOAuthProvider> 
    </BrowserRouter> 
  // </React.StrictMode>

);

reportWebVitals();
