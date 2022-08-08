import Footer from 'components/Footer';
import Header from 'components/Header';
import HistoryElement from 'components/HistoryELement';
import { ThemeContext } from 'context/ThemeContext';
import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const HistoryPage: React.FC = () => {
  const theme = useContext(ThemeContext);
  const navigate = useNavigate();

  let words: any[] = [];
  if (localStorage.getItem('words') !== null) {
    words = JSON.parse(localStorage.getItem('words') as string);
  }

  const clickHandle = () => {
    navigate('/');
  };

  return (
    <div className={`App ${theme?.darkMode ? 'darkmode' : 'lightmode'}`}>
      <Header />
      <hr />
      <div className='history-page'>
        {words.map((word, index) => {
          return <HistoryElement word={word.word} date={word.date} key={index} />;
        })}
        <Button variant='info' className='form-btn' onClick={clickHandle}>
          To main page
        </Button>
      </div>
      <Footer />
    </div>
  );
};

export default HistoryPage;
