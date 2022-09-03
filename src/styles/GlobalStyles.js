import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

    :root {
    --orange-bg: #ac1b0c; 
    --orange: #0682ff;
    --magenta: #bfc978;
    --gray-bg: #121708;
  --btn-gradient: linear-gradient(83deg, #c8702b, #ac1b0c);
  --btn-gradient-secondary: linear-gradient(140deg, #bfc978, #ac1b0c);
  }

  html{
    scroll-behavior: smooth;
  }

  html{
    scroll-behavior: smooth;
  }

    body {
    margin: 0;
    padding: 0;
    background: #77091d;
    font-family: 'Montserrat', sans-serif;
    color: white;
    -webkit-tap-highlight-color: transparent;
    overflow-x: hidden
    }

    a {
    text-decoration: none;
    }

    a:visited {
    color: white;
    }

    li {
    list-style: none;
    }

`;
