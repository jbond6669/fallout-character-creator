import React from 'react';
import InfoCard from './InfoCard';
import './CardPage.css';

const CardPage = () => {
  return (
    <div className="card-page">
      <div className="card-container">
        <InfoCard
          frontContent={
            <>
              <h2>Front Side 1</h2>
              <p>This is the front of card 1.</p>
            </>
          }
          backContent={
            <>
              <h2>Back Side 1</h2>
              <p>This is the back of card 1.</p>
            </>
          }
        />
        <InfoCard
          frontContent={
            <>
              <h2>Front Side 2</h2>
              <p>This is the front of card 2.</p>
            </>
          }
          backContent={
            <>
              <h2>Back Side 2</h2>
              <p>This is the back of card 2.</p>
            </>
          }
        />
        {/* Add more InfoCard components as needed */}
      </div>
    </div>
  );
};

export default CardPage;
