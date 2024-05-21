import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Styles/Bot.css';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Bot = () => {
    useEffect(() => {
        document.body.classList.add('bot-body');
        return () => {
            document.body.classList.remove('bot-body');
        };
    }, []);
    const [inputSong, setInputSong] = useState('');
    const [songRecommendations, setSongRecommendations] = useState([]);
    const [error, setError] = useState(null);

    const handleSongInputChange = (event) => {
        setInputSong(event.target.value);
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/recommend', { songName: inputSong });
            setSongRecommendations(response.data);
            setError(null);
        } catch (error) {
            console.error('Error fetching recommendations:', error);
            setError('Error fetching recommendations. Please try again later.');
        }
    };

    return (
        <div className="Bot">
            <Link to="/first">
                <button className="bot-back">
                    <FaArrowLeft />
                </button>
            </Link>
            <h1>MusicBuddy Recommendation System</h1>
            <form onSubmit={handleFormSubmit}>
                <input
                    type="text"
                    value={inputSong}
                    onChange={handleSongInputChange}
                    placeholder="Enter song name"
                />
                <button type="submit">Get Recommendations</button>
            </form>
            <div>
                {error && <p className="error">{error}</p>}
                <h2>Recommendations:</h2>
                <ul>
                    {songRecommendations.map((rec, index) => (
                        <li key={index}>{rec.song_name} by {rec.singer}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Bot;
