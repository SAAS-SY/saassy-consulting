import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faCog, faMagic } from '@fortawesome/free-solid-svg-icons';
import './PartnerCard.scss';

const PartnerCard = () => {

    return (
        <div className="skip-loop partner-loop">
            {
                window.location.pathname == "/website/build" && (
                    <div className="section-header-box">
                        <p>Partners</p>
                    </div>
                )

            }
            <div className="skip-loop-contents partner-section">
                <div className='image-content'>
                    <img src='./images/partners/amazon.png' />
                </div>
                <div className='image-content'>
                    <img src='./images/partners/facebook.webp' />
                </div>
                <div className='image-content'>
                    <img src='./images/partners/pinterest.png' />
                </div>
            </div>
        </div>
    )
}

export default PartnerCard;