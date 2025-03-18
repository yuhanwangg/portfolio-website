import React from 'react';
import Languages from './Languages';
import './LanguageList.css'

import cplusplus from '../assets/languages/c++.png';
import reactLogo from '../assets/languages/React-icon.svg';
import pythonLogo from '../assets/languages/python.webp';
import rLogo from '../assets/languages/R_logo.svg.png';
import stataLogo from '../assets/languages/stata.png';

function LanguagesList() {
    const languageImages = [
        { url: cplusplus, name: 'C++' },
        { url: reactLogo, name: 'React' },
        { url: pythonLogo, name: 'Python' },
        { url: rLogo, name: 'R' },
        { url: stataLogo, name: 'Stata' }
    ];

    return (
        <div className="languages">
            {languageImages.map((image, index) => (
                <Languages key={index} ImageURL={image.url} ImageName={image.name} />
            ))}
        </div>
    );
}

export default LanguagesList;