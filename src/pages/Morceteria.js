import React from "react";
import Footer from "../components/Footer";

const Morceteria = ({topic, morceteriaT}) => {
  return (
    <div>
      <div className="layout">
        <div className="topic__container">
          <div className="topic-container__img">
            <img
              className="topic__img"
              src={topic[10].img}
              alt={topic[10].title}
            ></img>
          </div>
          <div className="topic__description">
            <p className="phrase">{topic[10].phrase}</p>
            <h2 className="title">{topic[10].title}</h2>
            <p className="categories">{topic[10].categories}</p>
          </div>
        </div>
        <div className="products">
          {morceteriaT.map((product) => (
            <div className="product__card">
              <img className="product__img" src={product.img} alt={product.title}/>
                <p className="product__title">{product.title}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Morceteria;
