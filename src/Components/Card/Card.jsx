import { useState, useTransition } from 'react';
import {
  Card as ReactCard,
  Button,
  Spinner
} from 'react-bootstrap';

import './Card.css';

export const Card = ({ data, myList, action, showType }) => {
  const [isLoadingImage, setIsLoadingImage] = useState(true);
  const [isLoadingButton, loadButton] = useTransition(false);
  const [isSaved, setIsSaved] = useState(!!myList?.find((element) => element.id === data.id));

  const addElementToMyList = (data) => {
    loadButton(() => {
      action(data);
      setIsSaved(true);
    })
  };

  return (
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
      {showType 
        ? <label className="CardLabel">{data.type}</label>
        : ''
      }
      <ReactCard.Body>
        <ReactCard.Text>
          <h5 className='CardTitle'>{data.title}</h5>
          <Button 
            className='CardButton'
            disabled={isSaved}
            variant={
              isSaved
                ? "muted"
                : "success"
            }
            onClick={() => addElementToMyList(data)}
          >
            {
              isLoadingButton
                ? "LOADING..."
                : isSaved
                  ? "ADDED"
                  : "ADD"
            }
          </Button>
        </ReactCard.Text>
      </ReactCard.Body>
    </ReactCard>
  );
}
