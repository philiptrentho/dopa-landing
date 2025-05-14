import React from 'react';
import './Carousel.css';
import c1 from '../assets/1.png';
import c2 from '../assets/2.png';
import c3 from '../assets/3.png';
import c4 from '../assets/4.png';
import c5 from '../assets/5.png';
import c6 from '../assets/6.png';
import c8 from '../assets/7.png';
import c9 from '../assets/8.png';

// Import new album art assets
import mgmtArt from '../assets/mgmt.png';
import djoArt from '../assets/Djo.png';
import pinkArt from '../assets/Pink.png'; // Assuming P!nk maps to Pink.png
import billyJoelArt from '../assets/BillyJoel.png';
import katyPerryArt from '../assets/KatyPerry.png';
import dominicFikeArt from '../assets/DominicFike.png';
import mileyCyrusArt from '../assets/MileyCyrus.png';
import drakeArt from '../assets/Drake.png';
import szaArt from '../assets/SZA.png';

import Song from './Song';

const items = [c1, c2, c3, c4, c5, c6, c8, c9, c1, c2, c3, c4, c5, c6, c8, c9]; // Ensure enough items for new songs

// Labels for each card (username + subtitle)
const labels = [
    { username: 'Zack is focused', sub: 'cooking at lighthouse' },
    { username: 'Celeste is relaxed', sub: 'tanning at the beach' },
    { username: 'Sam is scared', sub: 'camping at yosemite' },
    { username: 'Latisha is fired up', sub: 'playing tennis at courts' },
    { username: 'Carter is locked in', sub: 'jamming at studio' },
    { username: 'Trinity is happy', sub: "coffee at phil'z" },
    { username: 'Ray is nostalgic', sub: "climbing at the gym" },
    { username: 'Brandon is vibing', sub: 'shopping at SoHo' },
];

const songs = [
    { art: mgmtArt, title: 'Kids', artist: 'MGMT' },
    { art: djoArt, title: 'End Beginning', artist: 'Djo' },
    { art: pinkArt, title: 'Try', artist: 'P!nk' },
    { art: billyJoelArt, title: 'Vienna', artist: 'Billy Joel' },
    { art: katyPerryArt, title: 'Roar', artist: 'Katy Perry' },
    { art: dominicFikeArt, title: 'misses', artist: 'Dominic Fike' },
    { art: mileyCyrusArt, title: 'Flowers', artist: 'Miley Cyrus' },
    { art: drakeArt, title: 'TSU', artist: 'Drake' },
    { art: szaArt, title: 'Prom', artist: 'SZA' },
];

export default function Carousel() {
    return (
        <section className="carousel-wrapper">
            <header className="carousel-header">
                <h2>Your Friend Feed</h2>
                <p>Sunday, May 4th</p>
            </header>
            <div className="carousel-container">
                <div className="carousel-track">
                    {items.concat(items).map((src, index) => {
                        const song = songs[index % songs.length];
                        const label = labels[index % labels.length];
                        return (
                            <div className="carousel-item" key={index}>
                                <div className="card">
                                    <div className="card-header">
                                        <span className="username">{label.username}</span>
                                        <span className="sub">{label.sub}</span>
                                    </div>
                                    <img src={src} className="card-img" alt="placeholder" />
                                    <Song
                                        className="song-overlay"
                                        art={song.art}
                                        title={song.title}
                                        artist={song.artist}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
} 