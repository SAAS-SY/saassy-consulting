import React from 'react';
import InlineImageAndParagraph from '../../components/InlineImageAndParagraph/InlineImageAndParagraph.js';
import './Voip.scss';

const Voip = (props) => {
    console.log(props)

    const whatIsVoip = {
        'headingLight': "What Is",
        'headingBold': " VOIP?",
        'text': "Voice over Internet Protocol (VoIP), is a technology that allows you to make voice calls using a broadband Internet connection instead of a regular (or analog) phone line. Some VoIP services may only allow you to call other people using the same service, but others may allow you to call anyone who has a telephone number - including local, long distance, mobile, and international numbers. Also, while some VoIP services only work over your computer or a special VoIP phone, other services allow you to use a traditional phone connected to a VoIP adapter.",
        'imageSrc': './images/voip/what-is-voip.webp',
        'altText': "An image that shows how CKYC is a central repository holding essential documents for KYC verification.",
        'titleText': "What is VOIP"
    }

    const howVoipWorks = {
        'headingLight': "How VOIP",
        'headingBold': " Works?",
        'text': "VoIP services convert your voice into a digital signal that travels over the Internet. If you are calling a regular phone number, the signal is converted to a regular telephone signal before it reaches the destination. VoIP can allow you to make a call directly from a computer, a special VoIP phone, or a traditional phone connected to a special adapter. In addition, wireless 'hot spots' in locations such as airports, parks, and cafes allow you to connect to the Internet and may enable you to use VoIP service wirelessly." +
            "<br/><br/>Intelligent Communications provide the next level of interactivity and proactivity to enrichen your collaborations with everyone around you.",
        'imageSrc': './images/voip/why-us-for-voip.webp',
        'altText': "An image that shows how CKYC is a central repository holding essential documents for KYC verification.",
        'titleText': "What is VOIP"
    }

    const whyUsForVoip = {
        'headingLight': "Why us for ",
        'headingBold': " VOIP?",
        'text': "VoIP services convert your voice into a digital signal that travels over the Internet. If you are calling a regular phone number, the signal is converted to a regular telephone signal before it reaches the destination. VoIP can allow you to make a call directly from a computer, a special VoIP phone, or a traditional phone connected to a special adapter. In addition, wireless 'hot spots' in locations such as airports, parks, and cafes allow you to connect to the Internet and may enable you to use VoIP service wirelessly." +
            "<br/><br/>Intelligent Communications provide the next level of interactivity and proactivity to enrichen your collaborations with everyone around you.",
        'imageSrc': './images/voip/why-us-for-voip.webp',
        'altText': "An image that shows how CKYC is a central repository holding essential documents for KYC verification.",
        'titleText': "What is VOIP"
    }

    return (
        <React.Fragment>
            <div className="voip">
                <h1>{props.header}</h1>
                <div className="detail-data">
                    <InlineImageAndParagraph data={whatIsVoip} />
                    <InlineImageAndParagraph data={howVoipWorks} />
                    <InlineImageAndParagraph data={whyUsForVoip} />
                </div>
                <a className="explore-now signup-btn" href='/contact-us'>Explore Now</a>
            </div>
        </React.Fragment>
    )
}

export default Voip;