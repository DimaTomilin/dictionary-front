import React from 'react';
import DarkMode from './ui/DarkMode';

const Header: React.FC = () => {
  return (
    <div className='header'>
      <div className='up-part'>
        <button>History</button>
        <DarkMode />
      </div>
      <h1>Vocabulary</h1>
    </div>
  );
};

export default Header;
