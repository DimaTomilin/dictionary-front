import React from 'react';
import WordForm from './WordForm';
import RandomWordForm from './RandomWordForm';

export default function Main() {
  return (
    <div className="main">
      <WordForm />
      <RandomWordForm />
      Main Text
    </div>
  );
}
