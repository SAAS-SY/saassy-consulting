import React from 'react';
import ServiceCard from '../../components/ServiceCard/ServiceCard.js';
import './Services.scss';

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