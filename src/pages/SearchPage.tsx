import React, { useContext } from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import AlertMessage from '../components/ui/AlertMessage';
import { ThemeContext } from '../context/ThemeContext';

const TodoList: React.FC = () => {
  const theme = useContext(ThemeContext);
  return (
    <div className={`App ${theme?.darkMode ? 'darkmode' : 'lightmode'}`}>
      <Header />
      <hr />
      <AlertMessage />
      <Main />
      <hr />
      <Footer />
    </div>
  );
};

export default TodoList;
