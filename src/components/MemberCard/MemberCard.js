import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faCog, faMagic } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './MemberCard.scss';

const MemberCard = () => {

    return (
        <div className="skip-loop">
            {
                window.location.pathname == "/" ?
                    <div className="section-header-box">
                        <p>Team Members</p>
                    </div>
                    :
                    <h1>Our Members</h1>


            }
            <div className="skip-loop-contents">
                <div className="visible-content initial">
                    <div className="skip-loop-row">
                        <div className="step-block">
                            <div className='member-image'>
                                <img src="./images/aboutus/Vipul.png" />
                            </div>
                            <div className='member-details'>
                                <p className="member-name">Vipulkumar<span className='member-surname'>&nbsp;Yadav</span></p>
                                <p className='designation'>Senior Software Developer - FrontEnd</p>
                                <p className='description'>Where there is a will, there is a way!</p>
                                <div className='social-media-links'>
                                    <a href="www.linkedin.com" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                                    <a href="www.twitter.com" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a>
                                    <a href="www.instagram.com" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
                                </div>
                            </div>
                        </div>
                        <div className="step-block">
                            <div className='member-image'>
                                <img src="./images/aboutus/Vipul.png" />
                            </div>
                            <div className='member-details'>
                                <p className="member-name">Rohit<span className='member-surname'>&nbsp;Pawar</span></p>
                                <p className='designation'>Senior Analyst</p>
                                <p className='description'>To work in challenging organizations and craft out solutions for challenging and burning problems</p>
                                <div className='social-media-links'>
                                    <a href="www.linkedin.com" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                                    <a href="www.twitter.com" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a>
                                    <a href="www.instagram.com" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
                                </div>
                            </div>
                        </div>
                        <div className="step-block">
                            <div className='member-image'>
                                <img src="./images/aboutus/Vipul.png" />
                            </div>
                            <div className='member-details'>
                                <p className="member-name">Vipulkumar<span className='member-surname'>&nbsp;Yadav</span></p>
                                <p className='designation'>Senior Software Developer - FrontEnd</p>
                                <p className='description'>Where there is a will, there is a way!</p>
                                <div className='social-media-links'>
                                    <a href="www.linkedin.com" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                                    <a href="www.twitter.com" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a>
                                    <a href="www.instagram.com" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default MemberCard;