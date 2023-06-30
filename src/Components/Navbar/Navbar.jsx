import { Fragment } from 'react';
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar as BootrsrapNavbar,
  Offcanvas
} from 'react-bootstrap';
import { SearchBar } from './SearchBar/SearchBar';

import './Navbar.css';

export const Navbar = ({ changePage, changeFounds }) => {
  return (
    <Fragment>
      <BootrsrapNavbar expand='md' className="Navbar bg-body-tertiary mb-3">
        <Container fluid>
          <BootrsrapNavbar.Brand className='NavFont' onClick={() => changePage('movies')} href="#movies">PlayFlix</BootrsrapNavbar.Brand>
          <BootrsrapNavbar.Toggle aria-controls={`offcanvasBootrsrapNavbar-expand-lg`} />
          <BootrsrapNavbar.Offcanvas
            id={`offcanvasBootrsrapNavbar-expand-lg`}
            aria-labelledby={`offcanvasBootrsrapNavbarLabel-expand-lg`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasBootrsrapNavbarLabel-expand-lg`}>
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link className='NavFont' onClick={() => changePage('movies')} href="#movies">Movies</Nav.Link>
                <Nav.Link className='NavFont' onClick={() => changePage('series')} href="#series">Series</Nav.Link>
                <Nav.Link className='NavFont' onClick={() => changePage('my-list')} href="#my-list">My List</Nav.Link>
              </Nav>
              <SearchBar changePage={changePage} changeFounds={changeFounds}/>
            </Offcanvas.Body>
          </BootrsrapNavbar.Offcanvas>
        </Container>
      </BootrsrapNavbar>
    </Fragment>
  );
}
