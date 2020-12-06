import styled from "styled-components";

const Stat = ({ number, type }) => {
  return (
    <StyledStatInfos>
      <h1>{number}</h1>
      <p>{type}</p>
    </StyledStatInfos>
  );
}

const StyledStatInfos = styled.div`
h1 {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
}
p {
  color: hsl(0, 0%, 59%);
}
`;

export default Stat;