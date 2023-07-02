import { Fragment, useEffect } from 'react';
import { Carousel } from '../Carrousel/Carrousel';

import { apiKey } from '../../apiKey';

export const Series = ({  seriesByCategory, setSeriesByCategory, addToMyList, deleteFromMyList }) => {
  const getSeries = async () => {
    const response = await fetch(`https://imdb-api.com/en/API/MostPopularTVs/${apiKey}`);
    const { items } = await response.json();
    const series = items.map((serie) => ({
      id: serie.id,
      title: serie.title,
      image: serie.image
    }));
    setSeriesByCategory([
      {title: 'Nuevas:', series: series.splice(0, 20)},
      {title: 'Tendencias:', series: series.splice(0, 20)},
      {title: 'Te pueden gustar:', series: series.splice(0, 20)},
      {title: 'Porque viste "Game of Thrones":', series: series.splice(0, 20)},
      {title: 'Para recordar:', series: series.splice(0, 20)},
      {title: 'Vistas:', series: series.splice(0, 20)},
    ])
  }

  const getSeriesQuemadas = () => {
    const moviesArr = [];
    for (let index = 0; index < 100; index++) {
      moviesArr.push({
        id: index + 1,
        title: `Peli ${index + 1}`,
        image: `https://picsum.photos/${300 + index + 1}/200`
      })
    }
    setSeriesByCategory([
      {title: 'Nuevas:', series: moviesArr.splice(0, 20)},
      {title: 'Tendencias:', series: moviesArr.splice(0, 20)},
      {title: 'Te pueden gustar:', series: moviesArr.splice(0, 20)},
      {title: 'Porque viste "Game of Thrones":', series: moviesArr.splice(0, 20)},
      {title: 'Para recordar:', series: moviesArr.splice(0, 20)},
      {title: 'Vistas:', series: moviesArr.splice(0, 20)},
    ])
  }

  useEffect(() => {
    getSeries();
    // getSeriesQuemadas();
  }, []);

  return (
    <Fragment>
      <h1>Series</h1>
      {seriesByCategory.map(({ title, series }) => (
        <Carousel
          key={title}
          topic={title}
          images={series}
          addToMyList={addToMyList}
          deleteFromMyList={deleteFromMyList}
        />
      ))}
    </Fragment>
  );
}
