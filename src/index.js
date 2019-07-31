import React from 'react';
import ReactDOM from 'react-dom';
import App from './components';
import { ThemeProvider } from 'react-jss';

const theme = {
    margin40: '40px',
    margin30: '30px',
    font36: '36px',
    font28: '28px',
    font18: '18px',
    font14: '14px',
    spacing7: '7px',
    linkWidth: '65px',
    containerWidth: '750px',
    iconWidth: '24px',
    borderWidth: '5px',
    companyLogoWidth: '150px',
    colorText: '#333333',
    colorLink: '#428bca',
    colorDescription: '#69696c',
    colorDescriptionBar: '#eeeeee',
    fontRegular: 'Helvetica Neue, Helvetica, Arial, sans-serif',
    fontTldr: 'Consolas, Liberation Mono, Menlo, Courier, monospace'
};

ReactDOM.render(
    <ThemeProvider theme={theme}><App /></ThemeProvider>,
    document.getElementById('root')
);
