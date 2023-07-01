import { Fragment, useState } from 'react';
import {
  Table,
  Modal,
  Button,
  FloatingLabel,
  Form
} from 'react-bootstrap';
import { StarRating } from './StarRating/StarRating';

import './MyList.css';

export const MyList = ({ myList, deleteFromMyList, updateFromMyList }) => {
  const [show, setShow] = useState(false);
  const [activeElement, setActiveElement] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const showElementDetail = (data) => {
    setActiveElement(data);
    handleShow();
  };

  const deleteElementDetail = () => {
    deleteFromMyList(activeElement.id);
    handleClose();
  };

  // const handlerChangeActiveElement = (e) => {
  //   setActiveElement({
  //     ...activeElement,
  //     [e.target.name]: e.target.value
  //   })
  // }

  const updateElement = () => {
    updateFromMyList(activeElement.id, activeElement);
    handleClose();
  }

  return (
    <Fragment>
      <Table striped bordered hover>
        <tbody>
          {
            !myList?.length
              ? <h4>No hay nada para mostrar</h4>
              : myList.map((media) => (
                <tr key={media.id} className="tableItem" onClick={() => showElementDetail(media)}>
                  <td>
                    <img className='tableImage' src={media.image} alt={media.title}/>
                  </td>
                  <td>
                    <h3 className='tableTitle'>{media.title}</h3>
                    <label className='tableFlag'>{media.type}</label>
                    <label className='tableFlag'>{media.status}</label>
                  </td>
                  <td>
                    <p className='tableDescription'>{media.description}</p>
                  </td>
                  <td>{media.stars} stars</td>
                </tr>
              ))
          }
        </tbody>
      </Table>
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
    </Fragment>
  );
}
