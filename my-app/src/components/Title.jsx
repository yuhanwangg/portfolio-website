import React from 'react';
import './Title.css';

function Title({ text }) {
    const vowels = ['e', 'i', 'o', 'u'];

    const getFontClass = (char) => {
        if (vowels.includes(char.toLowerCase())) {
            return 'dm-serif';
        } else if (/[a-zA-Z]/.test(char)) {
            return 'archivo-narrow';
        }
        return '';
    };

    return (
        <h1 className="title">
            {text.split('').map((char, index) => (
                <span key={index} className={getFontClass(char)}>
                    {char}
                </span>
            ))}
        </h1>
    );
}

export default Title;