import { Fragment, useEffect, useState } from 'react';
import { Carousel } from '../Carrousel/Carrousel';

import { apiKey } from '../../apiKey';

export const Series = ({ myList, addToMyList, deleteFromMyList }) => {
  const [seriesByCategory, setSeriesByCategory] = useState([]);

  const getSuggestions = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc`, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${apiKey}`
      }
    });
    const { results } = await response.json();
    return results.map((serie) => ({
      type: 'serie',
      id: serie.id,
      title: serie.original_name,
      image: `https://www.themoviedb.org/t/p/w220_and_h330_face/${serie.poster_path}`
    }));
  }

  const getByGenreId = async (genreId) => {
    const response = await fetch(`https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genreId}`, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${apiKey}`
      }
    });
    const { results } = await response.json();
    return results.map((serie) => ({
      type: 'serie',
      id: serie.id,
      title: serie.original_name,
      image: `https://www.themoviedb.org/t/p/w220_and_h330_face/${serie.poster_path}`
    }));
  }

  const getSeries = async () => {
    setSeriesByCategory([
      {title: 'Sugestions:', series: await getSuggestions()},
      {title: 'Crime:', series: await getByGenreId(80)},
      {title: 'Animation:', series: await getByGenreId(16)},
      {title: 'Comedy:', series: await getByGenreId(35)},
      {title: 'Drama:', series: await getByGenreId(18)},
      {title: 'Action & Adventure:', series: await getByGenreId(10759)},
    ])
    // if (results.length) {
    // } else {
    //   getSeriesQuemadas();
    // }
  }

  // const getSeriesQuemadas = () => {
  //   const moviesArr = [];
  //   for (let index = 0; index < 100; index++) {
  //     moviesArr.push({
  //       id: index + 1,
  //       title: `Peli ${index + 1}`,
  //       image: `https://picsum.photos/${300 + index + 1}/200`
  //     })
  //   }
  //   setSeriesByCategory([
  //     {title: 'Nuevas:', series: moviesArr.splice(0, 20)},
  //     {title: 'Tendencias:', series: moviesArr.splice(0, 20)},
  //     {title: 'Te pueden gustar:', series: moviesArr.splice(0, 20)},
  //     {title: 'Porque viste "Game of Thrones":', series: moviesArr.splice(0, 20)},
  //     {title: 'Para recordar:', series: moviesArr.splice(0, 20)},
  //     {title: 'Vistas:', series: moviesArr.splice(0, 20)},
  //   ])
  // }

  useEffect(() => {
    getSeries();
  });

  return (
    <Fragment>
      <h1 className="Title">Series</h1>
      {seriesByCategory.map(({ title, series }) => (
        <Carousel
          key={title}
          topic={title}
          images={series}
          myList={myList}
          addToMyList={addToMyList}
          deleteFromMyList={deleteFromMyList}
        />
      ))}
    </Fragment>
  );
}
