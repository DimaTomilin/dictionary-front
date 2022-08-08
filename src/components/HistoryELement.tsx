import React from 'react';
import { useNavigate } from 'react-router-dom';

interface HistoryElementProps {
  word: string;
  date: string;
}

const HistoryElement: React.FC<HistoryElementProps> = ({ word, date }) => {
  const navigate = useNavigate();

  const clickHandle = () => {
    navigate(`/dictionary/${word}`);
  };
  return (
    <div className='history-element'>
      <h5 onClick={clickHandle}>{word}</h5>
      <p>{date}</p>
    </div>
  );
};

export default HistoryElement;
