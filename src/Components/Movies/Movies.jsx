import { Fragment, useEffect } from 'react';
import { Carousel } from '../Carrousel/Carrousel';

export const Movies = ({  moviesByCategory, setMoviesByCategory, addToMyList, deleteFromMyList }) => {
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
    setMoviesByCategory([
      {title: 'Ultimas Peliculas:', movies: movies.splice(0, 20)},
      {title: 'Tendencias:', movies: movies.splice(0, 20)},
      {title: 'Segun tus gustos:', movies: movies.splice(0, 20)},
      {title: 'No te pierdas:', movies: movies.splice(0, 20)},
      {title: 'Porque viste "Avatar":', movies: movies.splice(0, 20)},
      {title: 'Para ver en familia:', movies: movies.splice(0, 20)},
    ])
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
    setMoviesByCategory([
      {title: 'Ultimas Peliculas:', movies: moviesArr.splice(0, 20)},
      {title: 'Tendencias:', movies: moviesArr.splice(0, 20)},
      {title: 'Segun tus gustos:', movies: moviesArr.splice(0, 20)},
      {title: 'No te pierdas:', movies: moviesArr.splice(0, 20)},
      {title: 'Porque viste "Avatar":', movies: moviesArr.splice(0, 20)},
      {title: 'Para ver en familia:', movies: moviesArr.splice(0, 20)},
    ])
  }

  useEffect(() => {
    getMovies();
    // getMoviesQuemadas();
  }, []);

  return (
    <Fragment>
      <h1>Movies</h1>
      {moviesByCategory.map(({ title, movies }) => (
        <Carousel
          key={title}
          topic={title}
          images={movies}
          addToMyList={addToMyList}
          deleteFromMyList={deleteFromMyList}
        />
      ))}
    </Fragment>
  );
}
