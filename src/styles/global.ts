import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #AAFFA9;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right bottom, #11FFBD, #AAFFA9 20%, #f05053 80%);  /* Chrome 80-25, Safari 5.1-6 */
    background: linear-gradient(to right bottom, #11FFBD, #AAFFA9 20%, #f05053 80%); /* W,3C, IE 80+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    color: #FFF;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }


`;
