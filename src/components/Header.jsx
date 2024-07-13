import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../stylesheet/header.css';
import menuIcon from '../assets/navbarIMG/list-solid (2).svg';
import facebookIcon from '../assets/SocialMediaIcon/facebookIcon.png';
import Tweeter from '../assets/SocialMediaIcon/Tweeter.png';
import InstagramIcon from '../assets/SocialMediaIcon/InstagramIcon.png';
import linkedIn from '../assets/SocialMediaIcon/linkedIn.png';
import youtubeicon from '../assets/SocialMediaIcon/youTubeIcon.png';
import logo from '../assets/LOGO/logo.png';

function openSlideMenu() {
    document.getElementById('global-side-menu').style.width = '250px';
}

function closeSlideMenu() {
    document.getElementById('global-side-menu').style.width = '0';
}

function Header() {
    const location = useLocation();

    const getLinkClass = (path) => {
        return location.pathname === path ? 'global-active' : '';
    };

    return (
        <header>
            {/* Social media icons */}
            <div className="global-social-icons">
                <a href="#"><img src={facebookIcon} alt="facebook-icon" /></a>
                <a href="#"><img src={Tweeter} alt="Twitter" /></a>
                <a href="https://www.instagram.com/swarainfra?igsh=MW5lNGRxOXNremNuZA=="><img src={InstagramIcon} alt="Instagram" /></a>
                <a href="#"><img src={linkedIn} alt="Linkedin" /></a>
                <a href="#"><img src={youtubeicon} alt="Youtube" /></a>
            </div>

            <nav className="global-nav">
                <Link to="/home">
                    <img src={logo} alt="logo" className="global-logo" />
                    
                </Link>
                <ul className="global-nav-contents">
                    <li style={{fontSize:30, color:'yellow', marginTop:-3, marginRight:150, fontFamily: '"Lobster", cursive'}}>SwaraInfra</li>
                    <li><Link to="/SwaraInfra" className={`global-nav-construction ${getLinkClass('/SwaraInfra')}`}>CONSTRUCTION</Link></li>
                    <li><Link to="*" className={`global-home ${getLinkClass('*')}`}>HOME</Link></li>
                    <li><Link to="/aboutus" className={`global-about ${getLinkClass('/aboutus')}`}>ABOUT US</Link></li>
                    <li><Link to="/packages" className={`global-package ${getLinkClass('/packages')}`}>PACKAGES</Link></li>
                    <li><Link to="/contact" className={`global-contact ${getLinkClass('/contact')}`}>CONTACT US</Link></li>
                </ul>
                <div className="global-navbar">
                    <span className="global-open-slide">
                        <a href="#" onClick={openSlideMenu}>
                            <img src={menuIcon} style={{ height: '40px', marginTop: '20px' }} alt="Menu Icon" />
                        </a>
                    </span>
                </div>
            </nav>
            <div id="global-side-menu" className="global-side-nav">
                <a href="#" className="global-btn-close" onClick={closeSlideMenu}>
                    <span style={{ color: 'rgb(247, 243, 243)', fontSize: '40px' }}>X</span>
                </a>
                <Link to="/SwaraInfra" onClick={closeSlideMenu}>Construction</Link>
                <Link to="*" onClick={closeSlideMenu}>Home</Link>
                <Link to="/aboutus" onClick={closeSlideMenu}>About us</Link>
                <Link to="/packages" onClick={closeSlideMenu}>Package</Link>
                <Link to="/contact" onClick={closeSlideMenu}>Contact us</Link>
            </div>
        </header>
    );
}

export default Header;
