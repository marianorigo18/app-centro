import styled from "styled-components";
import telefono from "../assets/social-media/llamada-telefonica.png";
import alfiler from "../assets/social-media/alfiler.png";
import correo from "../assets/social-media/correo-electronico.png";
import whatsapp from "../assets/social-media/whatsapp.png";

const Main = styled.div`
  font-family: "Work Sans", sans-serif;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 80vh;
  margin-top: 100px;
`;
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: #000;
  margin-top: 10%;
`;
const TitleContact = styled.h2`
  font-size: 58px;
  font-weight: 300;
  margin-bottom: 30px;
  @media (max-width: 578px) {
    font-size: 40px;
  }
`;
const TextContact = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  color: #1E8449;
  margin: 15px 0;
  @media (max-width: 578px) {
    font-size: 15px;
  }
`;
const ImageContainer = styled.div`
  width: 31px;
  height: 30px;
  margin-right: 40px;
  @media (max-width: 578px) {
    margin-right: 22px;
  }
`;
const ImgSocial = styled.img`
  width: 100%;
`;
const Contact = () => {
  return (
    <Main>
      <MainContainer>
        <TitleContact>CONTACTANOS</TitleContact>
        <TextContact>
          <ImageContainer>
            <ImgSocial src={telefono}></ImgSocial>
          </ImageContainer>
          3755-421425 / 3755-422812
        </TextContact>
        <TextContact>
          <ImageContainer>
            <ImgSocial src={alfiler}></ImgSocial>
          </ImageContainer>
          Av. Beltrame 1493 - Obera-Misiones
        </TextContact>
        <TextContact>
          <ImageContainer>
            <ImgSocial src={correo}></ImgSocial>
          </ImageContainer>
          info@electricidad-centro.com.ar
        </TextContact>
        <TextContact>
          <ImageContainer>
            <ImgSocial src={whatsapp}></ImgSocial>
          </ImageContainer>
          3755-500004
        </TextContact>
      </MainContainer>
    </Main>
  );
};

export default Contact;
