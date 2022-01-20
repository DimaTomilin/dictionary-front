import axios from 'axios';
import React, { useRef } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { alert } from '../helpers/alerts';

export default function WordForm() {
  const WordEle = useRef();
  const PartSpeechEle = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const clickHandle = async () => {
    let url = `http://localhost:3000/${WordEle.current.value}/`;
    if (PartSpeechEle.current.value != 0) {
      url += PartSpeechEle.current.value;
    }
    const { data } = await axios.get(url);
    if (data.length === 0) {
      alert('Sorry but we don`t find this word');
      WordEle.current.value = '';
      return;
    }
    dispatch({
      type: 'SET_NEW_WORD',
      payload: data,
    });
    if (PartSpeechEle.current.value != 0) {
      navigate(`/${data[0].Word}/${PartSpeechEle.current.value}`);
      return;
    }
    navigate(`/${data[0].Word}`);
  };
  return (
    <Container style={{ margin: '0 auto 70px', width: '80%' }}>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Word</Form.Label>
          <Form.Control type="text" placeholder="Enter word" ref={WordEle} />
          <Form.Label>Part of speech</Form.Label>
          <Form.Select aria-label="Default select example" ref={PartSpeechEle}>
            <option value={0}>Part of speech(Optional)</option>
            <option value="Noun">Noun</option>
            <option value="Pronoun">Pronoun</option>
            <option value="Adjective">Adjective</option>
            <option value="Verb">Verb</option>
            <option value="Adverb">Adverb</option>
            <option value="Preposition">Preposition</option>
            <option value="Conjunction">Conjunction</option>
            <option value="Article">Article</option>
          </Form.Select>
        </Form.Group>
        <Button variant="primary" className="form-btn" onClick={clickHandle}>
          Find
        </Button>
      </Form>
    </Container>
  );
}
