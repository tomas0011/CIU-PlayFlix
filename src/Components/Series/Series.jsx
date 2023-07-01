import { Fragment, useEffect, useState } from 'react';
import { Carousel } from '../Carrousel/Carrousel';

export const Series = ({  seriesByCategory, setSeriesByCategory, addToMyList, deleteFromMyList }) => {
  const getSeries = async () => {
    // const apiKey = 'k_bi3x5yez'; // Personal
    const apiKey = 'k_8izkdrc5'; // Unahur
    const response = await fetch(`https://imdb-api.com/en/API/MostPopularTVs/${apiKey}`);
    const { items } = await response.json();
    // {
    //   id: "tt0439572",
    //   rank: "1",
    //   rankUpDown: "0",
    //   title: "The Flash",
    //   fullTitle: "The Flash (2023)",
    //   year: "2023",
    //   image: "https://m.media-amazon.com/images/M/MV5BZWE2ZWE5MDQtMTJlZi00MTVjLTkxOTgtNmNiYjg2NDIxN2NhXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_Ratio0.6716_AL_.jpg",
    //   crew: "Andy Muschietti (dir.), Ezra Miller, Michael Keaton",
    //   imDbRating: "7.2",
    //   imDbRatingCount: "73887"
    // }
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
    // getSeries();
    getSeriesQuemadas();
  }, []);

  return (
    <Fragment>
      <h1>Series</h1>
      {seriesByCategory.map(({ title, series }) => (
        <Carousel
          topic={title}
          images={series}
          addToMyList={addToMyList}
          deleteFromMyList={deleteFromMyList}
        />
      ))}
    </Fragment>
  );
}
