import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header/Header.js';
import Home from './pages/Home/Home.js';
import Services from './pages/Services/Services.js';
import Aboutus from './pages/Aboutus/Aboutus.js';
import ContentDisplay from './pages/Voip/Voip.js';
import './App.css';
import ContactUs from './pages/ContactUs/ContactUs.js';
import Footer from './components/Footer/Footer.js';
import { voip, hrms, crm } from './components/ServiceCard/ServicesContent';

const App = () => {
  const [viewType, setViewType] = useState("")
  const handleResize = () => {
    if (window.innerWidth < 1024) {
      setViewType('mobile')
    }
    else {
      setViewType('desktop')
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)
    handleResize()
  })

  return (
    <React.Fragment>
      <div className="root-wrapper">
        {/* {
          window.location.pathname == "/" ||
            window.location.pathname == "/services" ||
            window.location.pathname == "/services/voip" ||
            window.location.pathname == "/about-us"
            ?
            <img className="banner-bg-piece" src="./images/home-banner-bg.svg" alt="Decentro banner bg" />
            :
            <img className="banner-bg-piece" src="./images/home-banner-bg.svg" alt="Decentro banner bg" style={{ display: 'none' }} />
        } */}
        <Router>
          <Header />
          <Routes>
            <Route exact strict={true} path='/' element={<Home />} />
            <Route exact strict={true} path='/services' element={<Services />} />
            <Route exact strict={true} path='/services/voip' element={<ContentDisplay header="VOIP" bodyContent={voip}/>} />
            <Route exact strict={true} path='/services/hrms' element={<ContentDisplay header="HRMS" bodyContent={hrms}/>} />
            <Route exact strict={true} path='/services/crm' element={<ContentDisplay header="CRM" bodyContent={crm}/>} />
            <Route exact strict={true} path='/about-us' element={<Aboutus header="About Us" />} />
            <Route exact strict={true} path='/contact-us' element={<ContactUs header="Contact Us" />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </Routes>
          <Footer/>
        </Router>
      </div>
    </React.Fragment>
  )
}

export default App;