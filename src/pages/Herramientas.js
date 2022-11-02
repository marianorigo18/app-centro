import Footer from "../components/Footer";

const Herramientas = ({topic, herramientasT}) => {
  return (
    <div>
      <div className="layout">
        <div className="topic__container">
          <div className="topic-container__img">
            <img
              className="topic__img"
              src={topic[9].img}
              alt={topic[9].title}
            ></img>
          </div>
          <div className="topic__description">
            <p className="phrase">{topic[9].phrase}</p>
            <h2 className="title">{topic[9].title}</h2>
            <p className="categories">{topic[9].categories}</p>
          </div>
        </div>
        <div>
          <h2 className="title__pages">electricas</h2>
        </div>
        <div className="products">
          {herramientasT[0].herramientas.map((product) => (
            <div className="product__card">
              <img className="product__img" src={product.img} alt={product.title}/>
                <p className="product__title">{product.title}</p>
            </div>
          ))}
        </div>
        <div>
          <h2 className="title__pages">componentes</h2>
        </div>
        <div className="products">
          {herramientasT[0].discos.map((product) => (
            <div className="product__card">
              <img className="product__img" src={product.img} alt={product.title}/>
                <p className="product__title">{product.title}</p>
            </div>
          ))}
        </div>
        <div>
          <h2 className="title__pages">manuales</h2>
        </div>
        <div className="products">
          {herramientasT[0].stanley.map((product) => (
            <div className="product__card">
              <img className="product__img" src={product.img} alt={product.title}/>
                <p className="product__title">{product.title}</p>
            </div>
          ))}
        </div>
        <div>
          <h2 className="title__pages">prensa cobre</h2>
        </div>
        <div className="products">
          {herramientasT[0].lct[0].cobre.map((product) => (
            <div className="product__card">
              <img className="product__img" src={product.img} alt={product.title}/>
                <p className="product__title">{product.title}</p>
            </div>
          ))}
        </div>
        <div>
          <h2 className="title__pages">corta cable</h2>
        </div>
        <div className="products">
          {herramientasT[0].lct[0].cortaCable.map((product) => (
            <div className="product__card">
              <img className="product__img" src={product.img} alt={product.title}/>
                <p className="product__title">{product.title}</p>
            </div>
          ))}
        </div>
        <div>
          <h2 className="title__pages">destornilladores</h2>
        </div>
        <div className="products">
          {herramientasT[0].lct[0].destornilladores.map((product) => (
            <div className="product__card">
              <img className="product__img" src={product.img} alt={product.title}/>
                <p className="product__title">{product.title}</p>
            </div>
          ))}
        </div>
        <div>
          <h2 className="title__pages">hidraulica</h2>
        </div>
        <div className="products">
          {herramientasT[0].lct[0].hidraulica.map((product) => (
            <div className="product__card">
              <img className="product__img" src={product.img} alt={product.title}/>
                <p className="product__title">{product.title}</p>
            </div>
          ))}
        </div>
        <div>
          <h2 className="title__pages">laton - coaxil</h2>
        </div>
        <div className="products">
          {herramientasT[0].lct[0].latonCoaxil.map((product) => (
            <div className="product__card">
              <img className="product__img" src={product.img} alt={product.title}/>
                <p className="product__title">{product.title}</p>
            </div>
          ))}
        </div>
        <div>
          <h2 className="title__pages">pelacable</h2>
        </div>
        <div className="products">
          {herramientasT[0].lct[0].pelacable.map((product) => (
            <div className="product__card">
              <img className="product__img" src={product.img} alt={product.title}/>
                <p className="product__title">{product.title}</p>
            </div>
          ))}
        </div>
        <div>
          <h2 className="title__pages">preaislado</h2>
        </div>
        <div className="products">
          {herramientasT[0].lct[0].preaislado.map((product) => (
            <div className="product__card">
              <img className="product__img" src={product.img} alt={product.title}/>
                <p className="product__title">{product.title}</p>
            </div>
          ))}
        </div>
        <div>
          <h2 className="title__pages">rj11-Rj45-Rj9</h2>
        </div>
        <div className="products">
          {herramientasT[0].lct[0].rj11Rj45Rj9.map((product) => (
            <div className="product__card">
              <img className="product__img" src={product.img} alt={product.title}/>
                <p className="product__title">{product.title}</p>
            </div>
          ))}
        </div>
        <div>
          <h2 className="title__pages">tubular</h2>
        </div>
        <div className="products">
          {herramientasT[0].lct[0].tubular.map((product) => (
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

export default Herramientas;
