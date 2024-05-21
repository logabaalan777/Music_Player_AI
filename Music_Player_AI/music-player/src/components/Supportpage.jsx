import React from 'react';
import '../Styles/SupportPage.css';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SupportPage = () => {
    return (
        <div className="support-page">
            <Link to="/">
                <button className="back-button">
                    <FaArrowLeft />
                </button>
            </Link>
            <div className="support-header">
                <h1>Support</h1>
            </div>
            <div className="support-content">
                <div className="faq-section">
                    <h2>Frequently Asked Questions</h2>
                    <p>Here are some common questions and answers:</p>
                    <ul>
                        <li><strong>How do I create an account?</strong><br />
                            To create an account, simply click on the "Sign Up" button on the homepage and fill in the required information. Once done, you'll receive a confirmation email to activate your account.
                        </li>
                        <li><strong>How can I reset my password?</strong><br />
                            To reset your password, go to the login page and click on the "Forgot Password" link. Follow the instructions sent to your email to reset your password securely.
                        </li>
                        <li><strong>How do I cancel my subscription?</strong><br />
                            To cancel your subscription, log in to your account and navigate to the subscription settings. From there, you can easily cancel your subscription with just a few clicks.
                        </li>
                        <li><strong>What devices are supported?</strong><br />
                            Our app supports a wide range of devices, including smartphones, tablets, desktop computers, smart TVs, and gaming consoles. You can enjoy seamless music streaming across all your favorite devices.
                        </li>
                    </ul>
                </div>
                <div className="contact-section">
                    <h2>Contact Support</h2>
                    <p>If you have any further questions or need assistance, feel free to contact our support team:</p>
                    <div className="contact-info">
                        <p><strong>Email:</strong> supportspotify@gmail.com</p>
                        <p><strong>Phone:</strong> 1-800-0030-9800</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SupportPage;
