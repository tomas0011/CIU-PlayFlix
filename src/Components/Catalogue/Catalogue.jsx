import { Fragment } from 'react';
import { Carousel } from '../Carrousel/Carrousel';
import { Card } from '../Card/Card';

export const Catalogue = ({ title, elements, myList, addToMyList }) => {
  return (
    <Fragment>
      <h1 className="Title">{title}</h1>
      {elements.map(({ title, data }) => (
        <Carousel
          key={title}
          topic={title}
          data={data}
          myList={myList}
          action={addToMyList}
          loop={true}
          CardComponent={Card}
        />
      ))}
    </Fragment>
  );
}
