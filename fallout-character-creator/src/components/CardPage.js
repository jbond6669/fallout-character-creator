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
              <h2>Overseer</h2>
              <p> This job is the leader of assigned Vault.</p>
            </>
          }
          backContent={
            <>
              <h2>Requirements:</h2>
              <p>Intelligence must be 8 or higher and Charisma must be 6 or higher</p>
            </>
          }
        />
        <InfoCard
          frontContent={
            <>
              <h2>Job Title:</h2>
              <p>Scientist</p>
            </>
          }
          backContent={
            <>
              <h2>Requirements</h2>
              <p>8 or higher Intelligence and willingness to do what is neccessary.</p>
            </>
          }
        />
          <InfoCard
          frontContent={
            <>
              <h2>Job Title:</h2>
              <p>Security</p>
            </>
          }
          backContent={
            <>
              <h2>Requirements</h2>
              <p>5 or higher Strength.</p>
            </>
          }
        />
         <InfoCard
          frontContent={
            <>
              <h2>Job Title:</h2>
              <p>Lab Assistant</p>
            </>
          }
          backContent={
            <>
              <h2>Requirements</h2>
              <p>Willingness to do what it takes!</p>
            </>
          }
        />
      </div>
    </div>
  );
};

export default CardPage;
