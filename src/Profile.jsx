import { useState } from 'react';
import './Profile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCommentDots} from '@fortawesome/free-solid-svg-icons';
import {faPen} from '@fortawesome/free-solid-svg-icons';

function Profile (){
const [isEditing, setIsEditing] = useState(false);
  const [userProfile, setUserProfile] = useState({
    img : '',
    name: 'Ankit Singh',
    university: 'Guru Jambheshwar University of Science & Technology',
    course: 'CSE',
    year: '3rd Year ',
  });

  function changeval() {
    setIsEditing(true);
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setUserProfile({ ...userProfile, [name]: value });
  }

  function handleSave() {
    setIsEditing(false);
  }

    return(
<div>
    <div className="user-card">
            <div id='profilech'>         
              <div className="user-profile">
                <img src="src\assets\sattu.webp" alt="Profile" />
              </div>
              <div className="user-info">
                {isEditing ? (
                  <form>
                    <label>
                      Name:
                      <input type="text" name="name" value={userProfile.name} onChange={handleInputChange} />
                    </label>
                    <br />
                    <label>
                      University:
                      <input type="text" name="university" value={userProfile.university} onChange={handleInputChange} />
                    </label>
                    <br />
                    <label>
                      Course:
                      <input type="text" name="course" value={userProfile.course} onChange={handleInputChange} />
                    </label>
                    <br />
                    <label>
                      Year:
                      <input type="text" name="year" value={userProfile.year} onChange={handleInputChange} />
                    </label>
                    <br />
                    <button onClick={handleSave}>Save</button>
                  </form>
                ) : (
                  <>
                    <h3>{userProfile.name}</h3>
                    <p>{userProfile.university}</p>
                    <p>{userProfile.course}</p>
                    <p>{userProfile.year}</p>
                  </>
                )}
              </div>
            </div>

            <div className="user-actions">
              <button className="chat-button">Chat <FontAwesomeIcon icon={faCommentDots} /></button>
              <button className="edit-button1" onClick={changeval}>Edit <FontAwesomeIcon icon={faPen} /></button>
            </div>
          </div>
</div>
    );
}
export default Profile;