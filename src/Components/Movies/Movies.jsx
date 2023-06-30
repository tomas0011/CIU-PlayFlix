import { Fragment, useEffect, useState } from 'react';
import { Carousel } from '../Carrousel/Carrousel';

export const Movies = () => {
  // TODO: Integrar api de peliculas https://imdb-api.com/en/API/MostPopularMovies/k_bi3x5yez
  const [movies, setMovies] = useState([]);
  
  const imageRescale = async (imageUrl) => {
    const apiKey = 'k_bi3x5yez';
    const width = '50';
    const height = '50';
    const response = await fetch(`https://imdb-api.com/API/ResizeImage?apiKey=${apiKey}&size=${width}x${height}&url=https://m.media-amazon.com/images/M/${imageUrl}`);
    console.log(response)
    const { items } = await response.json();
    // console.log(items)
    return items;
  }

  const consultarApiPeliculas = async () => {
    console.log(movies.length)
    if (!movies.length) {
      // const apiKey = 'k_bi3x5yez';
      // const response = await fetch(`https://imdb-api.com/en/API/MostPopularMovies/${apiKey}`);
      // const { items } = await response.json();
      // // {
      // //   id: "tt0439572",
      // //   rank: "1",
      // //   rankUpDown: "0",
      // //   title: "The Flash",
      // //   fullTitle: "The Flash (2023)",
      // //   year: "2023",
      // //   image: "https://m.media-amazon.com/images/M/MV5BZWE2ZWE5MDQtMTJlZi00MTVjLTkxOTgtNmNiYjg2NDIxN2NhXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_Ratio0.6716_AL_.jpg",
      // //   crew: "Andy Muschietti (dir.), Ezra Miller, Michael Keaton",
      // //   imDbRating: "7.2",
      // //   imDbRatingCount: "73887"
      // // }
      // setMovies(items.map(async (movie) => ({
      //   id: movie.id,
      //   title: movie.title,
      //   image: movie.image
      // })));
      setMovies([{
        id: 1, title: 'Peli 1', image: 'https://picsum.photos/301/200'
      }, {
        id: 2, title: 'Peli 1', image: 'https://picsum.photos/302/200'
      }, {
        id: 3, title: 'Peli 1', image: 'https://picsum.photos/303/200'
      }, {
        id: 4, title: 'Peli 1', image: 'https://picsum.photos/304/200'
      }])
    }
  }

  useEffect(() => {
    console.log('pre consultarApiPeliculas')
    consultarApiPeliculas();
  }, []);

  return (
    <Fragment>
      <h1>Movies</h1>
      <Carousel topic={'Adventure'} images={movies}/>
      {/* <Carousel topic={'Action'} images={movies}/>
      <Carousel topic={'Thriller'} images={movies}/>
      <Carousel topic={'Infantil'} images={movies}/> */}
    </Fragment>
  );
}
