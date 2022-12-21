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
import Listing from '../../components/Listing/Listing.js';
import ActivityContent from '../../components/ActivityContent/ActivityContent.js';

function Home() {

    const activityContent = [
        {
            'imageSrc': '../../../images/activity/lake.jpg',
            'altText': "lake",
        },
        {
            'imageSrc': '../../../images/activity/landscape.jpg',
            'altText': "landscape",
        },
        {
            'imageSrc': '../../../images/activity/sunset.jpg',
            'altText': "sunset",
        }
    ]

    const partnersData = [
        {
            'imageSrc': '../../../images/ourpartners/keka.png',
            'altText': "Keka",
        },
        {
            'imageSrc': '../../../images/ourpartners/callhippo.png',
            'altText': "CallHippo",
        },
    ]

    const partners = [
        {
            'imageSrc': '../../../images/ourpartners/keka.svg',
            'altText': "Keka",
        },
        {
            'imageSrc': '../../../images/ourpartners/callhippo.svg',
            'altText': "CallHippo",
        },
    ]

    const clients = [
        {
            'imageSrc': '../../../images/ourclients/amazon_logo.webp',
            'altText': "Amazon",
        },
        {
            'imageSrc': '../../../images/ourclients/pinterest.svg',
            'altText': "Pinterest",
        },
        {
            'imageSrc': '../../../images/ourclients/facebook.webp',
            'altText': "Facebook",
        },
        {
            'imageSrc': '../../../images/ourclients/google.png',
            'altText': "Google",
        }
    ]

    return (
        <React.Fragment>
            <div className="homepage">
                <div className="banner">
                    {!isMobile && <img className="banner-bg" src="./images/home-banner-bg.svg" alt="Decentro banner bg" />}
                    <div className="text-content">
                        <h1>SaaS Solutions to <span>Prepare your future ready workforce</span></h1>
                        <h2>Effortlessly upscale your business with SAAS-SY as whatever problems you come across, We have got you covered. </h2>
                        <a href='/contact-us'>Explore Now</a>
                    </div>
                    <div className="image-content">
                        <img src="./images/banner.svg" alt="Decentro is a full-stack API banking platform for financial integrations." />
                    </div>
                </div>
                {/* <ActivityContent activityContent={activityContent} /> */}
                <ServiceCard />
                <div className="client-partner">
                    {/* <Listing className="listing-types-padding listing-image" heading="Our Clients" partners={clients} /> */}
                    <Listing heading="Our Partners" partners={isMobile ? partners : partnersData}/>
                </div>
            </div>
        </React.Fragment>
    )
}

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
