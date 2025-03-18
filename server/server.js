import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import dotenv from "dotenv";
import querystring from "querystring";

dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());

const NOW_PLAYING_ENDPOINT = "https://api.spotify.com/v1/me/player/currently-playing";
const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

// Function to get a new access token
const getAccessToken = async () => {
    const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");

    const response = await fetch(TOKEN_ENDPOINT, {
        method: "POST",
        headers: {
            Authorization: `Basic ${basic}`,
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: querystring.stringify({
            grant_type: "refresh_token",
            refresh_token,
        }),
    });

    const data = await response.json();
    return data.access_token;
};

// Route to fetch now playing song
app.get("/now-playing", async (req, res) => {
    try {
        const access_token = await getAccessToken();

        const response = await fetch(NOW_PLAYING_ENDPOINT, {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        });

        if (response.status === 204 || response.status > 400) {
            return res.json({ error: "No song is currently playing" });
        }

        const song = await response.json();
        const nowPlaying = {
            albumImageUrl: song.item.album.images[0].url,
            artist: song.item.artists.map((artist) => artist.name).join(", "),
            albumName: song.item.album.name || "Unknown Album",
            isPlaying: song.is_playing,
            songUrl: song.item.external_urls.spotify,
            title: song.item.name,
        };

        res.json(nowPlaying);
    } catch (error) {
        console.error("Error fetching now playing song:", error);
        res.status(500).json({ error: "Failed to fetch song" });
    }
});

// Start the Express server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});