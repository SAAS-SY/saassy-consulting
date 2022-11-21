import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faCog, faMagic } from '@fortawesome/free-solid-svg-icons';
import ServiceCard from '../../components/ServiceCard/ServiceCard.js';
import './Services.scss';
import Footer from '../../components/Footer/Footer.js';

const Services = () => {
    return (
        <React.Fragment>
            <div className='services'>
                <h1>Browse through our wide range of <span>SaaS-sy</span>&nbsp;Services</h1>
                <ServiceCard />
            </div>
        </React.Fragment>
    )
}

export default Services;