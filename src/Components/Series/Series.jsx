import { Fragment, useEffect, useState } from 'react';
import { Carousel } from '../Carrousel/Carrousel';

export const Series = () => {
  // TODO: Integrar api de series https://imdb-api.com/en/API/MostPopularTVs/k_bi3x5yez
  const [series1, setSeries1] = useState([]);
  const [series2, setSeries2] = useState([]);
  const [series3, setSeries3] = useState([]);

  const getSeries = async () => {
    // // const apiKey = 'k_bi3x5yez'; // Personal
    // const apiKey = 'k_8izkdrc5'; // Unahur
    // const response = await fetch(`https://imdb-api.com/en/API/MostPopularTVs/${apiKey}`);
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
    // const series = items.map((serie) => ({
    //   id: serie.id,
    //   title: serie.title,
    //   image: serie.image
    // }));
    // setSeries1(series.splice(0, 20));
    // setSeries2(series.splice(0, 20));
    // setSeries3(series.splice(0, 20));

    const moviesArr = [];
    for (let index = 0; index < 60; index++) {
      moviesArr.push({
        id: index + 1,
        title: `Peli ${index + 1}`,
        image: `https://picsum.photos/${300 + index + 1}/200`
      })
    }
    setSeries1(moviesArr.splice(0, 20));
    setSeries2(moviesArr.splice(0, 20));
    setSeries3(moviesArr.splice(0, 20));
  }

  useEffect(() => {
    getSeries();
  }, []);

  return (
    <Fragment>
      <h1>Series</h1>
      <Carousel topic={'Nuevas:'} images={series1}/>
      <Carousel topic={'Tendencias:'} images={series2}/>
      <Carousel topic={'Porque viste "Game of Thrones":'} images={series3}/>
    </Fragment>
  );
}
