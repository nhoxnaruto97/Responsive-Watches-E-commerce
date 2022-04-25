import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import new1 from "../img/new1.png";
import new2 from "../img/new2.png";
import new3 from "../img/new3.png";
import new4 from "../img/new4.png";

import "../css/newArrivals.css";

const NewArrivals = () => {
  return (
    <section className="new section container" id="new">
      <h2 className="section__title">New Arrivals</h2>

      <div className="new__container">
        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          loop={true}
          breakpoints={{
            576: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="swiper new-swiper"
        >
          <div className="swiper-wrapper">
            <SwiperSlide className="new__card swiper-slide">
              <span className="new__tag">New</span>

              <img src={new1} alt="" className="new__img" />

              <div className="new__data">
                <h3 className="new__title">Longines rose</h3>
                <span className="new__price">$980</span>
              </div>

              <button className="button new__button">ADD TO CART</button>
            </SwiperSlide>

            <SwiperSlide className="new__card swiper-slide">
              <span className="new__tag">New</span>

              <img src={new2} alt="" className="new__img" />

              <div className="new__data">
                <h3 className="new__title">Jazzmaster</h3>
                <span className="new__price">$1150</span>
              </div>

              <button className="button new__button">ADD TO CART</button>
            </SwiperSlide>

            <SwiperSlide className="new__card swiper-slide">
              <span className="new__tag">New</span>

              <img src={new3} alt="" className="new__img" />

              <div className="new__data">
                <h3 className="new__title">Dreyfuss gold</h3>
                <span className="new__price">$750</span>
              </div>

              <button className="button new__button">ADD TO CART</button>
            </SwiperSlide>

            <SwiperSlide className="new__card swiper-slide">
              <span className="new__tag">New</span>

              <img src={new4} alt="" className="new__img" />

              <div className="new__data">
                <h3 className="new__title">Portuguese rose</h3>
                <span className="new__price">$1590</span>
              </div>

              <button className="button new__button">ADD TO CART</button>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default NewArrivals;
