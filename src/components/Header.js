import React, { useEffect, useState } from "react";
import ChangeTheme from "./ChangeTheme";
import "../css/header.css";

const Header = (props) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleLink, setToggleLink] = useState("");
  const [scrollHeader, setScrollHeader] = useState(false);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  const clickItem = (param) => {
    setToggleLink(param);
    setToggleMenu(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setScrollHeader(true);
      } else {
        setScrollHeader(false);
      }
    });
  }, []);
  return (
    <header
      className={`header ${scrollHeader ? "scroll-header" : ""}`}
      id="header"
    >
      <nav className="nav container">
        <a href="#section" className="nav__logo">
          <i className="bx bxs-watch nav__logo-icon"></i> Rolex
        </a>

        <div
          className={`nav__menu ${toggleMenu ? "show-menu" : ""}`}
          id="nav-menu"
        >
          <ul className="nav__list">
            <li className="nav__item" onClick={() => clickItem("Home")}>
              <a
                href="#home"
                className={`nav__link ${
                  toggleLink === "Home" ? "active-link" : ""
                } `}
              >
                Home
              </a>
            </li>
            <li className="nav__item" onClick={() => clickItem("Featured")}>
              <a
                href="#featured"
                className={`nav__link ${
                  toggleLink === "Featured" ? "active-link" : ""
                } `}
              >
                Featured
              </a>
            </li>
            <li className="nav__item" onClick={() => clickItem("Products")}>
              <a
                href="#products"
                className={`nav__link ${
                  toggleLink === "Products" ? "active-link" : ""
                } `}
              >
                Products
              </a>
            </li>
            <li className="nav__item" onClick={() => clickItem("New")}>
              <a
                href="#new"
                className={`nav__link ${
                  toggleLink === "New" ? "active-link" : ""
                } `}
              >
                New
              </a>
            </li>
          </ul>

          <div className="nav__close" onClick={toggleNav} id="nav-close">
            <i className="bx bx-x"></i>
          </div>
        </div>

        <div className="nav__btns">
          <ChangeTheme></ChangeTheme>

          <div
            className="nav__shop"
            onClick={() => props.setCartShow(!props.cartShow)}
            id="cart-shop"
          >
            <i className="bx bx-shopping-bag"></i>
          </div>

          <div className="nav__toggle" onClick={toggleNav} id="nav-toggle">
            <i className="bx bx-grid-alt"></i>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
