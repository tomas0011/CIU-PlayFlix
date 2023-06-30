import './Card.css';

export const Card = ({ data }) => {
  // console.log(data)
  return (
    <div>
      <img className="CardImage" src={data.image} alt={`Image ${data.image}`} />
    </div>
  );
}
