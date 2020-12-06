import { createGlobalStyle } from 'styled-components';
import circle from './img/bg-pattern-bottom.svg';
import circleTop from './img/bg-pattern-top.svg';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    height: 100vh;
    width: 100%;
    background-color: hsl(185, 75%, 39%);
    background-image: 
      url(${circleTop}),
      url(${circle}); 
    background-repeat: no-repeat;
    background-position: 
      -5vw -45vh,
      50vw 60vh;
    /* background-size: contain; */
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Kumbh Sans';
    letter-spacing: 0.1rem; 
  }
`;

export default GlobalStyle;