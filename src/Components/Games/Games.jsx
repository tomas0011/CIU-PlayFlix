import { Fragment, useEffect, useState, useTransition } from 'react';
import {
  Container,
  Navbar as BootrsrapNavbar,
} from 'react-bootstrap';
import { Carousel } from '../Carrousel/Carrousel';

export const Games = () => {
  return (
    <Fragment>
      <h1>Games</h1>
      <Carousel/>
    </Fragment>
  );
}
