/* eslint-disable */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { AiOutlineMenu } from 'react-icons/ai';
import './headerNavbar.scss';

const SideNavbar: React.FC = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button className='sidebar' variant='warning' onClick={handleShow} role='side-bar-button'>
        <AiOutlineMenu />
      </Button>

      <Offcanvas show={show} onHide={handleClose} className='sidebar-field'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Dictionary Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p
            className='navbar-option'
            onClick={() => {
              navigate('/');
            }}
          >
            Home
          </p>
          <p
            className='navbar-option'
            onClick={() => {
              navigate('/history');
            }}
          >
            History
          </p>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default SideNavbar;
