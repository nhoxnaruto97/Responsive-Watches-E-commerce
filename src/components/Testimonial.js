import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import pic from "../img/testimonial.png";
import pic1 from "../img/testimonial1.jpg";
import pic2 from "../img/testimonial2.jpg";
import pic3 from "../img/testimonial3.jpg";
import "../css/testimonial.css";

const Testimonial = () => {
  return (
    <section className="testimonial section container">
      <div className="testimonial__container grid">
        <Swiper
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[Navigation]}
          spaceBetween={30}
          loop={true}
          className="swiper testimonial-swiper"
        >
          <div className="swiper-wrapper">
            <SwiperSlide className="testimonial__card swiper-slide">
              <div className="testimonial__quote">
                <i className="bx bxs-quote-alt-left"></i>
              </div>
              <p className="testimonial__description">
                They are the best watches that one acquires, also they are
                always with the latest news and trends, with a very comfortable
                price and especially with the attention you receive, they are
                always attentive to your questions.
              </p>
              <h3 className="testimonial__date">March 27. 2021</h3>

              <div className="testimonial__perfil">
                <img src={pic1} alt="" className="testimonial__perfil-img" />

                <div className="testimonial__perfil-data">
                  <span className="testimonial__perfil-name">Lee Doe</span>
                  <span className="testimonial__perfil-detail">
                    Director of a company
                  </span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="testimonial__card swiper-slide">
              <div className="testimonial__quote">
                <i className="bx bxs-quote-alt-left"></i>
              </div>
              <p className="testimonial__description">
                They are the best watches that one acquires, also they are
                always with the latest news and trends, with a very comfortable
                price and especially with the attention you receive, they are
                always attentive to your questions.
              </p>
              <h3 className="testimonial__date">March 27. 2021</h3>

              <div className="testimonial__perfil">
                <img src={pic2} alt="" className="testimonial__perfil-img" />

                <div className="testimonial__perfil-data">
                  <span className="testimonial__perfil-name">Samantha Mey</span>
                  <span className="testimonial__perfil-detail">
                    Director of a company
                  </span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="testimonial__card swiper-slide">
              <div className="testimonial__quote">
                <i className="bx bxs-quote-alt-left"></i>
              </div>
              <p className="testimonial__description">
                They are the best watches that one acquires, also they are
                always with the latest news and trends, with a very comfortable
                price and especially with the attention you receive, they are
                always attentive to your questions.
              </p>
              <h3 className="testimonial__date">March 27. 2021</h3>

              <div className="testimonial__perfil">
                <img src={pic3} alt="" className="testimonial__perfil-img" />

                <div className="testimonial__perfil-data">
                  <span className="testimonial__perfil-name">Raul Zaman</span>
                  <span className="testimonial__perfil-detail">
                    Director of a company
                  </span>
                </div>
              </div>
            </SwiperSlide>
          </div>

          <div className="swiper-button-next">
            <i className="bx bx-right-arrow-alt"></i>
          </div>
          <div className="swiper-button-prev">
            <i className="bx bx-left-arrow-alt"></i>
          </div>
        </Swiper>

        <div className="testimonial__images">
          <div className="testimonial__square"></div>
          <img src={pic} alt="" className="testimonial__img" />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
