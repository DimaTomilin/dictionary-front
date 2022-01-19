import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function WordForm() {
  const newWord = {
    word: 'Mother',
    partOfSpeech: 'Noun',
    definition: 'Mum, the nearest person in your live',
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const clickHandle = () => {
    dispatch({
      type: 'SET_NEW_WORD',
      payload: newWord,
    });
    navigate(`/${newWord.word}`);
  };
  return (
    <Container style={{ margin: '0 auto 70px', width: '80%' }}>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Word</Form.Label>
          <Form.Control type="number" placeholder="Enter word" />
        </Form.Group>
        <Button variant="primary" className="form-btn" onClick={clickHandle}>
          Find
        </Button>
      </Form>
    </Container>
  );
}
