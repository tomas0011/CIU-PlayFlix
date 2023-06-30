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
      <BootrsrapNavbar expand='lg' className="bg-body-tertiary mb-3">
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
                <Nav.Link onClick={() => changePage('games')} href="#action1">Games</Nav.Link>
                <Nav.Link onClick={() => changePage('movies')} href="#action2">Movies</Nav.Link>
                <Nav.Link onClick={() => changePage('my-list')} href="#action3">My List</Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Offcanvas.Body>
          </BootrsrapNavbar.Offcanvas>
        </Container>
      </BootrsrapNavbar>
    </Fragment>
  );
}
