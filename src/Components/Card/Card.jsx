import {
  Card as ReactCard,
  Button
} from 'react-bootstrap';

import './Card.css';

export const Card = ({ data, addToMyList, deleteFromMyList }) => {
  return (
    <ReactCard>
      <ReactCard.Img variant="top" src={data.image} />
      <ReactCard.Body>
        <ReactCard.Text>
          <Button onClick={() => addToMyList(data)} variant="success">Add</Button>
        </ReactCard.Text>
      </ReactCard.Body>
    </ReactCard>
    // <div className="Card">
    //   <img className="CardImage" src={data.image} alt={`Image ${data.image}`} />
    //   <button onClick={() => addToMyList(data)}>add</button>
    //   <button onClick={() => deleteFromMyList(data.id)}>drop</button>
    // </div>
  );
}
