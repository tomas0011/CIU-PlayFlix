import { Fragment, useState } from 'react';
import {
  Container,
  Nav,
  Navbar as BootrsrapNavbar,
  Offcanvas
} from 'react-bootstrap';
import { SearchBar } from './SearchBar/SearchBar';

import './Navbar.css';

export const Navbar = ({ changePage, pageName, search, setSearch, searchAction }) => {
  const [offcanvasExpanded, setOffcanvasExpanded] = useState(false);

  const showOffcanvas = () => { setOffcanvasExpanded(true); }
  const hideOffcanvas = () => { setOffcanvasExpanded(false); }

  const selectPage = (page) => {
    changePage(page);
    hideOffcanvas()
  }

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
                MENU
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link
                  className='NavFont'
                  active={pageName === "movies"}
                  onClick={() => selectPage('movies')}
                  href="#movies"
                >
                  MOVIES
                </Nav.Link>
                <Nav.Link
                  className='NavFont'
                  active={pageName === "series"}
                  onClick={() => selectPage('series')}
                  href="#series"
                >
                  SERIES
                </Nav.Link>
                <Nav.Link
                  className='NavFont'
                  active={pageName === "my-list"}
                  onClick={() => selectPage('my-list')}
                  href="#my-list"
                >
                  MY LIST
                </Nav.Link>
              </Nav>
              <SearchBar search={search} setSearch={setSearch} searchAction={searchAction}/>
            </Offcanvas.Body>
          </BootrsrapNavbar.Offcanvas>
        </Container>
      </BootrsrapNavbar>
    </Fragment>
  );
}
