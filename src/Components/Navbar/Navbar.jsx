import { Fragment, useEffect, useState } from 'react';
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
  const [offcanvasExpanded, setOffcanvasExpanded] = useState(false);

  const showOffcanvas = () => { setOffcanvasExpanded(true); }
  const hideOffcanvas = () => { setOffcanvasExpanded(false); }

  const selectPage = (page) => {
    changePage(page);
    hideOffcanvas()
  }

  useEffect(() => {
    console.log(offcanvasExpanded)
  }, [offcanvasExpanded])

  return (
    <Fragment>
      <BootrsrapNavbar expanded={offcanvasExpanded} expand='md' className="Navbar bg-body-tertiary mb-3">
        <Container fluid>
          <BootrsrapNavbar.Brand className='NavFont' onClick={() => changePage('movies')} href="#movies">PlayFlix</BootrsrapNavbar.Brand>
          <BootrsrapNavbar.Toggle onClick={showOffcanvas} aria-controls={`offcanvasBootrsrapNavbar-expand-lg`} />
          <BootrsrapNavbar.Offcanvas
            id={`offcanvasBootrsrapNavbar-expand-lg`}
            aria-labelledby={`offcanvasBootrsrapNavbarLabel-expand-lg`}
            placement="end"
          >
            <Offcanvas.Header closeButton onClick={hideOffcanvas}>
              <Offcanvas.Title id={`offcanvasBootrsrapNavbarLabel-expand-lg`}>
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link className='NavFont' onClick={() => selectPage('movies')} href="#movies">Movies</Nav.Link>
                <Nav.Link className='NavFont' onClick={() => selectPage('series')} href="#series">Series</Nav.Link>
                <Nav.Link className='NavFont' onClick={() => selectPage('my-list')} href="#my-list">My List</Nav.Link>
              </Nav>
              <SearchBar selectPage={selectPage} changeFounds={changeFounds}/>
            </Offcanvas.Body>
          </BootrsrapNavbar.Offcanvas>
        </Container>
      </BootrsrapNavbar>
    </Fragment>
  );
}
