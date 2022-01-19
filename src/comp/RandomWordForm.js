import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';

export default function RandomWordForm() {
  return (
    <Container style={{ margin: '0 auto 70px', width: '80%' }}>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Part of speech</Form.Label>
          <Form.Select aria-label="Default select example">
            <option>Pick one of part of speech</option>
            <option value="nouns">Nouns</option>
            <option value="pronouns">Pronouns</option>
            <option value="adjectives">Adjectives</option>
            <option value="verbs">Verbs</option>
            <option value="adverbs">Adverbs</option>
            <option value="prepositions">Prepositions</option>
            <option value="conjunctions">Conjunctions</option>
            <option value="articles">Articles</option>
          </Form.Select>
          <Form.Label>First letter</Form.Label>
          <Form.Control type="text" placeholder="First letter(Optional)" />
        </Form.Group>
        <Button variant="primary" className="form-btn">
          Find
        </Button>
      </Form>
    </Container>
  );
}
