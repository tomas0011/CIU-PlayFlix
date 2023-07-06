import { useState, Fragment } from 'react';
import {
  Card as ReactCard,
  Button,
  Spinner
} from 'react-bootstrap';

import { ItemModal } from './ItemModal/ItemModal';

export const CardWithModal = ({ data, action, deleteAction }) => {
  const [isLoadingImage, setIsLoadingImage] = useState(true);
  const [elementDetail, setElementDetail] = useState(data);
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const updateElement = () => {
    action(elementDetail.id, elementDetail);
    handleClose();
  }

  const deleteElement = () => {
    deleteAction(elementDetail.id);
    handleClose();
  }

  return (
    <Fragment>
      <ReactCard className='Card'>
        {
          isLoadingImage
            && <div className='CardImageLoader'>
              <Spinner animation="grow"/>
            </div>
        }
        <ReactCard.Img
          className='CardImage'
          onLoad={() => setIsLoadingImage(false)}
          variant="top"
          src={data.image}
        />
        <ReactCard.Body>
          <ReactCard.Text>
            <h5 className='CardTitle'>{data.title}</h5>
            <Button 
              className='CardButton'
              variant={"success"}
              onClick={handleShow}
            >
              EDIT
            </Button>
          </ReactCard.Text>
        </ReactCard.Body>
      </ReactCard>
      <ItemModal
        show={showModal}
        handleClose={handleClose}
        activeElement={elementDetail}
        setActiveElement={setElementDetail}
        updateElement={updateElement}
        deleteElementDetail={deleteElement}
      />
    </Fragment>
  );
}
