import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';

import { ThemeProvider } from '@mui/material/styles';
// import { LightTheme, DarkTheme } from './theme'
import LightTheme from './theme'
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={LightTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

