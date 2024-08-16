/*import React from 'react';
import './Profile.css';
import { Link } from 'react-router-dom';

const Profile = () => {
  const name = sessionStorage.getItem('name') || 'User';
  const email = sessionStorage.getItem('email') || 'user@example.com';
  const booksBought = ["To Kill a Mockingbird by Harper Lee", "1984 by George Orwell", "Harry Potter and the Sorcerer's Stone by J.K. Rowling"];
  const booksInCart = ["The Great Gatsby by F. Scott Fitzgerald", "The Catcher in the Rye by J.D. Salinger"];
  const interestedFields = ["Fiction", "Fantasy", "Classics"];

  const handleLogout = () => {
    sessionStorage.clear();
    console.log("Logged out");
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-header">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7-znINlBW7IOYBFMMQn1Fr5fiaXn81M1w5w&s" alt={name} className="profile-avatar" />
          <div className="profile-name-email">
            <h2 className="profile-name">{name}</h2>
       
          </div>
        </div>
        <div className="profile-details">
          <h3 className="profile-section-title">Books Bought</h3>
          <ul className="profile-list">
            {booksBought.map((book, index) => (
              <li key={index} className="profile-list-item">{book}</li>
            ))}
          </ul>
          <h3 className="profile-section-title">Books in Cart</h3>
          <ul className="profile-list">
            {booksInCart.map((book, index) => (
              <li key={index} className="profile-list-item">{book}</li>
            ))}
          </ul>
          <h3 className="profile-section-title">Interested Fields</h3>
          <ul className="profile-list">
            {interestedFields.map((field, index) => (
              <li key={index} className="profile-list-item">{field}</li>
            ))}
          </ul>
        </div>
        <button className="logout-button" onClick={handleLogout}>
       <Link to="/signup">
        Logout
       </Link>
        </button>
      </div>
    </div>
  );
};

export default Profile;*/
import React, { useState, useEffect } from 'react';
import './Profile.css';

const Profile = () => {
  const storedProfile = JSON.parse(localStorage.getItem('profile')) || {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    address: '123 Main St, Anytown, USA',
    bio: 'This is a short bio.',
    image: 'https://via.placeholder.com/150'
  };

  const [profile, setProfile] = useState(storedProfile);
  const [editing, setEditing] = useState(false);
  const [newProfile, setNewProfile] = useState(profile);

  useEffect(() => {
    // Update localStorage whenever the profile changes
    localStorage.setItem('profile', JSON.stringify(profile));
  }, [profile]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProfile({ ...newProfile, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewProfile({ ...newProfile, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    setProfile(newProfile);
    setEditing(false);
  };

  return (
    <div className="profile-container">
      <input
        type="file"
        style={{ display: 'none' }}
        id="profileImage"
        onChange={handleImageChange}
      />
      <img
        src={newProfile.image}
        alt="Profile"
        className="profile-image"
        onClick={() => document.getElementById('profileImage').click()}
      />
      {editing ? (
        <>
          <div className="profile-field">
            <label className="profile-label">Name:</label>
            <input
              type="text"
              name="name"
              value={newProfile.name}
              onChange={handleChange}
              className="profile-input"
            />
          </div>
          <div className="profile-field">
            <label className="profile-label">Email:</label>
            <input
              type="email"
              name="email"
              value={newProfile.email}
              onChange={handleChange}
              className="profile-input"
            />
          </div>
          <div className="profile-field">
            <label className="profile-label">Phone:</label>
            <input
              type="tel"
              name="phone"
              value={newProfile.phone}
              onChange={handleChange}
              className="profile-input"
            />
          </div>
          <div className="profile-field">
            <label className="profile-label">Address:</label>
            <input
              type="text"
              name="address"
              value={newProfile.address}
              onChange={handleChange}
              className="profile-input"
            />
          </div>
          <div className="profile-field">
            <label className="profile-label">Bio:</label>
            <textarea
              name="bio"
              value={newProfile.bio}
              onChange={handleChange}
              className="profile-input"
            />
          </div>
          <button className="edit-button" onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <h2>{profile.name}</h2>
          <p>{profile.email}</p>
          <p>{profile.phone}</p>
          <p>{profile.address}</p>
          <p>{profile.bio}</p>
          <button className="edit-button" onClick={() => setEditing(true)}>Edit Profile</button>
        </>
      )}
    </div>
  );
};

export default Profile;
