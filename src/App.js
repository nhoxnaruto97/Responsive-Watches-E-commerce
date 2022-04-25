import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Featured from "./components/Featured";
import Story from "./components/Story";
import Products from "./components/Products";
import Testimonial from "./components/Testimonial";
import NewArrivals from "./components/NewArrivals";
import NewsLetter from "./components/NewsLetter";
import Footer from "./components/Footer";
import ScrollUp from "./components/ScrollUp";
import "./css/base.css";
import "./css/media.css";

function App() {
  return (
    <div>
      <Header></Header>
      <main className="main">
        <Home></Home>
        <Featured></Featured>
        <Story></Story>
        <Products></Products>
        <Testimonial></Testimonial>
        <NewArrivals></NewArrivals>
        <NewsLetter></NewsLetter>
      </main>
      <Footer></Footer>
      <ScrollUp></ScrollUp>
    </div>
  );
}

export default App;
