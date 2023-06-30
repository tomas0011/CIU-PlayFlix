import { Fragment } from 'react';
import { Carousel } from '../Carrousel/Carrousel';

export const Series = () => {
  // TODO: Integrar api de series https://imdb-api.com/en/API/MostPopularTVs/k_bi3x5yez
  const images = [
    'https://picsum.photos/300/200',
    'https://picsum.photos/301/200',
    'https://picsum.photos/302/200',
    'https://picsum.photos/303/200',
    'https://picsum.photos/304/200',
    'https://picsum.photos/305/200',
    'https://picsum.photos/306/200',
    'https://picsum.photos/307/200',
    'https://picsum.photos/308/200',
    'https://picsum.photos/309/200',
    'https://picsum.photos/310/200',
    'https://picsum.photos/312/200',
    'https://picsum.photos/313/200',
    'https://picsum.photos/314/200',
    'https://picsum.photos/315/200',
    'https://picsum.photos/316/200',
    'https://picsum.photos/317/200',
    'https://picsum.photos/318/200',
    'https://picsum.photos/319/200',
    'https://picsum.photos/320/200',
  ];

  return (
    <Fragment>
      <h1>Games</h1>
      <Carousel topic={'FPS'} images={images}/>
      <Carousel topic={'MOBA'} images={images}/>
      <Carousel topic={'Card Games'} images={images}/>
      <Carousel topic={'Puzzles'} images={images}/>
    </Fragment>
  );
}
