import styled from "styled-components"
import imgWhats from "../assets/social-media/whatsapp-green.png"

const Contenedor = styled.a`
position: fixed;
height: 55px;
width: 55px;
right: 30px;
bottom: 30px;
background-color: green;
border-radius: 50%;
z-index: 1999;
`
const BubbleImg = styled.img`
    width: 100%;
    height: 100%
`
const BubbleWhats = () => {
  return (
    <Contenedor href="https://wa.link/jimcvt" target="_blank">
        <BubbleImg src={imgWhats}></BubbleImg>
    </Contenedor>
  )
}

export default BubbleWhats