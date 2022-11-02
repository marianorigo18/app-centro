import styled from "styled-components";

const Container = styled.div`
  background-color: #ffffff;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 500px;
  margin: 100px 20px;
  padding: 10px;
  transition: 0.3s;
  border-radius: 5px;
`;
const ContainerImg = styled.div``;
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const ContainerDescription = styled.div``;
const Phrase = styled.p`
  color: #838383;
  font-size: 10px;
  margin-top: 100px;
  margin-left: 50px;
  text-transform: uppercase;
`;
const Title = styled.h2`
  font-size: 40px;
  margin-top: 40px;
  font-weight: 400;
  margin-left: 50px;
  text-transform: uppercase;
`;
const Categories = styled.p`
  color: #838383;
  font-size: 10px;
  margin-top: 25px;
  margin-left: 50px;
  margin-right: 50px;
  line-height: 17px;
  text-transform: uppercase;
`;

const TopicContainer = ({topic}) => {
  return (
    <Container>
      <ContainerImg>
        <Img src={topic[4].img} alt={topic[4].Title}></Img>
      </ContainerImg>
      <ContainerDescription>
        <Phrase>{topic[4].phrase}</Phrase>
        <Title>{topic[4].title}</Title>
        <Categories>{topic[4].categories}</Categories>
      </ContainerDescription>
    </Container>
  );
};

export default TopicContainer;
