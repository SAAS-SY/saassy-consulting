import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faCog, faMagic } from '@fortawesome/free-solid-svg-icons';
import './AboutusCard.scss';

const AboutusCard = () => {

    return (
        <div className="skip-loop">
            {
                window.location.pathname == "/" && (
                    <div className="section-header-box">
                        <p>About Us</p>
                    </div>
                )

            }
            <div className="skip-loop-contents">
                <div className="visible-content initial">
                    <div className="skip-loop-row">
                        <a href="/services/voip">
                            <div className="step-block">
                                <FontAwesomeIcon icon={faLock} />
                                <h4>Voip</h4>
                                <p>Simply create an account using your business email ID with a seamless verification process and select your desired financial modules.</p>
                            </div>
                        </a>
                        <a href="/services/hrms">
                            <div className="step-block">
                                <FontAwesomeIcon icon={faCog} />
                                <h4>CRM<br />Integrations</h4>
                                <p>Explore our detailed documentation as well as integrate with your friendly sandbox for all your selected modules, right on day one.</p>
                            </div>
                        </a>
                        <a href="/services/crm">
                            <div className="step-block">
                                <FontAwesomeIcon icon={faMagic} />
                                <h4>CRM</h4>
                                <p>Whenever you are ready with the integrations and want to launch in production, just give us the green signal from your dashboard itself.</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default AboutusCard;