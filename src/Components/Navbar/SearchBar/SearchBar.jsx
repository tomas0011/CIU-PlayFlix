import {
  Form,
  Button
} from 'react-bootstrap';

import './SearchBar.css';

export const SearchBar = ({ search, setSearch, searchAction }) => {
  const handlerOnChange = (e) => {
    setSearch(e.target.value);
  }

  return (
    <Form 
      className="d-flex"
      onSubmit={(e) => {
        e.preventDefault();
        searchAction();
      }}
    >
      <Form.Control
        type="search"
        placeholder="SEARCH"
        className="me-2"
        aria-label="Search"
        href="#search"
        value={search}
        onChange={handlerOnChange}
      />
      <Button 
        onClick={() => searchAction()}
        variant="success"
        href="#search"
      >SEARCH</Button>
    </Form>
  );
}
