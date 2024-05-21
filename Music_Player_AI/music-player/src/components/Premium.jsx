import React, { useState, useEffect } from 'react';
import '../Styles/Premium.css';
import axios from 'axios';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Logo from '../images/Spotify-Logo.png';

const Premium = () => {
    useEffect(() => {
        document.body.classList.add('premium-body');
        return () => {
            document.body.classList.remove('premium-body');
        };
    }, []);
    const [name, setName] = useState('');
    const [premiumCost, setPremiumCost] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/api/users/subscriptions', { name, premiumCost });
            alert(response.data.message);
        } catch (error) {
            console.error('Premium failed:', error);
            alert('Premium account created failed.');
        }
    };

    return (
        <div className="premium-page">
            <Link to="/">
                <button className="back-button">
                    <FaArrowLeft />
                </button>
            </Link>
            <img src={Logo} alt="Spotify Logo" className="logopre" />
            <h1>Premium Subscription</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="premiumCost">Select Premium Cost:</label>
                    <select
                        id="premiumCost"
                        value={premiumCost}
                        onChange={(e) => setPremiumCost(e.target.value)}
                        required
                    >
                        <option value="">Select...</option>
                        <option value="10">Basic - $10/month</option>
                        <option value="20">Standard - $20/month</option>
                        <option value="30">Premium - $30/month</option>
                    </select>
                </div>
                <button type="submit">Subscribe</button>
            </form>
        </div>
    );
};

export default Premium;
