import React from "react";
import "../css/featured.css";

const Featured = () => {
  return (
    <section class="featured section container" id="featured">
      <h2 class="section__title">Featured</h2>

      <div class="featured__container grid">
        <article class="featured__card">
          <span class="featured__tag">Sale</span>

          <img src="../img/featured1.png" alt="" class="featured__img" />

          <div class="featured__data">
            <h3 class="featured__title">Jazzmaster</h3>
            <span class="featured__price">$1050</span>
          </div>

          <button class="button featured__button">ADD TO CART</button>
        </article>

        <article class="featured__card">
          <span class="featured__tag">Sale</span>

          <img src="../img/featured2.png" alt="" class="featured__img" />

          <div class="featured__data">
            <h3 class="featured__title">Ingersoll</h3>
            <span class="featured__price">$250</span>
          </div>

          <button class="button featured__button">ADD TO CART</button>
        </article>

        <article class="featured__card">
          <span class="featured__tag">Sale</span>

          <img src="../img/featured3.png" alt="" class="featured__img" />

          <div class="featured__data">
            <h3 class="featured__title">Rose gold</h3>
            <span class="featured__price">$890</span>
          </div>

          <button class="button featured__button">ADD TO CART</button>
        </article>
      </div>
    </section>
  );
};

export default Featured;
