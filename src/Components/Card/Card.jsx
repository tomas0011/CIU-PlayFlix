import './Card.css';

export const Card = ({ data, addToMyList, deleteFromMyList }) => {
  return (
    <div className="Card">
      <img className="CardImage" src={data.image} alt={`Image ${data.image}`} />
      <button onClick={() => addToMyList(data)}>add</button>
      <button onClick={() => deleteFromMyList(data.id)}>drop</button>
    </div>
  );
}
