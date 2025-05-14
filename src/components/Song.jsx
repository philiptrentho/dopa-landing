import React from 'react';
import './Song.css';

export default function Song({ art, title, artist, className = '' }) {
    return (
        <div className={`song ${className}`}>
            <img src={art} alt="album art" className="song-art" />
            <span className="song-info">
                <span className="song-title">{title}</span>
                <span className="song-artist">{artist}</span>
            </span>
        </div>
    );
} 