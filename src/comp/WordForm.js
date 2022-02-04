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
    let url = `https://whispering-woodland-98306.herokuapp.com/${WordEle.current.value}/`;
    if (PartSpeechEle.current.value != 0) {
      url += PartSpeechEle.current.value;
    }
    try {
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
    } catch (error) {
      alert(error.response.message);
    }
  };

  return (
    <Container className="search-form">
      <Form>
        <Form.Label className="form-header">Search Word</Form.Label>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Enter word"
            ref={WordEle}
            style={{ marginBottom: '15px' }}
          />
          <Form.Select ref={PartSpeechEle}>
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
        <Button variant="info" className="form-btn" onClick={clickHandle}>
          Find
        </Button>
      </Form>
    </Container>
  );
}
