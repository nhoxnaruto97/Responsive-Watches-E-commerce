import React from "react";
import featured1 from "../img/featured1.png";
import featured2 from "../img/featured2.png";
import featured3 from "../img/featured3.png";
import "../css/featured.css";

const Featured = () => {
  return (
    <section className="featured section container" id="featured">
      <h2 className="section__title">Featured</h2>

      <div className="featured__container grid">
        <article className="featured__card">
          <span className="featured__tag">Sale</span>

          <img src={featured1} alt="" className="featured__img" />

          <div className="featured__data">
            <h3 className="featured__title">Jazzmaster</h3>
            <span className="featured__price">$1050</span>
          </div>

          <button className="button featured__button">ADD TO CART</button>
        </article>

        <article className="featured__card">
          <span className="featured__tag">Sale</span>

          <img src={featured2} alt="" className="featured__img" />

          <div className="featured__data">
            <h3 className="featured__title">Ingersoll</h3>
            <span className="featured__price">$250</span>
          </div>

          <button className="button featured__button">ADD TO CART</button>
        </article>

        <article className="featured__card">
          <span className="featured__tag">Sale</span>

          <img src={featured3} alt="" className="featured__img" />

          <div className="featured__data">
            <h3 className="featured__title">Rose gold</h3>
            <span className="featured__price">$890</span>
          </div>

          <button className="button featured__button">ADD TO CART</button>
        </article>
      </div>
    </section>
  );
};

export default Featured;
