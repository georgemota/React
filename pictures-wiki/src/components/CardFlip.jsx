import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import '../styles/CardFlip.css';

const CardFlip = ({ image, title, description, date }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      {/* Parte delantera */}
      <div className="card-front" onClick={handleFlip}>
        <img src={image} alt={title} className="card-image" />
      </div>

      {/* Parte trasera */}
      <div className="card-back" onClick={handleFlip}>
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <p className="card-date">{date}</p>
      </div>
    </ReactCardFlip>
  );
};

export default CardFlip;
