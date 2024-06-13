import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import Home from './components/Home';
import CharacterCreator from './components/CharacterCreator';
import EditCharacter from './components/EditCharacter';
import CharacterList from './components/CharacterList';
import CardPage from './components/CardPage'; // Import the new CardPage component
import { CharacterProvider } from './CharacterContext';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CharacterProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<CharacterCreator />} />
            <Route path="/characters" element={<CharacterList />} />
            <Route path="/cards" element={<CardPage />} />
            <Route path="/edit/:index" element={<EditCharacter />} /> {/* Corrected this line */}
          </Routes>
        </Router>
      </CharacterProvider>
    </ThemeProvider>
  );
}

export default App;
