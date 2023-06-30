import { Fragment } from 'react';

import './Gallery.css';

export const Gallery = ({ topic, images }) => {
  return (
    <Fragment>
      <h2>{topic}</h2>
      {
        !images?.length
          ? <h4>Vacio</h4>
          : images.map((image) => (
            <img src={image.image} alt={`Image ${image.image}`} />
          ))
      }
    </Fragment>
  );
}
