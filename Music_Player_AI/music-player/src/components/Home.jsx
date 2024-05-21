import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/Home.css';
import axios from 'axios';
import anirudh from '../images/anirudh.jpg';
import arrahman from '../images/arrahman.jpg';
import ghibran from '../images/ghibran.jpg';
import gv from '../images/gvprakash.png';
import haricharan from '../images/haricharan.jpg';
import hariharan from '../images/Hariharan.jpg';
import harijaya from '../images/harisjayaraj.jpg';
import hiphop from '../images/hiphopaadi.jpeg';
import illayraja from '../images/illayaraja.jpg';
import kanikakapoor from '../images/KanikaKapoor.jpg';
import kschitra from '../images/KSChitra.jpg';
import monalithakur from '../images/Monalithkur.jpg';
import nehakakkar from '../images/nehakakkar.jpg';
import susheela from '../images/Psusheela.jpg';
import shreya from '../images/shreya-image.png';
import sidsriram from '../images/sidsriram.jpg';
import spb from '../images/SPB.jpg';
import santhosh from '../images/santhosh.jpg';
import sunidhi from '../images/sunidhi_chauhan.jpg';
import yuvan from '../images/yuvanshankar.jpg';
import pradeep from '../images/pradeep.png';
import vijay from '../images/vijayantony.jpg';
import zakir from '../images/Zakirhussain.jpg';

const Home = () => {
    useEffect(() => {
        document.body.classList.add('home-body');
        return () => {
            document.body.classList.remove('home-body');
        };
    }, []);
    const navigate = useNavigate();
    const [nickname, setNickname] = useState('');
    const [dob, setDob] = useState('');
    const [mobile, setMobile] = useState('');
    const [selectedState, setSelectedState] = useState('');
    const [selectedArtists, setSelectedArtists] = useState([]);

    const states = ['Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'];

    const artists = [
        { id: 1, name: 'Anirudh Ravichander', image: anirudh },
        { id: 2, name: 'A.R.Rahman', image: arrahman },
        { id: 3, name: 'S. P. Balasubrahmanyam', image: spb },
        { id: 4, name: 'Yuvan Shankar Raja', image: yuvan },
        { id: 5, name: 'Ghibran', image: ghibran },
        { id: 6, name: 'G. V. Prakash Kumar', image: gv },
        { id: 7, name: 'Shreya Ghoshal', image: shreya },
        { id: 8, name: 'Hariharan', image: hariharan },
        { id: 9, name: 'Haricharan', image: haricharan },
        { id: 10, name: 'Haris Jayaraj', image: harijaya },
        { id: 11, name: 'Sid Sriram', image: sidsriram },
        { id: 12, name: 'Ilaiyaraaja', image: illayraja },
        { id: 13, name: 'Neha Kakkar', image: nehakakkar },
        { id: 14, name: 'Kanika Kapoor', image: kanikakapoor },
        { id: 15, name: 'Santhosh Narayanan', image: santhosh },
        { id: 16, name: 'Hiphop Tamizha', image: hiphop },
        { id: 17, name: 'Monali Thakur', image: monalithakur },
        { id: 18, name: 'K.S.Chitra', image: kschitra },
        { id: 19, name: 'Sunidhi Chauhan', image: sunidhi },
        { id: 20, name: 'P. Susheela', image: susheela },
        { id: 21, name: 'Zakir Hussain', image: zakir },
        { id: 22, name: 'Vijay Antony', image: vijay },
        { id: 23, name: 'Pradeep Kumar', image: pradeep },
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const userData = {
                nickname,
                dob,
                mobile,
                selectedState,
                selectedArtists
            };

            const response = await axios.post('http://localhost:3001/api/userdetails/saveUserData', userData);

            if (response.status === 200) {
                alert('User data saved successfully!');
                navigate('/login');
            } else {
                alert('Failed to save user data. Please try again.');
            }

        } catch (error) {
            console.error('Failed to save user data:', error);
            alert('Failed to save user data. Please try again.');
        }
    };

    const handleArtistSelection = (e) => {
        const artistName = e.target.value;
        if (selectedArtists.includes(artistName)) {
            setSelectedArtists(selectedArtists.filter(artist => artist !== artistName));
        } else {
            setSelectedArtists([...selectedArtists, artistName]);
        }
    };

    return (
        <div className="home-container">
            <h2>Welcome to Spotify Enjoy Listening!</h2>
            <form className="music-details-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="nickname">Nickname</label>
                    <input type="text" id="nickname" name="nickname" placeholder='nickname' value={nickname} onChange={(e) => setNickname(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="dob">Date of Birth</label>
                    <input type="date" id="dob" name="dob" value={dob} onChange={(e) => setDob(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="mobile">Mobile No</label>
                    <input type="tel" id="mobile" name="mobile" pattern="[0-9]{10}" placeholder='ph-no' value={mobile} onChange={(e) => setMobile(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="state">State</label>
                    <select id="state" name="state" value={selectedState} onChange={(e) => setSelectedState(e.target.value)} required>
                        <option value="">Select State</option>
                        {states.map((state, index) => (
                            <option key={index} value={state}>{state}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="artist">Select your favourite Artist's</label>
                    <div className="artist-list">
                        {artists.map((artist) => (
                            <div key={artist.id} className="artist-item">
                                <input
                                    type="checkbox"
                                    id={`artist-${artist.id}`}
                                    name="artist"
                                    value={artist.name}
                                    checked={selectedArtists.includes(artist.name)}
                                    onChange={handleArtistSelection}
                                />
                                <label htmlFor={`artist-${artist.id}`}>
                                    <img src={artist.image} alt={artist.name} />
                                    <span>{artist.name}</span>
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
                <button type="submit" className="login-button">next</button>
            </form>
        </div>
    );
}

export default Home;
