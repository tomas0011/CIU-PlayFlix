import { useState } from 'react';
import {
  Form,
  Button
} from 'react-bootstrap';

import './SearchBar.css';

export const SearchBar = ({ changePage, changeFounds }) => {
  const [search, setSearch] = useState('');

  const searchMoviesAndSeries = async () => {
    // const apiKey = 'k_bi3x5yez'; // Personal
    const apiKey = 'k_8izkdrc5'; // Unahur
    const response = await fetch(`https://imdb-api.com/en/API/Search/${apiKey}/${search}`);
    const { results } = await response.json();
    return results.map((movie) => ({
      id: movie.id,
      title: movie.title,
      image: movie.image
    }));
  }

  const getMoviesQuemadas = async () => {
    const moviesArr = [];
    for (let index = 0; index < 50; index++) {
      moviesArr.push({
        id: index + 1,
        title: `Peli ${index + 1}`,
        image: `https://picsum.photos/${300 + index + 1}/200`
      })
    }
    return moviesArr;
  }

  const findOnApi = async () => {
    changeFounds(await searchMoviesAndSeries());
    // changeFounds(await getMoviesQuemadas());
  }

  const handlerOnClick = () => {
    findOnApi();
    changePage('search');
    setSearch('');
  }

  const handlerOnChange = (e) => {
    setSearch(e.target.value);
  }

  return (
    <Form className="d-flex" onSubmit={handlerOnClick}>
      <Form.Control
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
        href="#search"
        value={search}
        onChange={handlerOnChange}
      />
      <Button onClick={handlerOnClick} href="#search" variant="outline-success">Search</Button>
    </Form>
  );
}
