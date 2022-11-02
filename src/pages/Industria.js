import { topic, industriaT } from "../exports/data";
import "./Page.css";

import React from "react";
import Footer from "../components/Footer";

const Industria = () => {
  return (
    <div>
      <div className="layout">
        <div className="topic__container">
          <div className="topic-container__img">
            <img
              className="topic__img"
              src={topic[0].img}
              alt={topic[0].title}
            ></img>
          </div>
          <div className="topic__description">
            <p className="phrase">{topic[0].phrase}</p>
            <h2 className="title">{topic[0].title}</h2>
            <p className="categories">{topic[0].categories}</p>
          </div>
        </div>
        <div className="products">
          {industriaT.map((product) => (
            <div className="product__card">
              <img
                className="product__img"
                src={product.img}
                alt={product.title}
              />
              <p className="product__title">{product.title}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Industria;
