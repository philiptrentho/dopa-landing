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
                <h2>Dopa Privacy Policy</h2>
                <p><em>Last updated: May 13 2025</em></p>

                <hr />

                <h3>1 · Who We Are</h3>
                <p>
                    Dopa, Inc. (“<strong>Dopa</strong>,” “<strong>we</strong>,” “<strong>our</strong>,” “<strong>us</strong>”) provides the Dopa mobile application and the website <strong>trydopa.com</strong> (collectively, the “<strong>Service</strong>”).<br />
                    Questions or requests? Email <a href="mailto:admin@trydopa.com">admin@trydopa.com</a> or call <strong>+1 650-686-8634</strong>.
                </p>

                <hr />

                <h3>2 · What We Collect</h3>
                <ul>
                    <li><strong>Account information</strong> – the email you supply and a securely-hashed password so you can sign in.</li>
                    <li><strong>Spotify listening data</strong> –
                        <ul>
                            <li>when you first connect Spotify, we import your <strong>50 most-recent tracks</strong>;</li>
                            <li>from that point forward we save every song you play while Dopa is installed (track ID, title, artist, timestamp). We never store audio files.</li>
                        </ul>
                    </li>
                    <li><strong>Avatar selfie</strong> – one profile photo you upload at sign-up.</li>
                    <li><strong>Precise location</strong> – GPS coordinates accurate to building-level, collected in the foreground <strong>and in the background</strong> to generate context-aware images.</li>
                    <li><strong>App diagnostics</strong> – device model, IP address, crash logs, and basic feature-usage events used only to keep the Service reliable.</li>
                    <li><strong>Website visits</strong> – we count page views on trydopa.com without logging visitor IP addresses and without setting tracking cookies.</li>
                </ul>
                <p>We <strong>do not</strong> sell your data or use it for advertising.</p>

                <hr />

                <h3>3 · How We Use Your Data</h3>
                <ol>
                    <li><strong>Generate AI images</strong> – We combine your current song title/artist and latest GPS coordinate, send that prompt to our image model, and return an illustration that reflects the inferred emotion of the moment.</li>
                    <li><strong>Display your post</strong> – The image, song info, and an unaltered 64 × 64 px album cover (shown with a static Spotify glyph) appear in your private friends feed; tapping the card opens the track in Spotify.</li>
                    <li><strong>Archive</strong> – Every post is stored in a personal archive you can <strong>export</strong> at any time.</li>
                    <li><strong>Diagnostics</strong> – Aggregated crash and performance logs help us improve stability.</li>
                </ol>
                <p>No raw personal information leaves our servers; the outbound prompt contains only plain-text song and location.</p>

                <hr />

                <h3>4 · Legal Basis (GDPR)</h3>
                <ul>
                    <li><strong>Consent</strong> – for Spotify connection, precise/background location, and avatar upload.</li>
                    <li><strong>Contract</strong> – for processing account credentials and diagnostics necessary to operate the Service you request.</li>
                </ul>

                <hr />

                <h3>5 · Data Retention</h3>
                <ul>
                    <li>Spotify tracks, locations, avatar, and posts remain until you tap <strong>Delete My Data</strong> (Profile → Settings) or disconnect Spotify.</li>
                    <li>Disconnecting Spotify deletes all Spotify-sourced data immediately.</li>
                    <li>Diagnostics logs are stored for up to twelve (12) months.</li>
                    <li>Legal and financial records are kept only as long as U.S. law requires.</li>
                </ul>

                <hr />

                <h3>6 · Your Rights</h3>
                <p>You can access, correct, export, or delete your personal data:</p>
                <ul>
                    <li><strong>In-app:</strong>
                        <ul>
                            <li><strong>Disconnect Spotify</strong> – revokes access and erases all Spotify data.</li>
                            <li><strong>Delete My Data</strong> – permanently removes your account and entire archive.</li>
                        </ul>
                    </li>
                    <li><strong>By email or phone:</strong> contact <a href="mailto:admin@trydopa.com">admin@trydopa.com</a> or +1 650-686-8634 and include “Privacy Request” in the subject or message.</li>
                </ul>
                <p>Individual posts cannot be deleted one by one.</p>

                <hr />

                <h3>7 · Security</h3>
                <ul>
                    <li>All network traffic is encrypted with HTTPS/TLS.</li>
                    <li>Data is stored on encrypted servers in the United States and protected by Supabase <strong>Row-Level Security (RLS)</strong> so only you can query your records.</li>
                    <li>Authentication tokens are stored in the encrypted keychain on your device.</li>
                </ul>
                <p>While no system is perfectly secure, we follow industry best practices to minimize risk.</p>

                <hr />

                <h3>8 · Children</h3>
                <p>The Service is not directed to children under 13, and we do not knowingly collect personal information from them. Parents or guardians who believe we have collected such data may contact us for immediate deletion.</p>

                <hr />

                <h3>9 · International Transfers</h3>
                <p>All personal information is stored and processed <strong>only in the United States</strong>. By using the Service, you consent to this transfer. For users in the European Economic Area or the United Kingdom, the transfer is necessary to perform the contract you enter into with us, and we rely on Standard Contractual Clauses with our U.S. service providers to safeguard your data.</p>

                <hr />

                <h3>10 · Changes to This Policy</h3>
                <p>We may update this Privacy Policy from time to time. We will post any changes here and update the “Last updated” date. For material changes, we will notify you by email or in-app notice at least seven (7) days before they take effect.</p>

                <hr />

                <p>Questions about this policy? Email <a href="mailto:admin@trydopa.com">admin@trydopa.com</a> or call <strong>+1 650-686-8634</strong>.</p>
            </div>
        </div>
    );
} 