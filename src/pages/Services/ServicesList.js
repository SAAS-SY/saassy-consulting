import React from 'react';
import './Services.scss';

const ServicesList = () => {
    return (
        <div className='service-list'>
            <div className='services-heading'>
                <h1>Our Services</h1>
            </div>
            <div className='services-types'>
                <div className='services-provided'>
                    <img className='voip-icon' src='./images/voip-icon.svg' alt="voip" />
                    <h4>VOIP</h4>
                    <p>Voice over Internet Protocol (VoIP) technology to send and receive phone calls over an IP network.</p>
                    <a href='/services/voip'>Read More</a>
                </div>
                <div className='services-provided'>
                    <img className='crm-icon' src='./images/crm-icon.svg' alt="crm" />
                    <h4>CRM</h4>
                    <p>CRM is a technology for managing all your company’s relationships/interactions with customers, streamline processes, and improve profitability.</p>
                    <a href='/services/crm'>Read More</a>
                </div>
                <div className='services-provided'>
                    <img className='crm-int-icon' src='./images/crm-int-icon.svg' alt="crm-int" />
                    <h4> HRMS </h4>
                    <p>An HRMS is a suite of software applications used to manage hr and related processes throughout the employee lifecycle while staying compliant with changing tax laws and labor regulations.</p>
                    <a href='/services/hrms'>Read More</a>
                </div>
            </div>
        </div>
    )
}

export default ServicesList;
