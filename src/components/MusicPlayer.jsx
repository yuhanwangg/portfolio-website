import React, { useState, useEffect } from "react";
import albumArt from "../assets/brat.png";
import './MusicPlayer.css'

const BACKEND_URL = "http://localhost:5000"; // Match your Express server

const MusicPlayer = () => {
    const [nowPlaying, setNowPlaying] = useState(null);
    const [prevSong, setPrevSong] = useState(null); // Track previous song

    useEffect(() => {
        const fetchNowPlaying = async () => {
            try {
                const response = await fetch("/api/now-playing");
                const data = await response.json();

                if (data.error) {
                    return;
                }

                // Only update state if the song has changed
                if (!prevSong || prevSong.title !== data.title) {
                    setNowPlaying(data);
                    setPrevSong(data);
                }
            } catch (error) {
                console.error("Error fetching now playing song:", error);
            }
        };

        const interval = setInterval(fetchNowPlaying, 5000); // Refresh every 5s
        fetchNowPlaying();

        return () => clearInterval(interval);
    }, [prevSong]);

    return (
        <div className="component">
            <div className="musicPlayerCard">
                <div className="musicPlayerImage">
                    <img src={nowPlaying?.albumImageUrl || albumArt} className="albumImage" alt="Album" />
                </div>
            </div>
            <div className="musicPlayerDetails">
                <h3>{nowPlaying?.title || "No song playing"}</h3>
                <p><i>{nowPlaying?.albumName || "Unknown Album"}</i></p>
                <p>{nowPlaying?.artist || "Unknown Artist"}</p>
            </div>
        </div >
    );
};

export default MusicPlayer;