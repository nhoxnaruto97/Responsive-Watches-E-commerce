import React from "react";
import pic from "../img/home.png";
import "../css/home.css";
import "../css/button.css";
const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home__container container grid">
        <div className="home__img-bg">
          <img src={pic} alt="" className="home__img" />
        </div>

        <div className="home__social">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            className="home__social-link"
          >
            Facebook
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            className="home__social-link"
          >
            Twitter
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            className="home__social-link"
          >
            Instagram
          </a>
        </div>

        <div className="home__data">
          <h1 className="home__title">
            NEW WATCH <br /> COLLECTIONS B720
          </h1>
          <p className="home__description">
            Latest arrival of the new imported watches of the B720 series, with
            a modern and resistant design.
          </p>
          <span className="home__price">$1245</span>

          <div className="home__btns">
            <a href="#section" className="button button--gray button--small">
              Discover
            </a>

            <button className="button home__button">ADD TO CART</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
