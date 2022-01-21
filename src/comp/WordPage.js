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
  const state = useSelector((state) => state);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const clickHandle = () => {
    navigate('/');
  };

  const findWord = async (e) => {
    if (e.ctrlKey === true) {
      const word = takeWord();
      let url = `http://localhost:3000/${word}/`;
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
    }
  };

  return (
    <div className="App">
      <Header />
      <hr />
      <h2>{state[0].Word}</h2>
      {state.map((word) => {
        return (
          <div key={word.Definition.slice(0, 5)}>
            <p>{word.Part_of_speech}</p>
            <p onClick={testclick}>{word.Definition}</p>
          </div>
        );
      })}
      <Button variant="primary" className="form-btn" onClick={findWord}>
        To main page
      </Button>
      <hr />
      <Footer />
    </div>
  );
}
