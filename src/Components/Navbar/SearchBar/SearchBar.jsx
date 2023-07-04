import { useState } from 'react';
import {
  Form,
  Button
} from 'react-bootstrap';

import { apiKey } from '../../../apiKey';

import './SearchBar.css';

export const SearchBar = ({ selectPage, changeFounds }) => {
  const [search, setSearch] = useState('');

  const searchMoviesAndSeries = async (search) => {
    const response = await fetch(`https://api.themoviedb.org/3/search/multi?query=${search}&include_adult=false&language=en-US&page=1`, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${apiKey}`
      }
    });
    const { results } = await response.json();
    return {
      search,
      results: results.map((serie) => ({
        type: serie.media_type === 'tv' ? 'serie' : 'movie',
        id: serie.id,
        title: serie.original_title,
        image: !!serie.poster_path
          ? `https://www.themoviedb.org/t/p/w220_and_h330_face/${serie.poster_path}` 
          : 'https://www.feed-image-editor.com/sites/default/files/perm/wysiwyg/image_not_available.png'
      }))
    } 
  }

  // const getMoviesQuemadas = async () => {
  //   const moviesArr = [];
  //   for (let index = 0; index < 50; index++) {
  //     moviesArr.push({
  //       id: index + 1,
  //       title: `Peli ${index + 1}`,
  //       image: `https://picsum.photos/${300 + index + 1}/200`
  //     })
  //   }
  //   return moviesArr;
  // }

  const findOnApi = async () => {
    changeFounds(await searchMoviesAndSeries(search));
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
