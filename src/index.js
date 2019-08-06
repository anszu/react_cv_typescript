import React from 'react';
import ReactDOM from 'react-dom';
import App from './components';
import { ThemeProvider } from 'react-jss';
import theme from './jssDefaultTheme.js';

ReactDOM.render(
    <ThemeProvider theme={theme}><App /></ThemeProvider>,
    document.getElementById('root')
);
