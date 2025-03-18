import React, { useState, useEffect } from "react";
import albumArt from "../assets/brat.png";
import './MusicPlayer.css'


const BACKEND_URL = process.env.NODE_ENV === "production"
    ? "https://yuhan-portfolio/api/now-playing"
    : "http://localhost:5000/api/now-playing";

const MusicPlayer = () => {
    const [nowPlaying, setNowPlaying] = useState(null);
    const [prevSong, setPrevSong] = useState(null);

    useEffect(() => {
        const fetchNowPlaying = async () => {
            try {
                const response = await fetch(BACKEND_URL);
                const data = await response.json();

                if (data.error) {
                    return;
                }


                if (!prevSong || prevSong.title !== data.title) {
                    setNowPlaying(data);
                    setPrevSong(data);
                }
            } catch (error) {
                console.error("Error fetching now playing song:", error);
            }
        };

        const interval = setInterval(fetchNowPlaying, 30000);
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