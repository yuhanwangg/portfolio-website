import React from 'react';
import './Languages.css';

function Languages({ ImageURL, ImageName }) {
    if (!ImageURL) {
        console.error('Image URL is missing!');
        return null;
    }

    return (
        <div className="lang-logo">
            <img src={ImageURL} alt={ImageName}></img>
        </div>
    );
}

export default Languages;