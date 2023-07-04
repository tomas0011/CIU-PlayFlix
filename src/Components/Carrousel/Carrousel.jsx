import { Fragment } from 'react';
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card } from '../Card/Card';

import './Carousel.css';
import "swiper/css";

export const Carousel = ({ topic, data, myList, addToMyList }) => {
  return (
    <Fragment>
      <div className="swiperContainer">
        <h3 className="CarrouselTopic">{topic}</h3>
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
          {data?.map((element) => (
            <SwiperSlide key={element.id}>
              <Card
                data={element}
                myList={myList}
                addToMyList={addToMyList}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Fragment>
  );
}
