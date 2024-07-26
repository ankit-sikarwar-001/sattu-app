// import React from 'react';
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ContactSection from './ContactSection.jsx'
import {faPhone} from '@fortawesome/free-solid-svg-icons';
import {faList} from '@fortawesome/free-solid-svg-icons';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import {faComment} from '@fortawesome/free-solid-svg-icons';
import {faBell} from '@fortawesome/free-solid-svg-icons';
import {faUser} from '@fortawesome/free-solid-svg-icons';
function App() {
  return (
    <div>
    <div className="container">
      {/* <div className="header">
        <div className="header-left">
          <i className="fa fa-home"></i>
          <a href="https://figma.com/proto/d0rc">figma.com/proto/d0rc</a>
        </div>
        <div className="header-right">
          <i className="fa fa-plus"></i>
          <i className="fa fa-comments"></i>
          <i className="fa fa-ellipsis-v"></i>
        </div>
      </div> */}
      <div className="sidebar">
        <ul>
          <li><FontAwesomeIcon icon={faList} /> All Products</li>
          <li><FontAwesomeIcon icon={faCartShopping} /> Cart</li>
          <li><FontAwesomeIcon icon={faComment} /> Messages</li>
          <li><FontAwesomeIcon icon={faBell} /> Notification</li>
          <li><FontAwesomeIcon icon={faUser} /> Profile</li>
          <li><FontAwesomeIcon icon={faPhone} /><a id = "anchor" href="#contact-us">Contact Us</a></li>
        </ul>
      </div>
      <div className="main">
        <div className="user-card">
          <div className="user-profile">
            <img src="https://via.placeholder.com/150" alt="Profile" />
          </div>
          <div className="user-info">
            <h3>Rohit Tiwari</h3>
            <p>Guru Jambheshwar University of Science & Technology</p>
            <p>CSE(A&MI)</p>
            <p>3rd Year contact</p>
          </div>
          <div className="user-actions">
            <button className="chat-button">Chat</button>
            <button className="edit-button">Edit</button>
          </div>
        </div>
        <div className="products">
          <div className="product">
            <img src="https://via.placeholder.com/150" alt="Product" />
            <h3>Maths Books</h3>
            <p>₹ 200</p>
            <button className="edit-button">Edit</button>
          </div>
          <div className="product">
            <img src="https://via.placeholder.com/150" alt="Product" />
            <h3>Maths Books</h3>
            <p>₹ 200</p>
            <button className="edit-button">Edit</button>
          </div>
          <div className="product">
            <img src="https://via.placeholder.com/150" alt="Product" />
            <h3>Maths Books</h3>
            <p>₹ 200</p>
            <button className="edit-button">Edit</button>
          </div>
          <div className="product">
            <img src="https://via.placeholder.com/150" alt="Product" />
            <h3>Maths Books</h3>
            <p>₹ 200</p>
            <button className="edit-button">Edit</button>
          </div>
          <div className="product">
            <img src="https://via.placeholder.com/150" alt="Product" />
            <h3>Maths Books</h3>
            <p>₹ 200</p>
            <button className="edit-button">Edit</button>
          </div>
          <div className="product">
            <img src="https://via.placeholder.com/150" alt="Product" />
            <h3>Maths Books</h3>
            <p>₹ 200</p>
            <button className="edit-button">Edit</button>
          </div>
        </div>
      </div>
      
    </div>
    <div id="contact-us">
      <ContactSection/></div>
</div>
  );
}

export default App;
