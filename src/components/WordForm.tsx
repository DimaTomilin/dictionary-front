import React, { useRef } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const WordForm: React.FC = () => {
  const WordEle = useRef<HTMLInputElement>(null);
  const PartSpeechEle = useRef<HTMLSelectElement>(null);
  const navigate = useNavigate();

  const clickHandle = async () => {
    if (WordEle.current === null || PartSpeechEle.current === null) {
      return;
    }
    let url = `/dictionary/${WordEle.current.value}/`;
    if (PartSpeechEle.current.value !== '0') {
      url += PartSpeechEle.current.value.toLowerCase();
    }
    navigate(url);
  };

  return (
    <Container className='search-form'>
      <Form>
        <Form.Label className='form-header'>Search Word</Form.Label>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Control type='text' placeholder='Enter word' ref={WordEle} style={{ marginBottom: '15px' }} />
          <Form.Select ref={PartSpeechEle}>
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
        </Form.Group>
        <Button variant='info' className='form-btn' onClick={clickHandle}>
          Find
        </Button>
      </Form>
    </Container>
  );
};

export default WordForm;
