import { createGlobalStyle } from 'styled-components';

const SiteGlobalStyles = createGlobalStyle`


  body {
    overflow: hidden;
    font-size: 16px;
    font-family: 'Barlow Semi Condensed', sans-serif;
    font-weight: 400;
    font-style: normal;
        line-height: 1.25;
    text-align: center;
    background-color: #f8f9fd;
    color: white;
  }

  .no-scroll {
    height: 100%;
    overflow: hidden;
  }

  h1 {
    font-size: 5rem;
    line-height: 1.16;
    text-transform: uppercase;
  }

  h2 {
    font-size: 2.25rem;
  }

  h3 {
    font-size: 1.5rem;
  }

  p {
    font-size: 1rem;
  }

  p + p {
    margin-top: 1rem;
    line-height: 1.5;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }
`;


export default SiteGlobalStyles;
