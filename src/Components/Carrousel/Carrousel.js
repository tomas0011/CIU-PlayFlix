import { Fragment, useEffect, useState, useTransition } from 'react';
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Container,
  Navbar as BootrsrapNavbar,
} from 'react-bootstrap';

import './Carousel.css';
import "swiper/css";

export const Carousel = () => {
  const images = [
    'https://picsum.photos/300/200',
    'https://picsum.photos/301/200',
    'https://picsum.photos/302/200',
    'https://picsum.photos/303/200',
    'https://picsum.photos/304/200',
    'https://picsum.photos/305/200',
    'https://picsum.photos/306/200',
    'https://picsum.photos/307/200',
    'https://picsum.photos/308/200',
    'https://picsum.photos/309/200',
    'https://picsum.photos/310/200',
    'https://picsum.photos/312/200',
    'https://picsum.photos/313/200',
    'https://picsum.photos/314/200',
    'https://picsum.photos/315/200',
    'https://picsum.photos/316/200',
    'https://picsum.photos/317/200',
    'https://picsum.photos/318/200',
    'https://picsum.photos/319/200',
    'https://picsum.photos/320/200',
  ];

  return (
    <Fragment>
      <div className="swiperContainer">
          <Swiper
            modules={[Pagination, Autoplay]}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false
            }}
            pagination={{
              el: ".pagination",
            }}
            breakpoints={{
              "@0.00": {
                slidesPerView: 2,
              },
              "@0.50": {
                slidesPerView: 3,
              },
              "@1.00": {
                slidesPerView: 4,
              },
            }}
          >
            {images?.map((image) => (
              <SwiperSlide key={image}>
                <img className="Card" src={image} alt={`Image ${image}`} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="pagination" />
    </Fragment>
  );
}
