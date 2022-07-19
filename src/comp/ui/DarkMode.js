import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import '../../styles/darkMode.scss';

export default function DarkMode() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const onChange = () => {
    if (darkMode) {
      theme.dispatch({ type: 'LIGHTMODE' });
    } else {
      theme.dispatch({ type: 'DARKMODE' });
    }
  };

  return (
    <div className="toggle-theme-wrapper">
      <span>☀️</span>
      <label className="toggle-theme" htmlFor="checkbox">
        <input
          type="checkbox"
          id="checkbox"
          onChange={onChange}
          defaultChecked={darkMode}
        />
        <div className="slider round" />
      </label>
      <span>🌒</span>
    </div>
  );
}
