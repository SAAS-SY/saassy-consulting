import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Link, useLocation } from 'react-router-dom';

import './Header.scss';
import MobileNav from '../MobileNav/MobileNav';
import { isMobile } from 'react-device-detect';

function Header(props) {

    const [mobileNav, setMobileNav] = useState(false);

    const toggleNav = () => {
        setMobileNav(!mobileNav);
    }

    let location = useLocation();
    let headerSubHeading = "";

    headerSubHeading = location.pathname === "/customer-stories/" ? "Customer Stories" : "";

    useEffect(() => {
        if (isMobile) { }
        else {
            if (location.pathname === '/') {
                document.getElementById("menu").classList.remove("dark")
            }
            else {
                document.getElementById("menu").classList.add("dark")
            }
        }
    }, [location])

    return (
        <>
            <header id="header">
                <div className="menu-full">
                    <div className="left">
                        {
                            headerSubHeading === "" ?
                                <Link to="/"><img src="./images/logo.svg" alt="Decentro Logo" /></Link>
                                :
                                <div className="header-logo-subheader">
                                    <Link to="/"><img src="./images/logo.svg" alt="Decentro Logo" /></Link>
                                    <p>{headerSubHeading}</p>
                                </div>
                        }
                    </div>
                    <div className="right">
                        {isMobile ?
                            <div onClick={toggleNav}>
                                <MobileNav />
                            </div>
                            :
                            <ul id="menu">
                                <li><a href="/services">Services</a></li>
                                <li><a href="/about-us">About Us</a></li>
                                <li><a href="/contact-us">Contact Us</a></li>
                            </ul>
                        }
                    </div>
                </div>
            </header >
            <div>
                {mobileNav &&
                    <div className="mobile-container">
                        <div className="topnav">
                            <div id="myLinks">
                                <li><a href="/services">Services</a></li>
                                <li><a href="/about-us">About Us</a></li>
                                <li><a href="/contact-us">Contact Us</a></li>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}

Header.propTypes = {};

Header.defaultProps = {};

export default Header;