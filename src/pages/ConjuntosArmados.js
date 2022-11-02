import Footer from "../components/Footer";

const ConjuntosArmados = ({
  topic,
  armadosT,
  armadosJeluz,
  armadosSica,
  armadosXx1,
  armadosXxii,
  armadosBauhaus,
}) => {
  return (
    <div>
      <div className="layout">
        <div className="topic__container">
          <div className="topic-container__img">
            <img
              className="topic__img"
              src={topic[7].img}
              alt={topic[7].title}
            ></img>
          </div>
          <div className="topic__description">
            <p className="phrase">{topic[7].phrase}</p>
            <h2 className="title">{topic[7].title}</h2>
            <p className="categories">{topic[7].categories}</p>
          </div>
        </div>
        <div>
          <h2 className="title__pages">Cambre arte</h2>
        </div>
        <div className="products">
          {armadosT.map((product) => (
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
        <div>
          <h2 className="title__pages">Cambre bauhaus</h2>
        </div>
        <div className="products">
          {armadosBauhaus.map((product) => (
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
        <div>
          <h2 className="title__pages">Cambre siglo xxii</h2>
        </div>
        <div className="products">
          {armadosXxii.map((product) => (
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
        <div>
          <h2 className="title__pages">Cambre siglo xxi</h2>
        </div>
        <div className="products">
          {armadosXx1.map((product) => (
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
        <div>
          <h2 className="title__pages">jeluz verona</h2>
        </div>
        <div className="products">
          {armadosJeluz.map((product) => (
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
        <div>
          <h2 className="title__pages">sica life</h2>
        </div>
        <div className="products">
          {armadosSica.map((product) => (
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

export default ConjuntosArmados;
