import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { useSelector } from 'react-redux';

export default function WordPage() {
  const state = useSelector((state) => state);

  return (
    <div className="App">
      <Header />
      <hr />
      <h2>{state[0].word}</h2>
      {state.map((word) => {
        return (
          <div key={word.definition.slice(0, 5)}>
            <p>{word.partOfSpeech}</p>
            <p>{word.definition}</p>
          </div>
        );
      })}
      <hr />
      <Footer />
    </div>
  );
}
