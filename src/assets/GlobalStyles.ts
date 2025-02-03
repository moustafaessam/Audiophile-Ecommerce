import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  /* Bold */
  @font-face {
    font-family: "Manrope Bold";
    src: url("/fonts/Manrope-Bold.ttf");
  }
  /* Regular */
  @font-face {
    font-family: "Manrope Regular";
    src: url("fonts/Manrope-Regular.ttf");
  }
  /* Medium */
  @font-face {
    font-family: "Manrope Medium";
    src: url("/fonts/Manrope-Medium.ttf");
  }
  * , ::before , ::after {
    margin: 0; 
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
  }
  /* html , body , #root {
    width: fit-content;
    min-width: 100vw;
    min-height: 100vh;
  } */
  :root {
    /* Colors */
    --dark-brown: #D87D4A;
    --light-brown: #fbaf85; 
    --grey: #F1F1F1; 
    --white: #ffffff; 
    --pure-black: #000000; 
    --mixed-black:#101010;
  }
`;
export default GlobalStyles;
