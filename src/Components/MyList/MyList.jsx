import { Fragment, useState } from 'react';
import {
  Table
} from 'react-bootstrap';
import { ListItem } from './ListItem/ListItem';
import { ItemModal } from './ItemModal/ItemModal';

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
                <ListItem
                  media={media}
                  showElementDetail={showElementDetail}
                />
              ))
          }
        </tbody>
      </Table>
      <ItemModal
        show={show}
        handleClose={handleClose}
        activeElement={activeElement}
        updateElement={updateElement}
        deleteElementDetail={deleteElementDetail}
      />
    </Fragment>
  );
}
