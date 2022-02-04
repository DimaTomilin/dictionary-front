import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchPage from './comp/SearchPage';
import WordPage from './comp/WordPage';
import { ThemeProvider } from './ThemeContext';

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
