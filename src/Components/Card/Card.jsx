import { useState } from 'react';
import {
  Card as ReactCard,
  Button,
  Spinner
} from 'react-bootstrap';

import './Card.css';

export const Card = ({ data, addToMyList, deleteFromMyList }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <ReactCard className='Card'>
      {
        isLoading
          && <div className='CardImageLoader'>
            <Spinner animation="grow"/>
          </div>
      }
      <ReactCard.Img
        className='CardImage'
        onLoad={() => setIsLoading(false)}
        variant="top"
        src={data.image}
      />
      <ReactCard.Body>
        <ReactCard.Text>
          <h5 className='CardTitle'>{data.title}</h5>
          <Button className='CardButton' onClick={() => addToMyList(data)} variant="success">Add</Button>
        </ReactCard.Text>
      </ReactCard.Body>
    </ReactCard>
  );
}
