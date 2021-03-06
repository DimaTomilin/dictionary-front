import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchPage from './pages/SearchPage';
import WordPage from './pages/WordPage';
import { ThemeProvider } from './context/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path=":word" element={<WordPage />} />
          <Route path=":word/:partOfSpeech" element={<WordPage />} />
          <Route
            path={'/part-of-speech/:partOfSpeech'}
            element={<WordPage />}
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
