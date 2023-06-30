import { Fragment } from 'react';
import {
  Form,
  Button
} from 'react-bootstrap';

import './SearchBar.css';

export const SearchBar = ({ changePage, changeFounds }) => {

  const searchMoviesAndSeries = () => {
    // Aca hay que hacer el llamado al api de busqueda
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
    // changeFounds(await searchMoviesAndSeries());
    changeFounds(await getMoviesQuemadas());
  }

  const handlerOnClick = () => {
    findOnApi();
    changePage('search');
  }

  return (
    <Form className="d-flex" onSubmit={() => changePage('search')}>
      <Form.Control
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
        href="#search"
      />
      <Button onClick={() => handlerOnClick()} href="#search" variant="outline-success">Search</Button>
    </Form>
  );
}
