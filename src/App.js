import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchPage from './comp/SearchPage';
import WordPage from './comp/WordPage';
import { useSelector } from 'react-redux';

export default function App() {
  const state = useSelector((state) => state);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path={`/${state[0].Word}`} element={<WordPage />} />
        {state.map((wordPartOfSpeech, index) => {
          return (
            <Route
              path={`/${wordPartOfSpeech.Word}/${wordPartOfSpeech.Part_of_speech}`}
              element={<WordPage />}
              key={index}
            />
          );
        })}
        <Route
          path={`/part-of-speech/${state[0].Part_of_speech}`}
          element={<WordPage />}
        />
      </Routes>
    </Router>
  );
}
