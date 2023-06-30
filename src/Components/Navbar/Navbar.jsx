import { Fragment } from 'react';
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar as BootrsrapNavbar,
  Offcanvas
} from 'react-bootstrap';

export const Navbar = ({ changePage }) => {
  return (
    <Fragment>
      <BootrsrapNavbar expand='md' className="bg-body-tertiary mb-3">
        <Container fluid>
          <BootrsrapNavbar.Brand href="#">PlayFlix</BootrsrapNavbar.Brand>
          <BootrsrapNavbar.Toggle aria-controls={`offcanvasBootrsrapNavbar-expand-lg`} />
          <BootrsrapNavbar.Offcanvas
            id={`offcanvasBootrsrapNavbar-expand-lg`}
            aria-labelledby={`offcanvasBootrsrapNavbarLabel-expand-lg`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasBootrsrapNavbarLabel-expand-lg`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link onClick={() => changePage('movies')} href="#movies">Movies</Nav.Link>
                <Nav.Link onClick={() => changePage('series')} href="#series">Series</Nav.Link>
                <Nav.Link onClick={() => changePage('my-list')} href="#my-list">My List</Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  onSubmit={() => changePage('search')}
                  href="#search"
                />
                <Button onClick={() => changePage('search')} href="#search" variant="outline-success">Search</Button>
              </Form>
            </Offcanvas.Body>
          </BootrsrapNavbar.Offcanvas>
        </Container>
      </BootrsrapNavbar>
    </Fragment>
  );
}
