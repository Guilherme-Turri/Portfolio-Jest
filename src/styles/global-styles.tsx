import { createGlobalStyle} from 'styled-components';
import { theme } from './theme';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    width: 100%;
  }

    
  body{
    font-family: ${theme.fonts.mainFont};

  }
`;