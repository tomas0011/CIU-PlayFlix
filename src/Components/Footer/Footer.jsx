import { Fragment } from 'react';
import {
  Container,
  Navbar as BootrsrapNavbar,
} from 'react-bootstrap';

import './Footer.css';

export const Footer = () => {
  return (
    <Fragment>
      <BootrsrapNavbar className="Footer bg-body-tertiary">
        <Container>
          <BootrsrapNavbar.Brand className='FootFont' href="#">PlayFlix</BootrsrapNavbar.Brand>
        </Container>
      </BootrsrapNavbar>
    </Fragment>
  );
}
