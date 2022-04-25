import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Featured from "./components/Featured";
import Story from "./components/Story";
import Products from "./components/Products";
import Testimonial from "./components/Testimonial";
import "./css/base.css";

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
      </main>
    </div>
  );
}

export default App;
