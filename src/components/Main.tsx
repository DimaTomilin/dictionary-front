import React, { FC } from 'react';
import WordForm from './WordForm';
import RandomWordForm from './RandomWordForm';

const Main: FC = () => {
  return (
    <div className='main'>
      <WordForm />
      <RandomWordForm />
    </div>
  );
};

export default Main;
