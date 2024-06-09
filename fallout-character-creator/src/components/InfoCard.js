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
        {frontContent}
      </div>
      <div className="card-face card-back">
        {backContent}
      </div>
    </div>
  );
};

export default InfoCard;
