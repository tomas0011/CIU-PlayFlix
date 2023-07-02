import { useState } from 'react';
import {
  Form,
  Button
} from 'react-bootstrap';

import { apiKey } from '../../../apiKey';

import './SearchBar.css';

export const SearchBar = ({ selectPage, changeFounds }) => {
  const [search, setSearch] = useState('');

  const searchMoviesAndSeries = async () => {
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
    // changeFounds(await getMoviesQuemadas());
    changeFounds(await searchMoviesAndSeries());
  }

  const handlerOnSearch = () => {
    findOnApi();
    selectPage('search');
    setSearch('');
  }

  const handlerOnChange = (e) => {
    setSearch(e.target.value);
  }

  return (
    <Form 
      className="d-flex"
      onSubmit={handlerOnSearch}
    >
      <Form.Control
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
        href="#search"
        value={search}
        onChange={handlerOnChange}
      />
      <Button 
        onClick={handlerOnSearch}
        variant="success"
        href="#search"
      >Search</Button>
    </Form>
  );
}
