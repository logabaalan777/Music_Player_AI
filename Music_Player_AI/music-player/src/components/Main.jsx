import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Main.css';
import Logo from "../images/Spotify-Logo.png";
import Background from "../images/Spotify-back.gif";
const Main = () => {
    return (
        <div>
            <nav className="navbar">
                <Link to="/">
                    <img src={Logo} alt="Spotify Logo" className="logo" />
                </Link>
                <ul className="nav-links">
                    <li><Link to="/support">Support</Link></li>
                    <li><Link to="/premium">Premium</Link></li>
                    <li><Link to="/signup">Signup</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </nav>
            <div className="home">
                <img src={Background} alt="Background" className="background-image" />
            </div>
            <footer className="footer">
                <p>Spotify.com &copy; 2024</p>
            </footer>
        </div>
    );
}

export default Main;
