import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';

export default function WordForm() {
  const clickHandle = () => {
    alert('1');
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
