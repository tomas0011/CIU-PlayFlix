import {
  Modal,
  Button,
  FloatingLabel,
  Form
} from 'react-bootstrap';
import { StarRating } from '../StarRating/StarRating';

import './ItemModal.css';

export const ItemModal = ({
  show,
  handleClose,
  activeElement,
  updateElement,
  deleteElementDetail
}) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{activeElement.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='modalInfo'>
          <img className="tableImage" src={activeElement.image} alt={activeElement.title} />
          <div>
            <FloatingLabel controlId="floatingSelect" label="Works with selects">
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
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={updateElement}>
          Save Changes
        </Button>
        <Button variant="danger" onClick={deleteElementDetail}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
