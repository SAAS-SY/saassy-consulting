import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faCog, faMagic } from '@fortawesome/free-solid-svg-icons';
import './ServiceCard.scss';

const ServiceCard = () => {

    return (
        <div className="skip-loop">
            {
                window.location.pathname == "/" && (
                    <div className="section-header-box">
                        <p>Services</p>
                    </div>
                )

            }
            <div className="skip-loop-contents">
                <div className="visible-content initial">
                    <div className="skip-loop-row">
                        <a href="/services/voip">
                            <div className="step-block">
                                <img className='voip-icon' src='./images/voip-icon.svg' alt="voip" />
                                <h4>Voip</h4>
                                <p>voice over Internet Protocol (VoIP) technology to send and receive phone calls over an IP network.</p>
                            </div>
                        </a>
                        <a href="/services/crm">
                        <div className="step-block">
                            <img className='crm-icon' src='./images/crm-icon.svg' alt="crm" />
                            <h4>CRM</h4>
                            <p>CRM is a technology for managing all your company’s relationships/interactions with customers, streamline processes, and improve profitability.</p>
                        </div>
                        </a>
                        <a href="/services/crm-integrations">
                        <div className="step-block">
                            <img className='crm-int-icon' src='./images/crm-int-icon.svg' alt="crm-int" />
                            <h4> HRMS </h4>
                            <p>An HRMS, is a suite of software applications used to manage hr and related processes throughout the employee lifecycle while staying compliant with changing tax laws and labor regulations.</p>
                        </div>
                        </a>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ServiceCard;
