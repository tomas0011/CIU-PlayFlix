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
    <ReactCard>
      {
        isLoading
          && <div className='CardImageLoader'>
            <Spinner animation="grow"/>
          </div>
      }
      <ReactCard.Img
        onLoad={() => setIsLoading(false)}
        loading='lazy'
        variant="top"
        src={data.image}
      />
      <ReactCard.Body>
        <ReactCard.Text>
          <Button onClick={() => addToMyList(data)} variant="success">Add</Button>
        </ReactCard.Text>
      </ReactCard.Body>
    </ReactCard>
  );
}
