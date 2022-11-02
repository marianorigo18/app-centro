import Footer from "../components/Footer";

const Instrumentos = ({ topic, instrumentosT }) => {
  return (
    <div>
      <div className="layout">
        <div className="topic__container">
          <div className="topic-container__img">
            <img
              className="topic__img"
              src={topic[5].img}
              alt={topic[5].title}
            ></img>
          </div>
          <div className="topic__description">
            <p className="phrase">{topic[5].phrase}</p>
            <h2 className="title">{topic[5].title}</h2>
            <p className="categories">{topic[5].categories}</p>
          </div>
        </div>
        <div className="products">
          {instrumentosT.map((product) => (
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

export default Instrumentos;
