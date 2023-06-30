import { Fragment } from 'react';
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card } from '../Card/Card';

import './Carousel.css';
import "swiper/css";

export const Carousel = ({ topic, images, addToMyList, deleteFromMyList }) => {
  return (
    <Fragment>
      <div className="swiperContainer">
        <h3>{topic}</h3>
        <Swiper
          modules={[Pagination, Autoplay]}
          loop={true}
          autoplay={{
            delay: 10000,
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
            "@1.50": {
              slidesPerView: 7,
            }
          }}
        >
          {images?.map((image) => (
            <SwiperSlide key={image.id}>
              <Card data={image} addToMyList={addToMyList} deleteFromMyList={deleteFromMyList}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Fragment>
  );
}
