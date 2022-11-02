import { logos, bubble } from "../exports/data";
import { Link } from "react-router-dom";
import "./Navbar.css";

import React from "react";

const Navbar = () => {
  return (
    <nav className="menu">
      <section className="menu__container">
        <Link to="/" className="container__logo">
          <img src={logos[0].img} alt={logos[0].alt}></img>
        </Link>
        <ul className="menu__links">
          <li className="menu__item">
            <Link to="/contacto" className="menu__link">
              contacto
            </Link>
          </li>
          <li className="menu__item menu__item--show">
            <Link to="/" className="menu__link">
              Categorias
              <i class="bx bx-chevron-down menu__arrow"></i>
            </Link>
            <ul className="menu__nesting">
              <li className="menu__inside">
                <Link
                  to="/"
                  className="menu__link menu__link--inside"
                >
                  Industria
                </Link>
              </li>
              <li className="menu__inside">
                <Link
                  to="/iluminacion"
                  className="menu__link menu__link--inside"
                >
                  Iluminacion
                </Link>
              </li>
              <li className="menu__inside">
                <Link
                  to="/conductores"
                  className="menu__link menu__link--inside"
                >
                  Conductores
                </Link>
              </li>
              <li className="menu__inside">
                <Link
                  to="/terminales"
                  className="menu__link menu__link--inside"
                >
                  Terminales
                </Link>
              </li>
              <li className="menu__inside">
                <Link
                  to="/normalizados"
                  className="menu__link menu__link--inside"
                >
                  Normalizados
                </Link>
              </li>
              <li className="menu__inside">
                <Link
                  to="/instrumentos-de-medicion"
                  className="menu__link menu__link--inside"
                >
                  Instrumentos de Medicion
                </Link>
              </li>
              <li className="menu__inside">
                <Link
                  to="/linea-aerea"
                  className="menu__link menu__link--inside"
                >
                  Linea Aerea
                </Link>
              </li>
              <li className="menu__inside">
                <Link
                  to="/conjuntos-armados"
                  className="menu__link menu__link--inside"
                >
                  Conjuntos Armados
                </Link>
              </li>
              <li className="menu__inside">
                <Link
                  to="/luces-emergencia"
                  className="menu__link menu__link--inside"
                >
                  Luces de Emergencia
                </Link>
              </li>
              <li className="menu__inside">
                <Link
                  to="/herramientas"
                  className="menu__link menu__link--inside"
                >
                  Herramientas
                </Link>
              </li>
              <li className="menu__inside">
                <Link
                  to="/morceteria"
                  className="menu__link menu__link--inside"
                >
                  Morceteria
                </Link>
              </li>
            </ul>
          </li>
        </ul>
        <div className="menu__hamburguer">
          <i class="bx bx-menu-alt-right menu__img"></i>
        </div>
      </section>
      <div className="anuncio">
        {bubble.map((bubble) => (
        <Link to={bubble.link} className="anuncio__link">
          <div className="anuncio__bubble">
            <img src={bubble.img} alt={bubble.title}></img>
          </div>
          <span className="anuncio__paragraph">{bubble.title}</span>
        </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
