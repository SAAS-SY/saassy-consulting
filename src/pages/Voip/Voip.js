import React from 'react';
import InlineImageAndParagraph from '../../components/InlineImageAndParagraph/InlineImageAndParagraph.js';
import './Voip.scss';

const Voip = (props) => {

    const displayContent = (content, emptyContent) => (
        <div className='inline-image-and-paragraph' style={{ paddingBottom: '40px' }}>
            <div className='paragraph' style={{ width: '100%' }}>
                {emptyContent ? <h2 style={{ textAlign: 'center' }}>{content}</h2> : <p dangerouslySetInnerHTML={{ __html: content }} />}
            </div>
        </div>
    )

    return (
        <React.Fragment>
            <div className="voip">
                <h1>{props.header}</h1>
                <div className="detail-data">
                    {props.bodyContent.what && <InlineImageAndParagraph data={props.bodyContent.what} />}
                    {props.bodyContent.how && <InlineImageAndParagraph data={props.bodyContent.how} />}
                    {props.bodyContent.why && <InlineImageAndParagraph data={props.bodyContent.why} />}
                </div>
                {props.bodyContent.footer && displayContent(props.bodyContent.footer)}
                {Object.keys(props.bodyContent).length ?
                    <a className="explore-now signup-btn" href='/contact-us'>Explore Now</a> : displayContent('Coming Soon....', true)
                }
            </div>
        </React.Fragment>
    )
}

export default Voip;