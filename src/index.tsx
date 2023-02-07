import React from 'react';
import ReactDOM from 'react-dom/client';
//import App from './App';
import {App} from '../src/App/index'
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/global-styles';
import { theme } from './styles/theme';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ThemeProvider theme={theme}>
    <App />
   <GlobalStyles />
  </ThemeProvider>
);


