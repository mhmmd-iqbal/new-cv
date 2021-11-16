import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';

const ModalCard = ({ show, handleModal, data }) => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    if (data !== null) {
      console.log(data.name);
      setTitle(data.name);
      setDesc(data.description);
      setImage(data.image);
    }
  });

  return (
    <div>
      <Modal size='lg' centered backdrop='static' keyboard={false} show={show}>
        <Modal.Header
          onClick={() => {
            handleModal(!show);
          }}>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body id=''>
          <div class='modal-body'>
            <div class='gambar2'>
              <img alt='' src={image} />
            </div>
          </div>
          <div class='modal-body'>
            <p style={{ textAlign: 'justify' }} id='ketimage'>
              {desc}
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant='danger'
            onClick={() => {
              handleModal(!show);
            }}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalCard;
