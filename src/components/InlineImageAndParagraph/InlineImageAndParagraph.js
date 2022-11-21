import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faArrowLeft, faArrowRight, faExpand } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './InlineImageAndParagraph.scss';

const InlineImageAndParagraph = (props) => {
    const [showPopUp, setPopUp] = useState(false);
    const [viewType, setViewType] = useState("");

    const handleResize = () => {
        if (window.innerWidth < 1023)
            setViewType('mobile')
        else
            setViewType('desktop')
    }
    const handlePopUpClose = () => {
        document.body.classList.remove("stop-scroll");
        setPopUp(false);
    }

    const handlePopUpShow = () => {
        if (viewType === 'mobile') {
            document.body.classList.add("stop-scroll");
            setPopUp(true);
        }
    }
    useEffect(() => {
        window.addEventListener("resize", handleResize)
        handleResize()
    }, [])

    return (
        <div className="inline-image-and-paragraph" id={props.id ? props.id : ""}>
            <div className="image">
                {props.data.imageLink ?
                    <a href={props.data.imageLink} target="_blank" rel="noreferrer"><img src={props.data.imageSrc} alt={props.data.headingLight ? props.data.headingLight + " " + props.data.headingBold : "logo"} /></a>
                    :
                    <img src={props.data.imageSrc} alt={props.data.altText ? props.data.altText : props.data.headingLight ? props.data.headingLight + " " + props.data.headingBold : "logo"} title={props.data.titleText ? props.data.titleText : ""} onClick={props.zoom ? handlePopUpShow : undefined} />
                }
            </div>
            {
                props.zoom === true ?
                    viewType === "mobile" ?
                        <React.Fragment>
                            <div className="zoom-feature">
                                <div className="click-to-zoom">
                                    <FontAwesomeIcon icon={faExpand} onClick={handlePopUpShow} />
                                    <span>Click on image to zoom</span>
                                </div>
                                {
                                    showPopUp ?
                                        <div className="explanatory-image-enlarged">
                                            <div className="cancel-popup" onClick={handlePopUpClose}><FontAwesomeIcon icon={faArrowLeft} /></div>
                                            <img src={props.data.imageSrc} alt={props.data.altText ? props.data.altText : "image"} />
                                        </div>
                                        :
                                        null
                                }
                            </div>
                        </React.Fragment>
                        :
                        null
                    :
                    null
            }

            <div className="paragraph">
                <h2>{props.data.headingLight} <span dangerouslySetInnerHTML={{ __html: props.data.headingBold }}></span></h2>
                {
                    props.data.extraHeadingText ?
                        <h2 dangerouslySetInnerHTML={{ __html: props.data.extraHeadingText }}></h2>
                        :
                        null
                }
                <p dangerouslySetInnerHTML={{ __html: props.data.text }}></p>
                {
                    props.data.bulletPointsText ?

                        <div className="inline-image-text-bullet-points">
                            {
                                props.data.bulletPointsText.map(function (key, index) {
                                    return (
                                        <p className="inline-image-text-bullet" dangerouslySetInnerHTML={{ __html: props.data.bulletPointsText[index] }}></p>
                                    )
                                })
                            }
                        </div>
                        :
                        null
                }
                {
                    props.data.navigationLinkText ?
                        <Link className="inline-image-text-navigation-link" to={props.data.navigationLink}>
                            <span>{props.data.navigationLinkText}</span>
                            <img src="./images/right.svg" alt="right"/>
                        </Link>
                        :
                        null
                }
            </div>
        </div >
    )
}

export default InlineImageAndParagraph;
