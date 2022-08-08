import React from 'react';
import DarkMode from './ui/DarkMode';
import SideNavbar from './ui/HeaderNavbar';

const Header: React.FC = () => {
  return (
    <div className='header'>
      <div className='up-part'>
        <SideNavbar />
        <DarkMode />
      </div>
      <h1>Vocabulary</h1>
    </div>
  );
};

export default Header;
