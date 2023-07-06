import { Fragment } from 'react';
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import './Carousel.css';
import "swiper/css";

export const Carousel = ({ topic, data, myList, action, deleteAction, loop, CardComponent }) => {
  return (
    <Fragment>
      <div className="swiperContainer">
        <h3 className="CarrouselTopic">{topic}</h3>
        <Swiper
          modules={[Pagination, Autoplay]}
          loop={loop}
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
            "@0.75": {
              slidesPerView: 4,
            },
            "@1.50": {
              slidesPerView: 8,
            }
          }}
        >
          {data?.map((element) => (
            <SwiperSlide key={element.id}>
              <CardComponent
                data={element}
                myList={myList}
                action={action}
                deleteAction={deleteAction}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Fragment>
  );
}
