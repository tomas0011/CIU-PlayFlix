import { Fragment, useEffect, useState } from 'react';
import { Carousel } from '../Carrousel/Carrousel';

export const Movies = () => {
  const [movies1, setMovies1] = useState([]);
  const [movies2, setMovies2] = useState([]);
  const [movies3, setMovies3] = useState([]);
  const [movies4, setMovies4] = useState([]);
  const [movies5, setMovies5] = useState([]);
  const [movies6, setMovies6] = useState([]);

  const getMovies = async () => {
    // const apiKey = 'k_bi3x5yez'; // Personal
    const apiKey = 'k_8izkdrc5'; // Unahur
    const response = await fetch(`https://imdb-api.com/en/API/MostPopularMovies/${apiKey}`);
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
    const movies = items.map((movie) => ({
      id: movie.id,
      title: movie.title,
      image: movie.image
    }));
    setMovies1(movies.splice(0, 20));
    setMovies2(movies.splice(0, 20));
    setMovies3(movies.splice(0, 20));
  }

  const getMoviesQuemadas = () => {
    const moviesArr = [];
    for (let index = 0; index < 120; index++) {
      moviesArr.push({
        id: index + 1,
        title: `Peli ${index + 1}`,
        image: `https://picsum.photos/${300 + index + 1}/200`
      })
    }
    setMovies1(moviesArr.splice(0, 20));
    setMovies2(moviesArr.splice(0, 20));
    setMovies3(moviesArr.splice(0, 20));
    setMovies4(moviesArr.splice(0, 20));
    setMovies5(moviesArr.splice(0, 20));
    setMovies6(moviesArr.splice(0, 20));
  }

  useEffect(() => {
    // getMovies();
    getMoviesQuemadas();
  }, []);

  return (
    <Fragment>
      <h1>Movies</h1>
      <Carousel topic={'Ultimas Peliculas:'} images={movies1}/>
      <Carousel topic={'Tendencias:'} images={movies2}/>
      <Carousel topic={'Segun tus gustos:'} images={movies3}/>
      <Carousel topic={'No te pierdas:'} images={movies4}/>
      <Carousel topic={'Porque viste "Avatar":'} images={movies5}/>
      <Carousel topic={'Para ver en familia:'} images={movies6}/>
    </Fragment>
  );
}
