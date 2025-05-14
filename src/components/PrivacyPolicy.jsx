import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PrivacyPolicy.css';

export default function PrivacyPolicy() {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/');
    };

    return (
        <div className="privacy-policy-container">
            <button className="back-button" onClick={handleBack}>← Back</button>
            <h1>Privacy Policy</h1>
            <div className="privacy-content">
                <h2>Introduction</h2>
                <p>
                    We respect your privacy and are committed to protecting your personal data.
                    This privacy policy will inform you about how we look after your personal data
                    when you visit our website and tell you about your privacy rights.
                </p>

                <h2>Information We Collect</h2>
                <p>
                    We may collect, use, store and transfer different kinds of personal data about you
                    including your name, email address, and location data when you use our services.
                </p>

                <h2>How We Use Your Information</h2>
                <p>
                    We use your personal data to provide and improve our services, send you updates,
                    and manage our relationship with you.
                </p>

                <h2>Data Security</h2>
                <p>
                    We have implemented measures to secure your personal data from accidental loss and
                    unauthorized access.
                </p>

                <h2>Contact Us</h2>
                <p>
                    If you have any questions about this privacy policy or our privacy practices,
                    please contact us.
                </p>
            </div>
        </div>
    );
} 