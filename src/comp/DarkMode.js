import React from 'react';
import '../styles/darkMode.scss';

export default function DarkMode() {
  return (
    <div className="toggle-theme-wrapper">
      <span>☀️</span>
      <label className="toggle-theme" htmlFor="checkbox">
        <input type="checkbox" id="checkbox" />
        <div className="slider round" />
      </label>
      <span>🌒</span>
    </div>
  );
}
