import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from "../Form/Form"

export default function Example(props) {
    const {label,type,list}=props
  const [show, setShow] = useState(false);

  return (
    <>
      <Button  class="btn btn-outline-primary" onClick={() => setShow(true)}>
     { label}
      </Button>

      <Modal
      centered={true}
        show={show}
        onHide={() => setShow(false)}
        size="lg"
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Custom Modal Styling
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
       <Form setShow={setShow} list={list} type={type}/>
        </Modal.Body>
      </Modal>
     

    </>
  );
}

