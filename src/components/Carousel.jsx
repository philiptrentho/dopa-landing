import React, { useState, useEffect } from 'react';
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
import djoArt from '../assets/djo.png';
import pinkArt from '../assets/pink.png';
import billyJoelArt from '../assets/billyjoel.png';
import katyPerryArt from '../assets/katyperry.png';
import dominicFikeArt from '../assets/dominicfike.png';
import mileyCyrusArt from '../assets/mileycyrus.png';
import drakeArt from '../assets/drake.png';
import szaArt from '../assets/sza.png';

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

// Combine all visual assets so we can preload them before the carousel begins animating
const allImageSources = [
    ...new Set([
        // Card images
        ...[c1, c2, c3, c4, c5, c6, c8, c9],
        // Song arts
        mgmtArt,
        djoArt,
        pinkArt,
        billyJoelArt,
        katyPerryArt,
        dominicFikeArt,
        mileyCyrusArt,
        drakeArt,
        szaArt,
    ]),
];

export default function Carousel() {
    const [assetsLoaded, setAssetsLoaded] = useState(false);

    // Pre-load all images once on mount so that the carousel starts smoothly.
    useEffect(() => {
        let loadedCount = 0;

        allImageSources.forEach((src) => {
            const img = new Image();
            img.src = src;

            const markLoaded = () => {
                loadedCount += 1;
                if (loadedCount === allImageSources.length) {
                    setAssetsLoaded(true);
                }
            };

            img.onload = markLoaded;
            img.onerror = markLoaded; // Still count failures to avoid stalling
        });
    }, []);

    const trackClass = assetsLoaded ? 'carousel-track animate' : 'carousel-track';

    return (
        <section className="carousel-wrapper">
            <header className="carousel-header">
                <h2>Your Friend Feed</h2>
                <p>Sunday, May 4th</p>
            </header>
            <div className="carousel-container">
                <div className={trackClass}>
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