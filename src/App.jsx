
// import React, { useState } from 'react';
// import { useState } from 'react';
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ContactSection from './ContactSection.jsx'
import {faPhone} from '@fortawesome/free-solid-svg-icons';
import {faList} from '@fortawesome/free-solid-svg-icons';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import {faComment} from '@fortawesome/free-solid-svg-icons';
import {faBell} from '@fortawesome/free-solid-svg-icons';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import Profile from './Profile.jsx';

function App() {
  // const [isEditing, setIsEditing] = useState(false);
  // const [userProfile, setUserProfile] = useState({
  //   name: 'Ankit Singh',
  //   university: 'Guru Jambheshwar University of Science & Technology',
  //   course: 'CSE(A&MI)',
  //   year: '3rd Year contact',
  // });

  // function changeval() {
  //   setIsEditing(true);
  // }

  // function handleInputChange(event) {
  //   const { name, value } = event.target;
  //   setUserProfile({ ...userProfile, [name]: value });
  // }

  // function handleSave() {
  //   setIsEditing(false);
  // }

  return (
    <div>
      <div className="container">
        <div className="sidebar">
          <ul>
            <li><FontAwesomeIcon icon={faList} /> All Products</li>
            <li><FontAwesomeIcon icon={faCartShopping} /> Cart</li>
            <li><FontAwesomeIcon icon={faComment} /> Messages</li>
            <li><FontAwesomeIcon icon={faBell} /> Notification</li>
            <li><FontAwesomeIcon icon={faUser} /> Profile</li>
            <li><FontAwesomeIcon icon={faPhone} /><a id="anchor" href="#contact-us">Contact Us</a></li>
          </ul>
        </div>
        <div className="main">
          <Profile/>
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