import React, { useContext } from 'react';
import Header from '../comp/Header';
import Main from '../comp/Main';
import Footer from '../comp/Footer';
import AlertMessage from '../comp/ui/AlertMessage';
import { ThemeContext } from '../context/ThemeContext';

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
