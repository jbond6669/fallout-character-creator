import React, { createContext, useState } from 'react';

// Create a Context for the characters
export const CharacterContext = createContext();


export const CharacterProvider = ({ children }) => {
  const [characters, setCharacters] = useState([
    // Adding characters for testing purposes
    {
      name: 'James Bond',
      age: 30,
      gender: 'Male',
      strength: 5,
      perception: 6,
      endurance: 7,
      charisma: 8,
      intelligence: 6,
      agility: 5,
      luck: 4,
    },
    {
      name: 'Linda Belcher',
      age: 28,
      gender: 'Female',
      strength: 7,
      perception: 5,
      endurance: 6,
      charisma: 7,
      intelligence: 8,
      agility: 7,
      luck: 6,
    },
  ]);

  const addCharacter = (character) => {
    setCharacters((prevCharacters) => [...prevCharacters, character]);
  };

  const updateCharacter = (index, updatedCharacter) => {
    const newCharacters = [...characters];
    newCharacters[index] = updatedCharacter;
    setCharacters(newCharacters);
  };

  return (
    <CharacterContext.Provider value={{ characters, addCharacter, updateCharacter }}>
      {children}
    </CharacterContext.Provider>
  );
};
