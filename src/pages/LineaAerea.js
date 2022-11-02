import React from "react";
import Footer from "../components/Footer";

const LineaAerea = ({topic, aereoT}) => {
  return (
    <div>
      <div className="layout">
        <div className="topic__container">
          <div className="topic-container__img">
            <img
              className="topic__img"
              src={topic[6].img}
              alt={topic[6].title}
            ></img>
          </div>
          <div className="topic__description">
            <p className="phrase">{topic[6].phrase}</p>
            <h2 className="title">{topic[6].title}</h2>
            <p className="categories">{topic[6].categories}</p>
          </div>
        </div>
        <div className="products">
          {aereoT.map((product) => (
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

export default LineaAerea;
