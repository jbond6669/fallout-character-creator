import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import InfoCard from './InfoCard';
import './CardPage.css';

const CardPage = () => {
  return (
    <div className="card-page">
      <div className="home-button-container">
        <Button variant="contained" color="primary" component={Link} to="/" style={{ backgroundColor: 'gold', color: 'black', margin: '20px' }}>
          Home
        </Button>
      </div>
      <div className="card-container">
        <InfoCard
          frontContent={{ title: 'Overseer', text: 'This job is the leader of assigned Vault.' }}
          backContent={{ title: 'Requirements', text: 'Intelligence must be 8 or higher and Charisma must be 6 or higher.' }}
        />
        <InfoCard
          frontContent={{ title: 'Scientist', text: 'Scientists perform research and ensures the advancement of humanity!' }}
          backContent={{ title: 'Requirements', text: '8 or higher Intelligence and willingness to do what is necessary.' }}
        />
        <InfoCard
          frontContent={{ title: 'Security', text: 'Willingness to whatever is needed to keep the peace.' }}
          backContent={{ title: 'Requirements', text: '5 or higher Strength. High Charisma is preferred but not required!' }}
        />
        <InfoCard
          frontContent={{ title: 'Lab Assistant', text: 'Helps the scientist with new ways of advancing humanity.' }}
          backContent={{ title: 'Requirements', text: 'Must have an "open mind" and be cooperative.' }}
        />
      </div>
    </div>
  );
};

export default CardPage;
