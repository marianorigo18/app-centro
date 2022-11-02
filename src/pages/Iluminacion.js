import Footer from "../components/Footer";
import { topic, iluminacionT } from "../exports/data";
import "./Page.css";
const Iluminacion = () => {
  return (
    <div>
      <div className="layout">
        <div className="topic__container">
          <div className="topic-container__img">
            <img
              className="topic__img"
              src={topic[1].img}
              alt={topic[1].title}
            ></img>
          </div>
          <div className="topic__description">
            <p className="phrase">{topic[1].phrase}</p>
            <h2 className="title">{topic[1].title}</h2>
            <p className="categories">{topic[1].categories}</p>
          </div>
        </div>
        <div className="products">
          {iluminacionT.map((product) => (
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

export default Iluminacion;
