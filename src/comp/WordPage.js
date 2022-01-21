import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function WordPage() {
  const state = useSelector((state) => state);
  const navigate = useNavigate();

  const clickHandle = () => {
    navigate('/');
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
            <p>{word.Definition}</p>
          </div>
        );
      })}
      <Button variant="primary" className="form-btn" onClick={clickHandle}>
        To main page
      </Button>
      <hr />
      <Footer />
    </div>
  );
}
