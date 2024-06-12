// src/Card.js
import React from 'react';
import './Cards.css';

const Card = ({ title, description, image }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
       
      </div>
    </div>
  );
};

export default Card;
/* <p className="card-description">{description}</p> */