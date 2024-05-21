import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../images/Spotify-Logo.png';
import '../Styles/Register.css';
import axios from 'axios';

const Login = () => {
    useEffect(() => {
        document.body.classList.add('login-body');
        return () => {
            document.body.classList.remove('login-body');
        };
    }, []);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/api/users/loginpage', { email, password });
            alert(response.data.message);
            navigate('/first');
        } catch (error) {
            console.error('Login failed:', error);
            alert('Invalid credentials. Please try again.');
        }
    };
    return (
        <div className="login-container">
            <div className="logo-container">
                <img src={Logo} alt="Spotify Logo" className="logologo" />
            </div>
            <div className="content">
                <h2>Log in to Spotify</h2>
                <form className="signup-form" onSubmit={handleLogin}>
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input type="email" id="email" name="email" placeholder='name@domain.com' required onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" placeholder='password' required onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button type="submit" className="signup-button">Login</button>
                </form>
            </div>
            <div className="already-account">
                Don't have an account? <Link to="/signup">Signup</Link>
            </div>
        </div>
    );
}

export default Login;
