import React, { useRef } from 'react';
import axios from 'axios';
import { Button, Container, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { alert } from '../helpers/alerts';

export default function RandomWordForm() {
  const LetterEle = useRef();
  const PartSpeechEle = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const clickHandle = async () => {
    let url = `https://whispering-woodland-98306.herokuapp.com/part-of-speech/${PartSpeechEle.current.value.toLowerCase()}`;
    if (PartSpeechEle.current.value === 0) {
      alert('Sorry but you did`t choose part of speech');
    }
    if (LetterEle.current.value) {
      if (LetterEle.current.value.trim().length === 1) {
        url += `?letter=${LetterEle.current.value.trim().toLowerCase()}`;
      } else {
        alert('You need insert only first letter of word');
        return;
      }
    }
    try {
      const { data } = await axios.get(url);
      if (data.length === 0) {
        alert('Sorry but we don`t find the word,please try again');
        return;
      }
      dispatch({
        type: 'SET_NEW_WORD',
        payload: [data],
      });
      if (LetterEle.current.value.trim().length === 1) {
        navigate(
          `/part-of-speech/${data.Part_of_speech.toLowerCase()}?letter=${LetterEle.current.value
            .trim()
            .toLowerCase()}`
        );
        return;
      }
      navigate(`/part-of-speech/${data.Part_of_speech.toLowerCase()}`);
    } catch (error) {
      alert(error.response.message);
    }
  };

  return (
    <Container className="search-form">
      <Form>
        <Form.Label className="form-header">
          Find random word by part of speech
        </Form.Label>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Select ref={PartSpeechEle} style={{ marginBottom: '15px' }}>
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
          <Form.Control
            type="text"
            placeholder="First letter(Optional)"
            ref={LetterEle}
          />
        </Form.Group>
        <Button variant="info" className="form-btn" onClick={clickHandle}>
          Find
        </Button>
      </Form>
    </Container>
  );
}
