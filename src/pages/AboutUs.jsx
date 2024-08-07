import React from 'react';
import '../stylesheet/aboutus/aboutus.css'; // Import CSS file
import aboutusimg from '../assets/aboutus/abus.jpg';
import abus from '../assets/aboutus/abus2.jpg';
import Acc from '../assets/aboutus/Acc-removebg-preview.png';
import Kajaria from '../assets/aboutus/Kajaria-removebg-preview.png';
import kamdenu from '../assets/aboutus/kamdenu-removebg-preview.png';
import fixit from '../assets/aboutus/fixit-removebg-preview.png';
import architech from '../assets/aboutus/architecture-icon.png';
import design from '../assets/aboutus/design-icon.png';
import construction from '../assets/aboutus/construction-icon.png';
import handover from '../assets/aboutus/handover-icon.png';
import ourvision from '../assets/aboutus/ourvision-icon.png';
import features from '../assets/aboutus/features-icon.png';
import { Link } from 'react-router-dom';

function AboutUs() {
  return (
    <div className="aboutus-boddy"> 
      <section id="aboutus-home-banner">
        <img src={aboutusimg} alt="homeimage"/>
        {/* <h1>Welcome to <span>SWARA INFRA</span></h1> */}
      </section>
      <main>
        <section id="aboutus-about">
          <div className="aboutus-text-containers">
            <h2 style={{fontWeight: 'bold', fontStyle:'italic'}} className="mainhome-subtitle">(To discover the perfect plan for your needs, visit our detailed <Link to="/packages">package page...</Link>)</h2>
            <h2 style={{fontWeight:'bold'}}>About <span className='aboutus-us'>Us</span></h2>

            <p style={{fontFamily: 'Times New Roman, Times, serif'}} id="aboutus-next">
              Swarainfra turns that dream into reality. We're your one-stop shop for everything home construction. From expert civil engineers to a team that oversees every detail, we handle it all. Consider us your partner, guiding you through the process and ensuring your vision comes to life.
            </p>
          </div>
          {/* <img src={abus} alt="home construction image" /> */}
        </section>
        <div className="aboutus-conceptBoxCover">
          <section style={{fontFamily: 'Times New Roman, Times, serif'}} id="aboutus-services">
            <h2>What <span>We Offer</span></h2>
            <p>FROM CONCEPT TO CONSTRUCTION</p>
            <div className="aboutus-service">
              <img src={architech} alt="Architecture Icon" className="aboutus-service-icon" />
              <h3>1. ARCHITECTURE</h3>
              <p>Experienced Architects to work on the floor plans, elevation and working drawings which are completely vastu oriented.</p>
            </div>
            <div className="aboutus-service">
              <img src={design} alt="Design Icon" className="aboutus-service-icon" />
              <h3>2. DESIGN</h3>
              <p>Our structural engineers ensure that the finalized design is structurally compatible as per the IS Standards. MEP engineers work on the electrical & plumbing line drawings suiting the client’s requirements and workability on site.</p>
            </div>
            <div className="aboutus-service">
              <img src={construction} alt="Construction Icon" className="aboutus-service-icon" />
              <h3>3. CONSTRUCTION</h3>
              <p>A site engineer led by an experienced project coordinator works dedicatedly on site overseeing the process of home construction from day one till key handover.</p>
            </div>
            <div className="aboutus-service">
              <img src={handover} alt="Key Handover Icon" className="aboutus-service-icon" />
              <h3>4. KEY HANDOVER</h3>
              <p>We ensure that the construction is completed within the agreed time frame and the key is handed over to the client along with a formal handover kit.</p>
            </div>
          </section>
        </div>

        <section id="aboutus-core-values">
          <h2><span>Core Values</span></h2>
          <p>Our core purpose is to build in a better way.</p>
        </section>
        <div className="aboutus-horizontal-container">
          <section id="aboutus-vision">
            <img src={ourvision} alt="our vision Icon" className="aboutus-vision-icon" /> 
            <h2><span>Our Vision</span></h2>
            <p>Our vision at Swara Infra is to be recognized as the premier construction company, setting the standard for excellence in the industry. We envision a future where our innovative solutions, sustainable practices, and unwavering commitment to quality propel us to the forefront of construction innovation. By fostering a culture of collaboration, integrity, and continuous improvement, we aim to not only meet but exceed the evolving needs of our clients, while positively impacting the communities we serve. Together, we build a future where every structure we create stands as a testament to our dedication to craftsmanship, safety, and environmental stewardship.</p>
          </section>

          <section id="aboutus-features">
            <img src={features} alt="features Icon" className="aboutus-features-icon" /> 
            <h2><span>Featuring</span></h2>
            <ul>
              <li>New & Trending Designs</li>
              <li>No Subcontracts</li>
              <li>No Hidden Charges</li>
              <li>Timely Delivery</li>
              <li>Fair Pricing</li>
              <li>High quality work with No Compromise</li>
            </ul>
          </section>
        </div>
        <section id="aboutus-locations">
          <h2>Our <span>Locations</span></h2>
          <div className="aboutus-location">
            <h3>Huballi Office:</h3>
            <p>Shop No. 17 (Second Floor) Ridhi Sidhi Complex Opp. Giant's School, Akshay Park Gokul Road, Hubballi.</p>
          </div>
        </section>
      </main>
      <section className="aboutus-home-brands">
        <div className="aboutus-row">
          <div className="aboutus-home-brandle">
            <p>We choose</p>
            <h2>THE BEST <span>BRANDS</span> <br />FOR YOU</h2>
          </div>
          <div className="aboutus-slider">
            <div><img src={Acc} alt="Image 1" /></div>
            <div><img src={Kajaria} alt="Image 2" /></div>
            <div><img src={kamdenu} alt="Image 3" /></div>
            <div><img src={fixit} alt="Image 4" /></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
