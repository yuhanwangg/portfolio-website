import fetch from 'node-fetch';
import querystring from 'querystring';

const NOW_PLAYING_ENDPOINT = "https://api.spotify.com/v1/me/player/currently-playing";
const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

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

export default async function handler(req, res) {
    try {
        const access_token = await getAccessToken();

        const response = await fetch(NOW_PLAYING_ENDPOINT, {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        });

        // Log status and body for debugging
        console.log('Response status:', response.status);
        const responseText = await response.text();
        console.log('Response body:', responseText);

        if (response.status === 204 || response.status > 400) {
            return res.json({ error: "No song is currently playing" });
        }

        try {
            const song = JSON.parse(responseText); // Parse the response manually for debugging
            const nowPlaying = {
                albumImageUrl: song.item.album.images[0].url,
                artist: song.item.artists.map((artist) => artist.name).join(", "),
                albumName: song.item.album.name || "Unknown Album",
                isPlaying: song.is_playing,
                songUrl: song.item.external_urls.spotify,
                title: song.item.name,
            };

            // Enable CORS headers to allow the front-end to access the API from a different origin
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
            res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

            res.json(nowPlaying);
        } catch (err) {
            console.error('Error parsing JSON:', err);
            res.status(500).json({ error: "Failed to parse response" });
        }
    } catch (error) {
        console.error("Error fetching now playing song:", error);
        res.status(500).json({ error: "Failed to fetch song" });
    }
}
