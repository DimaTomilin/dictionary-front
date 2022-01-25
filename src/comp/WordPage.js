/* eslint-disable */
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { takeWord } from '../helpers/wordTaken';
import { alert } from '../helpers/alerts';

export default function WordPage() {
  const { words, mode } = useSelector((state) => state);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const wordToHeader =
    words[0].Word.charAt(0).toUpperCase() + words[0].Word.slice(1);

  const clickHandle = () => {
    navigate('/');
  };

  const findWord = async (e) => {
    if (e.ctrlKey === true) {
      const word = takeWord();
      let url = `https://whispering-woodland-98306.herokuapp.com/${word}/`;
      try {
        const { data } = await axios.get(url);
        if (data.length === 0) {
          alert('Sorry but we don`t find this word');
          return;
        }
        dispatch({
          type: 'SET_NEW_WORD',
          payload: data,
        });
        navigate(`/${data[0].Word}`);
      } catch (error) {
        alert(error.response.message);
      }
    }
  };

  return (
    <div style={mode}>
      <Header />
      <hr />
      <div className="word-page">
        <h2>{wordToHeader}</h2>
        {words.map((word) => {
          return (
            <div key={word.Definition.slice(0, 5)}>
              <p className="part-of-speech">{word.Part_of_speech}</p>
              <p className="definition" onClick={findWord}>
                {word.Definition}
              </p>
            </div>
          );
        })}
        <Button variant="info" className="form-btn" onClick={clickHandle}>
          To main page
        </Button>
      </div>
      <hr />
      <Footer />
    </div>
  );
}
