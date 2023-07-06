import './StarRating.css';

export const StarRating = ({ handlerOnChange, activeValue }) => {
  return (
    <div className="StarRating">
      <input
        onChange={handlerOnChange}
        checked={activeValue === "5"}
        id="radio5"
        type="radio"
        name="stars"
        value="5"
      />
      <label htmlFor="radio5">★</label>
      <input
        onChange={handlerOnChange}
        checked={activeValue === "4"}
        id="radio4"
        type="radio"
        name="stars"
        value="4"
      />
      <label htmlFor="radio4">★</label>
      <input
        onChange={handlerOnChange}
        checked={activeValue === "3"}
        id="radio3"
        type="radio"
        name="stars"
        value="3"
      />
      <label htmlFor="radio3">★</label>
      <input
        onChange={handlerOnChange}
        checked={activeValue === "2"}
        id="radio2"
        type="radio"
        name="stars"
        value="2"
      />
      <label htmlFor="radio2">★</label>
      <input
        onChange={handlerOnChange}
        checked={activeValue === "1"}
        id="radio1"
        type="radio"
        name="stars"
        value="1"
      />
      <label htmlFor="radio1">★</label>
    </div>
  );
}
