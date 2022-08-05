import Footer from 'components/Footer';
import Header from 'components/Header';
import { ThemeContext } from 'context/ThemeContext';
import React, { useContext } from 'react';

const HistoryPage: React.FC = () => {
  const theme = useContext(ThemeContext);
  let words: any[] = [];
  if (localStorage.getItem('words') !== null) {
    words = JSON.parse(localStorage.getItem('words') as string);
  }
  return (
    <div className={`App ${theme?.darkMode ? 'darkmode' : 'lightmode'}`}>
      <Header />
      <hr />
      {words.map((word, index) => {
        return <div key={index}>{word.word + ' at ' + word.date}</div>;
      })}
      <Footer />
    </div>
  );
};

export default HistoryPage;
