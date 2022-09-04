import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Link, useHistory, useLocation } from 'react-router-dom';

import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

function Header(props) {

    let location = useLocation();
    let headerSubHeading = "";

    headerSubHeading = location.pathname == "/customer-stories/" ? "Customer Stories" : "";

    useEffect(() => {
        if (location.pathname === '/') {
            document.getElementById("menu").classList.remove("dark")
        }
        else {
            document.getElementById("menu").classList.add("dark")
        }
    }, [location])

    return (
        <header id="header">
            <div className="menu-full">
                <div className="left">
                    {
                        headerSubHeading == "" ?
                            <Link to="/"><img src="./images/logo.svg" alt="Decentro Logo" /></Link>
                            :
                            <div className="header-logo-subheader">
                                <Link to="/"><img src="./images/logo.svg" alt="Decentro Logo" /></Link>
                                <p>{headerSubHeading}</p>
                            </div>
                    }
                </div>
                <div className="right">
                    <ul id="menu">
                        <li><a href="/services">Services</a></li>
                        <li><a href="/about-us">About Us</a></li>
                        <li><a href="/contact-us">Contact Us</a></li>
                    </ul>
                </div>
            </div>
        </header >
    )
}

Header.propTypes = {};

Header.defaultProps = {};

export default Header;