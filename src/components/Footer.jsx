// Footer.js
import React from 'react';
import '../stylesheet/footer.css';
// import '../stylesheet/header.css';
import WhatsappIcon from '../assets/whatsappicon.png';
import facebookIcon from '../assets/SocialMediaIcon/facebookIcon.png';
import Tweeter from '../assets/SocialMediaIcon/Tweeter.png';
import InstagramIcon from '../assets/SocialMediaIcon/InstagramIcon.png';
import linkedIn from '../assets/SocialMediaIcon/linkedIn.png';
import youtubeicon from '../assets/SocialMediaIcon/youTubeIcon.png';


function Footer () {
  
    return (
      <div>

{/* <!-- WhatsApp icon --> */}
    <a href="https://wa.me/message/POUKFT7B4YGWC1" className="whatsapp-icon">
        <img src={WhatsappIcon} alt="WhatsApp"/>
    </a>
 
        <footer className="footer">
          <div className="footer-section">
            <h3>Location</h3>
            <p>Hubballi Office:<br />
              Shop No 17, second floor , Ridhi Sidhi complex opp, Giants School Akshay park , Gokul Road Hubballi</p>
           
          </div>
          <div className="footer-section">
            <h3>Menu</h3>
            <ul>
              <li>About Us</li>
              <li>Why Choose Us for Your Dream Home</li>
              <li>Ongoing Projects</li>
              <li>Careers</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Useful Links</h3>
            <ul>
              <li>Customer reviews</li>
              <li>Home Construction Packages</li>
              <li>Get Estimate for Customised Requirement</li>
              <li>Frequently Asked Questions</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Sign Up</h3>
            <p>For our newsletter to receive updates</p>
            <form>
            <input type="email" placeholder="Enter your email" id="email" required pattern="^[^\&@]+@[^\&@]+\.[^\&@]+$" />
              <button type="submit">Sign Up</button>
            </form>
          </div>
        </footer>
        <footer className="footer2">
          <p>&copy; Copyright 2024. All Rights Reserved. SWARA INFRA.</p>
         {/* Social media icons */}
 <div className="socials-icons">
      <a href="#"><img src={facebookIcon} alt="facebook-icon" /></a>
      <a href="#"><img src={Tweeter} alt="Twitter" /></a>
      <a href="https://www.instagram.com/swarainfra?igsh=MW5lNGRxOXNremNuZA=="><img src={InstagramIcon} alt="Instagram" /></a>
      <a href="#"><img src={linkedIn} alt="Linkedin" /></a>
      <a href="#"><img src={youtubeicon} alt="Youtube" /></a>
      {/* Add more social media icons as needed */}
  </div>
        </footer>
      </div>    
    );
  }


export default Footer;