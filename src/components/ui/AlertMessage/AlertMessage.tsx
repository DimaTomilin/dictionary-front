/* eslint-disable */
import React, { useState, FC } from 'react';
import './alertMessage.scss';

const AlertMessage: FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  const closeWarning = () => {
    setIsOpen(false);
  };

  if (isOpen) {
    return (
      <div id='alert1' className='alert warning'>
        <span className='closebtn' onClick={closeWarning}>
          &times;
        </span>
        <div>
          If you want to find word
          <br /> you can made Ctrl+click on it
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default AlertMessage;
