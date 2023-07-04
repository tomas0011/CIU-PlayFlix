import { Fragment, useEffect, useState } from 'react';
import {
  Modal,
  Button,
  FloatingLabel,
  Form
} from 'react-bootstrap';
import { StarRating } from '../StarRating/StarRating';
import { ActionAlert } from './ActionAlert/ActionAlert';

import './ItemModal.css';

export const ItemModal = ({
  show,
  handleClose,
  activeElement,
  setActiveElement,
  updateElement,
  deleteElementDetail
}) => {
  const [showAlert, setShowAlert] = useState(false);

  const handleCloseModal = () => {
    handleClose();
    setShowAlert(false);
  }

  const handleDeleteElement = () => {
    setShowAlert(false);
    deleteElementDetail();
  }

  const handlerOnChange = (e) => {
    console.log(e.target)
    setActiveElement({
      ...activeElement,
      [e.target.name]: e.target.value
    })
  }

  const changeState = (value) => {
    setActiveElement({
      ...activeElement,
      status: value
    })
  }

  return (
    <Modal show={show} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>{activeElement.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='ItemModal'>
          <img className="ItemModalImage" src={activeElement.image} alt={activeElement.title} />
          <div className='ItemModalData'>
            <FloatingLabel controlId="floatingSelect" label="Status">
              <Form.Select
                onChange={(e) => changeState(e.target.selectedOptions[0].value)}
                value={activeElement.status}
                aria-label="Floating label select example"
              >
                <option name="status" value="pending">Pending</option>
                <option name="status" value="onCourse">On course</option>
                <option name="status" value="watched">Watched</option>
              </Form.Select>
            </FloatingLabel>
            <StarRating handlerOnChange={handlerOnChange} activeValue={activeElement.stars}/>
          </div>
        </div>
          <FloatingLabel controlId="floatingTextarea2" label="Leave a your notes here">
            <Form.Control
              as="textarea"
              name='description'
              value={activeElement.description}
              onChange={handlerOnChange}
              style={{ height: '100px' }}
            />
          </FloatingLabel>
      </Modal.Body>
      <Modal.Footer className='ItemModalButtons'>
        <Button variant="danger" onClick={() => {setShowAlert(!showAlert)}}>
          Delete
        </Button>
        <Button variant="success" onClick={() => updateElement(activeElement.id, activeElement)}>
          Save Changes
        </Button>
      </Modal.Footer>
      <ActionAlert
        show={showAlert}
        setShow={setShowAlert}
        title='Warning'
        message={`If you drop "${activeElement.title}" you will lose your changes.`}
        action={handleDeleteElement}
      />
    </Modal>
  );
}
