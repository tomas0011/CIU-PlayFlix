import { Fragment, useState } from 'react';
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
              <Form.Select aria-label="Floating label select example">
                <option value="pending">Pending</option>
                <option value="onCourse">On course</option>
                <option value="watched">Watched</option>
              </Form.Select>
            </FloatingLabel>
            <StarRating/>
          </div>
        </div>
          <FloatingLabel controlId="floatingTextarea2" label="Comments">
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              style={{ height: '100px' }}
            />
          </FloatingLabel>
      </Modal.Body>
      <Modal.Footer className='ItemModalButtons'>
        <Button variant="danger" onClick={() => {setShowAlert(!showAlert)}}>
          Delete
        </Button>
        <Button variant="success" onClick={updateElement}>
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
