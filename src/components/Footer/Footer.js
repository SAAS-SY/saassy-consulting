import React from 'react';
// import './Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className='footer-new'>
            <div className='footer-heading'>
                <h1>Contact Us</h1>
            </div>
            <div className='contact-methods'>
                <div>
                    <span className='centered'><img src="../../images/contactus/phone.svg" alt="Phone Call" /></span><br />
                    <span>+91-7776091114</span>
                </div>
                <div>
                    <span className='centered'><img src="../../images/contactus/location.svg" alt="Location" /></span><br />
                    <span>Shop no 6 NIT complex, Near Ajni metro station, Nagpur, 44001</span>
                </div>
                <div>
                    <span className='centered'><img src="../../images/contactus/mail.svg" alt="Email" /></span><br />
                    <span>sales@saassyconsulting.com</span>
                </div>
            </div>
            <div className="social-connect">
                <div>
                    <a href="https://twitter.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
                    <a href="https://www.linkedin.com/company/saas-sy-consulting/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a href="https://www.youtube.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faYoutube} /></a>
                    <a href="https://www.instagram.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
