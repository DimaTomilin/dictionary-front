import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchPage from './pages/SearchPage';
import WordPage from './pages/WordPage/WordPage';
import HistoryPage from './pages/HistoryPage/HistoryPage';
import { ThemeContextProvider } from './context/ThemeContext';

export default function App() {
  return (
    <ThemeContextProvider>
      <Router>
        <Routes>
          <Route path='/' element={<SearchPage />} />
          <Route path='/dictionary/:word' element={<WordPage />} />
          <Route path='/dictionary/:word/:partOfSpeech' element={<WordPage />} />
          <Route path='/dictionary/part-of-speech/:partOfSpeech' element={<WordPage />} />
          <Route path='/history' element={<HistoryPage />} />
        </Routes>
      </Router>
    </ThemeContextProvider>
  );
}
