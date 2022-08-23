import React from 'react';
import DarkMode from '../DarkModeButton/DarkModeButton';
import SideNavbar from '../HeaderNavbar/HeaderNavbar';
import './header.scss';

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
