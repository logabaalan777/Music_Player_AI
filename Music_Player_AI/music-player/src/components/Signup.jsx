import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../images/Spotify-Logo.png';
import '../Styles/Register.css';
import axios from 'axios';

const Signup = () => {
    useEffect(() => {
        document.body.classList.add('signup-body');
        return () => {
            document.body.classList.remove('signup-body');
        };
    }, []);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3001/api/users/register', { email, password });
            alert(response.data.message);
            navigate('/home');
        } catch (error) {
            console.error('Signup failed:', error);
            alert('Signup failed, User already exist. Please try again.');
        }
    };

    return (
        <div className="signup-container">
            <div className="logo-container">
                <img src={Logo} alt="Spotify Logo" className="logologo" />
            </div>
            <div className="content">
                <h2>Signup to start Listening</h2>
                <form className="signup-form" onSubmit={handleSignup}>
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input type="email" id="email" name="email" placeholder='name@domain.com' required onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" placeholder='password' required onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button type="submit" className="signup-button">Signup</button>
                </form>
                <div className="already-account">
                    Already have an account? <Link to="/login">Login</Link>
                </div>
            </div>
        </div>
    );
}

export default Signup;
