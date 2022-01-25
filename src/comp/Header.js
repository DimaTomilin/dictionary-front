import React from 'react';
import DarkMode from './DarkMode';

export default function Header() {
  return (
    <div className="header">
      <div className="up-part">
        <DarkMode />
      </div>
      <h1>Vocabulary</h1>
    </div>
  );
}
