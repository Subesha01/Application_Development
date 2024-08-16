

import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './App.css';

const SignUp = () => {
    const [username, setUsername] = useState(''); 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phonenumber, setPhone] = useState(''); 
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log('Submitting form', { username, email, password, phonenumber });
            const response = await axios.post("http://localhost:8080/api/users/register", { username, email, password, phonenumber });
            console.log('Response received:', response.data); 
            navigate('/login');
        } catch (err) {
            console.error('Signup error:', err);
            setError('An error occurred during signup. Please try again.');
        }
    };

    return (
      <div className="center-container">
        <div className="signup-container">
            <h2>Sign Up</h2>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} 
                        required
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        />
                </div>
                <div className="input-group">
                    <label htmlFor="phonenumber">Phone Number:</label>
                    <input
                        type="tel"
                        id="phonenumber"
                        value={phonenumber}
                        onChange={(e) => setPhone(e.target.value)} 
                        required
                        />
                </div>
                <button type="submit" style={{ marginLeft:'90px',width: '100px', height: '40px', display: 'flex', justifyContent: 'center',alignItems: 'center', fontSize: '16px', borderRadius: '8px' , border: '1px solid #ccc', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'}}>Signup</button>
            </form>
            <p className="login-link">
                Already have an account? <Link to="/login">Login</Link>
            </p>
        </div>
                        </div>
    );
};

export default SignUp;