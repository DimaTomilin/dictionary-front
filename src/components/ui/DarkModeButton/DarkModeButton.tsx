import React, { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';
import './darkModeButton.scss';

export default function DarkMode() {
  const theme = useContext(ThemeContext);

  return (
    <div className='toggle-theme-wrapper'>
      <span>☀️</span>
      <label className='toggle-theme' htmlFor='checkbox'>
        <input type='checkbox' id='checkbox' onChange={theme?.changeMode} defaultChecked={theme?.darkMode as boolean} />
        <div className='slider round' />
      </label>
      <span>🌒</span>
    </div>
  );
}
