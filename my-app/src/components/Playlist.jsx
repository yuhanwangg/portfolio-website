import React from "react";

const Playlist = () => {
    return (
        <div className="playlistContainer">
            <iframe
                src={`https://open.spotify.com/embed/playlist/51MFtNzgBijFxLJBDAkW7e?si=055006796300456e`}
                width="90%"
                height="400px"
                frameBorder="0"
                allowtransparency="true"
                allow="encrypted-media"
                title="Spotify Playlist"
            ></iframe>
        </div>
    );
};

export default Playlist;