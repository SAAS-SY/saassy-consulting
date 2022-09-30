import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faTwitter, faLinkedin, faAngellist, faProductHunt, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="site-footer" >
            <div className='contact-details'>
                <p>
                    <strong>Address: </strong>
                    Shop no 6 NIT complex, Near Ajni metro station,<br />Nagpur, 44001
                    <br />
                    <strong>Phone -7972072763</strong>
                </p>
            </div>
            <div className="social-links">
                <div>
                    <a href="https://twitter.com" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a>
                    <a href="https://www.linkedin.com/company/saas-sy-consulting/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a href="https://www.youtube.com" target="_blank"><FontAwesomeIcon icon={faYoutube} /></a>
                    <a href="https://www.instagram.com" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
                </div>
            </div>
        </footer >
    )
}

export default Footer;
