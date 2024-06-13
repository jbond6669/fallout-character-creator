import React, { useContext, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, TextField, Button, Typography } from '@mui/material';
import { CharacterContext } from '../CharacterContext';
import './Editor.css'; // Import the CSS file

function EditCharacter() {
  const { index } = useParams();
  const navigate = useNavigate();
  const { characters, updateCharacter } = useContext(CharacterContext);
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    if (characters.length > 0) {
      console.log('Character found:', characters[index]);
      setCharacter(characters[index]);
    } else {
      console.log('No characters found');
    }
  }, [characters, index]);

  if (!character) {
    return <div>Loading...</div>;
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCharacter({
      ...character,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateCharacter(index, character);
    navigate('/');
  };

  return (
    <Container className="peeps">
      <Typography variant="h4" component="h1" gutterBottom>
        Edit Character
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          name="name"
          value={character.name || ''}
          onChange={handleChange}
          fullWidth
          margin="normal"
          className="textfield-margin"
        />
        <TextField
          label="Age"
          name="age"
          value={character.age || ''}
          onChange={handleChange}
          fullWidth
          margin="normal"
          className="textfield-margin"
        />
        <TextField
          label="Gender"
          name="gender"
          value={character.gender || ''}
          onChange={handleChange}
          fullWidth
          margin="normal"
          className="textfield-margin"
        />
        <TextField
          label="Strength"
          name="strength"
          value={character.strength || ''}
          onChange={handleChange}
          fullWidth
          margin="normal"
          className="textfield-margin"
        />
        <TextField
          label="Perception"
          name="perception"
          value={character.perception || ''}
          onChange={handleChange}
          fullWidth
          margin="normal"
          className="textfield-margin"
        />
        <TextField
          label="Endurance"
          name="endurance"
          value={character.endurance || ''}
          onChange={handleChange}
          fullWidth
          margin="normal"
          className="textfield-margin"
        />
        <TextField
          label="Charisma"
          name="charisma"
          value={character.charisma || ''}
          onChange={handleChange}
          fullWidth
          margin="normal"
          className="textfield-margin"
        />
        <TextField
          label="Intelligence"
          name="intelligence"
          value={character.intelligence || ''}
          onChange={handleChange}
          fullWidth
          margin="normal"
          className="textfield-margin"
        />
        <TextField
          label="Agility"
          name="agility"
          value={character.agility || ''}
          onChange={handleChange}
          fullWidth
          margin="normal"
          className="textfield-margin"
        />
        <TextField
          label="Luck"
          name="luck"
          value={character.luck || ''}
          onChange={handleChange}
          fullWidth
          margin="normal"
          className="textfield-margin"
        />
        <Button 
          type="submit" 
          variant="contained" 
          color="primary" 
          className="button-margin"
        >
          Save
        </Button>
      </form>
    </Container>
  );
}

export default EditCharacter;
