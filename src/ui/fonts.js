import { createGlobalStyle } from "styled-components";

// import NameOfYourFontWoff from './nameOfYourFont.woff';
// or import by url
// add font with url(${NameOfYourFontWoff}) format('woff')

export default createGlobalStyle`
  @font-face {
    font-family: 'Font Name';
    src: local('Font Name'), local('FontName');
    font-weight: 300;
    font-style: normal;
  }
`;
