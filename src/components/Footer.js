import { Link } from "react-router-dom";
import styled from "styled-components";

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
  @media(min-width: 580px){
      grid-template-columns: 1fr 1fr;
  }
  @media(min-width: 920px){
    grid-template-columns: 1fr 1fr 1fr 1fr;
}
`;
const GridItem = styled.div`
`
const Title = styled.h4`
    margin: 40px 0;
    padding-left: 15px;
    color: #F7DC6F;
    font-weight: 100;
    font-size: 26px;
`
const ListItemContent = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  font-size: 12px;
  li{
    margin: 5px 0;
    padding-left: 15px;
    color: #FFFFFF;
  }
  li a{
    color: #ffffff;
    font-weight: 100;
  }
  @media(min-width: 768px){
    grid-template-columns: 1fr;
  }
`;
const ListItemContact = styled.div`
display: grid;
grid-template-columns: 1fr;
text-transform: lowercase;
li{
  margin: 5px 0;
  padding-left: 15px;
}
li a{
  font-weight: 100;
}
`

const Footer = () => {
  return (
    <FooterS>
      <FooterContainer>
        <GridItem>
          <Title>contenido</Title>
          <ListItemContent>
            <li><Link to="/industria">industria</Link></li>
            <li><Link to="/iluminacion">iluminacion</Link></li>
            <li><Link to="/conductores">cables</Link></li>
            <li><Link to="/terminales">terminales</Link></li>
            <li><Link to="/normalizados">normalizados</Link></li>
            <li><Link to="/instrumentos-de-medicion">medidores</Link></li>
            <li><Link to="/linea-aerea">linea aerea</Link></li>
            <li><Link to="/conjuntos-armados">puntos y tomas</Link></li>
            <li><Link to="/luces-emergencia">emergencia</Link></li>
            <li><Link to="/herramientas">herramientas</Link></li>
            <li><Link to="/morceteria">morceteria</Link></li>
          </ListItemContent>
        </GridItem>
        <GridItem>
          <Title>contacto</Title>
          <ListItemContact>
            <li>info@electricidad-centro.com.ar</li>
            <li>3755-500004</li>
            <li>3755-421425</li>
            <li>Av. Beltrame 1493 - Obera-Misiones</li>
          </ListItemContact>
        </GridItem>
        <GridItem>
          <Title>compania</Title>
          <ListItemContent>
            <li>sobre nosotros</li>
          </ListItemContent>
        </GridItem>
        <GridItem>
          <Title>red social</Title>
          <ListItemContent>
            <li>instagram</li>
          </ListItemContent>
        </GridItem>
      </FooterContainer>
    </FooterS>
  );
};

export default Footer;
