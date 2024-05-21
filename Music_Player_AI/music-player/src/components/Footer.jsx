import React from 'react';
import { FaPlay, FaPause, FaStepBackward, FaStepForward, FaVolumeMute, FaVolumeOff, FaVolumeDown, FaVolumeUp } from 'react-icons/fa';
import '../Styles/Footer.css';

const Footer = ({
    isPlaying,
    togglePlay,
    handlePrevious,
    handleNext,
    handleVolumeChange,
    handleSeek,
    currentTime,
    duration,
    currentMusic,
    volume,
    audioLoaded
}) => {
    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    const getVolumeIcon = () => {
        if (volume == 0) {
            return <FaVolumeMute className="volume-icon" />;
        } else if (volume > 0 && volume < 15) {
            return <FaVolumeOff className="volume-icon" />;
        } else if (volume >= 15 && volume <= 50) {
            return <FaVolumeDown className="volume-icon" />;
        } else {
            return <FaVolumeUp className="volume-icon" />;
        }
    };

    return (
        <div className="music-player">
            <div className="controls">
                <button className="nav-button" onClick={handlePrevious}><FaStepBackward /></button>
                <button className="play-button" onClick={togglePlay}>
                    {isPlaying ? <FaPause /> : <FaPlay />}
                </button>
                <button className="nav-button" onClick={handleNext}><FaStepForward /></button>
            </div>
            <div className="current-music">
                <p>{currentMusic}</p>
            </div>
            <div className="progress-bar">
                <input
                    type="range"
                    min="0"
                    max={duration}
                    value={currentTime}
                    onChange={handleSeek}
                    disabled={!audioLoaded}
                />
                <div className="time-info">
                    <span>{formatTime(currentTime)}</span>/
                    <span>{formatTime(duration)}</span>
                </div>
            </div>
            <div className="volume-controls">
                {getVolumeIcon()}
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={volume}
                    onChange={handleVolumeChange}
                />
                <span className="volume-percentage">{volume}%</span>
            </div>
        </div>
    );
};

export default Footer;
