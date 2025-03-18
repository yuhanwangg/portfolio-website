import React from 'react';
import './Card.css';

function Card({ title, description, image }) {
    return (
        <div className="card">
            <img src={image} alt={title} className="card-image" />
            <div className="card-content">
                <h3>{title}</h3>
                {description}
            </div>
        </div>
    );
}

export default Card