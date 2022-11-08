import { Link } from "react-router-dom";
import styled from "styled-components";
import iconWhats from "../assets/social-media/whatsapp-green.png";
import iconInsta from "../assets/social-media/instagram.png"
import iconGrupo from "../assets/social-media/grupo.png"
import iconLlamad from "../assets/social-media/llamada.png"
import iconMark from "../assets/social-media/marcador-de-posicion.png"
import iconGmail from "../assets/social-media/gmail.png"
import BubbleWhats from "./BubbleWhats";

const FooterS = styled.div`
  background-color: #000;
`;
const FooterContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content max-content max-content max-content;
  text-transform: uppercase;
  color: #ffffff;
  max-width: 1500px;
  margin: 0 auto;
  @media (min-width: 580px) {
    grid-template-rows: 600px;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
  }
  @media (min-width: 920px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;
const GridItem = styled.div``;
const Title = styled.h4`
  margin: 40px 0;
  padding-left: 15px;
  color: #f7dc6f;
  font-weight: 100;
  font-size: 26px;
`;
const ListItemContent = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  font-size: 12px;
  li {
    margin: 5px 0;
    padding-left: 15px;
    color: #ffffff;
  }
  li a {
    color: #ffffff;
    font-weight: 100;
  }
  @media (min-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const ListItemContact = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  text-transform: lowercase;
  li {
    display: flex;
    align-items: center;
    margin: 5px 0;
    padding-left: 15px;

  }
  li a {
    display: flex;
    font-weight: 100;
    color: #fff;
  }
`;
const IconImg = styled.img`
  height: 20px;
  margin-right: 7px;
`;

const Footer = () => {
  return (
    <FooterS>
      <BubbleWhats></BubbleWhats>
      <FooterContainer>
        <GridItem>
          <Title>contenido</Title>
          <ListItemContent>
            <li>
              <Link to="/industria">industria</Link>
            </li>
            <li>
              <Link to="/iluminacion">iluminacion</Link>
            </li>
            <li>
              <Link to="/conductores">cables</Link>
            </li>
            <li>
              <Link to="/terminales">terminales</Link>
            </li>
            <li>
              <Link to="/normalizados">normalizados</Link>
            </li>
            <li>
              <Link to="/instrumentos-de-medicion">medidores</Link>
            </li>
            <li>
              <Link to="/linea-aerea">linea aerea</Link>
            </li>
            <li>
              <Link to="/conjuntos-armados">puntos y tomas</Link>
            </li>
            <li>
              <Link to="/luces-emergencia">emergencia</Link>
            </li>
            <li>
              <Link to="/herramientas">herramientas</Link>
            </li>
            <li>
              <Link to="/morceteria">morceteria</Link>
            </li>
          </ListItemContent>
        </GridItem>
        <GridItem>
          <Title>contacto</Title>
          <ListItemContact>
            <li><IconImg src={iconGmail} alt="icono de instagram"></IconImg>info@electricidad-centro.com.ar</li>
            <li>
              <a href="https://wa.link/jimcvt">
                <IconImg src={iconWhats} alt="icono de whatsapp"></IconImg>
                3755500004
              </a>
            </li>
            <li><IconImg src={iconLlamad} alt="icono de instagram"></IconImg>3755-421425</li>
            <li><IconImg src={iconMark} alt="icono de instagram"></IconImg>Av. Beltrame 1493 - Obera-Misiones</li>
          </ListItemContact>
        </GridItem>
        <GridItem>
          <Title>compania</Title>
          <ListItemContent>
            <li><IconImg src={iconGrupo} alt="icono de instagram"></IconImg>nosotros</li>
          </ListItemContent>
        </GridItem>
        <GridItem>
          <Title>social media</Title>
          <ListItemContent>
            <li><IconImg src={iconInsta} alt="icono de instagram"></IconImg>instagram</li>
          </ListItemContent>
        </GridItem>
      </FooterContainer>
    </FooterS>
  );
};

export default Footer;
