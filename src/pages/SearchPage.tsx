import React, { useContext } from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import AlertMessage from '../components/ui/AlertMessage';
import { ThemeContext } from '../context/ThemeContext';
import { UAParser } from 'ua-parser-js';

const TodoList: React.FC = () => {
  const parser = new UAParser(navigator.userAgent);
  const { type } = parser.getDevice();

  const theme = useContext(ThemeContext);

  return (
    <div className={`App ${theme?.darkMode ? 'darkmode' : 'lightmode'}`}>
      <Header />
      <hr />
      {type === 'mobile' ? <></> : <AlertMessage />}
      <Main />
      <Footer />
    </div>
  );
};

export default TodoList;
