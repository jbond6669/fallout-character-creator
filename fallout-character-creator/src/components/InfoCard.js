import React, { useState } from 'react';
import './InfoCard.css';

const InfoCard = ({ frontContent, backContent }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
      <div className="card-face card-front">
        <div className="card-content">
          <h2>{frontContent.title}</h2>
          <p>{frontContent.text}</p>
        </div>
      </div>
      <div className="card-face card-back">
        <div className="card-content">
          <h2>{backContent.title}</h2>
          <p>{backContent.text}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
