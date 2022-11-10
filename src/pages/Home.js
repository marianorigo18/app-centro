import { Link } from "react-router-dom";
import styled from "styled-components";
import Footer from "../components/Footer";
import {
  topic,
  iluminacionT,
  logos,
  topicTwo,
  conductoresT,
  armadosBauhaus,
  terminalesT,
  herramientasT,
  industriaT,
} from "../exports/data";
const LayoutHome = styled.div`
  max-width: 1500px;
  width: 100%;
  box-sizing: border-box;
  margin: 120px auto 5px auto;
  @media (min-width: 768px) {
    margin: 140px auto 5px auto;
  }
`;
const Hidden = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 200px;
  background-color: #151515;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    margin-bottom: 70px;
    grid-template-rows: 280px;
  }
`;
const HiddenContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5px;
`;
const HiddenTitle = styled.h2`
  font-size: 15px;
  color: #ffffff;
  font-weight: 100;
  @media (min-width: 768px) {
    font-size: 30px;
    padding-left: 34px;
  }
`;
const HiddenParagraph = styled.p`
  font-size: 9px;
  color: #838383;
  font-weight: 100;
  @media (min-width: 768px) {
    font-size: 12px;
    padding-left: 34px;
  }
`;
const ImgHiddenContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ImgHidden = styled.img`
  height: 80%;
`;
const TitleSelection = styled.h1`
  font-size: 18px;
  font-weight: 100;
  padding-left: 5px;
  margin-bottom: 15px;
  text-transform: uppercase;
  @media (min-width: 768px) {
    font-size: 26px;
    margin-bottom: 40px;
  }
`;
const ButtonContact = styled.div`
  a {
    display: block;
    width: max-content;
    padding: 2px 5px;
    color: #ffffff;
    border: 1px solid #ffffff;
    margin-top: 10px;
    font-size: 12px;
  }
`;
const LayoutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(6, 650px);
  justify-content: center;
  @media (max-width: 1290px) {
    grid-template-rows: repeat(6, 500px);
  }
  @media (max-width: 968px) {
    grid-template-rows: repeat(6, 400px);
  }
  @media (max-width: 768px) {
    grid-template-rows: repeat(6, 300px);
  }
  @media (max-width: 568px) {
    grid-template-rows: repeat(6, 200px);
  }
  @media (max-width: 338px) {
    grid-template-rows: repeat(6, 150px);
  }
`;
const GridItem = styled.div`
  border-radius: 2px;
  &:nth-child(4n + 2) {
    box-shadow: -4px 7px 12px rgb(0 0 0 / 10%);
    background-color: #151515;
    padding: 70px;
    @media (max-width: 768px) {
      padding: 27px;
    }
    );
  }
  &:nth-child(4n + 3) {
    box-shadow: -4px 7px 12px rgb(0 0 0 / 10%);
    padding: 70px;
    background-color: #151515;
    @media (max-width: 768px) {
      padding: 27px;
    }
  }  
`;
const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ffffff;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const InfoContImages = styled.div`
  display: flex;
  justify-content: center;
  /*background-color: tomato;*/
  width: 100%;
  height: 50%;
  padding: 5px;
  margin-top: 18px;
`;
const InfoContSingleImage = styled.div`
  height: 100%;
  /*background-color: lightgreen;*/
  /*border: 1px solid black;*/
`;
const InfoContTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /*background-color: yellow;*/
  width: 100%;
  height: 50%;
  font-size: 30px;
  font-weight: 100;
  @media (max-width: 768px) {
    font-size: 28px;
  }
  @media (max-width: 520px) {
    font-size: 20px;
  }
  @media (max-width: 415px) {
    font-size: 12px;
  }
`;
const Home = () => {
  return (
    <div>
      <LayoutHome>
        <Hidden>
          <HiddenContainer>
            <HiddenTitle>
              SOMOS LIDERES EN MATERIALES ELECTRICOS E ILUMINACION.
            </HiddenTitle>
            <HiddenParagraph>
            "PRODUCTOS DE PRIMERA CALIDAD PARA LA INDUSTRIA Y EL HOGAR"
              <ButtonContact>
                <Link to="/contacto">contacto</Link>
              </ButtonContact>
            </HiddenParagraph>
          </HiddenContainer>
          <ImgHiddenContainer>
            <ImgHidden src={logos[2].img}></ImgHidden>
          </ImgHiddenContainer>
        </Hidden>
        <TitleSelection>seleccion categorias</TitleSelection>

        <LayoutContainer>
          <GridItem>
            <Link to="/iluminacion">
              <InfoContainer>
                <InfoContImages>
                  <InfoContSingleImage>
                    <Img
                      src={iluminacionT[0].img}
                      alt={iluminacionT[0].title}
                    ></Img>
                  </InfoContSingleImage>
                  <InfoContSingleImage>
                    <Img
                      src={iluminacionT[1].img}
                      alt={iluminacionT[1].title}
                    ></Img>
                  </InfoContSingleImage>
                </InfoContImages>
                <InfoContTitle>
                  <p>LAMPARAS</p>
                </InfoContTitle>
              </InfoContainer>
            </Link>
          </GridItem>

          <GridItem>
            <Link to="/iluminacion">
              <ImageContainer>
                <Img src={topicTwo[1].img} alt={topicTwo[1].title}></Img>
              </ImageContainer>
            </Link>
          </GridItem>

          <GridItem>
            <Link to="/conductores">
              <ImageContainer>
                <Img src={topicTwo[0].img} alt={topicTwo[0].title}></Img>
              </ImageContainer>
            </Link>
          </GridItem>

          <GridItem>
            <Link to="/conductores">
              <InfoContainer>
                <InfoContImages>
                  <InfoContSingleImage>
                    <Img src={conductoresT[1].img} alt={topic[4].title}></Img>
                  </InfoContSingleImage>
                  <InfoContSingleImage>
                    <Img src={conductoresT[8].img} alt={topic[5].title}></Img>
                  </InfoContSingleImage>
                </InfoContImages>
                <InfoContTitle>
                  <p>CONDUCTORES</p>
                </InfoContTitle>
              </InfoContainer>
            </Link>
          </GridItem>
          {/*Duplicate*/}
          <GridItem>
            <Link to="/conjuntos-armados">
              <InfoContainer>
                <InfoContImages>
                  <InfoContSingleImage>
                    <Img src={armadosBauhaus[1].img} alt={topic[4].title}></Img>
                  </InfoContSingleImage>
                  <InfoContSingleImage>
                    <Img src={armadosBauhaus[2].img} alt={topic[5].title}></Img>
                  </InfoContSingleImage>
                </InfoContImages>
                <InfoContTitle>
                  <p>PUNTOS Y TOMA</p>
                </InfoContTitle>
              </InfoContainer>
            </Link>
          </GridItem>

          <GridItem>
            <Link to="/conjuntos-armados">
              <ImageContainer>
                <Img src={topic[7].img} alt={topic[0].title}></Img>
              </ImageContainer>
            </Link>
          </GridItem>

          <GridItem>
            <Link to="/terminales" preventScrollReset={true}>
              <ImageContainer>
                <Img src={topic[3].img} alt={topic[0].title}></Img>
              </ImageContainer>
            </Link>
          </GridItem>

          <GridItem>
            <Link to="/terminales" preventScrollReset={true}>
              <InfoContainer>
                <InfoContImages>
                  <InfoContSingleImage>
                    <Img src={terminalesT[1].img} alt={topic[4].title}></Img>
                  </InfoContSingleImage>
                  <InfoContSingleImage>
                    <Img src={terminalesT[5].img} alt={topic[5].title}></Img>
                  </InfoContSingleImage>
                </InfoContImages>
                <InfoContTitle>
                  <p>TERMINALES</p>
                </InfoContTitle>
              </InfoContainer>
            </Link>
          </GridItem>
          {/*Duplicate*/}
          <GridItem>
            <Link to="/herramientas">
              <InfoContainer>
                <InfoContImages>
                  <InfoContSingleImage>
                    <Img
                      src={herramientasT[0].herramientas[1].img}
                      alt={topic[4].title}
                    ></Img>
                  </InfoContSingleImage>
                  <InfoContSingleImage>
                    <Img
                      src={herramientasT[0].stanley[2].img}
                      alt={topic[4].title}
                    ></Img>
                  </InfoContSingleImage>
                </InfoContImages>
                <InfoContTitle>
                  <p>HERRAMIENTAS</p>
                </InfoContTitle>
              </InfoContainer>
            </Link>
          </GridItem>

          <GridItem>
            <Link to="/herramientas">
              <ImageContainer>
                <Img src={topicTwo[2].img} alt={topic[0].title}></Img>
              </ImageContainer>
            </Link>
          </GridItem>

          <GridItem>
            <Link to="/industria">
              <ImageContainer>
                <Img src={topicTwo[3].img} alt={topic[0].title}></Img>
              </ImageContainer>
            </Link>
          </GridItem>

          <GridItem>
            <Link to="/industria">
              <InfoContainer>
                <InfoContImages>
                  <InfoContSingleImage>
                    <Img src={industriaT[1].img} alt={topic[4].title}></Img>
                  </InfoContSingleImage>
                  <InfoContSingleImage>
                    <Img src={industriaT[2].img} alt={topic[5].title}></Img>
                  </InfoContSingleImage>
                </InfoContImages>
                <InfoContTitle>
                  <p>INDUSTRIA</p>
                </InfoContTitle>
              </InfoContainer>
            </Link>
          </GridItem>
        </LayoutContainer>
      </LayoutHome>
      <Footer></Footer>
    </div>
  );
};

export default Home;
