import React, { useContext } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import AlertMessage from './AlertMessage';
import { ThemeContext } from '../ThemeContext';

export default function SearchPage() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className={`App ${darkMode ? 'darkmode' : 'lightmode'}`}>
      <Header />
      <hr />
      <AlertMessage />
      <Main />
      <hr />
      <Footer />
    </div>
  );
}
