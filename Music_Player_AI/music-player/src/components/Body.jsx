import React from 'react';
import { FaPlay, FaBell, FaUser } from 'react-icons/fa';
import '../Styles/Body.css';
import allout from '../images/Allout.jpeg';
import best from '../images/bestofall.jpeg';
import happy from '../images/HappyVibes.jpeg';
import hothits from '../images/Hothits.jpeg';
import longdrive from '../images/longdrive.jpeg';
import lovehits90 from '../images/lovehits90.jpeg';
import nightmelodies from '../images/nightmelodies.jpeg';
import partytime from '../images/partytime.jpeg';
import top30 from '../images/top30dance.jpeg';
import top30love from '../images/top30love.jpeg';
import toplovehits from '../images/toplovehits.jpeg';
import valentine from '../images/valentine.jpeg';

const musicMapping = {
    "All outof 10's": [0, 1, 3, 18, 21, 22],
    "Best of All time": [2, 4, 1, 21, 22],
    "Tamil Vibes": [0, 1, 17, 18, 20, 21],
    "Hot Hits": [2, 4, 24, 25],
    "Long Drive hits": [5, 6, 7, 8, 9],
    "90's Love Hits": [28, 4, 22, 24],
    "Night Melodies": [10, 11, 12, 13],
    "Party Time": [3, 14, 15, 16, 19],
    "Top 30 Hits": [1, 2, 18, 21],
    "Top 30 Love": [14, 10, 23, 24, 25, 27],
    "Top Love Hits": [10, 23, 25, 27, 26],
    "Valentine's Hits": [10, 23, 25, 27],
};

const getRandomSongId = (title) => {
    const songs = musicMapping[title];
    const randomIndex = Math.floor(Math.random() * songs.length);
    return songs[randomIndex];
};

const Body = ({ playMusic }) => {
    const renderMusicCard = (title, image) => (
        <div className="music-card">
            <img src={image} alt={title} className="music-image" />
            <h3 className="music-name">{title}</h3>
            <button className="music-play-button" onClick={() => playMusic(getRandomSongId(title))}>
                <FaPlay />
            </button>
        </div>
    );

    return (
        <div className="body">
            <nav className="navbar">
                <div className="search-container">
                    <input type="text" className="search-field" placeholder="Search..." />
                </div>
                <div className="nav-icons">
                    <i className="bell-icon"><FaBell /></i>
                    <i className="user-icon"><FaUser /></i>
                </div>
            </nav>
            <div className="music-heading">
                <h2>Daily Music</h2>
            </div>
            <div className="music-list">
                {renderMusicCard("All outof 10's", allout)}
                {renderMusicCard("Best of All time", best)}
                {renderMusicCard("Tamil Vibes", happy)}
                {renderMusicCard("Hot Hits", hothits)}
                {renderMusicCard("Long Drive hits", longdrive)}
            </div>
            <div className="music-heading">
                <h2>Fresh New Music</h2>
            </div>
            <div className="music-list">
                {renderMusicCard("90's Love Hits", lovehits90)}
                {renderMusicCard("Night Melodies", nightmelodies)}
                {renderMusicCard("Party Time", partytime)}
                {renderMusicCard("Top 30 Hits", top30)}
                {renderMusicCard("Top 30 Love", top30love)}
            </div>
            <div className="music-heading">
                <h2>Listen With Love</h2>
            </div>
            <div className="music-list">
                {renderMusicCard("Top Love Hits", toplovehits)}
                {renderMusicCard("Valentine's Hits", valentine)}
                {renderMusicCard("Top 30 Hits", top30)}
                {renderMusicCard("All outof 10's", allout)}
            </div>
            <div className="music-heading">
                <h2>Recently Played</h2>
            </div>
            <div className="music-list">
                {renderMusicCard("90's Love Hits", lovehits90)}
                {renderMusicCard("Night Melodies", nightmelodies)}
                {renderMusicCard("Party Time", partytime)}
                {renderMusicCard("Top 30 Hits", top30)}
                {renderMusicCard("Top 30 Love", top30love)}
            </div>
        </div>
    );
};

export default Body;
