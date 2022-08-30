/* eslint-disable */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from './ui/LoadingSpinner/LoadingSpinner';
import { firstLetterUpperCase } from '../helpers/firstLetterUpperCase';
import { takeWord } from '../helpers/wordTaken';
import { alert } from '../helpers/alerts';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { Button } from 'react-bootstrap';

const ListOfWords: React.FC = () => {
  const { loading, words, error } = useTypedSelector((state) => state.words);
  const navigate = useNavigate();

  const clickHandle = () => {
    navigate('/');
  };

  const findWord = async (e: React.MouseEvent<HTMLElement>) => {
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

  if (words.length === 0) {
    navigate('/');
    return <></>;
  }

  return (
    <div className='word-page'>
      {firstLetterUpperCase(words[0].word) ? <h2>{firstLetterUpperCase(words[0].word)}</h2> : <h2></h2>}
      {words.map((word) => {
        return (
          <div key={word.id}>
            <p className='part-of-speech'>{firstLetterUpperCase(word.part_of_speech)}</p>
            <p className='definition' onClick={findWord}>
              {word.definitions}
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
