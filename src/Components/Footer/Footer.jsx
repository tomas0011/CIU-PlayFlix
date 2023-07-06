import { Fragment } from 'react';
import {
  Container,
  Navbar as BootrsrapNavbar,
} from 'react-bootstrap';

import './Footer.css';
import playFlixLogo from '../../Assets/images/playflix.png';

export const Footer = () => {
  return (
    <Fragment>
      <BootrsrapNavbar className="Footer bg-body-tertiary">
        <Container>
          <BootrsrapNavbar.Brand className='FootFont' href="#">
            <img className='Logo' src={playFlixLogo}/>
          </BootrsrapNavbar.Brand>
        </Container>
      </BootrsrapNavbar>
    </Fragment>
  );
}
