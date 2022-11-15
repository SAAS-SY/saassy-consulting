import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import ReactDOM from "react-dom";
import ServiceCard from "../../components/ServiceCard/ServiceCard.js"
import PartnerCard from "../../components/PartnerCard/PartnerCard.js"
import AboutusCard from "../../components/AboutusCard/AboutusCard.js"
import './Home.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faCog, faMagic } from '@fortawesome/free-solid-svg-icons';
import Footer from '../../components/Footer/Footer.js';
import { isMobile } from 'react-device-detect';


function Home() {
    return (
        <React.Fragment>
            <div className="homepage">
                <div className="banner">
                    {!isMobile && <img className="banner-bg" src="./images/home-banner-bg.svg" alt="Decentro banner bg" />}
                    <div className="text-content">
                        <h1>SaaS Solutions for <span>Diverse Enterprises</span></h1>
                        <h2>Launch your products 10X faster and think about scale, while we think about the development</h2>
                        <a href='/contact-us'>Explore Now</a>
                    </div>
                    <div className="image-content">
                        <img src="./images/banner.svg" alt="Decentro is a full-stack API banking platform for financial integrations." />
                    </div>
                </div>
            </div>

            <Footer />
        </React.Fragment>
    )
}

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
