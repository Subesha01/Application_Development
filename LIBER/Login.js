

  import axios from 'axios'; // Import axios
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './App.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); // State to handle errors
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            try {
                const response = await axios.get(`http://localhost:8080/api/users/${username}`);
                const user = response.data;

                if (!user) {
                    setError('User not found');
                } else if (user.password === password) {
                    sessionStorage.setItem('name', username);
                    navigate('/home');
                } else {
                    setError('Incorrect password');
                }
            } catch (err) {
                console.log('Login failed due to: ' + err.message);
                setError('Login failed due to server error');
            }
        } else {
            setError('Please fill in all fields');
        }
    };

    const validate = () => {
        let result = true;
        if (!username) {
            result = false;
        }
        if (!password) {
            result = false;
        }
        return result;
    };

    return (
        <div className="center-container">
            <div className="signup-container">
                <h2>Login</h2>
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
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" style={{ marginLeft:'90px',width: '100px', height: '40px', display: 'flex', justifyContent: 'center',alignItems: 'center', fontSize: '16px', borderRadius: '8px' , border: '1px solid #ccc', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'}}>Login</button>

                </form>
                <p className="login-link">
                    Don't have an account? <Link to="/signup">Create New Account</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;

  