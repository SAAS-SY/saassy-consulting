import React from 'react';
import InlineImageAndParagraph from '../../components/InlineImageAndParagraph/InlineImageAndParagraph.js';
import ServiceCard from '../../components/ServiceCard/ServiceCard.js';
import MemberCard from '../../components/MemberCard/MemberCard.js';
import './Aboutus.scss';
import Footer from '../../components/Footer/Footer.js';

const Aboutus = (props) => {

    const ourVision = {
        'headingLight': "Our",
        'headingBold': " Vision",
        'text': "Realizing the full potential of the internet —to drive a new era of development, growth, and productivity.",
        'imageSrc': './images/aboutus/our-vision.svg',
        'altText': "An image that shows how CKYC is a central repository holding essential documents for KYC verification.",
        'titleText': "our-vision"
    }

    const ourMission = {
        'headingLight': "Our",
        'headingBold': " Mission",
        'text': "To reshape business through science and automate it through technology and get more results and save time.",
        'imageSrc': './images/aboutus/our-mission.svg',
        'altText': "An image that shows how CKYC is a central repository holding essential documents for KYC verification.",
        'titleText': "our-mission"
    }

    const ourValues = {
        'headingLight': "Our",
        'headingBold': " Values",
        'text': "Client first" +
            "<br/>Learn and grow" +
            "<br/>Think big act fast" +
            "<br/>Extend extreme trust and be accountable",
        'imageSrc': './images/aboutus/our-values.svg',
        'altText': "An image that shows how CKYC is a central repository holding essential documents for KYC verification.",
        'titleText': "our-values"
    }

    return (
        <React.Fragment>
            <div className='aboutus'>
                <h1>{props.header}</h1>
                <div className='who-we-are'>
                    <InlineImageAndParagraph data={ourVision} />
                    <InlineImageAndParagraph data={ourMission} />
                    <InlineImageAndParagraph data={ourValues} />
                </div>
                {/* <div className='team-members'>
                    <MemberCard />
                </div> */}
                <a className="explore-now signup-btn" href='/contact-us'>Explore Now</a>
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default Aboutus;