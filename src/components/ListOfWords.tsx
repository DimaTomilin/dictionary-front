import { firstLetterUpperCase } from '../helpers/firstLetterUpperCase';
import { takeWord } from '../helpers/wordTaken';
import { useTypedSelector } from '../hooks/useTypedSelector';
import * as React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { alert } from '../helpers/alerts';
import LoadingSpinner from './ui/LoadingSpinner';

const ListOfWords: React.FC = () => {
  const { loading, words, error } = useTypedSelector((state) => state.words);
  const navigate = useNavigate();

  const clickHandle = () => {
    navigate('/');
  };

  const findWord = async (e) => {
    if (e.ctrlKey === true) {
      const word = takeWord();
      navigate(`/dictionary/${word}`);
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    alert(error);
  }

  return (
    <div className='word-page'>
      {firstLetterUpperCase(words[0].Word) ? <h2>{firstLetterUpperCase(words[0].Word)}</h2> : <h2></h2>}
      {words.map((word, index) => {
        return (
          <div key={index}>
            <p className='part-of-speech'>{word.Part_of_speech}</p>
            <p className='definition' onClick={findWord}>
              {word.Definition}
            </p>
          </div>
        );
      })}
      <Button variant='info' className='form-btn' onClick={clickHandle}>
        To main page
      </Button>
    </div>
  );
};

export default ListOfWords;
