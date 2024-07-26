// import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import {faPhone} from '@fortawesome/free-solid-svg-icons';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <div className='contactus'>
      <div className="contact-container">
        <h1>Contact Us</h1>
      </div>
      <div id="belowheader">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta aspernatur fugit ab dolorum, consequatur totam illum? Voluptatum voluptates quidem quia nemo neque, consequatur ex vel.</p>
      </div>
      <div className="contact-main">
        <div id="contact-left">
          <div id="addressbox">
            <div id='addressicon'>
            <FontAwesomeIcon icon={faLocationDot} />
            </div>
            <div id="addresstext">
              <p id = "para1">Address</p>
              <p id='para'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. !</p>
            </div>
          </div>
          {/* phone details  */}
          <div className="phoneblock">
            <div id='addressicon'>
            <FontAwesomeIcon icon={faPhone} />
            </div>
            <div id="addresstext">
              <p id = "para1">Phone</p>
              <p id='para'>512-245-365-7589</p>
            </div>
          </div>
          {/* emailsection */}
          <div className="phoneblock">
            <div id='addressicon'>
            <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div id="addresstext">
              <p id = "para1">Email</p>
              <p id='para'>abcd1234@mail.net</p>
            </div>
          </div>
        </div>
        {/* contact right section start */}
        <div className='contact-right'>
          <form id = "form"action="/">
          <div id="space-form">
          <h2>Send Message</h2>
          <div id='forminside'>
          <input type="text" placeholder='Full Name'  />
          
          <input type="Email" placeholder='Email'/>
          <textarea name="Type Your Message" id="textbox" placeholder='Type Your Message'></textarea>
          
          <button>Send</button>
          </div></div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;