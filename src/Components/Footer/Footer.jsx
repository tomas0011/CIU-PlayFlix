import {
  Container,
  Navbar as BootrsrapNavbar,
} from 'react-bootstrap';

export const Footer = () => {
  return (
    <Container>
      <BootrsrapNavbar expand="lg" className="bg-body-tertiary">
        <Container>
          <BootrsrapNavbar.Brand href="#">Navbar</BootrsrapNavbar.Brand>
        </Container>
      </BootrsrapNavbar>
    </Container>
  );
}
