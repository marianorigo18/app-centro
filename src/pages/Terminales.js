import { Component } from "react";
import Footer from "../components/Footer";
import { topic, terminalesT } from "../exports/data";
import "./Page.css";

class Terminales extends Component {
  render() {
    return (
      <div>
        <div className="layout">
          <div className="layout">
            <div className="layout">
              <div className="topic__container">
                <div className="topic-container__img">
                  <img
                    className="topic__img"
                    src={topic[3].img}
                    alt={topic[3].name}
                  ></img>
                </div>
                <div className="topic__description">
                  <p className="phrase">{topic[3].phrase}</p>
                  <h2 className="title">{topic[3].title}</h2>
                  <p className="categories">{topic[3].categories}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="products">
            {terminalesT.map((product) => (
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
  }
}
export default Terminales;
