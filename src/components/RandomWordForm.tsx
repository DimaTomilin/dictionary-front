import React, { useRef } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { alert } from '../helpers/alerts';

const RandomWordForm: React.FC = () => {
  const LetterEle = useRef<HTMLInputElement>(null);
  const PartSpeechEle = useRef<HTMLSelectElement>(null);
  const navigate = useNavigate();

  const clickHandle = async () => {
    if (LetterEle.current === null || PartSpeechEle.current === null) {
      return;
    }
    if (PartSpeechEle.current.value === '0') {
      alert('Sorry but you did`t choose part of speech!');
    } else if (LetterEle.current.value.trim().length > 1) {
      alert('Sorry but you can choose only first letter!');
    } else if (LetterEle.current.value.trim().length === 1) {
      navigate(`/part-of-speech/${PartSpeechEle.current.value}?letter=${LetterEle.current.value.trim().toLowerCase()}`);
    } else {
      navigate(`/part-of-speech/${PartSpeechEle.current.value}`);
    }
  };

  return (
    <Container className='search-form'>
      <Form>
        <Form.Label className='form-header'>Find random word by part of speech</Form.Label>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Select ref={PartSpeechEle} style={{ marginBottom: '15px' }}>
            <option value={0}>Part of speech(Optional)</option>
            <option value='Noun'>Noun</option>
            <option value='Pronoun'>Pronoun</option>
            <option value='Adjective'>Adjective</option>
            <option value='Verb'>Verb</option>
            <option value='Adverb'>Adverb</option>
            <option value='Preposition'>Preposition</option>
            <option value='Conjunction'>Conjunction</option>
            <option value='Article'>Article</option>
          </Form.Select>
          <Form.Control type='text' placeholder='First letter(Optional)' ref={LetterEle} />
        </Form.Group>
        <Button variant='info' className='form-btn' onClick={clickHandle}>
          Find
        </Button>
      </Form>
    </Container>
  );
};

export default RandomWordForm;
