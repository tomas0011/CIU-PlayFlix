import { Fragment } from 'react';
import { Carousel } from '../Carrousel/Carrousel';

export const Series = () => {
  // TODO: Integrar api de series https://imdb-api.com/en/API/MostPopularTVs/k_bi3x5yez
  const seriesArr = [];
  for (let index = 0; index < 20; index++) {
    seriesArr.push({
      id: index + 1,
      title: `Peli ${index + 1}`,
      image: `https://picsum.photos/${300 + index + 1}/200`
    })
  }
  const images = seriesArr;

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
