import React from "react";
import "../css/products.css";

const Products = () => {
  return (
    <section class="products section container" id="products">
      <h2 class="section__title">Products</h2>

      <div class="products__container grid">
        <article class="products__card">
          <img src="../img/product1.png" alt="" class="products__img" />

          <h3 class="products__title">Spirit rose</h3>
          <span class="products__price">$1500</span>

          <button class="products__button">
            <i class="bx bx-shopping-bag"></i>
          </button>
        </article>

        <article class="products__card">
          <img src="../img/product2.png" alt="" class="products__img" />

          <h3 class="products__title">Khaki pilot</h3>
          <span class="products__price">$1350</span>

          <button class="products__button">
            <i class="bx bx-shopping-bag"></i>
          </button>
        </article>

        <article class="products__card">
          <img src="../img/product3.png" alt="" class="products__img" />

          <h3 class="products__title">Jubilee black</h3>
          <span class="products__price">$870</span>

          <button class="products__button">
            <i class="bx bx-shopping-bag"></i>
          </button>
        </article>

        <article class="products__card">
          <img src="../img/product4.png" alt="" class="products__img" />

          <h3 class="products__title">Fosil me3</h3>
          <span class="products__price">$650</span>

          <button class="products__button">
            <i class="bx bx-shopping-bag"></i>
          </button>
        </article>

        <article class="products__card">
          <img src="../img/product5.png" alt="" class="products__img" />

          <h3 class="products__title">Duchen</h3>
          <span class="products__price">$950</span>

          <button class="products__button">
            <i class="bx bx-shopping-bag"></i>
          </button>
        </article>
      </div>
    </section>
  );
};

export default Products;
