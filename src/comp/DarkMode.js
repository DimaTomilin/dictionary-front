import React from 'react';
import '../styles/darkMode.scss';
import { useDispatch, useSelector } from 'react-redux';

export default function DarkMode() {
  const dispatch = useDispatch();
  const { mode } = useSelector((state) => state);

  const toggleTheme = () => {
    console.log('here');
    console.log(mode);
    if (mode.color === 'black') {
      console.log('here2');
      dispatch({
        type: 'SET_DARK_MODE',
      });
    } else {
      dispatch({
        type: 'SET_LIGHT_MODE',
      });
    }
  };

  const defaultDark = mode.color === 'white' ? true : false;
  return (
    <div className="toggle-theme-wrapper">
      <span>☀️</span>
      <label className="toggle-theme" htmlFor="checkbox">
        <input
          type="checkbox"
          id="checkbox"
          onChange={toggleTheme}
          defaultChecked={defaultDark}
        />
        <div className="slider round" />
      </label>
      <span>🌒</span>
    </div>
  );
}
