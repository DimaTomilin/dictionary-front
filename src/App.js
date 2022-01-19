import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchPage from './comp/SearchPage';
import WordPage from './comp/WordPage';
import { useSelector } from 'react-redux';

export default function App() {
  const { word } = useSelector((state) => {
    return state[0];
  });

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path={`/${word}`} element={<WordPage />} />
      </Routes>
    </Router>
  );
}
