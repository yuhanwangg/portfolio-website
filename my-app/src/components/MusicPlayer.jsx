import React from 'react';
import './MusicPlayer.css';
import albumArt from '../assets/brat.png';

function MusicPlayer() {
    return (
        <div className="music-play">
            <div className="player-box">
                <div className="player-disc">
                    <img src={albumArt} alt="album cover" className="album-cover"></img>
                </div>
            </div>
            <div className="text">
                <p>"Song title"</p>
                <p>Album</p>
                <p>Artist</p>
            </div>
        </div>
    );
}

export default MusicPlayer