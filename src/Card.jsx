import styled from "styled-components";
import profile from './img/image-victor.jpg';
import background from './img/bg-pattern-card.svg'
import Stat from "./Stat";

const Card = () => {
  return (
    <StyledCard>
      <StyledCardBackground />
      <StyledInfos>
        <img src={profile} alt="profile"/>
        <h2>Victor Crest <span>26</span></h2>
        <h3>London</h3>
      </StyledInfos>
      <StyledStat>
        <Stat number='80K' type='followers'/>
        <Stat number='803K'type='likes'/>
        <Stat number='1.4K' type='photos'/>
      </StyledStat>
    </StyledCard>
  );
}

const StyledCard = styled.div`
  height: 58vh;
  width: 500px;
  background-color: white;
  border-radius: 20px;
  display: block;
`;

const StyledCardBackground = styled.div`
  height: 35%;
  width: 100%;
  border-radius: 20px 20px 0 0;
  background-image: url(${background});
  background-size: cover;
`;

const StyledInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  height: 35%;
  padding-bottom: 2rem;
  img {
    height: 15vh;
    position: absolute;
    top: -70px;
    border-radius: 50%;
    border: 9px white solid;
  }
  h2{
    margin: 0;
    font-weight: 700;
  }
  h3, span{
    font-weight: 400;
    color: hsl(0, 0%, 59%);
  }
`;

const StyledStat = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-top: 1px solid lightgrey;
  height: 25%;
`;

export default Card;
