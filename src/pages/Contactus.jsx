import React from 'react';
import '../stylesheet/contactus/contactus.css'; // Import CSS file
import { Link } from 'react-router-dom';

function Contactus() {
  return (
    <main className="contactus-main">
      <section className="contactus-intro">
        <h4 style={{fontWeight:'bold'}}>TALK TO US AND</h4>
        <h2 style={{color:'#FFD700', fontWeight:'bold'}}>WE CAN <span style={{ fontSize: 25, color:'blue' }}>BUILD YOUR DREAM HOME</span> AROUND YOU</h2>
        <h2 style={{fontWeight: 'bold', fontStyle:'italic', fontSize:'medium'}} className="mainhome-subtitle">(To discover the perfect plan for your needs, visit our detailed <Link to="/packages">package page...</Link>)</h2>
        </section>

      <section className="contactus-intro1">
        <h2>HOW CAN WE HELP</h2>
        <ul>
          <li>Do you have a general question about construction?</li>
          <li>Do you have any upcoming projects you'd like to discuss?</li>
          <li>Are you a subcontractor and would love to partner with buildAhome?</li>
          <li>Are you enquiring about careers at SwaraInfra?</li>
        </ul>
      </section>
      
      <section className="contactus-contact">
        <h4>Contact-Us</h4>
        <div className="contactus-contact-methods">
          <div className="contactus-email">
            <p className="contactus-first">Email-Us :</p>
            <p className="contactus-next">swarainfra1@gmail.com</p>
          </div>
          <div className="contactus-call-us">
            <p className="contactus-first">Call-Us :</p>
            <p className="contactus-next">+91 9538675322</p>
            <p className="contactus-next">+91 9902718498</p>
          </div>
        </div>
      </section>

      <div className="contactus-head2">
        <h2>WHERE TO FIND US</h2>
      </div>

      <section className="contactus-location-images">
        <div className="contactus-map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d605.6396172426017!2d75.11453665467444!3d15.355479937451365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb8d729e11eaac5%3A0x5188820b2489475!2sRidhi%20sidhi%20glass%20hubali!5e0!3m2!1sen!2sin!4v1717178014933!5m2!1sen!2sin"
            width="500" height="300" style={{ border: '0' }} allowFullScreen="" loading="lazy"
          ></iframe>
          <p>Hubballi Office:<br />
          Shop No 17, second floor, Ridhi Sidhi complex opp, Giants School Akshay park, Gokul Road Hubballi</p>
        </div>
      </section>
    </main>
  );
}

export default Contactus;
