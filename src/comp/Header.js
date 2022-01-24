import React from 'react';
import DarkMode from './DarkMode';

export default function Header() {
  return (
    <div className="header">
      <h1>Vocabulary</h1>
      <div>
        <DarkMode />
      </div>
    </div>
  );
}
