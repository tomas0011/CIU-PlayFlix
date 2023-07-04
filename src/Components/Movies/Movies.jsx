import { Fragment, useEffect, useState } from 'react';
import { Carousel } from '../Carrousel/Carrousel';

import { apiKey } from '../../apiKey';

export const Movies = ({ myList, addToMyList, deleteFromMyList }) => {
  const [moviesByCategory, setMoviesByCategory] = useState([]);

  const getSuggestions = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${apiKey}`
      }
    });
    const { results } = await response.json();
    return results.map((serie) => ({
      type: 'movie',
      id: serie.id,
      title: serie.original_title,
      image: `https://www.themoviedb.org/t/p/w220_and_h330_face/${serie.poster_path}`
    }));
  }

  const getByGenreId = async (genreId) => {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genreId}`, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${apiKey}`
      }
    });
    const { results } = await response.json();
    return results.map((serie) => ({
      type: 'movie',
      id: serie.id,
      title: serie.original_title,
      image: `https://www.themoviedb.org/t/p/w220_and_h330_face/${serie.poster_path}`
    }));
  }

  const getMovies = async () => {
    setMoviesByCategory([
      {title: 'TRENDS', movies: await getSuggestions()},
      {title: 'THRILLER', movies: await getByGenreId(53)},
      {title: 'ANIMATION', movies: await getByGenreId(16)},
      {title: 'COMEDY', movies: await getByGenreId(35)},
      {title: 'DRAMA', movies: await getByGenreId(18)},
      {title: 'HORROR', movies: await getByGenreId(27)},
    ])
  }

  // const getMoviesQuemadas = () => {
  //   const moviesArr = [];
  //   for (let index = 0; index < 120; index++) {
  //     moviesArr.push({
  //       id: index + 1,
  //       title: `Peli ${index + 1}`,
  //       image: `https://picsum.photos/${300 + index + 1}/200`
  //     })
  //   }
  //   setMoviesByCategory([
  //     {title: 'Ultimas Peliculas:', movies: moviesArr.splice(0, 20)},
  //     {title: 'Tendencias:', movies: moviesArr.splice(0, 20)},
  //     {title: 'Segun tus gustos:', movies: moviesArr.splice(0, 20)},
  //     {title: 'No te pierdas:', movies: moviesArr.splice(0, 20)},
  //     {title: 'Porque viste "Avatar":', movies: moviesArr.splice(0, 20)},
  //     {title: 'Para ver en familia:', movies: moviesArr.splice(0, 20)},
  //   ])
  // }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <Fragment>
      <h1 className="Title">MOVIES</h1>
      {moviesByCategory.map(({ title, movies }) => (
        <Carousel
          key={title}
          topic={title}
          images={movies}
          myList={myList}
          addToMyList={addToMyList}
          deleteFromMyList={deleteFromMyList}
        />
      ))}
    </Fragment>
  );
}
